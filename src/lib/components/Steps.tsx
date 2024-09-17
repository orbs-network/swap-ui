import { useCallback, useEffect, useState } from "react";
import styles from "../styles/SwapSteps.module.css";
import { Step } from "../type";
import { getClassName } from "../util";
import { Spinner } from "./Spinner";

export const SwapSteps = ({
  className = "",
  steps,
  currentStep,
}: {
  className?: string;
  steps?: Step[];
  currentStep?: number;
}) => {
  return (
    <div style={{ width: "100%" }} className={`${styles.steps} ${className} ${getClassName('SwapSteps')}}`}>
      <div className={`${styles.divider} ${getClassName('SwapStepsLine')}`} />
      {steps?.map((step, index) => (
        <SwapStep
          currentStep={currentStep}
          index={index}
          key={index}
          step={step}
        />
      ))}
    </div>
  );
};

export function SwapStep({
  step,
  currentStep = 0,
  index,
}: {
  step: Step;
  currentStep?: number;
  index: number;
}) {
  const active = index >= currentStep;
  const completed = currentStep > index;
  return (
    <div className={`${styles.step} ${getClassName('SwapStep')}`}>
      <SwapStepLogo step={step}  loading={index === currentStep} />
      <div className={styles["step-title"]}>
        <p className={getClassName('SwapStepTitle')}>{step.title}</p>
        {step.link && <StepLink link={step.link} active={!!active} />}
      </div>
      <SwapStepStatus step={step} completed={completed} active={active} />
    </div>
  );
}

function Check() {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
      <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
    </svg>
  );
}

const SwapStepStatus = ({
  step,
  completed,
  active,
}: {
  step: Step;
  completed: boolean;
  active: boolean;
}) => {
  if (completed) {
    return (
      <div className={`${styles.status} ${getClassName('SwapStepStatus')}`}>
        <div className={styles.success}>
          <Check />
        </div>
      </div>
    );
  }

  if (!active) return null;

  if (step.timeout) {
    return (
      <div className={styles.status}>
        <Countdown millis={step.timeout} />
      </div>
    );
  }

  return null;
};

const Countdown = ({ millis = 0 }: { millis?: number }) => {
  const [secondsLeft, setSecondsLeft] = useState(millis / 1000);
  const [isActive, setIsActive] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);


  const reset = useCallback(() => {
    setSecondsLeft(millis / 1000);
  }, [millis]);

  // Automatically restart the countdown when it finishes
  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      const timerId = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (secondsLeft === 0) {
      // Restart the countdown automatically when it finishes
      reset();
      start();
    }
  }, [isActive, secondsLeft, reset, start]);

  useEffect(() => {
    reset();
    start();
  }, [millis, start, reset]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <p>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};
const StepLink = ({
  active,
  link,
}: {
  active: boolean;
  link: { href?: string; text: string };
}) => {
  return (
    <a
      href={link.href}
      target="_blank"
      className={active ? styles["step-link-selected"] : styles["step-link"]}
    >
      {link.text}
    </a>
  );
};

const SwapStepLogo = ({
  step,
  loading,
}: {
  step?: Step;
  loading: boolean;
}) => {
  return (
    <div
      className={`${styles["step-logo"]}  ${getClassName('SwapStepLogo')}`}
    >
      {loading ? (
        <Spinner className={styles.loader} />
      ) :step?.image ?  (
        <img src={step?.image} alt="" />
      ) : step?.icon}
    </div>
  );
};

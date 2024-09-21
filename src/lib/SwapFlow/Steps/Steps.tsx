import { useCallback, useEffect, useState } from "react";
import { SwapStep as SwapStepType } from "../../type";
import { getClassName } from "../../util";
import { Spinner } from "../../components/Spinner/Spinner";
import './style.css'
import { Text } from "src/lib/components/Text/Text";

export const Steps = ({
  className = "",
  steps,
  currentStep,
}: {
  className?: string;
  steps?: SwapStepType[];
  currentStep?: number;
}) => {
  return (
    <div className={`${className} ${getClassName('Steps')}`}>
      <div className={`${getClassName('StepsLine')}`} />
      {steps?.map((step) => (
        <SwapStep
          currentStep={currentStep}
          key={step.id}
          step={step}
        />
      ))}
    </div>
  );
};

export function SwapStep({
  step,
  currentStep = 0,
}: {
  step: SwapStepType;
  currentStep?: number;
}) {
  const active = currentStep >= step.id;
  const completed = currentStep > step.id;;
  return (
    <div className={`${getClassName('StepsStep')}`}>
      <SwapStepLogo step={step} loading={step.id === currentStep} active={active} />
      <div className={`${getClassName('StepsStepLeft')} ${active ? getClassName('StepsStepLeftActive') : ''}`}>
        <Text className={getClassName('SwapStepTitle')}>{step.title}</Text>
        {step.link && <StepLink link={step.link} active={!!active} />}
      </div>
      <SwapStepStatus step={step} completed={completed} active={active} />
    </div>
  );
}

function Check() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={getClassName('SwapStepCheck')}
    >
      <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
    </svg>
  );
}

const SwapStepStatus = ({
  step,
  completed,
  active,
}: {
  step: SwapStepType;
  completed: boolean;
  active: boolean;
}) => {
  
  if (completed) {
    return (
      <div className={`${getClassName('StepsStepStatus')}`}>
        <Check />
      </div>
    );
  }

  if (!active) return null;

  if (step.timeout) {
    return (
      <div className={`${getClassName('StepsStepStatus')}`}>
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
    <Text className={getClassName('StepsStepTimer')}> 
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
};
const StepLink = ({
  active,
  link,
}: {
  active: boolean;
  link: { href?: string; text: string };
}) => {

  const className = active ? getClassName('StepsStepLinkActive') : '';
  return (
    <a
      href={link.href}
      target="_blank"
      className={`${getClassName('StepsStepLink')} ${className}`}
    >
      {link.text}
    </a>
  );
};

const SwapStepLogo = ({
  step,
  loading,
  active
}: {
  step?: SwapStepType;
  loading: boolean;
  active?: boolean;
}) => {
  return (
    <div
      className={`${getClassName('StepsStepLogo')} ${active ? getClassName('StepsStepLogoActive'):''}`}
    >
      {loading ? (
        <Spinner className={getClassName('StepsStepLoader')} />
      ) :step?.image ?  (
        <img src={step?.image} alt="" />
      ) : step?.icon}
    </div>
  );
};

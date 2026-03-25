import { getClassName } from "@utils";
import { ReactNode } from "react";
import { Text } from "src/lib/components/Text/Text";
import { Spinner } from "../../components/Spinner/Spinner";
import { useMainContext } from "../context";
import "./style.css";
import { SwapStatus } from "src/lib/type";

export function TradeStepLayout({
  className = "",
  body,
  footerLink,
  footerText,
  title,
  children,
}: {
  className?: string;
  body?: ReactNode;
  footerLink?: string;
  footerText?: ReactNode;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${getClassName("TradeStepLayout")} ${className}`}>
      <div className={getClassName("TradeStepLayoutHeader")}>
        <Logo />
        {title && (
          <Text className={getClassName("TradeStepLayoutTitle")}>{title}</Text>
        )}
      </div>
      {body && (
        <div className={getClassName("TradeStepLayoutBody")}>{body}</div>
      )}
      <Footer link={footerLink} text={footerText} />
      {children}
    </div>
  );
}

const Footer = ({ link, text }: { link?: string; text?: ReactNode }) => {
  const { swapStatus } = useMainContext();

  if(!link && !text) return null;

  return (
    <div className={getClassName("TradeStepLayoutFooter")}>
      <Indicator />
      {link ? (
        <Link link={link} text={text} />
      ) : swapStatus === SwapStatus.FAILED ? undefined : (
        <Text>{text}</Text>
      )}
    </div>
  );
};

const Link = ({ link, text }: { link: string; text?: ReactNode }) => {


  return (
    <a
      target="_blank"
      className={getClassName("TradeStepLayoutFooterLink")}
      href={link}
    >
      {text}
    </a>
  );
};

function Success() {
  const { components } = useMainContext();
  if (components.SuccessIcon) {
    return components.SuccessIcon;
  }
  return (
    <svg
      fill="none"
      viewBox="0 0 16 16"
      className={getClassName("TradeStepLayoutSuccessIcon")}
    >
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" stroke="#00C853" />
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#00C853"
        d="M5 8l2 2 4-4"
      />
    </svg>
  );
}

function Error() {
  const { components } = useMainContext();
  if (components.FailedIcon) {
    return components.FailedIcon;
  }

  return (
    <svg
      className={getClassName("TradeStepLayoutErrorIcon")}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" stroke="#FF3D00" />
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#FF3D00"
        d="M8 4v5M8 11h.01"
      />
    </svg>
  );
}

const Logo = () => {
  const { swapStatus } = useMainContext();
  if (swapStatus === SwapStatus.SUCCESS) {
    return <Success />;
  }

  if (swapStatus === SwapStatus.FAILED) {
    return <Error />;
  }

  return <Loader />;
};

const Loader = () => {
  const { components } = useMainContext();
  if (components.Loader) {
    return components.Loader;
  }
  return (
    <Spinner
      size={60}
      borderWidth={5}
      className={getClassName("TradeStepLayoutSpinner")}
    />
  );
};

export const Indicator = () => {
  const { totalSteps, currentStepIndex = 0, swapStatus } = useMainContext();

  if (swapStatus !== SwapStatus.LOADING) return null;
  if (totalSteps === 1) return null;
  return (
    <div className={getClassName("StepIndicator")}>
      <div
        style={{
          width: `${100 / (totalSteps || 0)}%`,
          left: `${(currentStepIndex * 100) / (totalSteps || 0)}%`,
        }}
        className={getClassName("StepIndicatorLine")}
      />
    </div>
  );
};

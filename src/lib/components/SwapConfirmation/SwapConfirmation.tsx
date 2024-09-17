import { SwapConfirmationProvider } from "./context";
import { FailedContent } from "./Content/FailedContent";
import { Fragment, ReactNode } from "react";
import { SuccessContent } from "./Content/SuccessContent";
import { SwapConfirmationArgs, SwapStatus } from "../../type";
import { SwapMainContent } from "./Content/SwapMainContent";
import  "../../styles/SwapConfirmation.css";
import { getClassName } from "../../util";

interface Props extends SwapConfirmationArgs {
  className?: string;
  successContent: ReactNode;
  failedContent: ReactNode;
  mainContent: ReactNode;
  styles?: {
    background?: string;
    color?: string;
  };
}

const SwapConfirmation = ({
  className = "",
  successContent,
  failedContent,
  mainContent,
  styles: _styles,
  ...rest
}: Props) => {
  const { swapStatus } = rest;

  return (
    <SwapConfirmationProvider
      inUsd={rest.inUsd}
      outUsd={rest.outUsd}
      inAmount={rest.inAmount}
      outAmount={rest.outAmount}
      inToken={rest.inToken}
      outToken={rest.outToken}
      swapStatus={rest.swapStatus}
      txHash={rest.txHash}
    >
      <div
        style={
          {
            "--background-color": _styles?.background, // Set default if no value provided
            "--text-color": _styles?.color, // Set default if no value provided
          } as React.CSSProperties
        } // Cast to React.CSSProperties for type safety
        className={` ${className} ${getClassName(
          "SwapConfirmation"
        )}`}
      >
        <>
          {swapStatus === SwapStatus.SUCCESS
            ? successContent
            : swapStatus === SwapStatus.FAILED
            ? failedContent
            : mainContent}
        </>
      </div>
    </SwapConfirmationProvider>
  );
};

SwapConfirmation.SuccessContent = SuccessContent;
SwapConfirmation.FailedContent = FailedContent;
SwapConfirmation.MainContent = SwapMainContent;

export { SwapConfirmation };

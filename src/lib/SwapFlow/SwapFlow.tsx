import { Provider } from "./context";
import { ReactNode } from "react";
import { SwapConfirmationArgs, SwapStatus } from "../type";
import { getClassName } from "../util";
import { Failed } from "./Failed/Failed";
import { Success } from "./Success/Success";
import { Main } from "./Main/Main";
import { TradeStepLayout } from "./TradeStepLayout/TradeStepLayout";
import './style.css';
import { Steps } from "./Steps/Steps";

interface Props extends SwapConfirmationArgs {
  className?: string;
  successContent: ReactNode;
  failedContent: ReactNode;
  mainContent: ReactNode;
}

const SwapFlow = ({
  className = "",
  successContent,
  failedContent,
  mainContent,
  ...rest
}: Props) => {
  const { swapStatus } = rest;

  return (
    <Provider
      inAmount={rest.inAmount}
      outAmount={rest.outAmount}
      inToken={rest.inToken}
      outToken={rest.outToken}
      swapStatus={rest.swapStatus}
      txHash={rest.txHash}
      translation={rest.translation}
    >
      <div
        className={` ${className} ${getClassName(
          "SwapFlow"
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
    </Provider>
  );
};

SwapFlow.Success = Success;
SwapFlow.Failed = Failed;
SwapFlow.Main = Main;
SwapFlow.StepLayout = TradeStepLayout; 
SwapFlow.Steps = Steps;

export { SwapFlow };

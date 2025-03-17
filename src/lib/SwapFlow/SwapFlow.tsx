import { Provider, useMainContext } from "./context";
import { SwapFlowProps, SwapStatus } from "../type";
import { getClassName } from "../util";
import { Failed } from "./Failed/Failed";
import { Success } from "./Success/Success";
import { Main } from "./Main/Main";
import { TradeStepLayout } from "./TradeStepLayout/TradeStepLayout";
import "./style.css";


const SwapFlow = (props: SwapFlowProps) => {
  return (
    <Provider
     {...props}
    >
      <Controller />
    </Provider>
  );
};

const Controller = () => {
  const { swapStatus, components, className } = useMainContext();
  return (
    <div className={`${getClassName("SwapFlow")} ${className}`}>
      {swapStatus === SwapStatus.SUCCESS ? (
        components?.Success
      ) : swapStatus === SwapStatus.FAILED ? (
        components?.Failed
      ) : (
        components?.Main
      )}
    </div>
  );
};

SwapFlow.Success = Success;
SwapFlow.Failed = Failed;
SwapFlow.Main = Main;
SwapFlow.StepLayout = TradeStepLayout;

export { SwapFlow };

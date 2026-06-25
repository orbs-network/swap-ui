import { Provider, useMainContext } from "./context";
import { SwapFlowProps, SwapStatus } from "../type";
import { getClassName } from "../util";
import { Failed } from "./Failed/Failed";
import { Success } from "./Success/Success";
import { Main } from "./Main/Main";
import { TradeStepLayout } from "./TradeStepLayout/TradeStepLayout";
import "./style.css";

const SwapFlow = ({
  components,
  mainContent,
  failedContent,
  successContent,
  ...rest
}: SwapFlowProps) => {
  const value = {
    ...rest,
    components: {
      ...components,
      Main: mainContent ?? components?.Main ?? <Main />,
      Failed: failedContent ?? components?.Failed ?? <Failed />,
      Success: successContent ?? components?.Success ?? <Success />,
    },
  };

  return (
    <Provider value={value}>
      <Controller />
    </Provider>
  );
};

const Controller = () => {
  const { swapStatus, components, className } = useMainContext();
  const rootClassName = [getClassName("SwapFlow"), className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      {swapStatus === SwapStatus.SUCCESS ? (
        components.Success
      ) : swapStatus === SwapStatus.FAILED ? (
        components.Failed
      ) : (
        components.Main
      )}
    </div>
  );
};

SwapFlow.Success = Success;
SwapFlow.Failed = Failed;
SwapFlow.Main = Main;
SwapFlow.StepLayout = TradeStepLayout;

export { SwapFlow };

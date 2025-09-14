import { Provider, useMainContext } from "./context";
import { SwapFlowProps } from "../type";
import { getClassName } from "../util";
import { Main } from "./Main/Main";
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
  const { swapStatus, className = '' } = useMainContext();
  const status = swapStatus ? 'active' : ''
  return (
    <div className={`${getClassName("SwapFlow")} ${className}  ${status ? getClassName("SwapFlow") + '-' + status : ''}`}>
      <Main />
    </div>
  );
};

SwapFlow.Main = Main;

export { SwapFlow };

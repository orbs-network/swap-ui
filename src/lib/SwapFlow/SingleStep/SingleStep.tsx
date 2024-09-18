import { getClassName } from "@utils";
import { SwapStep } from "../../type";
import { TradePreview } from "../TradePreview/TradePreview";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import "./style.css";

export function SingleStep({ step }: { step?: SwapStep }) {
  return (
    <TradeStepLayout
      status="loading"
      className={getClassName("SingleStep")}
      body={
        <>
          <Title step={step} />
          <TradePreview />
        </>
      }
      footer={<BottomContent />}
    />
  );
}

const BottomContent = () => {
  return <>Proceed in wallet</>;
};

const Title = ({ step }: { step?: SwapStep }) => {
  return <p className={getClassName("SingleStepTitle")}>{step?.title}</p>;
};

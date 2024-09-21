import { getClassName } from "@utils";
import { Text } from "src/lib/components/Text/Text";
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
    />
  );
}

const Title = ({ step }: { step?: SwapStep }) => {
  return <Text className={getClassName("SingleStepTitle")}>{step?.title}</Text>;
};

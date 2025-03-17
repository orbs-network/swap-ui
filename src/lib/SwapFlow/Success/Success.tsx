import { getClassName } from "@utils";
import { TradePreview } from "../TradePreview/TradePreview";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";

export function Success({
  title,
  explorerUrl,
  hideTokens,
}: {
  title?: string;
  explorerUrl?: string;
  hideTokens?: boolean;
}) {
  return (
    <TradeStepLayout
    title={title}
      className={getClassName("Success")}
      body={!hideTokens &&  <TradePreview />}
      link={explorerUrl}
    />
  );
}

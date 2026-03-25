import { getClassName } from "@utils";
import { TradePreview } from "../TradePreview/TradePreview";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";

export function Success({
  title,
  footerLink,
  footerText,
  hideTokens,
}: {
  title?: string;
  footerLink?: string;
  footerText?: string;
  hideTokens?: boolean;
}) {
  return (
    <TradeStepLayout
    title={title}
      className={getClassName("Success")}
      body={!hideTokens &&  <TradePreview />}
      footerLink={footerLink}
      footerText={footerText}
    />
  );
}

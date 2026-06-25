import { getClassName } from "@utils";
import type { ReactNode } from "react";
import { useTranslation } from "../context";
import { TradePreview } from "../TradePreview/TradePreview";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";

export function Success({
  title,
  footerLink,
  explorerUrl,
  footerText,
  hideTokens,
}: {
  title?: string;
  footerLink?: string;
  explorerUrl?: string;
  footerText?: ReactNode;
  hideTokens?: boolean;
}) {
  const { viewOnExplorer } = useTranslation();
  const link = footerLink ?? explorerUrl;

  return (
    <TradeStepLayout
      title={title || "Swap success!"}
      className={getClassName("Success")}
      body={hideTokens ? undefined : <TradePreview />}
      footerLink={link}
      footerText={footerText ?? (link ? viewOnExplorer : undefined)}
    />
  );
}

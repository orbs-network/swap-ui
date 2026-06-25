import { getClassName } from "@utils";
import type { ReactNode } from "react";
import { useTranslation } from "../context";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import "./style.css";

export const Failed = ({
  error,
  footerLink,
  helpUrl,
  footerText,
}: {
  error?: ReactNode;
  footerLink?: string;
  helpUrl?: string;
  footerText?: ReactNode;
}) => {
  const { getHelp } = useTranslation();
  const link = footerLink ?? helpUrl;

  return (
    <TradeStepLayout
      footerLink={link}
      footerText={footerText ?? (link ? getHelp : undefined)}
      body={
        error || (
          <p className={getClassName("FailedContentMsg")}>
            Something went wrong
          </p>
        )
      }
      className={getClassName("FailedContent")}
    />
  );
};

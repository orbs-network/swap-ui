import { getClassName } from "@utils";
import { ReactNode } from "react";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import "./style.css";

export const Failed = ({
  error,
  footerLink,
  footerText,
}: {
  error?: ReactNode;
  footerLink?: string;
  footerText?: string;
}) => {
  return (
    <TradeStepLayout
      footerLink={footerLink}
      footerText={footerText}
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

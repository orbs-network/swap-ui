import { getClassName } from "@utils";
import { ReactNode } from "react";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import "./style.css";

export const Failed = ({
  error,
  link,
}: {
  error?: ReactNode;
  link?: string;
}) => {
  return (
    <TradeStepLayout
      link={link}
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

import { getClassName } from "@utils";
import { ReactNode } from "react";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import './style.css'


export const Failed = ({ error }: { error?: ReactNode }) => {
  return (
    <TradeStepLayout body={error || <p className={getClassName('FailedContentMsg')}>Something went wrong</p>} status='error' className={getClassName("FailedContent")} />
  );
};

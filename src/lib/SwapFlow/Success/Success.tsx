import { ReactNode } from "react";
import { getClassName } from "@utils";
import { TradePreview } from "../TradePreview/TradePreview";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import "./style.css";

export function Success({
  title,
  explorerUrl,
}: {
  title?: ReactNode;
  explorerUrl?: string;
}) {
  return (
    <TradeStepLayout
      className={getClassName("Success")}
      body={
        <>
          <Title>{title}</Title>
          <TradePreview />
        </>
      }
      explorerUrl={explorerUrl}
      status="success"
    />
  );
}

const Title = ({ children = "Swap success" }: { children?: ReactNode }) => {
  return <div className={getClassName("SuccessTitle")}>{children}</div>;
};


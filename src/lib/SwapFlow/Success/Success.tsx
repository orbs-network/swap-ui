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
      footer={explorerUrl && <TxHash explorerUrl={explorerUrl} />}
      status="success"
    />
  );
}

const Title = ({ children = "Swap success" }: { children?: ReactNode }) => {
  return <div className={getClassName("SuccessTitle")}>{children}</div>;
};

const TxHash = ({ explorerUrl }: { explorerUrl: string }) => {
  return (
    <a
      target="_blank"
      className={getClassName("SuccessExplorer")}
      href={explorerUrl}
    >
      View on explorer
    </a>
  );
};

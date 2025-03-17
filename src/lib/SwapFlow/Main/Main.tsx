import { getClassName } from "@utils";
import { ReactNode } from "react";
import { FlexColumn } from "src/lib/components/BaseStyles/BaseStyles";
import { Text } from "src/lib/components/Text/Text";
import { Token } from "src/lib/type";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { useMainContext } from "../context";
import "./style.css";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import { TradePreview } from "../TradePreview/TradePreview";

const Loader = () => {
  return (
    <div className={`${getClassName("MainContentLoader")}`}>
      <SkeletonLoader
        className={`${getClassName("MainContentCircleLoader")}`}
      />
      <SkeletonLoader
        className={`${getClassName("MainContentRectengularLoader")}`}
      />
    </div>
  );
};

export const Main = ({
  fromTitle,
  toTitle,
  inUsd,
  outUsd,
}: {
  fromTitle?: string;
  toTitle?: string;
  inUsd?: ReactNode;
  outUsd?: ReactNode;
}) => {
  const {
    swapStatus,
    outAmount,
    inAmount,
    inToken,
    outToken,
    components,
    totalSteps,
  } = useMainContext();

  const swapDetails = (
    <TokensDisplay
      fromTitle={fromTitle}
      inUsd={inUsd}
      inToken={inToken}
      toTitle={toTitle}
      outUsd={outUsd}
      outToken={outToken}
      inAmount={inAmount}
      outAmount={outAmount}
      SrcTokenLogo={components.SrcTokenLogo}
      DstTokenLogo={components.DstTokenLogo}
    />
  );

  if (!swapStatus) {
    return <FlexColumn>{swapDetails}</FlexColumn>;
  }

  if (!totalSteps) {
    return (
      <FlexColumn>
        {swapDetails}
        <Loader />
      </FlexColumn>
    );
  }

  return <SwapStep />;
};

export const TokenDisplay = ({
  amount,
  token,
  usd,
  title,
  Logo: CustomLogo,
}: {
  amount?: string;
  token?: Token;
  usd?: ReactNode;
  title: string;
  Logo?: ReactNode;
}) => {

  return (
    <div className={`${getClassName("MainToken")}`}>
      <div className={`${getClassName("MainTokenLeft")}`}>
        <Text className={`${getClassName("MainTokenTitle")}`}>{title}</Text>
        <Text className={` ${getClassName("MainTokenAmount")}`}>{`${
          amount && Number(amount) > 0 ? amount : ""
        } ${token?.symbol || ''}`}</Text>
        {usd && <div className={` ${getClassName("MainTokenUsd")}`}>{usd}</div>}
      </div>
      <div className={` ${getClassName("MainTokenLogo")}`}>
        {CustomLogo || token?.logoUrl ?   <img src={token?.logoUrl} alt={'Token logo'} /> : null}
      </div>
    </div>
  );
};

export function SwapStep() {
  const { currentStep } = useMainContext();

  if (!currentStep) return null;

  return (
    <TradeStepLayout
      link={currentStep.explorerUrl}
      title={currentStep.title}
      body={
        currentStep.hideTokens ? undefined : (
          <TradePreview inTokenOnly={currentStep?.inTokenOnly} />
        )
      }
    />
  );
}

export const TokensDisplay = ({
  fromTitle,
  inUsd,
  inToken,
  toTitle,
  outUsd,
  outToken,
  inAmount,
  outAmount,
  SrcTokenLogo,
  DstTokenLogo,
}: {
  fromTitle?: string;
  inUsd?: ReactNode;
  inToken?: Token;
  toTitle?: string;
  outUsd?: ReactNode;
  outToken?: Token;
  inAmount?: string;
  outAmount?: string;
  SrcTokenLogo?: ReactNode;
  DstTokenLogo?: ReactNode;
}) => {
  return (
    <div className={`${getClassName("Main")}`}>
      <TokenDisplay
        title={fromTitle || "Swap from"}
        usd={inUsd}
        token={inToken}
        amount={inAmount}
        Logo={SrcTokenLogo}
      />
      <TokenDisplay
        title={toTitle || "Swap to"}
        usd={outUsd}
        token={outToken}
        amount={outAmount}
        Logo={DstTokenLogo}
      />
    </div>
  );
};

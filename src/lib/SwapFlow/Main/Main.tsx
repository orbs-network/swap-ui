import { getClassName } from "@utils";
import type { ReactNode } from "react";
import { FlexColumn } from "src/lib/components/BaseStyles/BaseStyles";
import { Text } from "src/lib/components/Text/Text";
import type { Token } from "src/lib/type";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { useMainContext, useTranslation } from "../context";
import { TradeStepLayout } from "../TradeStepLayout/TradeStepLayout";
import { TradePreview } from "../TradePreview/TradePreview";
import { TokenLogo } from "../TokenLogo/TokenLogo";
import { getTokenAmountLabel } from "../utils";
import "./style.css";

const Loader = () => {
  return (
    <div className={`${getClassName("MainContentLoader")}`}>
      <SkeletonLoader
        className={`${getClassName("MainContentCircleLoader")}`}
      />
      <SkeletonLoader
        className={[
          getClassName("MainContentRectangularLoader"),
          getClassName("MainContentRectengularLoader"),
        ].join(" ")}
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
    currentStep,
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

  if (!totalSteps || !currentStep) {
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
  const amountLabel = getTokenAmountLabel(amount, token);

  return (
    <div className={`${getClassName("MainToken")}`}>
      <div className={`${getClassName("MainTokenLeft")}`}>
        <Text className={`${getClassName("MainTokenTitle")}`}>{title}</Text>
        <Text className={getClassName("MainTokenAmount")}>{amountLabel}</Text>
        {usd && <div className={getClassName("MainTokenUsd")}>{usd}</div>}
      </div>
      {CustomLogo || (
        <TokenLogo
          token={token}
          size={40}
          className={getClassName("MainTokenLogo")}
        />
      )}
    </div>
  );
};

export function SwapStep() {
  const { currentStep } = useMainContext();
  const { proceedInWallet, getHelp } = useTranslation();

  if (!currentStep) return null;

  return (
    <TradeStepLayout
      footerLink={currentStep.footerLink}
      footerText={
        currentStep.footerText ??
        (currentStep.footerLink ? getHelp : proceedInWallet)
      }
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

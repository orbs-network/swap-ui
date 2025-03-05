import { getClassName } from "@utils";
import { ReactNode } from "react";
import { FlexColumn } from "src/lib/components/BaseStyles/BaseStyles";
import { Text } from "src/lib/components/Text/Text";
import { SwapStep, SwapConfirmationToken } from "src/lib/type";
import { Logo } from "../../components/Logo/Logo";
import { SkeletonLoader } from "../../components/SkeletonLoader/SkeletonLoader";
import { useSwapConfirmationContext } from "../context";
import { SingleStep } from "../SingleStep/SingleStep";
import { Steps } from "../Steps/Steps";
import "./style.css";

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
  steps,
  currentStep,
  fromTitle,
  toTitle,
  inUsd,
  outUsd,
  showSingleStep = true,
  bottomContent,
}: {
  steps?: SwapStep[];
  currentStep?: number;
  fromTitle?: string;
  toTitle?: string;
  inUsd?: ReactNode;
  outUsd?: ReactNode;
  showSingleStep?: boolean
  bottomContent?: ReactNode;
}) => {
  const { swapStatus, outAmount, inAmount, inToken, outToken } =
    useSwapConfirmationContext();

  const swapDetails = (
    <div className={`${getClassName("Main-wrapper")}`}>
      <div className={`${getClassName("Main")}`}>
        <TokenDisplay
          title={fromTitle || "Swap from"}
          usd={inUsd}
          token={inToken}
          amount={inAmount}
        />
        <TokenDisplay
          title={toTitle || "Swap to"}
          usd={outUsd}
          token={outToken}
          amount={outAmount}
        />
      </div>
      {bottomContent}
    </div>
  );

  if (!swapStatus) {
    return <FlexColumn>{swapDetails}</FlexColumn>;
  }

  if (!steps) {
    return (
      <FlexColumn>
        {swapDetails}
        <Loader />
      </FlexColumn>
    );
  }

  if (showSingleStep && steps.length === 1) {
    return <SingleStep step={steps[0]} />;
  }

  return (
    <FlexColumn>
      {swapDetails}
      <Steps steps={steps} currentStep={currentStep} />
    </FlexColumn>
  );
};

export const TokenDisplay = ({
  amount,
  token,
  usd,
  title,
}: {
  amount?: string;
  token?: SwapConfirmationToken;
  usd?: ReactNode;
  title: string;
}) => {
  if (!token) return null;

  return (
    <div className={`${getClassName("MainToken")}`}>
      <div className={`${getClassName("MainTokenLeft")}`}>
        <Text className={`${getClassName("MainTokenTitle")}`}>{title}</Text>
        <Text className={` ${getClassName("MainTokenAmount")}`}>{`${
          amount && Number(amount) > 0 ? amount : ""
        } ${token.symbol}`}</Text>
        {usd && (
          <div className={` ${getClassName("MainTokenUsd")}`}>
            {usd}
          </div>
        )}
      </div>
      <Logo src={token.logo} className={` ${getClassName("MainTokenLogo")}`} />
    </div>
  );
};

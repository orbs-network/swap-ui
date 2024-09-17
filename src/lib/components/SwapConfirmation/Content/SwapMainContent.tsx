import styles from "../../../styles/SwapMainContent.module.css"; // Import the CSS module
import { FlexColumn, FlexRow } from "../../../base-styles";
import { Step, SwapConfirmationToken } from "../../../type";
import { Logo } from "../../Logo";
import { Separator } from "../Components";
import { useSwapConfirmationContext } from "../context";
import { PoweredByOrbs } from "../../PoweredByOrbs";
import { SkeletonLoader } from "../../SkeletonLoader";
import { SingleStepContent } from "./SingleStepContent";
import { SwapSteps } from "../../Steps";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <SkeletonLoader className={styles.circleLoader} />
      <SkeletonLoader className={styles.rectangularLoader} />
    </div>
  );
};

export const SwapMainContent = ({
  steps,
  currentStep,
  fromTitle,
  toTitle,
  children
}: {
  steps?: Step[];
  currentStep?: number;
  fromTitle?: string;
  toTitle?: string;
  children?: React.ReactNode;
}) => {
  const { swapStatus, inUsd, outUsd, outAmount, inAmount, inToken, outToken } =
    useSwapConfirmationContext();

  const swapDetails = (
    <>
    <div className={styles.swapDetails}>
      <TokenDisplay
        title={fromTitle || "Swap from"}
        usd={inUsd}
        token={inToken}
        amount={inAmount}
      />
      <Separator />
      <TokenDisplay
        title={toTitle || "Swap to"}
        usd={outUsd}
        token={outToken}
        amount={outAmount}
      />
    </div>
    {children}
    </>
  );

  if (!steps) {
    return <Loader />;
  }

  if (steps.length === 1) {
    return <SingleStepContent step={steps[0]} />;
  }

  if (!swapStatus) {
    return (
      <FlexColumn>
        {swapDetails}
        <PoweredByOrbs />
      </FlexColumn>
    );
  }

  return (
    <FlexColumn>
      {swapDetails}
      <SwapSteps steps={steps} currentStep={currentStep} />
    </FlexColumn>
  );
};

const TokenDisplay = ({
  amount,
  token,
  usd,
  title,
}: {
  amount?: string;
  token?: SwapConfirmationToken;
  usd?: string;
  title: string;
}) => {
  if (!token) return null;

  return (
    <div className={styles.tokenDisplay}>
      <p className={styles.title}>{title}</p>
      <FlexRow
        $justifyContent="space-between"
        $alignItems="flex-start"
        customStyles={{ width: "100%" }}
      >
        <div className={styles.tokenLeft}>
          <p className={styles.tokenAmount}>{`${amount} ${token.symbol}`}</p>
          <p className={styles.usd}>{usd || "-"}</p>
        </div>
        <Logo src={token.logo} className={styles.logo} />
      </FlexRow>
    </div>
  );
};


import { getClassName } from '@utils';
import { FlexColumn } from 'src/lib/components/BaseStyles/BaseStyles';
import { Text } from 'src/lib/components/Text/Text';
import { SwapStep, SwapConfirmationToken } from 'src/lib/type';
import { Logo } from '../../components/Logo/Logo';
import { SkeletonLoader } from '../../components/SkeletonLoader/SkeletonLoader';
import { useSwapConfirmationContext } from '../context';
import { SingleStep } from '../SingleStep/SingleStep';
import { Steps } from '../Steps/Steps';
import './style.css'

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

export const Swap = ({
  steps,
  currentStep,
  fromTitle,
  toTitle,
  inUsd,
  outUsd,
}: {
  steps?: SwapStep[];
  currentStep?: number;
  fromTitle?: string;
  toTitle?: string;
  inUsd?: string | number;
  outUsd?: string  |number;
}) => {
  const { swapStatus, outAmount, inAmount, inToken, outToken } =
    useSwapConfirmationContext();

  const swapDetails = (
    <>
      <div className={`${getClassName("Review")}`}>
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
    </>
  );

  if (!steps) {
    return <Loader />;
  }

  if (!swapStatus) {
    return (
      <FlexColumn>
        {swapDetails}
      </FlexColumn>
    );
  }


  if (steps.length === 1) {
    return <SingleStep step={steps[0]} />
  }


  return (
    <FlexColumn>
      {swapDetails}
      <Steps steps={steps} currentStep={currentStep} />
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
  usd?: string | number;
  title: string;
}) => {
  if (!token) return null;

  return (
    <div className={`${getClassName("ReviewToken")}`}>
      <div className={`${getClassName("ReviewTokenLeft")}`}>
        <Text className={`${getClassName("ReviewTokenTitle")}`}>{title}</Text>
        <Text
          className={` ${getClassName("ReviewTokenAmount")}`}
        >{`${amount} ${token.symbol}`}</Text>
        <Text className={` ${getClassName("ReviewTokenUsd")}`}>
          {usd || "-"}
        </Text>
      </div>
      <Logo
        src={token.logo}
        className={` ${getClassName("ReviewTokenLogo")}`}
      />
    </div>
  );
};

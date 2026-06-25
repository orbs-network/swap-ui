import { useState } from "react";
import { Button, Step, SwapFlow, SwapStatus } from "./lib";
import "./styles.css";

export const Dapp = () => {
  const { swapStatus, currentStepIndex, stepsCount, start, currentStep } =
    useFullFlow();

  return (
    <>
      <div className="dapp">
        <SwapFlow
          inAmount="10"
          outAmount="10"
          totalSteps={stepsCount}
          currentStepIndex={currentStepIndex}
          currentStep={currentStep}
          inToken={{
            symbol: "ETH",
            logoUrl: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
          }}
          outToken={{
            symbol: "ETH",
            logoUrl: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
          }}
          mainContent={<SwapFlow.Main inUsd="$10" outUsd="$10" />}
          failedContent={<SwapFlow.Failed helpUrl="/" />}
          successContent={<SwapFlow.Success explorerUrl="/" />}
          swapStatus={swapStatus}
        />
        {!swapStatus && (
          <Button className="swap-button" onClick={start}>
            Swap
          </Button>
        )}
      </div>
    </>
  );
};

const useFullFlow = () => {
  const [swapStatus, setSwapStatus] = useState<SwapStatus | undefined>(undefined);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const start = () => {
    setCurrentStepIndex(0);
    setSwapStatus(SwapStatus.LOADING);
    setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
    }, 2_000);
    setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
    }, 4_000);
    setTimeout(() => {
      setSwapStatus(SwapStatus.SUCCESS);
    }, 6_000);
  };

  return {
    swapStatus,
    currentStepIndex,
    stepsCount: steps.length,
    start,
    currentStep: steps[currentStepIndex],
  };
};

const steps: Step[] = [
  {
    title: "Wrap ETH",
  },
  {
    title: "Approve ETH",
  },
  {
    title: "Confirm Swap",
  },
];

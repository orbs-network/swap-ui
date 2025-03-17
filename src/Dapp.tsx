import { useState } from "react";
import { SwapFlow } from "./lib";
import { Button } from "./lib/components/Button/Button";
import { Step, SwapStatus } from "./lib/type";
import "./styles.css";

export const Dapp = () => {
  // const {swapStus, currentStep, start} = useFullFlow();
  const { swapStus, currentStepIndex, stepsCount, start, currentStep } = useFullFlow();
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
          components={{
            Main: <MainContent
              inUsd="$10"
              outUsd="$10"
            />,
            Failed: <FailedContent />,
            Success: <SuccessContent />,
          }}
          swapStatus={swapStus}
        />
        {!swapStus && (
          <Button className="swap-button" onClick={start}>
            Swap
          </Button>
        )}
      </div>
    </>
  );
};

const SuccessContent = () => {
  return <SwapFlow.Success explorerUrl="/" title='Swap success!' />;
};

const FailedContent = () => {
  return <SwapFlow.Failed  link="/"/>;
};

const MainContent = ({

  inUsd,
  outUsd,
}: {

  inUsd?: string;
  outUsd?: string;
}) => {
  return (
    <SwapFlow.Main
      inUsd={inUsd}
      outUsd={outUsd}
  
    />
  );
};

// const useSingleStep = () => {
//   const [swapStus, setSwapStus] = useState<SwapStatus | undefined>(undefined);
//   const start = () => {
//     setSwapStus(SwapStatus.LOADING);
//     setTimeout(() => {
//       setSwapStus(SwapStatus.SUCCESS);
//     }, 10_000);
//     // setTimeout(() => {
//     //   setSwapStus(SwapStatus.FAILED);
//     // }, 25_000);
//   };

//   return {
//     swapStus,
//     currentStep: undefined,
//     steps: [steps[1]],
//     start,
//   };
// };

const useFullFlow = () => {
  const [swapStus, setSwapStus] = useState<SwapStatus | undefined>(undefined);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
 const start = () => {
  setSwapStus(SwapStatus.LOADING);
  setTimeout(() => {
    setCurrentStepIndex(prev => (prev || 0) + 1);
  }, 2_000);
  setTimeout(() => {
    setCurrentStepIndex(prev => (prev || 0) + 1);
  }, 4_000);
  setTimeout(() => {
    setSwapStus(SwapStatus.SUCCESS);
  }, 6_000);
 }
  return {
    swapStus,
    currentStepIndex,
    stepsCount: steps.length,
    start,
    currentStep: steps[currentStepIndex],
  }
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

// function IconSwapFill() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
//       <path fill="none" d="M0 0h24v24H0z" />
//       <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 9h2v4h2V9h2l-3-3.5L7 9zm10 6h-2v-4h-2v4h-2l3 3.5 3-3.5z" />
//     </svg>
//   );
// }

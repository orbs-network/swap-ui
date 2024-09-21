import { useState } from "react";
import { SwapFlow } from "./lib";
import { Button } from "./lib/components/Button/Button";
import { SwapStatus, SwapStep } from "./lib/type";
import "./styles.css";

export const Dapp = () => {
  // const {swapStus, currentStep, start} = useFullFlow();
  const { swapStus, currentStep, steps, start } = useSingleStep();
  return (
    <>
      <div className="dapp">
        <SwapFlow
          inAmount="10"
          outAmount="10"
          inToken={{
            symbol: "ETH",
            logo: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
          }}
          outToken={{
            symbol: "ETH",
            logo: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
          }}
          mainContent={
            <MainContent
              inUsd="$10"
              outUsd="$10"
              currentStep={currentStep}
              steps={steps}
            />
          }
          failedContent={<FailedContent />}
          successContent={<SuccessContent />}
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
  return <SwapFlow.Success explorerUrl="/" title={<p>Swap success!</p>} />;
};

const FailedContent = () => {
  return <SwapFlow.Failed />;
};

const MainContent = ({
  currentStep,
  steps,
  inUsd,
  outUsd,
}: {
  currentStep?: number;
  steps?: SwapStep[];
  inUsd?: string;
  outUsd?: string;
}) => {
  return (
    <SwapFlow.Swap
      inUsd={inUsd}
      outUsd={outUsd}
      steps={steps}
      currentStep={currentStep}
    />
  );
};

const useSingleStep = () => {
  const [swapStus, setSwapStus] = useState<SwapStatus | undefined>(undefined);
  const start = () => {
    setSwapStus(SwapStatus.LOADING);
    setTimeout(() => {
      setSwapStus(SwapStatus.SUCCESS);
    }, 10_000);
    // setTimeout(() => {
    //   setSwapStus(SwapStatus.FAILED);
    // }, 25_000);
  };

  return {
    swapStus,
    currentStep: undefined,
    steps: [steps[2]],
    start,
  };
};

// const useFullFlow = () => {
//   const [swapStus, setSwapStus] = useState<SwapStatus | undefined>(undefined);
//   const [currentStep, setCurrentStep] = useState<number | undefined>(undefined);
//  const start = () => {
//   setSwapStus(SwapStatus.LOADING);
//   setCurrentStep(1);
//   setTimeout(() => {
//     setCurrentStep(prev => (prev || 0) + 1);
//   }, 5_000);
//   setTimeout(() => {
//     setCurrentStep(prev => (prev || 0) + 1);

//   }, 10_000);
//   setTimeout(() => {
//     setSwapStus(SwapStatus.SUCCESS);
//   }, 15_000);
//   // setTimeout(() => {
//   //   setSwapStus(SwapStatus.FAILED);
//   // }, 25_000);
//  }

//   return {
//     swapStus,
//     currentStep,
//     steps: steps,
//     start
//   }
// };

const steps: SwapStep[] = [
  {
    id: 1,
    title: "Wrap ETH",
    image:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
  },
  {
    id: 2,
    title: "Approve ETH",
    image:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
  },
  {
    id: 3,
    title: "Confirm Swap",
    timeout: 40_000,
    image:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png",
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

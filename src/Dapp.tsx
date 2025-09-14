import { useState } from "react";
import { SwapFlow } from "./lib";
import { Button } from "./lib/components/Button/Button";
import { Step, SwapDetail, SwapStatus } from "./lib/type";
import "./styles.css";

const swapDetails: SwapDetail[] = [
  {
    label: "Trade price",
    value: <>1 BSC-USD = 0.0009864 BNB</>,
  },
  {
    label: "Limit price",
    value: <>0.000986 BNB (-8%)</>,
  },
  {
    label: "Expiry",
    value: <>15/09/2025 16:04</>,
  },
  {
    label: "Recipient",
    value: <>0x5001...E40E4</>,
  },
  {
    label: "Fee (0.25%)",
    value: <>0.00038 BNB</>,
  },
];

export const Dapp = () => {
  // const {swapStus, currentStep, start} = useFullFlow();
  const { swapStus, stepIndex, start, steps } =
    useFullFlow();
  return (
    <>
      <div className="dapp">
        <SwapFlow
          inAmount="10"
          outAmount="10"
          inUsd="$10"
          outUsd="$10"
          steps={steps}
          stepIndex={stepIndex}
          inTokenSymbol="ETH"
          inTokenLogo="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png"
          outTokenSymbol="ETH"
          outTokenLogo="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png"
          swapStatus={swapStus}
          swapDetails={swapDetails}
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

const useFullFlow = () => {
  const [swapStus, setSwapStus] = useState<SwapStatus | undefined>(undefined);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const start = () => {
    setSwapStus(SwapStatus.LOADING);
    setTimeout(() => {
      setCurrentStepIndex((prev) => (prev || 0) + 1);
    }, 2_000);
    setTimeout(() => {
      setCurrentStepIndex((prev) => (prev || 0) + 1);
    }, 4_000);
    setTimeout(() => {
      setSwapStus(SwapStatus.SUCCESS);
    }, 6_000);
  };
  return {
    swapStus,
    stepIndex: currentStepIndex,
    start,
    steps,
  };
};

const steps: Step[] = [
  {
    title: "Wrap ETH",
    logo: <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png" alt="ETH" />
  },
  {
    title: "Approve ETH",
    logo: <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png" alt="ETH" />
  },
  {
    title: "Confirm Swap",
    logo: <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/arbitrum/assets/0x912CE59144191C1204E64559FE8253a0e49E6548/logo.png" alt="ETH" />
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

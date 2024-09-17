import { SwapConfirmation } from "./lib/components";
import { Step, SwapStatus } from "./lib/type";
import "./styles.css";

const background = "rgb(30 41 59/1)";
const color = "rgb(148 163 184/1)";

export const Dapp = () => {
  return (
    <div
      className="dapp"
      style={{
        "--background-color": background, // Set default if no value provided
      } as React.CSSProperties}
    >
      <SwapConfirmation
        inAmount="10"
        outAmount="10"
        inToken={{
          symbol: "ETH",
          logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
        }}
        outToken={{
          symbol: "ETH",
          logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
        }}
        inUsd="10"
        outUsd="10"
        mainContent={<MainContent />}
        failedContent={<FailedContent />}
        successContent={<SuccessContent />}
        swapStatus={SwapStatus.LOADING}
        styles={{
          color: color,
          background: background,
        }}
      />
    </div>
  );
};

const SuccessContent = () => {
  return <SwapConfirmation.SuccessContent />;
};

const FailedContent = () => {
  return <SwapConfirmation.FailedContent />;
};

const MainContent = () => {
  return <SwapConfirmation.MainContent steps={steps} currentStep={1} />;
};

const steps: Step[] = [
  {
    title: "Approve ETH",
    image:
      "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
  },
  {
    title: "Swap ETH to ORBS",
    icon: <IconSwapFill />,
    // timeout: 20_000
  },
];

function IconSwapFill() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 9h2v4h2V9h2l-3-3.5L7 9zm10 6h-2v-4h-2v4h-2l3 3.5 3-3.5z" />
    </svg>
  );
}

# Orbs Swap UI Library

This UI library is designed to help developers seamlessly integrate the Orbs Liquidity Hub and Twap with a clean and intuitive swap flow. It offers a customizable interface to handle swap steps, status updates, and user interactions in a decentralized application (dApp).

---

## Features

- **Swap Flow UI**: A step-by-step user interface for performing swaps.
- **Status Management**: Easily track the status of swaps (loading, success, failure).
- **Customization**: Provide custom content for each step in the swap process.
- **Simple Integration**: Designed to integrate effortlessly with the Orbs Liquidity Hub and Twap SDK.

---

## Installation

Install the library into your project:

```bash
npm install @orbs-network/swap-ui
```

or with yarn:

```bash
yarn add @orbs-network/swap-ui
```

---

## Usage

`SwapFlow` now works with built-in content by default. Pass the trade data and status, then customize only the parts you need.

```tsx
import { SwapFlow, SwapStatus, type Step } from "@orbs-network/swap-ui";

const steps: Step[] = [
  { title: "Wrap ETH" },
  { title: "Approve ETH" },
  { title: "Confirm swap" },
];

export function Swap() {
  return (
    <SwapFlow
      inAmount="10"
      outAmount="24800"
      inToken={{ symbol: "ETH", logoUrl: "https://example.com/eth.png" }}
      outToken={{ symbol: "USDC", logo: "https://example.com/usdc.png" }}
      swapStatus={SwapStatus.LOADING}
      currentStep={steps[1]}
      currentStepIndex={1}
      totalSteps={steps.length}
    />
  );
}
```

### Custom Content

Use the flat content props for common customization:

```tsx
<SwapFlow
  inAmount="10"
  outAmount="24800"
  inToken={{ symbol: "ETH", logoUrl: ethLogo }}
  outToken={{ symbol: "USDC", logoUrl: usdcLogo }}
  swapStatus={swapStatus}
  currentStep={currentStep}
  currentStepIndex={currentStepIndex}
  totalSteps={steps.length}
  mainContent={<SwapFlow.Main inUsd="$24,800" outUsd="$24,790" />}
  successContent={<SwapFlow.Success explorerUrl={explorerUrl} />}
  failedContent={<SwapFlow.Failed error={errorMessage} helpUrl={supportUrl} />}
/>
```

For icon and loader overrides, use `components`:

```tsx
<SwapFlow
  {...swapFlowProps}
  components={{
    Loader: <MyLoader />,
    SuccessIcon: <SuccessIcon />,
    FailedIcon: <FailedIcon />,
  }}
/>
```

### Main Props

- `inAmount` / `outAmount`: Token amounts to display.
- `inToken` / `outToken`: Token metadata. Use `symbol`, `logoUrl`, or `logo`.
- `swapStatus`: `SwapStatus.LOADING`, `SwapStatus.SUCCESS`, or `SwapStatus.FAILED`.
- `currentStep`: The active step. Supports `title`, `footerLink`, `footerText`, `inTokenOnly`, and `hideTokens`.
- `currentStepIndex` / `totalSteps`: Drives the step indicator.
- `translation`: Optional labels for `proceedInWallet`, `viewOnExplorer`, and `getHelp`.

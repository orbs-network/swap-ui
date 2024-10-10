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

The SwapFlow component handles the entire swap process. It takes in various props like inAmount, outAmount, inToken, and outToken, as well as custom content to display during different steps of the process.

Props:

- `inAmount`: The amount of the input token.
- `outAmount`: The amount of the output token.
- `inToken`: An object representing the input token (e.g., symbol, logo).
- `outToken`: An object representing the output token (e.g., symbol, logo).
- `mainContent`: The main content displayed during the swap.
- `failedContent`: The content shown if the swap fails.
- `successContent`: The content shown if the swap succeeds.
- `swapStatus`: The current status of the swap (loading, success, or failed).

the SwapFlow.Swap component is a built-in component that displays the swap steps. It takes in the next props:

- `inUsd`: The amount of the input token in USD.
- `outUsd`: The amount of the output token in USD.
- `steps`: An array of steps in the swap process.
- `currentStep`: The current step in the swap process.

the steps array is an array of objects representing the steps in the swap process. Each object has the next properties:

- `id`: The step ID.
- `title`: The title of the step.
- `image`: The URL of the image for the step.
- `timeout`: The timeout for the step (optional).

the SwapFlow.FailedContent component is a built-in component that displays the failed content. It takes in the next props:

- `error`: The error message.

the SwapFlow.SuccessContent component is a built-in component that displays the success content. It takes in the next props:

- `title`: The title of the success message.
- `explorerUrl`: The URL to the transaction explorer.

```jsx
const steps: SwapStep[] = [
  {
    id: 1,
    title: "Wrap ETH",
    image: "logo-url",
  },
  {
    id: 2,
    title: "Approve ETH",
    image: "logo-url",
  },
  {
    id: 3,
    title: "Confirm Swap",
    timeout: 40_000,
    image: "logo-url",
  },
];

export const Swap = () => {
  return (
    <>
      <SwapFlow
        inAmount="10"
        outAmount="10"
        inToken={{
          symbol: "ETH",
          logo: "logo-url",
        }}
        outToken={{
          symbol: "USDC",
          logo: "logo-url",
        }}
        mainContent={
          <SwapFlow.Swap
            inUsd={inUsd}
            outUsd={outUsd}
            steps={steps}
            currentStep={currentStep}
          />
        }
        failedContent={<FailedContent error="error" />}
        successContent={
          <SuccessContent title="title" explorerUrl="explorerUrl" />
        }
        swapStatus={swapStus}
      />
      <Button className="swap-button" onClick={swap}>
        Swap
      </Button>
    </>
  );
};
```

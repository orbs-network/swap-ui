import { ReactNode } from "react";

export enum SwapStatus {
  LOADING = 1,
  SUCCESS = 2,
  FAILED = 3,
}

export interface Step {
  title: string;
  description?: string;
  logo?: ReactNode;
}

export type SwapDetail = {
  label: ReactNode;
  value: ReactNode;
};

export interface SwapFlowProps {
  inAmount?: string;
  outAmount?: string;
  inUsd?: ReactNode;
  outUsd?: ReactNode;
  inTokenSymbol?: string;
  inTokenLogo?: string;
  outTokenSymbol?: string;
  outTokenLogo?: string;
  className?: string;
  swapStatus?: SwapStatus;
  steps?: Step[];
  stepIndex?: number;
  swapDetails: SwapDetail[];
  fromTitle?: ReactNode;
  toTitle?: ReactNode;

  translation?: {
    proceedInWallet?: string;
    viewOnExplorer?: string;
    getHelp?: string;
  };
  components?: {
    SrcTokenLogo?: ReactNode;
    DstTokenLogo?: ReactNode;
    SuccessIcon?: ReactNode;
    FailedIcon?: ReactNode;
  };
}

export type Token = { symbol?: string; logoUrl?: string };

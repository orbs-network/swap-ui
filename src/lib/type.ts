import type { ReactNode } from "react";

export enum SwapStatus {
  LOADING = 1,
  SUCCESS = 2,
  FAILED = 3,
}

export interface Step {
  title: string;
  footerLink?: string;
  footerText?: ReactNode;
  inTokenOnly?: boolean;
  hideTokens?: boolean;
}

export interface SwapFlowTranslation {
  proceedInWallet?: string;
  viewOnExplorer?: string;
  getHelp?: string;
}

export interface SwapFlowComponents {
  SrcTokenLogo?: ReactNode;
  DstTokenLogo?: ReactNode;
  Loader?: ReactNode;
  SuccessIcon?: ReactNode;
  FailedIcon?: ReactNode;
  Success?: ReactNode;
  Failed?: ReactNode;
  Main?: ReactNode;
}

export interface SwapFlowProps {
  inAmount?: string;
  outAmount?: string;
  inToken?: Token;
  className?: string;
  outToken?: Token;
  swapStatus?: SwapStatus;
  currentStep?: Step;
  totalSteps?: number;
  currentStepIndex?: number;
  translation?: SwapFlowTranslation;
  mainContent?: ReactNode;
  failedContent?: ReactNode;
  successContent?: ReactNode;
  components?: SwapFlowComponents;
}

export type Token = { symbol?: string; logoUrl?: string; logo?: string };


import { ReactNode } from "react";

export enum SwapStatus {
  LOADING = 1,
  SUCCESS = 2,
  FAILED = 3,
}

export interface Step {
  title: string;
  explorerUrl?: string;
  inTokenOnly?: boolean;
  hideTokens?: boolean;
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
  translation?: {
    proceedInWallet?: string;
    viewOnExplorer?: string;
    getHelp?: string;
  }
  components: {
    SrcTokenLogo?: ReactNode;
    DstTokenLogo?: ReactNode;
    Loader?: ReactNode;
    SuccessIcon?: ReactNode;  
    FailedIcon?: ReactNode;
    Success: ReactNode;
    Failed: ReactNode;
    Main: ReactNode;
  }
}

export type Token = {symbol?: string, logoUrl?: string}
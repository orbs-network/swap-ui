
import { ReactNode } from "react";

export enum SwapStatus {
  LOADING = 1,
  SUCCESS = 2,
  FAILED = 3,
}

export interface SwapStep {
  id: number,
  title: ReactNode;
  link?: { href: string; text: string };
  icon?: ReactNode;
  image?: string;
  hidden?: boolean;
  txHash?: string;
  timeout?: number;
}

export interface SwapConfirmationArgs {
  inAmount?: string;
  outAmount?: string;
  inToken?: SwapConfirmationToken;
  outToken?: SwapConfirmationToken;
  swapStatus?: SwapStatus;
  txHash?: string;
  isUnwrapFlow?: boolean;
}

export type SwapConfirmationToken = {symbol?: string, logo?: string}
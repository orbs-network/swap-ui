
import { ReactNode } from "react";


export enum SwapStep {
  WRAP = 1,
  APPROVE = 2,
  SWAP = 3,
}

export enum SwapStatus {
  LOADING = 1,
  SUCCESS = 2,
  FAILED = 3,
}

export interface Step {
  title: ReactNode;
  link?: { href: string; text: string };
  icon?: ReactNode;
  image?: string;
  hidden?: boolean;
  txHash?: string;
  timeout?: number;
}

export interface SwapConfirmationArgs {
  inUsd?: string;
  outUsd?: string;
  inAmount?: string;
  outAmount?: string;
  inToken?: SwapConfirmationToken;
  outToken?: SwapConfirmationToken;
  swapStatus?: SwapStatus;
  txHash?: string;

}

export type SwapConfirmationToken = {symbol?: string, logo?: string}
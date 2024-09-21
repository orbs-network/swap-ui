import React, { createContext, useContext } from "react";
import { SwapConfirmationArgs } from "../type";

interface Props extends SwapConfirmationArgs {
  children: React.ReactNode;
}

const SwapConfirmationContext = createContext({} as SwapConfirmationArgs);

export function Provider({ children, ...rest }: Props) {
  return (
    <SwapConfirmationContext.Provider value={rest}>
      {children}
    </SwapConfirmationContext.Provider>
  );
}

export const useSwapConfirmationContext = () =>
  useContext(SwapConfirmationContext);


  export const useTranslation = () => {
    const {translation}   = useSwapConfirmationContext()
    return {
      proceedInWallet: translation?.proceedInWallet || 'Proceed in wallet',
      viewOnExplorer: translation?.viewOnExplorer || 'View on explorer',
    }

  }
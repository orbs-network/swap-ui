import React, { createContext, useContext } from "react";
import {  SwapFlowProps } from "../type";


interface ContextProps extends SwapFlowProps {
  children: React.ReactNode;
}

const SwapConfirmationContext = createContext({} as SwapFlowProps);

export function Provider({ children, ...rest }: ContextProps) {

  return (
    <SwapConfirmationContext.Provider value={rest}>
      {children}
    </SwapConfirmationContext.Provider>
  );
}

export const useMainContext = () =>
  useContext(SwapConfirmationContext);


  export const useTranslation = () => {
    const {translation}   = useMainContext()
    return {
      proceedInWallet: translation?.proceedInWallet || 'Proceed in wallet',
      viewOnExplorer: translation?.viewOnExplorer || 'View on explorer',
      getHelp: translation?.getHelp || 'Get help',
    }

  }
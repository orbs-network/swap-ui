import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type {
  SwapFlowComponents,
  SwapFlowProps,
  SwapFlowTranslation,
} from "../type";

type RequiredSwapFlowComponents = SwapFlowComponents &
  Required<Pick<SwapFlowComponents, "Success" | "Failed" | "Main">>;

export interface MainContextValue
  extends Omit<
    SwapFlowProps,
    "components" | "mainContent" | "failedContent" | "successContent"
  > {
  components: RequiredSwapFlowComponents;
}

interface ContextProps {
  children: ReactNode;
  value: MainContextValue;
}

const defaultTranslation: Required<SwapFlowTranslation> = {
  proceedInWallet: "Proceed in your wallet",
  viewOnExplorer: "View on explorer",
  getHelp: "Get help",
};

const SwapConfirmationContext = createContext<MainContextValue | null>(null);

export function Provider({ children, value }: ContextProps) {
  return (
    <SwapConfirmationContext.Provider value={value}>
      {children}
    </SwapConfirmationContext.Provider>
  );
}

export const useMainContext = () => {
  const context = useContext(SwapConfirmationContext);

  if (!context) {
    throw new Error("SwapFlow components must be rendered inside <SwapFlow>.");
  }

  return context;
};

export const useTranslation = () => {
  const { translation } = useMainContext();

  return {
    ...defaultTranslation,
    ...translation,
  };
};

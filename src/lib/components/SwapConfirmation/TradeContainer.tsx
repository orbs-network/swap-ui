import { ReactNode } from "react";
import { useSwapConfirmationContext } from "./context";
import styles from '../../styles/TradeContainer.module.css'; // Import the CSS module
import { SwapConfirmationToken } from "../../type";

interface Props {
  topElement?: ReactNode;
  title: ReactNode;
  variant: "success" | "pending";
  bottomElement?: ReactNode;
}



function IconArrowRightShort() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
}


export function TradeContainer({ topElement, title, bottomElement }: Props) {
  return (
    <div className={styles.container}>
      {topElement}
      <div className={styles.titleAndPreview}>
        {title}
        <SwapPreview />
      </div>
      <p className={styles.bottomMsg}>{bottomElement}</p>
    </div>
  );
}

export const SwapPreview = () => {
  const { inToken, outToken, inAmount, outAmount } = useSwapConfirmationContext();

  return (
    <div className={styles.swapPreview}>
      <TokenAmount token={inToken} amount={inAmount} />
      <IconArrowRightShort />
      <TokenAmount token={outToken} amount={outAmount} />
    </div>
  );
};

const TokenAmount = ({ token, amount }: { token?: SwapConfirmationToken, amount?: string }) => {
  return (
    <div className={styles.tokenAmount}>
      <img src={token?.logo} className={styles.logo} alt={`${token?.symbol} logo`} />
      <p>
        {amount} {token?.symbol}
      </p>
    </div>
  );
};

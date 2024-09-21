import { useSwapConfirmationContext } from "../context";
import { SwapConfirmationToken } from "../../type";
import { getClassName } from "@utils";
import './style.css'
import { Text } from "src/lib/components/Text/Text";

function IconArrowRightShort() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={getClassName('TradepPreviewIcon')}
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
}

export const TradePreview = () => {
    const { inToken, outToken, inAmount, outAmount } = useSwapConfirmationContext();
  
    return (
      <div className={getClassName('TradepPreview')}>
        <TokenAmount token={inToken} amount={inAmount} />
        <IconArrowRightShort />
        <TokenAmount token={outToken} amount={outAmount} />
      </div>
    );
  };
  
  const TokenAmount = ({ token, amount }: { token?: SwapConfirmationToken, amount?: string }) => {
    return (
      <div className={getClassName('TradePreviewToken')}>
        <img src={token?.logo} className={getClassName('TradepPreviewLogo')} alt={`${token?.symbol} logo`} />
        <Text>
          {amount} {token?.symbol}
        </Text>
      </div>
    );
  };
  
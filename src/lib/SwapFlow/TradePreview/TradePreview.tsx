import { useMainContext } from "../context";
import { Token } from "../../type";
import { getClassName } from "@utils";
import './style.css'
import { Text } from "src/lib/components/Text/Text";
import { ReactNode } from "react";

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

export const TradePreview = ({ inTokenOnly }: { inTokenOnly?: boolean }) => {
    const { inToken, outToken, inAmount, outAmount, components } = useMainContext();
  
    return (
      <div className={getClassName('TradePreview')}>
        <TokenAmount token={inToken} amount={inAmount} Logo={components?.SrcTokenLogo} />
       {!inTokenOnly &&  <>
        <IconArrowRightShort />
        <TokenAmount token={outToken} amount={outAmount} Logo={components?.DstTokenLogo} />
        </>}
      </div>
    );
  };
  
  const TokenAmount = ({ token, amount, Logo }: { token?: Token, amount?: string, Logo?: ReactNode }) => {
    return (
      <div className={getClassName('TradePreviewToken')}>
        {Logo || <img src={token?.logoUrl} className={getClassName('TradepPreviewLogo')} alt={`${token?.symbol} logo`} />}
        <Text>
          {amount} {token?.symbol}
        </Text>
      </div>
    );
  };
  
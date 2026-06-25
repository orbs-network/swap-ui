import { useMainContext } from "../context";
import type { Token } from "../../type";
import { getClassName } from "@utils";
import { Text } from "src/lib/components/Text/Text";
import type { ReactNode } from "react";
import { TokenLogo } from "../TokenLogo/TokenLogo";
import { getTokenAmountLabel } from "../utils";
import "./style.css";

function IconArrowRightShort() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={getClassName("TradepPreviewIcon")}
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
  const className = [
    getClassName("TradePreview"),
    inTokenOnly && getClassName("TradePreviewSingleToken"),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <TokenAmount token={inToken} amount={inAmount} Logo={components.SrcTokenLogo} />
      {!inTokenOnly && (
        <>
          <IconArrowRightShort />
          <TokenAmount
            token={outToken}
            amount={outAmount}
            Logo={components.DstTokenLogo}
          />
        </>
      )}
    </div>
  );
};

const TokenAmount = ({
  token,
  amount,
  Logo,
}: {
  token?: Token;
  amount?: string;
  Logo?: ReactNode;
}) => {
  const label = getTokenAmountLabel(amount, token);

  return (
    <div className={getClassName("TradePreviewToken")}>
      {Logo || (
        <TokenLogo
          token={token}
          size={24}
          className={getClassName("TradepPreviewLogo")}
        />
      )}
      <Text title={label}>{label}</Text>
    </div>
  );
};

import { getClassName } from "@utils";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { Token } from "../../type";
import { getTokenLogoUrl, getTokenSymbol } from "../utils";
import "./style.css";

export function TokenLogo({
  token,
  className = "",
  size = 24,
}: {
  token?: Token;
  className?: string;
  size?: number;
}) {
  const [hasError, setHasError] = useState(false);
  const logoUrl = getTokenLogoUrl(token);
  const symbol = getTokenSymbol(token);
  const label = symbol ? `${symbol} logo` : "Token logo";
  const fallback = symbol?.charAt(0).toUpperCase() || "?";
  const style = {
    "--token-logo-size": `${size}px`,
  } as CSSProperties;
  const rootClassName = [getClassName("TokenLogo"), className]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    setHasError(false);
  }, [logoUrl]);

  if (logoUrl && !hasError) {
    return (
      <img
        src={logoUrl}
        className={`${rootClassName} ${getClassName("TokenLogoImage")}`}
        alt={label}
        style={style}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div
      className={`${rootClassName} ${getClassName("TokenLogoFallback")}`}
      style={style}
      aria-label={label}
      title={symbol || "Token"}
    >
      {fallback}
    </div>
  );
}

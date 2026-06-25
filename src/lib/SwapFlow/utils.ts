import type { Token } from "../type";

export const getTokenLogoUrl = (token?: Token) =>
  token?.logoUrl?.trim() || token?.logo?.trim();

export const getTokenSymbol = (token?: Token) => token?.symbol?.trim();

export const getTokenAmountLabel = (amount?: string, token?: Token) => {
  const parts = [amount?.trim(), getTokenSymbol(token)].filter(Boolean);

  return parts.join(" ") || "Token";
};

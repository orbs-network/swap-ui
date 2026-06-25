import { getClassName } from "@utils";
import  { ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import './style.css';

export function Button({
  children,
  className = "",
  onClick,
  isLoading,
  disabled,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      onClick={onClick}
      className={`${getClassName('Button')} ${className}`}
    >
      <div>{children}</div>
      {isLoading && <Spinner  />}
    </button>
  );
}

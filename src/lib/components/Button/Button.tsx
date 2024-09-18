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
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${getClassName('Button')} ${className}`}
    >
      <div>{children}</div>
      {isLoading && <Spinner  />}
    </button>
  );
}

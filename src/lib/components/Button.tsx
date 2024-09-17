import  { ReactNode } from "react";
import { Spinner } from "./Spinner";
import styles from '../styles/Button.module.css';

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
      className={`${styles.container} ${isLoading ? styles.loading : ""} ${className}`}
    >
      <div>{children}</div>
      {isLoading && <Spinner  />}
    </button>
  );
}

import { getClassName } from "../../util";
import './style.css'

interface SpinnerProps {
  className?: string;
  size?: number;
  borderWidth?: number;
  borderColor?: string;
  bottomBorderColor?: string;
}

export const Spinner = ({
  className = '',
  size = 38,
  borderWidth = 3,
  borderColor = 'white',
  bottomBorderColor = 'rgba(255, 255, 255, 0.2)',
}: SpinnerProps) => {
  const style = {
    '--size': `${size}px`,
    '--border-width': `${borderWidth}px`,
    '--border-color': borderColor,
    '--bottom-border-color': bottomBorderColor,
  } as React.CSSProperties;

  return (
    <div
      className={`${getClassName('Spinner')} ${className}`}
      style={style}
    />
  );
};

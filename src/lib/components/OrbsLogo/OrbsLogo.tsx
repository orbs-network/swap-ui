import { getClassName } from "@utils";
import './style.css';

export const OrbsLogo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      className={` ${getClassName("OrbsLogo")} ${className}`}
      alt="Orbs logo"
      src="https://www.orbs.com/assets/img/common/logo.svg"
    />
  );
};

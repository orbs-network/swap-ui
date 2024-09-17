import styles from  "../styles/OrbsLogo.module.css";

import { getClassName } from "../util";
export const OrbsLogo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      className={`${styles.OrbsLogo} ${getClassName("OrbsLogo")} ${className}`}
      alt="Orbs logo"
      src="https://www.orbs.com/assets/img/common/logo.svg"
    />
  );
};


import { OrbsLogo } from "./OrbsLogo";
import styles from "../styles/PoweredByOrbs.module.css";
import { getClassName } from "../util";

export const PoweredByOrbs = () => {
  return (
    <p
      className={`${styles.PoweredByOrbs} ${getClassName("PoweredByOrbs")}`}
    >
      <a href="https://www.orbs.com/" target="_blank" rel="noreferrer">
        <span>powered by</span>
        <OrbsLogo className={styles.logo} />
        <span>ORBS</span>
      </a>
    </p>
  );
};

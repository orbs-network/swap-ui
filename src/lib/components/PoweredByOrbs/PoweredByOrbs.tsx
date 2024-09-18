
import { OrbsLogo } from "../OrbsLogo/OrbsLogo";
import { getClassName } from "../../util";
import { WEBSITE_URL } from "src/lib/consts";
import './style.css';

export const PoweredByOrbs = ({className = ''}:{className?: string}) => {
  return (
    <p
      className={`${getClassName('PoweredBy')} ${className}`}
    >
      <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
        <span>powered by</span>
        <OrbsLogo  />
        <span>ORBS</span>
      </a>
    </p>
  );
};

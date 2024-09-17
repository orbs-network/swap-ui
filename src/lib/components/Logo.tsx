import  { CSSProperties } from 'react';
import styles from '../styles/Logo.module.css'; // Import the CSS module

export function Logo({
  src,
  alt = "",
  imgStyle = {},
  className = "",
}: {
  src?: string;
  alt?: string;
  imgStyle?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={src} alt={alt} style={imgStyle} className={styles.img} />
    </div>
  );
}
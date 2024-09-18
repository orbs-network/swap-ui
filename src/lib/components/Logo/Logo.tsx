import { getClassName } from '@utils';
import  { CSSProperties } from 'react';
import './style.css';
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
    <div className={`${getClassName('Logo')} ${className}`}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}
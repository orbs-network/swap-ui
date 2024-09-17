import React from 'react';
import styles from '../styles/SkeletonLoader.module.css'; // Import the CSS module

export function SkeletonLoader({
  styles: customStyles = {},
  className = '',
}: {
  styles?: React.CSSProperties;
  className?: string;
}) {
  return <div style={customStyles} className={`${styles.skeleton} ${className}`} />;
}

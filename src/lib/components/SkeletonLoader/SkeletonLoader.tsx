import { getClassName } from '@utils';
import React from 'react';
import './style.css';

export function SkeletonLoader({
  styles: customStyles = {},
  className = '',
}: {
  styles?: React.CSSProperties;
  className?: string;
}) {
  return <div style={customStyles} className={`${getClassName('SkeletonLoader')} ${className}`} />;
}

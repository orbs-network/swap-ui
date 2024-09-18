import { getClassName } from '@utils';
import React, { CSSProperties } from 'react';
import './style.css'

export const FlexRow = ({
  $gap = 10,
  $alignItems = "center",
  $justifyContent = "center",
  children,
  className = "",
  customStyles = {},
  onClick
}: {
  $gap?: number;
  $alignItems?: string;
  $justifyContent?: string;
  children: React.ReactNode;
  className?: string;
  customStyles?: CSSProperties;
  onClick?: () => void;
}) => {
  const style: CSSProperties = {
    gap: `${$gap}px`,
    alignItems: $alignItems,
    justifyContent: $justifyContent,
    ...customStyles,
  };

  return (
    <div onClick={onClick} className={`${getClassName('FlexRow')} ${className}`} style={style}>
      {children}
    </div>
  );
};

export const FlexColumn = ({
  $gap = 10,
  $alignItems = "flex-start",
  children,
  className = "",
  customStyles = {},
}: {
  $gap?: number;
  $alignItems?: string;
  children: React.ReactNode;
  className?: string;
  customStyles?: CSSProperties;
}) => {
  const style: CSSProperties = {
    gap: `${$gap}px`,
    alignItems: $alignItems,
    width: "100%",
    ...customStyles,
  };

  return (
    <div className={`${getClassName('FlexColumn')} ${className}`} style={style}>
      {children}
    </div>
  );
};

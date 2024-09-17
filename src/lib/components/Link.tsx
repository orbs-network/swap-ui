import React from "react";
import styles from '../styles/Link.module.css'; // Import the CSS module

export function Link({
  url,
  children,
  className = ''
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`${className} ${styles['lh-link']}`} // Combine custom and module class names
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

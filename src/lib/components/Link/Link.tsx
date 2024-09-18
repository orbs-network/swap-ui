import { getClassName } from "@utils";
import React from "react";
import "./style.css";

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
      className={`${className} ${getClassName('Link')}`} // Combine custom and module class names
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

import React from "react";

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.5l4.361 4.361a1 1 0 0 1-1.414 1.414L12 11.914l-4.361 4.361a1 1 0 0 1-1.414-1.414L10.586 10.5 6.225 6.139a1 1 0 0 1 0-1.328Z"
      clipRule="evenodd"
    />
  </svg>
);

export default XIcon;

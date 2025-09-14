import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.192 9.192a1 1 0 0 1-1.414 0L3.715 11.35a1 1 0 1 1 1.414-1.414l5.25 5.25 8.485-8.485a1 1 0 0 1 1.421-.008Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CheckIcon;

import React, { CSSProperties } from "react";

const CheckIcon = ({
  className,
  style,
  onClick,
}: {
  className: string;
  style: CSSProperties;
  onClick?: (e: any) => void;
}) => {
  return (
    <svg
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      fill="#36d399"
      viewBox="0 0 24 24"
      className={`cursor-pointer ${className}`}
      style={style}
      onClick={onClick}
      strokeWidth={0}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
      ></path>
    </svg>
  );
};

export default CheckIcon;

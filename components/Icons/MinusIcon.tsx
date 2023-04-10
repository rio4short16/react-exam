import React, { CSSProperties } from "react";

const MinusIcon = ({
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
      fill="#EF1C27"
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
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z"
      ></path>
    </svg>
  );
};

export default MinusIcon;

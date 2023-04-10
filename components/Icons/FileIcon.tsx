import React, { CSSProperties } from "react";

const FileIcon = ({
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
      fill="currentColor"
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
        d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z"
      ></path>
    </svg>
  );
};

export default FileIcon;

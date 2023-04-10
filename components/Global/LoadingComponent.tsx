import React, { CSSProperties } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const LoadingComponent = ({
  override,
  color,
  size,
}: {
  override: CSSProperties;
  color: string;
  size: number;
}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClimbingBoxLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={size}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="spinner"
      />
    </div>
  );
};

export default LoadingComponent;

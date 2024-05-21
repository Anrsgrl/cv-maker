import React from "react";
import { IButton } from "../../types/button";
import { tw } from "twind";

const Button: React.FC<IButton> = ({
  onClick,
  disabled,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={tw(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-sky-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-sky-300 transition-all hover:opacity-90 hover:scale-95 focus:opacity-90 focus:border-sky-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

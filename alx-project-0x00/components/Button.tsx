import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  // Now TypeScript sees size and shape as defined.
  const sizeClasses: Record<"small" | "medium" | "large", string> = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  const shapeClasses: Record<
    "rounded-sm" | "rounded-md" | "rounded-full",
    string
  > = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {title}
    </button>
  );
};
  

export default Button;

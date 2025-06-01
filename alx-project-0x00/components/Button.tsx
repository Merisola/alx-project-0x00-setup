import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeStyles = {
  small: "text-sm px-2 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  return (
    <button className={`bg-blue-500 text-white ${sizeStyles[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;

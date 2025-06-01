import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses: Record<ButtonProps["size"], string> = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };

  const shapeClasses: Record<ButtonProps["shape"], string> = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {title}
    </button>
  );
};

export default Button;

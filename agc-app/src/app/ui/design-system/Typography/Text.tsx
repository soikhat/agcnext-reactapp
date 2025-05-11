import { clsx } from "clsx";
import React from "react";

interface TextProps {
  size?: "sm" | "base" | "lg" | "xl";
  color?: "gray" | "black" | "white" | "primary" | "secondary";
  italic?: boolean;
  bold?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
  children: React.ReactNode;
}

export const Text = ({
  size = "base",
  color = "black",
  italic = false,
  bold = false,
  align = "left",
  className,
  children,
}: TextProps) => {
  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const colorMap = {
    gray: "text-gray-500",
    black: "text-gray-900",
    white: "text-white",
    primary: "text-primary",
    secondary: "text-secondary",
  };

  return (
    <p
      className={clsx(
        sizeMap[size],
        colorMap[color],
        italic && "italic",
        bold && "font-bold",
        align && `text-${align}`,
        className
      )}
    >
      {children}
    </p>
  );
};

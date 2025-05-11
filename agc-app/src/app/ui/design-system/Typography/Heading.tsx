import { clsx } from "clsx";
import React from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  weight?: "regular" | "medium" | "bold";
  className?: string;
  children: React.ReactNode;
}

const levelToTag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const levelToStyle = {
  1: "text-6xl sm:text-7xl font-bold",
  2: "text-5xl sm:text-6xl font-bold",
  3: "text-4xl sm:text-5xl font-semibold",
  4: "text-3xl sm:text-4xl font-semibold",
  5: "text-2xl sm:text-3xl font-medium",
  6: "text-xl sm:text-2xl font-medium",
};

export const Heading = ({
  level = 2,
  align = "left",
  weight = "regular",
  className,
  children,
}: HeadingProps) => {
  const Tag = levelToTag[level];
  const baseStyle = levelToStyle[level];

  return (
    <Tag
      className={clsx(
        baseStyle,
        align && `text-${align}`,
        weight === "medium" && "font-medium",
        weight === "bold" && "font-bold",
        className
      )}
    >
      {children}
    </Tag>
  );
};

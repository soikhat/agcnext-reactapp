import { ButtonProps } from "@nextui-org/react";

export const buttonVariants = {
  accent: "bg-primary hover:bg-primary-400 text-white rounded",
  secondary: "bg-primary-200 hover:bg-primary-300/50 text-primary rounded",
  outline:
    "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded",
  disabled:
    "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed",
  neutral: "text-gray-600 rounded",
};

export const icoButtonVariants = {
  accent: "bg-primary hover:bg-primary-400 text-white rounded-full",
  secondary: "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full",
  gray: "bg-gray-700 hover:bg-gray-600 text-white rounded-full",
};

export const buttonSizes = {
  small: "text-caption3 font-medium px-[14px] py-[12px]",
  medium: "text-caption2 font-medium max-w-52 px-[18px] py-[15px]",
  large: "text-caption1 font-medium px-[22px] py-[18px]",
  xl: "text-caption1 font-medium min-w-72 min-h-[146px] px-[22px] py-[18px]",
};

export const icoButtonSizes: Record<
  "small" | "medium" | "large" | "xl",
  { className: string; iconSize: number }
> = {
  small: {
    className: "flex items-center justify-center w-[40px] h-[40px]",
    iconSize: 18,
  },
  medium: {
    className: "flex items-center justify-center w-[50px] h-[50px]",
    iconSize: 20,
  },
  large: {
    className: "flex items-center justify-center w-[60px] h-[60px]",
    iconSize: 24,
  },
  xl: {
    className: "flex items-center justify-center w-[60px] h-[60px]",
    iconSize: 24,
  },
};

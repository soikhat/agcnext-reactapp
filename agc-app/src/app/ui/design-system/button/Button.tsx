'use client'
import { IconProps } from "@/types/iconProps";
import { clsx } from "clsx";
interface ButtonProps {
  size?: "small" | "medium" | "large"|"xl";
  variant?: "accent" | "secondary" | "disabled" | "ico" | "outline" | "neutral";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right" |"top"|"bottom";
  disabled?: boolean;
  isLoading?: boolean;
  children ?: React.ReactNode;
  className? :string;

  //onClick:()=>void
}
export  const Button = ({
  children,
  size = "medium",
  variant = "neutral",
  icon,
  iconPosition = "right",
  iconTheme = "accent",
  disabled,
  className,
  isLoading,
}: //onClick,
ButtonProps) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;
  switch (variant) {
    case "accent":
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "neutral":
      variantStyles =
        "text-gray-600 rounded";
      break;
    case "ico":
      if (iconTheme == "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme == "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme == "gray") {
        variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }
  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant == "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      } `;
      icoSize = 18;
      break;
    case "medium":
      sizeStyles = `text-caption2 font-medium max-w-52 ${
        variant == "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant == "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
    case "xl":
      sizeStyles = `text-caption1 font-medium min-w-72 min-h-[146px]  ${
        variant == "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }
  return (
    <>
      <button
        type="button"
        className={clsx(
          variantStyles,
          sizeStyles,
          icoSize,
          className,
          "animate"
        )}
        disabled={disabled}
      >
        {icon && variant == "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <span className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </span>
        )}
      </button>
    </>
  );
};
export default Button;

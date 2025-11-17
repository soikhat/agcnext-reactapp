"use client";
import { IconProps } from "@/types/iconProps";
import { clsx } from "clsx";
import {
  buttonVariants,
  icoButtonVariants,
  buttonSizes,
  icoButtonSizes,
} from "@/app/ui/design-system/Theme/ButtonStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "xl";
  variant?: "accent" | "secondary" | "disabled" | "ico" | "outline" | "neutral";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right" | "top" | "bottom";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({
  children,
  size = "medium",
  variant = "neutral",
  icon,
  iconPosition = "right",
  iconTheme = "accent",
  disabled,
  className,
  isLoading,
}: ButtonProps) => {
  const isIconButton = variant === "ico";

  const variantStyles = isIconButton
    ? icoButtonVariants[iconTheme ?? "accent"]
    : buttonVariants[variant] ?? "";

  const sizeStyles = isIconButton
    ? icoButtonSizes[size].className
    : buttonSizes[size];

  const iconSize = isIconButton
    ? icoButtonSizes[size].iconSize
    : icoButtonSizes[size].iconSize; // Utilisation de la même logique pour iconSize

  // Ajout de la gestion de l'état isLoading et disabled
  const isButtonDisabled = disabled || isLoading;

  return (
    <button
      type="button"
      data-variant={variant}
      data-size={size}
      disabled={isButtonDisabled}
      className={clsx(variantStyles, sizeStyles, className, "animate")}
    >
      {/* Affichage de l'icône dans le bouton */}
      {icon && isIconButton ? (
        <icon.icon size={iconSize} />
      ) : (
        <span className={clsx(icon && "flex items-center gap-1")}>
          {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
          {children}
          {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
        </span>
      )}
      {/* Affichage d'un loader ou spinner si isLoading est true */}
      {isLoading && !icon && (
        <span className="spinner-border animate-spin inline-block w-6 h-6 border-4 border-t-transparent rounded-full"></span>
      )}
    </button>
  );
};

export default Button;

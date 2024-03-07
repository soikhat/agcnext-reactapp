import { clsx } from "clsx";
interface TypoProps {
  variant?:
    | "display"
    | "headingXL"
    | "headingL"
    | "headingM"
    | "headingS"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular"|"medium"
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "headingM",
  component: Component = "div",
  theme ="black",
  weight= "regular",
  className,
  children,
}: TypoProps) => {
  let variantStyles: string = "", colorStyles: string ="";

  switch (variant) {
    case "display":
      variantStyles = "text-8xl";
      break;
    case "headingXL":
      variantStyles = "text-7xl";
      break;
    case "headingL":
      variantStyles = "text-6xl";
      break;
    case "headingM":
      variantStyles = "text-5xl";
      break;
    case "headingS":
      variantStyles = "text-4xl";
      break;
    case "lead":
      variantStyles = "text-2xl";
      break;
    case "body-lg":
      variantStyles = "text-lg";
      break;
    case "body-base":
      variantStyles = "text-base";
      break;
    case "body-sm":
      variantStyles = "text-sm";
      break;
    case "caption1":
      variantStyles = "text-caption1";
      break;
    case "caption2":
      variantStyles = "text-caption2";
      break;
    case "caption3":
      variantStyles = "text-caption3";
      break;
    case "caption4":
      variantStyles = "text-caption4";
      break;

  }
  switch (theme) {
    case "black":
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-500";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secodary";
      break;
  }
 

  return <Component className={clsx(variantStyles,colorStyles,className)}>{children}</Component>;
};

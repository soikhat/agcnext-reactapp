import { clsx, type ClassValue } from "clsx";
import Link, { LinkProps as NextLinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";

type TypographyVariant =
  | "display"
  | "headingXL"
  | "headingL"
  | "headingM"
  | "headingSection"
  | "headingS"
  | "lead"
  | "body-lg"
  | "body-base"
  | "body-sm"
  | "caption1"
  | "caption2";

type HtmlTypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "a";

type TypographyComponent = HtmlTypographyComponent | "link";

type TypographyTheme = "black" | "gray" | "white" | "primary" | "secondary";

type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

type TypographyAlign = "left" | "center" | "right";

// Mappage des variantes aux classes Tailwind
const variantStyles: Record<TypographyVariant, string> = {
  display: "text-7xl md:text-8xl font-bold",
  headingXL: "text-6xl md:text-7xl font-bold",
  headingL: "text-5xl md:text-6xl font-semibold",
  headingM: "text-4xl md:text-5xl font-semibold",
  headingSection:
    "text-3xl md:text-4xl font-semibold after:block after:bg-secondary after:h-1 after:w-20 after:mt-2",
  headingS: "text-2xl md:text-3xl font-medium",
  lead: "text-xl md:text-2xl",
  "body-lg": "text-lg",
  "body-base": "text-base",
  "body-sm": "text-sm",
  caption1: "text-xs",
  caption2: "text-xs opacity-80",
};

// Mappage des thèmes aux classes Tailwind
const themeStyles: Record<TypographyTheme, string> = {
  black: "text-gray-900",
  gray: "text-gray-500",
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
};

// Mappage des poids aux classes Tailwind
const weightStyles: Record<TypographyWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Mappage des composants HTML aux balises
const htmlComponentMap: Record<HtmlTypographyComponent, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  div: "div",
  a: "a",
};

interface TypographyBaseProps {
  variant?: TypographyVariant;
  theme?: TypographyTheme;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  italic?: boolean;
  className?: ClassValue;
  children: React.ReactNode;
}

// Props pour les composants HTML standards
type HtmlComponentProps<C extends HtmlTypographyComponent> =
  TypographyBaseProps & React.ComponentPropsWithoutRef<C>;

// Props pour le composant Link de Next.js
type LinkComponentProps = TypographyBaseProps &
  Omit<NextLinkProps, "className">;

// Union type pour toutes les props possibles
type AllTypographyProps =
  | (HtmlComponentProps<HtmlTypographyComponent> & {
      as?: HtmlTypographyComponent;
    })
  | (LinkComponentProps & { as: "link" });

export function Typography(props: AllTypographyProps): React.ReactElement {
  const {
    as: ComponentType = "div",
    variant = "body-base",
    theme = "black",
    weight = "regular",
    align = "left",
    italic = false,
    className,
    children,
    ...restProps
  } = props;

  // Styles de base
  const baseClasses = clsx(
    variantStyles[variant],
    themeStyles[theme],
    weightStyles[weight],
    italic && "italic",
    `text-${align}`,
    className
  );

  // Cas spécial pour le composant Link de Next.js
  if (ComponentType === "link") {
    const linkProps = props as LinkComponentProps & { as: "link" };
    const { href } = linkProps;
    const isExternal = typeof href === "string" && href.startsWith("http");

    if (isExternal) {
      // Pour les liens externes, utiliser un élément <a>
      return (
        <a
          href={href as string}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // Pour les liens internes, utiliser Next.js Link
    const {
      as: _,
      variant: __,
      theme: ___,
      weight: ____,
      align: _____,
      italic: ______,
      className: _______,
      children: ________,
      ...nextLinkProps
    } = linkProps;
    return (
      <Link className={baseClasses} {...nextLinkProps}>
        {children}
      </Link>
    );
  }

  // Cas standard pour les balises HTML
  const Component = htmlComponentMap[ComponentType as HtmlTypographyComponent];

  if (!Component) {
    throw new Error(`Invalid component type: ${ComponentType}`);
  }

  return (
    <Component className={baseClasses} {...restProps}>
      {children}
    </Component>
  );
}

// Export des types pour utilisation externe
export type {
  TypographyVariant,
  TypographyTheme,
  TypographyWeight,
  TypographyAlign,
  AllTypographyProps as TypographyProps,
};

export interface CTAButon {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
    ariaLabel?: string;
}
export interface CTAConfig {
    title: string;
    description ?: string;
    primaryButton ?: CTAButon;
    secondaryButton ?: CTAButon;
    phone?: string;
    email?: string;
    backgroundImage?: string;
    backgroundGradient?: string;
    backgraoundImage?: string;
    overlayColor?: string;
    textColor?: string;
}
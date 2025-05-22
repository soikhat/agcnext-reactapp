import { AppLinks } from "@/types/applinks-type";

export const footerApplicationLinks: AppLinks[] = [
  { label: "Accueil", href: "/", type: "internal" },
  { label: "Actualités", href: "/actualites", type: "internal" },
];

export const footerInfoLinks: AppLinks[] = [
  { label: "Mentions légales", href: "/mentions-legales", type: "internal" },
  {
    label: "Politique de confidentialité",
    href: "/confidentialite",
    type: "internal",
  },
];

export const externalLinks: AppLinks[] = [
  { label: "LinkedIn", href: "https://linkedin.com", type: "external" },
];

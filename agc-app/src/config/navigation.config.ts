import { RiUser6Fill } from "react-icons/ri";
import type { IconType } from "react-icons";
import { servicesPageConfig } from "./servicesPage.config";
import { agencyPageConfig } from "./agencyPage.config";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  subLinks?: { label: string; href: string }[];
}

export interface NavButton {
  label: string;
  href: string;
  variant: "accent" | "secondary" | "outline";
  icon?: IconType;
  iconOnly?: boolean;
  ariaLabel?: string;
}

export const navigationConfig = {
  logo: {
    src: "/agclogo.png",
    alt: "AGC Logo",
    width: 50,
    height: 50,
    title: "Assurances Générales des Comores",
    subtitle: "Fidèle, à vos côtés quoi qu'il arrive.",
  },

  mainLinks: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/pages/about" },
    {
      label: "Assurances",
      href: "/pages/services",
      subLinks: servicesPageConfig.categories.map((cat) => ({
        label: cat.name,
        href: `/pages/services/category/${cat.slug}`, // ✅ dynamique
      })),
    },
    { label: "Nos agences", 
      href: "/pages/agences",
      subLinks: agencyPageConfig.islands.flatMap((island) =>
        island.agencies.map((agence) => ({
          label: `${agence.name}`,
          href: `/pages/agences/${agence.id}`,
        }))
      ),
     },
    { label: "Conseils et actualités", href: "/pages/news" },
  ] as NavLink[],

  actionButtons: [
    {
      label: "Demander un devis",
      href: "/pages/contact",
      variant: "accent",
    },
    {
      label: "Espace client",
      href: "/login",
      variant: "secondary",
      icon: RiUser6Fill,
      iconOnly: true,
      ariaLabel: "Accéder à l'espace client",
    },
  ] as NavButton[],
} as const;

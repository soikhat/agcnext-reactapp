import { CTAConfig } from "@/types/cta-type";

export const ctaConfigs: Record<string, CTAConfig> = {
  /** ✅ Page Services */
  services: {
    title: "Protégez votre avenir dès aujourd’hui",
    description:
      "Nos conseillers sont disponibles pour vous accompagner dans le choix de la meilleure assurance.",
    primaryButton: { label: "Demander un devis", href: "/pages/contact" },
    secondaryButton: {
      label: "Découvrir nos produits",
      href: "/pages/services",
    },
    phone: "+269773123456",
    email: "contact@agc.com",
    backgroundType: "gradient",
    backgroundGradient: "bg-gradient-to-r from-primary-600 to-primary-800",
    textColor: "text-white",
  },

  /** ✅ Page Agences */
  agences: {
    title: "Rendez-vous dans l’agence la plus proche",
    description:
      "Nos équipes locales vous accueillent et vous conseillent pour tous vos besoins.",
    primaryButton: { label: "Trouver une agence", href: "/pages/agences" },
    secondaryButton: { label: "Nous contacter", href: "/pages/contact" },
    phone: "+269773987654",
    backgroundType: "image",
    backgroundImage: "/images/cta/agency-cta-bg.jpg",
    overlayColor: "bg-primary-900/80",
    textColor: "text-white",
  },

  /** ✅ Page À propos */
  about: {
    title: "Notre engagement envers les Comoriens",
    description:
      "Depuis plus de 20 ans, nous œuvrons pour protéger les familles et les entreprises locales.",
    primaryButton: {
      label: "Découvrir notre mission",
      href: "/pages/a-propos",
    },
    backgroundType: "image",
    backgroundImage: "/images/about/about-cta-bg.jpg",
    overlayColor: "bg-black/50",
    textColor: "text-white",
  },

  /** ✅ Page Blog */
  blog: {
    title: "Recevez nos conseils directement par email",
    description:
      "Inscrivez-vous à notre newsletter pour ne manquer aucune actualité ni astuce d’assurance.",
    primaryButton: { label: "S’abonner", href: "/pages/newsletter" },
    backgroundType: "gradient",
    backgroundGradient: "bg-gradient-to-r from-secondary-600 to-secondary-800",
  },
};

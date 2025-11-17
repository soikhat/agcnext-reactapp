export const homePageConfig = {
  hero: {
    title: "Votre sécurité, notre priorité",
    subtitle: "Protégez ce qui compte le plus",
    services: "Auto • Voyage • Maritime • Chantier",
    backgroundImage: "/assets/images/routeBackground1.jpeg",
    illustration: {
      src: "/assets/images/illustration.png",
      alt: "Illustration sécurité automobile",
      width: 511,
      height: 956,
    },
    cta: {
      primary: "Demandez un devis",
      secondary: "Nos services",
    },
  },

  assurances: {
    sectionTag: "Nos Solutions",
    title: "Découvrez nos assurances",
    description:
      "Des solutions adaptées à tous vos besoins, avec l'expertise de plus de 20 ans dans l'assurance.",
  },

  about: {
    sectionTag: "À propos de nous",
    title: "Plus de 30 ans à votre service,",
    titleHighlight: "L'expérience fait la différence",
    description: [
      "Depuis plus de deux décennies, AGC Assurances vous accompagne avec des solutions fiables, personnalisées et humaines. Chez nous, chaque client est bien plus qu'un contrat : c'est une relation de confiance.",
      "Parce que la vraie tranquillité d'esprit, c'est d'avoir un partenaire humain et engagé. Nous protégeons vos projets, vos déplacements et vos biens avec rigueur, proximité et engagement.",
    ],
    image: {
      src: "/assets/images/agc-locaux-retouche.png",
      alt: "Siège social AGC Assurances",
      width: 600,
      height: 700,
    },
    badge: {
      number: "30+",
      label: "ans",
    },
    cta: "En savoir plus",
  },

  testimonials: {
    sectionTag: "Témoignages",
    title: "Parce qu'aux",
    titleHighlight: "AGC le client a toujours le dernier mot",
    titleSuffix: "... C'est vous qui en parlez le mieux.",
    description:
      "Découvrez ce que nos clients disent de leur expérience avec AGC Assurances.",
  },

  actualites: {
    sectionTag: "Actualités",
    title: "Restez informés avec nos conseils et actualités",
    description:
      "Découvrez nos derniers articles, conseils pratiques et actualités du secteur de l'assurance.",
  },

  contact: {
    info: {
      phone: "+269 773 12 34",
      email: "contact@agc-assurances.km",
      address: "Mini zone industrielle Mavouna, Moroni, Comores",
    },
  },
} as const;

export type HomePageConfig = typeof homePageConfig;

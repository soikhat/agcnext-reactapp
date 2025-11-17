export const aboutPageConfig = {
  hero: {
    title: "À propos d'AGC Assurances",
    subtitle: "Plus de 30 ans d'expérience à votre service",
    description:
      "Découvrez l'histoire, les valeurs et l'engagement qui font d'AGC Assurances votre partenaire de confiance aux Comores.",
    backgroundImage: "/assets/images/about-hero-bg.jpg",
  },

  story: {
    sectionTag: "Notre Histoire",
    title: "Une aventure commencée il y a plus de 30 ans",
    timeline: [
      {
        year: "1992",
        title: "Création d'AGC",
        description:
          "Fondation de l'entreprise avec la vision de devenir le leader de l'assurance aux Comores.",
        icon: "foundation",
      },
      {
        year: "2000",
        title: "Expansion régionale",
        description:
          "Ouverture de nos premières agences dans les îles de Anjouan et Mohéli.",
        icon: "expansion",
      },
      {
        year: "2010",
        title: "Innovation digitale",
        description:
          "Lancement de nos premiers services en ligne pour faciliter l'accès à nos assurances.",
        icon: "digital",
      },
      {
        year: "2020",
        title: "Leadership confirmé",
        description:
          "AGC devient le premier assureur des Comores avec plus de 50 000 clients satisfaits.",
        icon: "leadership",
      },
      {
        year: "Aujourd'hui",
        title: "Un avenir prometteur",
        description:
          "Nous continuons d'innover pour mieux vous servir et protéger ce qui compte pour vous.",
        icon: "future",
      },
    ],
  },

  mission: {
    sectionTag: "Notre Mission",
    title: "Protéger votre avenir, aujourd'hui",
    description:
      "Notre mission est de fournir des solutions d'assurance fiables, accessibles et adaptées aux réalités des Comoriens.",
    values: [
      {
        icon: "trust",
        title: "Confiance",
        description:
          "Nous construisons des relations durables basées sur la transparence et l'intégrité.",
      },
      {
        icon: "excellence",
        title: "Excellence",
        description:
          "Nous visons l'excellence dans chaque interaction avec nos clients et partenaires.",
      },
      {
        icon: "proximity",
        title: "Proximité",
        description:
          "Nous sommes présents à vos côtés, avec des agences dans tout l'archipel.",
      },
      {
        icon: "innovation",
        title: "Innovation",
        description:
          "Nous adaptons constamment nos services aux évolutions de la société.",
      },
    ],
  },

  stats: {
    title: "AGC en chiffres",
    items: [
      {
        number: "30+",
        label: "Années d'expérience",
        icon: "calendar",
      },
      {
        number: "50K+",
        label: "Clients satisfaits",
        icon: "users",
      },
      {
        number: "15+",
        label: "Agences dans l'archipel",
        icon: "location",
      },
      {
        number: "98%",
        label: "Taux de satisfaction",
        icon: "star",
      },
      {
        number: "24/7",
        label: "Service client disponible",
        icon: "support",
      },
      {
        number: "100+",
        label: "Professionnels qualifiés",
        icon: "team",
      },
    ],
  },

  team: {
    sectionTag: "Notre Équipe",
    title: "Des professionnels dévoués à votre service",
    description:
      "Rencontrez les personnes qui travaillent chaque jour pour vous offrir les meilleures solutions d'assurance.",
    members: [
      {
        name: "Mohamed Ali",
        role: "Directeur Général",
        image: "/assets/images/team/ceo.jpg",
        bio: "Plus de 25 ans d'expérience dans le secteur des assurances.",
      },
      {
        name: "Fatima Said",
        role: "Directrice Commerciale",
        image: "/assets/images/team/commercial-director.jpg",
        bio: "Experte en développement commercial et satisfaction client.",
      },
      {
        name: "Hassan Ibrahim",
        role: "Directeur Technique",
        image: "/assets/images/team/technical-director.jpg",
        bio: "Spécialiste en gestion des risques et innovation produit.",
      },
      {
        name: "Amina Ahmed",
        role: "Responsable Sinistres",
        image: "/assets/images/team/claims-manager.jpg",
        bio: "Garantit un traitement rapide et équitable de vos sinistres.",
      },
    ],
  },

  commitment: {
    sectionTag: "Nos Engagements",
    title: "Ce qui nous distingue",
    items: [
      {
        title: "Rapidité de traitement",
        description:
          "Vos demandes et sinistres sont traités dans les plus brefs délais.",
        icon: "speed",
      },
      {
        title: "Transparence totale",
        description:
          "Des contrats clairs, sans petits caractères cachés ni mauvaises surprises.",
        icon: "transparency",
      },
      {
        title: "Accompagnement personnalisé",
        description:
          "Un conseiller dédié qui comprend vos besoins spécifiques.",
        icon: "personalized",
      },
      {
        title: "Présence locale",
        description:
          "Des agences proches de vous, dans toutes les îles de l'archipel.",
        icon: "local",
      },
      {
        title: "Solutions adaptées",
        description:
          "Des produits conçus pour les réalités économiques et culturelles comoriennes.",
        icon: "adapted",
      },
      {
        title: "Engagement communautaire",
        description:
          "Nous soutenons activement le développement social et économique des Comores.",
        icon: "community",
      },
    ],
  },

  partners: {
    sectionTag: "Nos Partenaires",
    title: "Ils nous font confiance",
    description:
      "Nous collaborons avec les meilleures institutions pour vous garantir une protection optimale.",
    logos: [
      {
        name: "Partenaire 1",
        logo: "/assets/images/partners/partner1.png",
      },
      {
        name: "Partenaire 2",
        logo: "/assets/images/partners/partner2.png",
      },
      {
        name: "Partenaire 3",
        logo: "/assets/images/partners/partner3.png",
      },
      {
        name: "Partenaire 4",
        logo: "/assets/images/partners/partner4.png",
      },
    ],
  },

  cta: {
    title: "Rejoignez des milliers de Comoriens qui nous font confiance",
    description:
      "Découvrez comment AGC Assurances peut protéger ce qui compte le plus pour vous.",
    primaryButton: {
      label: "Demander un devis",
      href: "/pages/contact",
    },
    secondaryButton: {
      label: "Nos solutions",
      href: "/pages/services",
    },
  },
} as const;

export type AboutPageConfig = typeof aboutPageConfig;

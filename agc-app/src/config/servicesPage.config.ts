export const servicesPageConfig = {
  hero: {
    title: "Nos Solutions d'Assurance",
    subtitle: "Des protections adaptées à chaque étape de votre vie",
    description:
      "Découvrez notre gamme complète d'assurances conçues pour répondre aux besoins spécifiques des Comoriens.",
    backgroundImage: "/assets/images/HeroservicePage-bg.png",
  },

  categories: [
    {
      id: "auto",
      slug: "auto",
      name: "Automobile",
      icon: "🚗",
      description:
        "Protégez votre véhicule et vos proches sur la route avec nos formules complètes d'assurance auto adaptées à tous les profils de conducteurs.",
      advantages: [
        {
          icon: "🛡️",
          title: "Assistance 24h/7j",
          description:
            "Une équipe disponible à tout moment pour vous accompagner en cas de panne ou d'accident",
        },
        {
          icon: "💰",
          title: "Prix compétitifs",
          description:
            "Des tarifs adaptés à votre profil et votre budget avec des réductions pour bons conducteurs",
        },
        {
          icon: "⚡",
          title: "Souscription rapide",
          description:
            "Obtenez votre contrat en quelques clics et recevez vos documents immédiatement",
        },
        {
          icon: "🔧",
          title: "Garage agrée",
          description:
            "Accès à notre réseau de garages partenaires pour vos réparations",
        },
        {
          icon: "🚙",
          title: "Véhicule de remplacement",
          description:
            "Un véhicule de prêt pendant la durée des réparations",
        },
        {
          icon: "📱",
          title: "Gestion digitale",
          description:
            "Gérez vos contrats et déclarez vos sinistres depuis votre mobile",
        },
      ],
      faq: [
        {
          question: "Quels documents dois-je fournir pour souscrire ?",
          answer:
            "Pour souscrire une assurance auto, vous aurez besoin de votre permis de conduire, de la carte grise du véhicule, d'un relevé d'information de votre précédent assureur (si vous en aviez un) et d'un RIB pour le prélèvement des cotisations.",
        },
        {
          question: "Puis-je assurer plusieurs véhicules ?",
          answer:
            "Oui, nous proposons des offres multi-véhicules avantageuses. Vous pouvez bénéficier de réductions intéressantes en assurant plusieurs véhicules au sein de votre foyer.",
        },
        {
          question: "Comment déclarer un sinistre ?",
          answer:
            "Vous pouvez déclarer un sinistre 24h/24 via notre application mobile, notre site web, par téléphone ou en agence. Un conseiller vous accompagne dans toutes les démarches.",
        },
        {
          question: "L'assurance couvre-t-elle les accessoires du véhicule ?",
          answer:
            "Les accessoires montés en usine sont généralement couverts. Pour les équipements ajoutés après achat (sono, GPS, etc.), il faut les déclarer pour qu'ils soient couverts moyennant une surprime.",
        },
        {
          question: "Que se passe-t-il en cas de vol de mon véhicule ?",
          answer:
            "Si vous avez souscrit la garantie vol, vous serez indemnisé selon la valeur de votre véhicule. Vous devez déposer plainte auprès des autorités dans les 24h et nous transmettre le récépissé.",
        },
      ],
    },
    {
      id: "habitation",
      slug: "habitation",
      name: "Habitation",
      icon: "🏠",
      description:
        "Sécurisez votre logement et vos biens avec une assurance habitation complète qui s'adapte à votre situation, que vous soyez propriétaire ou locataire.",
      advantages: [
        {
          icon: "🔐",
          title: "Protection complète",
          description:
            "Couverture étendue pour votre logement, vos biens et votre responsabilité civile",
        },
        {
          icon: "💧",
          title: "Dégâts des eaux",
          description:
            "Prise en charge rapide des dommages causés par les fuites et inondations",
        },
        {
          icon: "🔥",
          title: "Incendie et catastrophes",
          description:
            "Protection contre les incendies, explosions et catastrophes naturelles",
        },
        {
          icon: "🚨",
          title: "Vol et vandalisme",
          description:
            "Indemnisation en cas de cambriolage ou de dégradations malveillantes",
        },
        {
          icon: "⚡",
          title: "Dommages électriques",
          description:
            "Couverture des appareils endommagés par des surtensions électriques",
        },
        {
          icon: "🌿",
          title: "Jardin et dépendances",
          description:
            "Protection de vos espaces extérieurs et bâtiments annexes",
        },
      ],
      faq: [
        {
          question: "Quelle est la différence entre PNO et MRH ?",
          answer:
            "L'assurance PNO (Propriétaire Non Occupant) couvre uniquement le bâtiment pour les propriétaires qui ne vivent pas dans le logement. L'assurance MRH (Multirisque Habitation) couvre à la fois le bâtiment, les biens et la responsabilité civile pour les occupants.",
        },
        {
          question: "Suis-je couvert en cas de catastrophe naturelle ?",
          answer:
            "Oui, la garantie catastrophes naturelles est obligatoire dans tous les contrats d'assurance habitation. Elle couvre les dommages causés par des événements climatiques reconnus par arrêté ministériel.",
        },
        {
          question: "Mes objets de valeur sont-ils couverts ?",
          answer:
            "Les objets de valeur (bijoux, œuvres d'art, etc.) sont couverts jusqu'à un certain plafond dans le contrat de base. Pour une meilleure protection, vous pouvez souscrire une extension de garantie avec estimation.",
        },
        {
          question: "Que faire en cas de sinistre ?",
          answer:
            "Contactez-nous dans les 5 jours ouvrés (2 jours pour un vol). Prenez des photos des dégâts, conservez les objets endommagés et rassemblez les factures. Un expert pourra être mandaté pour évaluer les dommages.",
        },
        {
          question: "La colocation est-elle couverte ?",
          answer:
            "Oui, nous proposons des contrats adaptés à la colocation. Chaque colocataire doit avoir sa propre assurance responsabilité civile, et un contrat multirisque peut couvrir les parties communes.",
        },
      ],
    },
    {
      id: "sante",
      slug: "sante",
      name: "Santé",
      icon: "🏥",
      description:
        "Bénéficiez d'une couverture santé optimale avec des remboursements rapides et un large réseau de professionnels partenaires pour toute la famille.",
      advantages: [
        {
          icon: "💊",
          title: "Remboursements rapides",
          description:
            "Vos frais médicaux remboursés sous 48h via le tiers payant",
        },
        {
          icon: "👨‍⚕️",
          title: "Réseau de soins",
          description:
            "Accédez à notre réseau de 15 000 professionnels de santé partenaires",
        },
        {
          icon: "🦷",
          title: "Optique et dentaire",
          description:
            "Remboursements renforcés pour vos lunettes, lentilles et soins dentaires",
        },
        {
          icon: "🌍",
          title: "Assistance mondiale",
          description:
            "Couverture de vos frais médicaux lors de vos déplacements à l'étranger",
        },
        {
          icon: "👶",
          title: "Formules famille",
          description:
            "Tarifs avantageux pour couvrir tous les membres de votre foyer",
        },
        {
          icon: "🧘",
          title: "Médecines douces",
          description:
            "Prise en charge de l'ostéopathie, acupuncture et autres médecines alternatives",
        },
      ],
      faq: [
        {
          question: "Comment fonctionne le tiers payant ?",
          answer:
            "Avec le tiers payant, vous n'avancez pas les frais chez les professionnels de santé partenaires. La Sécurité sociale et votre mutuelle règlent directement les dépenses.",
        },
        {
          question: "Puis-je changer de mutuelle à tout moment ?",
          answer:
            "Depuis 2021, vous pouvez résilier votre mutuelle à tout moment après la première année de contrat, sans frais ni pénalités. Le préavis est d'un mois.",
        },
        {
          question: "Les dépassements d'honoraires sont-ils couverts ?",
          answer:
            "Selon votre formule, les dépassements d'honoraires peuvent être pris en charge partiellement ou totalement. Les formules premium offrent une meilleure couverture.",
        },
        {
          question:
            "Combien de temps faut-il attendre avant d'être remboursé ?",
          answer:
            "Les remboursements sont effectués sous 48h après réception du décompte de la Sécurité sociale. Avec notre application, vous pouvez suivre vos remboursements en temps réel.",
        },
        {
          question: "Y a-t-il des délais de carence ?",
          answer:
            "Pour la plupart des soins courants, il n'y a pas de délai de carence. Certaines garanties spécifiques (hospitalisation, maternité) peuvent avoir un délai de 3 à 12 mois.",
        },
      ],
    },
    {
      id: "voyage",
      slug: "voyage",
      name: "Voyage",
      icon: "✈️",
      description:
        "Partez l'esprit tranquille avec notre assurance voyage qui vous protège contre les imprévus : annulation, rapatriement, frais médicaux à l'étranger.",
      advantages: [
        {
          icon: "❌",
          title: "Annulation voyage",
          description:
            "Remboursement de vos frais en cas d'annulation pour maladie, accident ou événement imprévu",
        },
        {
          icon: "🚑",
          title: "Rapatriement médical",
          description:
            "Prise en charge complète de votre rapatriement en cas d'urgence médicale",
        },
        {
          icon: "💼",
          title: "Bagages perdus",
          description:
            "Indemnisation rapide en cas de perte, vol ou détérioration de vos bagages",
        },
        {
          icon: "⏰",
          title: "Retard et interruption",
          description:
            "Compensation en cas de retard de transport ou d'interruption de séjour",
        },
        {
          icon: "⚖️",
          title: "Assistance juridique",
          description:
            "Aide juridique et avance de caution en cas de litige à l'étranger",
        },
        {
          icon: "❄️",
          title: "Sports et activités",
          description:
            "Couverture étendue pour vos activités sportives et de loisirs",
        },
      ],
      faq: [
        {
          question: "Jusqu'à quand puis-je souscrire une assurance voyage ?",
          answer:
            "Vous pouvez souscrire une assurance voyage jusqu'à la veille de votre départ. Cependant, pour bénéficier de la garantie annulation, il est recommandé de souscrire dans les 24h suivant votre réservation.",
        },
        {
          question: "L'assurance couvre-t-elle toutes les destinations ?",
          answer:
            "Notre assurance couvre la quasi-totalité des destinations mondiales. Certains pays peuvent être exclus temporairement pour des raisons de sécurité (zones de guerre, épidémies).",
        },
        {
          question: "Les frais médicaux à l'étranger sont-ils bien couverts ?",
          answer:
            "Oui, nous prenons en charge les frais médicaux à l'étranger selon les plafonds de votre formule, qui peuvent aller jusqu'à 1 million d'euros pour les destinations hors Europe.",
        },
        {
          question: "Que faire en cas d'urgence pendant mon voyage ?",
          answer:
            "Contactez immédiatement notre plateforme d'assistance disponible 24h/24 et 7j/7. Le numéro figure sur votre attestation d'assurance. Conservez tous les justificatifs médicaux et factures.",
        },
        {
          question: "Puis-je assurer plusieurs voyages dans l'année ?",
          answer:
            "Oui, nous proposons une formule annuelle multi-voyages qui couvre tous vos déplacements dans l'année, idéale si vous voyagez régulièrement.",
        },
      ],
    },
    {
      id: "vie",
      slug: "vie",
      name: "Vie",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Protégez votre famille et préparez l'avenir sereinement avec nos solutions d'assurance vie adaptées à vos objectifs d'épargne et de transmission.",
      advantages: [
        {
          icon: "💎",
          title: "Épargne sécurisée",
          description:
            "Constituez un capital avec des supports d'investissement diversifiés et sécurisés",
        },
        {
          icon: "📈",
          title: "Rendements attractifs",
          description:
            "Bénéficiez de rendements compétitifs grâce à notre gestion experte",
        },
        {
          icon: "🏛️",
          title: "Avantages fiscaux",
          description:
            "Profitez d'une fiscalité avantageuse sur les gains et la transmission",
        },
        {
          icon: "🔄",
          title: "Flexibilité totale",
          description:
            "Versements libres, rachats partiels ou totaux possibles à tout moment",
        },
        {
          icon: "👨‍👩‍👧",
          title: "Protection famille",
          description:
            "Garantissez un capital à vos proches en cas de décès",
        },
        {
          icon: "🎓",
          title: "Projets futurs",
          description:
            "Financez les études de vos enfants ou préparez votre retraite",
        },
      ],
      faq: [
        {
          question: "Quelle est la différence entre fonds euros et unités de compte ?",
          answer:
            "Le fonds euros garantit le capital investi avec un rendement annuel. Les unités de compte sont des supports plus dynamiques (actions, obligations) sans garantie en capital mais avec un potentiel de rendement plus élevé.",
        },
        {
          question: "Puis-je retirer mon argent quand je veux ?",
          answer:
            "Oui, l'assurance vie est un placement liquide. Vous pouvez effectuer des rachats partiels ou totaux à tout moment. Attention, les retraits avant 8 ans bénéficient d'une fiscalité moins avantageuse.",
        },
        {
          question: "Quels sont les avantages fiscaux ?",
          answer:
            "Après 8 ans, vous bénéficiez d'un abattement annuel sur les gains (4 600€ pour une personne seule, 9 200€ pour un couple). En cas de décès, les capitaux transmis bénéficient d'une exonération jusqu'à 152 500€ par bénéficiaire.",
        },
        {
          question: "Comment désigner mes bénéficiaires ?",
          answer:
            "Vous pouvez désigner librement vos bénéficiaires lors de la souscription ou les modifier à tout moment. Vous pouvez désigner une ou plusieurs personnes, avec répartition des capitaux selon vos souhaits.",
        },
        {
          question: "Y a-t-il un montant minimum de versement ?",
          answer:
            "Le versement initial minimum est généralement de 1 000€. Ensuite, vous pouvez effectuer des versements programmés à partir de 50€/mois ou des versements libres selon vos possibilités.",
        },
      ],
    },
    {
      id: "entreprise",
      slug: "entreprise",
      name: "Entreprise",
      icon: "🏢",
      description:
        "Sécurisez votre activité professionnelle avec nos solutions d'assurance sur-mesure : responsabilité civile, locaux, matériel et protection juridique.",
      advantages: [
        {
          icon: "⚖️",
          title: "RC Professionnelle",
          description:
            "Protection contre les dommages causés à des tiers dans le cadre de votre activité",
        },
        {
          icon: "🏭",
          title: "Locaux et matériel",
          description:
            "Couverture complète de vos biens professionnels contre tous les risques",
        },
        {
          icon: "💻",
          title: "Cyber-risques",
          description:
            "Protection contre les attaques informatiques et la perte de données",
        },
        {
          icon: "🚗",
          title: "Flotte automobile",
          description:
            "Gestion simplifiée de l'assurance de vos véhicules professionnels",
        },
        {
          icon: "⚡",
          title: "Perte d'exploitation",
          description:
            "Indemnisation en cas d'interruption d'activité suite à un sinistre",
        },
        {
          icon: "👔",
          title: "Protection dirigeants",
          description:
            "Couverture de la responsabilité civile des dirigeants et mandataires",
        },
      ],
      faq: [
        {
          question:
            "L'assurance RC Pro est-elle obligatoire pour mon activité ?",
          answer:
            "La RC Pro est obligatoire pour certaines professions réglementées (santé, droit, bâtiment, etc.). Pour les autres, elle est fortement recommandée pour vous protéger contre les dommages causés à des tiers.",
        },
        {
          question: "Comment évaluer mes besoins en assurance entreprise ?",
          answer:
            "Nos conseillers analysent votre activité, vos locaux, votre matériel, votre chiffre d'affaires et vos risques spécifiques pour vous proposer une couverture adaptée et optimale.",
        },
        {
          question: "Puis-je modifier mon contrat en cours d'année ?",
          answer:
            "Oui, vous pouvez ajuster vos garanties à tout moment en cas d'évolution de votre activité : changement de local, achat de matériel, embauche, nouvelle activité, etc.",
        },
        {
          question: "Comment sont calculées les cotisations ?",
          answer:
            "Les cotisations dépendent de plusieurs facteurs : secteur d'activité, chiffre d'affaires, nombre de salariés, surface des locaux, valeur du matériel et niveau de garanties choisi.",
        },
        {
          question: "La protection juridique est-elle incluse ?",
          answer:
            "La protection juridique peut être incluse selon votre formule. Elle vous accompagne en cas de litige avec des clients, fournisseurs, salariés ou l'administration, avec prise en charge des frais d'avocat.",
        },
      ],
    },
  ],
  products: [
    // AUTO
    {
      id: "auto-tiers",
      category: "auto",
      name: "Auto Responsabilité Civile",
      slug: "auto-responsabilite-civile",
      shortDescription: "La protection minimale obligatoire pour circuler",
      description:
        "L'assurance au tiers est la formule de base obligatoire qui couvre les dommages que vous pourriez causer à autrui.",
      price: "À partir de 15 000 KMF/mois",
      coverImage: "/assets/images/products/auto-tiers.jpg",
      features: [
        "Responsabilité civile obligatoire",
        "Dommages corporels aux tiers",
        "Dommages matériels aux tiers",
        "Protection juridique incluse",
        "Assistance 24/7",
      ],
      benefits: [
        "Conforme à la loi",
        "Prix accessible",
        "Souscription rapide",
        "Assistance dépannage",
      ],
      notCovered: [
        "Dommages à votre propre véhicule",
        "Vol de votre véhicule",
        "Incendie de votre véhicule",
      ],
      popular: false,
    },
    {
      id: "auto-tous-risques",
      category: "auto",
      name: "Auto Tous Risques",
      slug: "auto-tous-risques",
      shortDescription: "La protection la plus complète pour votre véhicule",
      description:
        "La formule tous risques offre la protection maximale pour votre véhicule, couvrant tous les dommages même en cas de responsabilité.",
      price: "À partir de 45 000 KMF/mois",
      coverImage: "/assets/images/products/auto-tous-risques.jpg",
      features: [
        "Tous les avantages de l'assurance au tiers",
        "Dommages à votre véhicule (collision, accident)",
        "Vol et tentative de vol",
        "Incendie et événements naturels",
        "Bris de glace",
        "Assistance 0 km",
        "Véhicule de remplacement",
      ],
      benefits: [
        "Protection maximale",
        "Indemnisation garantie",
        "Tranquillité totale",
        "Service premium",
      ],
      notCovered: ["Usure normale du véhicule", "Dommages intentionnels"],
      popular: true,
      badge: "Recommandé",
    },

    // VOYAGE
    {
      id: "voyage-standard",
      category: "voyage",
      name: "Voyage Standard",
      slug: "voyage-standard",
      shortDescription: "L'essentiel pour voyager sereinement",
      description:
        "Une couverture complète pour vos déplacements à l'étranger : santé, rapatriement, bagages.",
      price: "À partir de 25 000 KMF/voyage",
      coverImage: "/assets/images/products/voyage-standard.jpg",
      features: [
        "Assistance médicale 24/7",
        "Rapatriement médical",
        "Couverture hospitalisation à l'étranger",
        "Perte et vol de bagages",
        "Retard de vol",
        "Responsabilité civile à l'étranger",
      ],
      benefits: [
        "Couverture mondiale",
        "Assistance multilingue",
        "Application mobile",
        "Téléconsultation médicale",
      ],
      notCovered: ["Sports extrêmes", "Conditions préexistantes non déclarées"],
      popular: true,
    },
    {
      id: "voyage-premium",
      category: "voyage",
      name: "Voyage Premium",
      slug: "voyage-premium",
      shortDescription: "La protection ultime pour vos voyages",
      description:
        "Tous les avantages du voyage standard + annulation, sports, et extensions familiales.",
      price: "À partir de 50 000 KMF/voyage",
      coverImage: "/assets/images/products/voyage-premium.jpg",
      features: [
        "Tout le Voyage Standard inclus",
        "Annulation de voyage",
        "Interruption de séjour",
        "Sports et loisirs couverts",
        "Extension famille",
        "Franchise bagages augmentée",
        "Assistance juridique internationale",
      ],
      benefits: [
        "Couverture maximale",
        "Remboursement annulation",
        "Sports inclus",
        "Conciergerie voyage",
      ],
      notCovered: ["Voyages dans zones de guerre"],
      popular: false,
      badge: "Premium",
    },

    // MARITIME
    {
      id: "maritime-plaisance",
      category: "maritime",
      name: "Bateau de Plaisance",
      slug: "bateau-plaisance",
      shortDescription: "Pour vos sorties en mer en toute sécurité",
      description:
        "Protection complète pour votre embarcation de plaisance et ses occupants.",
      price: "À partir de 30 000 KMF/mois",
      coverImage: "/assets/images/products/maritime-plaisance.jpg",
      features: [
        "Responsabilité civile maritime",
        "Dommages à l'embarcation",
        "Vol et vandalisme",
        "Assistance en mer 24/7",
        "Remorquage",
        "Protection du matériel nautique",
      ],
      benefits: [
        "Assistance rapide",
        "Couverture zone Comores",
        "Extension internationale possible",
        "Protection équipage",
      ],
      notCovered: ["Usure normale", "Dommages intentionnels"],
      popular: false,
    },
    {
      id: "maritime-commercial",
      category: "maritime",
      name: "Transport Maritime Commercial",
      slug: "transport-maritime-commercial",
      shortDescription: "Solutions pour professionnels du maritime",
      description:
        "Assurance complète pour les activités de transport maritime commercial et fret.",
      price: "Sur devis",
      coverImage: "/assets/images/products/maritime-commercial.jpg",
      features: [
        "Transport de marchandises",
        "Corps de navire",
        "Responsabilité civile professionnelle",
        "Protection de l'équipage",
        "Assistance internationale",
        "Couverture conteneurs",
      ],
      benefits: [
        "Devis personnalisé",
        "Couverture sur-mesure",
        "Support dédié",
        "Gestion sinistres prioritaire",
      ],
      notCovered: ["Guerre et terrorisme (en option)"],
      popular: false,
    },

    // HABITATION
    {
      id: "habitation-locataire",
      category: "habitation",
      name: "Assurance Locataire",
      slug: "assurance-locataire",
      shortDescription: "Protégez votre logement locatif",
      description:
        "La protection essentielle pour les locataires : responsabilité civile et biens mobiliers.",
      price: "À partir de 8 000 KMF/mois",
      coverImage: "/assets/images/products/habitation-locataire.jpg",
      features: [
        "Responsabilité civile locative",
        "Dommages aux biens mobiliers",
        "Incendie et explosion",
        "Dégâts des eaux",
        "Vol et vandalisme",
        "Bris de glace",
      ],
      benefits: [
        "Prix accessible",
        "Conforme exigences bailleur",
        "Attestation immédiate",
        "Assistance 24/7",
      ],
      notCovered: ["Structure du bâtiment (propriétaire)"],
      popular: true,
    },
    {
      id: "habitation-proprietaire",
      category: "habitation",
      name: "Assurance Propriétaire",
      slug: "assurance-proprietaire",
      shortDescription: "Protection complète pour votre bien immobilier",
      description:
        "Couverture optimale pour votre résidence : structure, contenu, et responsabilité.",
      price: "À partir de 20 000 KMF/mois",
      coverImage: "/assets/images/products/habitation-proprietaire.jpg",
      features: [
        "Tous les avantages Locataire",
        "Structure du bâtiment",
        "Responsabilité civile propriétaire",
        "Protection jardin et dépendances",
        "Piscine (si applicable)",
        "Catastrophes naturelles",
        "Recours des voisins et tiers",
      ],
      benefits: [
        "Protection patrimoniale",
        "Valeur à neuf possible",
        "Extensions disponibles",
        "Expertise rapide",
      ],
      notCovered: ["Usure normale"],
      popular: false,
    },

    // SANTÉ
    {
      id: "sante-individuelle",
      category: "sante",
      name: "Santé Individuelle",
      slug: "sante-individuelle",
      shortDescription: "Votre santé, notre priorité",
      description:
        "Couverture santé complète pour vous et votre famille : consultations, hospitalisation, pharmacie.",
      price: "À partir de 12 000 KMF/mois",
      coverImage: "/assets/images/products/sante-individuelle.jpg",
      features: [
        "Consultations médicales",
        "Hospitalisation et chirurgie",
        "Pharmacie et médicaments",
        "Analyses et examens",
        "Maternité",
        "Soins dentaires de base",
        "Lunettes (forfait annuel)",
      ],
      benefits: [
        "Tiers payant",
        "Réseau de soins étendu",
        "Remboursement rapide",
        "Application mobile",
      ],
      notCovered: ["Médecine esthétique", "Cures thermales"],
      popular: true,
      badge: "Essentiel",
    },

    // ENTREPRISE
    {
      id: "entreprise-multirisque",
      category: "entreprise",
      name: "Multirisque Professionnelle",
      slug: "multirisque-professionnelle",
      shortDescription: "Protection globale pour votre activité",
      description:
        "Solution complète pour protéger votre entreprise, vos locaux, et votre activité.",
      price: "Sur devis personnalisé",
      coverImage: "/assets/images/products/entreprise-multirisque.jpg",
      features: [
        "Locaux et contenus professionnels",
        "Responsabilité civile exploitation",
        "Perte d'exploitation",
        "Matériel informatique",
        "Vol et vandalisme",
        "Bris de machine",
        "Protection juridique",
      ],
      benefits: [
        "Solution sur-mesure",
        "Conseiller dédié",
        "Gestion simplifiée",
        "Extensions possibles",
      ],
      notCovered: [],
      popular: false,
    },
  ],

  cta: {
    title: "Besoin d'aide pour choisir ?",
    description:
      "Nos conseillers sont là pour vous guider vers la solution la plus adaptée à vos besoins.",
    primaryButton: {
      label: "Demander un devis gratuit",
      href: "/pages/contact",
    },
    secondaryButton: {
      label: "Comparer les offres",
      href: "/pages/services/comparateur",
    },
    phone: "+269 773 12 34",
    email: "devis@agc-assurances.km",
  },
  advantages: [
    {
      icon: "Handshake",
      title: "Un accompagnement humain et local",
      description:
        "Nos équipes vous accompagnent avec proximité et réactivité, partout où vous êtes.",
    },
    {
      icon: "Lightning",
      title: "Une réactivité à toute épreuve",
      description:
        "Nous répondons rapidement à vos besoins pour vous offrir un service fluide et efficace.",
    },
    {
      icon: "Briefcase",
      title: "20 ans d’expérience et de confiance",
      description:
        "Notre savoir-faire est votre meilleure garantie. Plus de deux décennies à vos côtés.",
    },
  ],
  faq: [
    {
      question: "Comment souscrire à une assurance ?",
      answer:
        "Vous pouvez souscrire en ligne via notre site web, par téléphone au +269 773 12 34, ou en vous rendant dans l'une de nos 15 agences à travers l'archipel.",
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer:
        "Les documents requis varient selon le type d'assurance. Généralement : pièce d'identité, justificatif de domicile, et documents spécifiques (carte grise pour auto, bail pour habitation, etc.).",
    },
    {
      question: "Quels sont les délais de carence ?",
      answer:
        "La plupart de nos assurances prennent effet immédiatement. Certaines garanties peuvent avoir un délai de carence (généralement 30 jours pour la santé).",
    },
    {
      question: "Comment résilier mon contrat ?",
      answer:
        "Vous pouvez résilier à l'échéance annuelle avec un préavis de 2 mois, ou à tout moment après la première année selon la loi Hamon.",
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Oui, nous proposons le paiement mensuel, trimestriel, semestriel ou annuel selon vos préférences.",
    },
  ],
} as const;

export type ServicesPageConfig = typeof servicesPageConfig;

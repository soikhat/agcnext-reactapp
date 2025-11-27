
import type { NewsCategory, NewsArticle, NewsPageConfig } from "@/types/news-type";
export const newsPageConfig = {
  metadata: {
    title: "Conseils et actualités - AGC Assurances",
    description:
      "Restez informé avec les dernières nouvelles et conseils en matière d'assurance de la part d'AGC Assurances.",
  },
  hero: {
    title: "Conseils et actualités",
    subtitle: "Les dernières nouvelles et conseils en matière d'assurance",
    backgroundImage: "/images/news-hero.jpg",
  },
  pagination:
    {articlesPerPage: 10,},
  seo: {
    title: "Conseils et Actualités Assurance | AGC Comores",
    description: "Découvrez nos conseils d'experts, actualités et guides pratiques sur l'assurance auto, habitation, santé aux Comores. Blog AGC.",
    keywords: [
      "assurance comores",
      "conseils assurance",
      "actualités AGC",
      "blog assurance",
      "prévention comores",
      "réglementation assurance",
    ],
  },
  newsletter: {
    enabled: true,
    title: "Restez informé",
    description: "Recevez nos derniers conseils et actualités directement dans votre boîte mail.",
    placeholder: "Votre adresse email",
    buttonText: "S'abonner",
  },

};
  export const newsCategories = [

    {
      id: "prevention",
      name: "Prévention & sécurité",
      slug: "prevention",
      description: "Conseils pour prévenir les risques",
      color: "blue",
    },
    {
      id: "actualites-agc",
      name: "Actualités AGC",
      slug: "actualites-agc",
      description: "Dernières nouvelles de l'entreprise",
      color: "green",
    },
    {
      id: "reglementation",
      name: "Réglementation",
      slug: "reglementation",
      description: "Lois et réglementations en assurance aux Comores",
      color: "red",
    },
    {
      id: "conseils-auto",
      name: "Assurance Auto",
      slug: "conseils-auto",
      description: "Conseils pour votre assurance automobile",
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
    {
      id: "voyage",
      name: "Assurance Voyage",
      slug: "conseils-voyage",
      description: "Conseils pour votre assurance voyage",
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
  ];
  // Articles mock (à remplacer par votre CMS ou API)
export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "AGC lance sa nouvelle application mobile pour faciliter vos démarches",
    slug: "agc-nouvelle-application-mobile-2025",
    excerpt: "Découvrez notre nouvelle application mobile qui vous permet de gérer vos contrats, déclarer un sinistre et contacter votre conseiller en quelques clics.",
    content: `
      <h2>Une révolution dans la gestion de vos assurances</h2>
      <p>AGC est fière de vous présenter sa toute nouvelle application mobile, conçue pour simplifier votre quotidien et vous offrir un accès rapide à tous vos services d'assurance.</p>
      
      <h3>Fonctionnalités principales</h3>
      <ul>
        <li>Consultation de vos contrats en temps réel</li>
        <li>Déclaration de sinistre en ligne avec photo</li>
        <li>Demande de devis instantanée</li>
        <li>Chat direct avec votre conseiller</li>
        <li>Paiement sécurisé de vos primes</li>
      </ul>

      <h3>Disponible dès maintenant</h3>
      <p>L'application est disponible gratuitement sur iOS et Android. Téléchargez-la dès aujourd'hui et profitez d'une expérience utilisateur optimale.</p>
    `,
    categoryId: "actualites-agc",
    author: {
      name: "Direction Communication AGC",
      avatar: "/avatars/agc-team.jpg",
      role: "Équipe AGC",
    },
    image: "/blog/app-mobile-agc.jpg",
    publishedAt: "2025-11-15T10:00:00Z",
    updatedAt: "2025-11-15T10:00:00Z",
    readTime: 5,
    featured: true,
    tags: ["application", "digital", "innovation"],
    views: 1250,
    metaDescription: "AGC lance sa nouvelle application mobile pour gérer vos assurances facilement aux Comores. Déclarez vos sinistres, consultez vos contrats et plus encore.",
  },
  {
    id: "2",
    title: "5 conseils pour réduire le coût de votre assurance auto aux Comores",
    slug: "reduire-cout-assurance-auto-comores",
    excerpt: "Découvrez nos astuces pour optimiser votre budget assurance auto tout en conservant une protection optimale adaptée à vos besoins.",
    content: `
      <h2>Optimisez votre budget assurance auto</h2>
      <p>L'assurance auto représente un budget important pour les ménages comoriens. Voici 5 conseils pratiques pour réduire vos cotisations.</p>
      
      <h3>1. Choisissez la bonne formule</h3>
      <p>Évaluez vos besoins réels : une assurance au tiers peut suffire pour un véhicule ancien, tandis qu'une tous risques est recommandée pour un véhicule récent.</p>

      <h3>2. Augmentez votre franchise</h3>
      <p>Une franchise plus élevée réduit votre prime annuelle. Calculez le montant que vous pouvez assumer en cas de sinistre.</p>

      <h3>3. Sécurisez votre véhicule</h3>
      <p>L'installation d'un système antivol ou GPS peut vous faire bénéficier de réductions importantes.</p>

      <h3>4. Conduisez prudemment</h3>
      <p>Un bon historique de conduite sans sinistre vous permet de bénéficier de bonus significatifs.</p>

      <h3>5. Comparez les offres</h3>
      <p>N'hésitez pas à demander plusieurs devis et à négocier avec votre assureur actuel.</p>
    `,
    categoryId: "conseils-auto",
    author: {
      name: "Saïd Mohamed",
      avatar: "/avatars/said-mohamed.jpg",
      role: "Conseiller Assurance Auto",
    },
    image: "/blog/conseils-assurance-auto.jpg",
    publishedAt: "2025-11-10T08:30:00Z",
    updatedAt: "2025-11-10T08:30:00Z",
    readTime: 7,
    featured: false,
    tags: ["économies", "auto", "conseils"],
    views: 892,
    metaDescription: "5 conseils pratiques pour réduire le coût de votre assurance auto aux Comores sans compromettre votre protection. Guide complet AGC.",
  },
  {
    id: "3",
    title: "Assurance habitation : Protégez votre maison contre les cyclones",
    slug: "proteger-maison-cyclones-assurance-habitation",
    excerpt: "La saison des cyclones approche. Découvrez comment bien assurer votre habitation et les mesures préventives à adopter pour minimiser les risques.",
    content: `
      <h2>Anticipez la saison des cyclones</h2>
      <p>Aux Comores, les cyclones représentent un risque majeur pour les habitations. Une bonne préparation et une assurance adaptée sont essentielles.</p>
      
      <h3>Les garanties indispensables</h3>
      <p>Votre assurance habitation doit couvrir :</p>
      <ul>
        <li>Les dommages causés par le vent et la pluie</li>
        <li>Les dégâts des eaux</li>
        <li>Les bris de glace</li>
        <li>La responsabilité civile</li>
      </ul>

      <h3>Mesures préventives</h3>
      <p>Avant la saison cyclonique :</p>
      <ul>
        <li>Vérifiez l'état de votre toiture</li>
        <li>Sécurisez les éléments extérieurs</li>
        <li>Nettoyez les gouttières</li>
        <li>Préparez un kit d'urgence</li>
      </ul>

      <h3>En cas de sinistre</h3>
      <p>Contactez AGC immédiatement au 269 773 XX XX. Photographiez les dégâts et conservez tous les justificatifs.</p>
    `,
    categoryId: "conseils-habitation",
    author: {
      name: "Fatima Ali",
      avatar: "/avatars/fatima-ali.jpg",
      role: "Experte Assurance Habitation",
    },
    image: "/blog/cyclone-protection-maison.jpg",
    publishedAt: "2025-11-08T14:00:00Z",
    updatedAt: "2025-11-08T14:00:00Z",
    readTime: 6,
    featured: true,
    tags: ["habitation", "cyclone", "prévention"],
    views: 1450,
    metaDescription: "Comment protéger votre maison contre les cyclones aux Comores ? Guide complet sur l'assurance habitation et les mesures préventives par AGC.",
  },
  {
    id: "4",
    title: "Nouvelle réglementation : L'assurance responsabilité civile désormais obligatoire",
    slug: "nouvelle-reglementation-rc-obligatoire-comores",
    excerpt: "Le gouvernement comorien renforce la protection des citoyens avec la nouvelle loi sur l'assurance responsabilité civile obligatoire.",
    content: `
      <h2>Une avancée majeure pour la protection des citoyens</h2>
      <p>Le Journal Officiel des Comores a publié le décret rendant obligatoire l'assurance responsabilité civile pour tous les véhicules motorisés.</p>
      
      <h3>Qui est concerné ?</h3>
      <p>Tous les propriétaires de véhicules motorisés circulant sur le territoire comorien doivent souscrire une assurance RC minimum.</p>

      <h3>Sanctions en cas de non-respect</h3>
      <ul>
        <li>Amende de 50 000 à 200 000 KMF</li>
        <li>Immobilisation du véhicule</li>
        <li>Suspension du permis de conduire</li>
      </ul>

      <h3>Comment se mettre en conformité ?</h3>
      <p>Contactez AGC pour souscrire rapidement votre assurance RC. Nos conseillers vous accompagnent dans vos démarches.</p>

      <h3>Délai d'application</h3>
      <p>La loi entre en vigueur le 1er janvier 2026. Les propriétaires ont jusqu'au 31 décembre 2025 pour se mettre en conformité.</p>
    `,
    categoryId: "reglementation",
    author: {
      name: "Mohamed Abdou",
      avatar: "/avatars/mohamed-abdou.jpg",
      role: "Juriste Assurance",
    },
    image: "/blog/nouvelle-loi-rc-comores.jpg",
    publishedAt: "2025-11-05T09:00:00Z",
    updatedAt: "2025-11-05T09:00:00Z",
    readTime: 8,
    featured: false,
    tags: ["réglementation", "RC", "loi"],
    views: 2100,
    metaDescription: "Nouvelle réglementation aux Comores : l'assurance responsabilité civile devient obligatoire. Tout ce que vous devez savoir avec AGC.",
  },
  {
    id: "5",
    title: "Prévention routière : Les bons réflexes en cas d'accident",
    slug: "prevention-routiere-reflexes-accident",
    excerpt: "Un accident peut arriver à tout moment. Connaissez-vous les bons gestes à adopter pour protéger les victimes et faciliter les démarches d'indemnisation ?",
    content: `
      <h2>Les gestes qui sauvent en cas d'accident</h2>
      <p>Face à un accident de la route, votre réactivité et vos réflexes peuvent sauver des vies et faciliter la gestion du sinistre.</p>
      
      <h3>1. Sécuriser les lieux</h3>
      <ul>
        <li>Allumez vos feux de détresse</li>
        <li>Placez un triangle de signalisation</li>
        <li>Portez votre gilet réfléchissant</li>
        <li>Éloignez-vous de la chaussée</li>
      </ul>

      <h3>2. Alerter les secours</h3>
      <p>Composez le 17 (police) ou le 18 (pompiers). Donnez votre localisation précise et le nombre de victimes.</p>

      <h3>3. Porter secours</h3>
      <p>Si vous êtes formé aux premiers secours, vous pouvez intervenir. Sinon, attendez les professionnels.</p>

      <h3>4. Faire un constat amiable</h3>
      <p>Remplissez le constat avec l'autre conducteur. Prenez des photos de la scène et des véhicules.</p>

      <h3>5. Contacter votre assureur</h3>
      <p>Prévenez AGC dans les 5 jours ouvrés. Nous vous guidons dans toutes vos démarches.</p>
    `,
    categoryId: "prevention",
    author: {
      name: "Dr. Amina Hassan",
      avatar: "/avatars/amina-hassan.jpg",
      role: "Responsable Prévention",
    },
    image: "/blog/prevention-accident-route.jpg",
    publishedAt: "2025-11-01T11:00:00Z",
    updatedAt: "2025-11-01T11:00:00Z",
    readTime: 6,
    featured: false,
    tags: ["prévention", "sécurité routière", "accidents"],
    views: 756,
    metaDescription: "Quels sont les bons réflexes en cas d'accident de la route aux Comores ? Guide de prévention et conseils pratiques par AGC.",
  },
  {
    id: "6",
    title: "AGC partenaire officiel du Marathon de Moroni 2026",
    slug: "agc-partenaire-marathon-moroni-2026",
    excerpt: "AGC est fière d'annoncer son partenariat avec le Marathon de Moroni 2026, un événement sportif majeur qui rassemblera des milliers de coureurs.",
    content: `
      <h2>AGC soutient le sport comorien</h2>
      <p>Dans le cadre de notre engagement pour le développement du sport aux Comores, AGC devient partenaire officiel du Marathon de Moroni 2026.</p>
      
      <h3>Un événement d'envergure</h3>
      <p>Le Marathon de Moroni, prévu le 15 mars 2026, proposera plusieurs parcours :</p>
      <ul>
        <li>Marathon complet (42,195 km)</li>
        <li>Semi-marathon (21 km)</li>
        <li>Course de 10 km</li>
        <li>Course enfants (3 km)</li>
      </ul>

      <h3>Notre engagement</h3>
      <p>AGC offre :</p>
      <ul>
        <li>Une assurance gratuite pour tous les participants</li>
        <li>Des prix pour les meilleurs coureurs</li>
        <li>Un stand d'information sur la prévention santé</li>
      </ul>

      <h3>Comment participer ?</h3>
      <p>Les inscriptions sont ouvertes sur www.marathonmoroni.km. Places limitées à 5000 coureurs.</p>
    `,
    categoryId: "actualites-agc",
    author: {
      name: "Direction Marketing AGC",
      avatar: "/avatars/agc-marketing.jpg",
      role: "Équipe Marketing",
    },
    image: "/blog/marathon-moroni-agc.jpg",
    publishedAt: "2025-10-28T16:00:00Z",
    updatedAt: "2025-10-28T16:00:00Z",
    readTime: 4,
    featured: false,
    tags: ["sport", "partenariat", "événement"],
    views: 543,
    metaDescription: "AGC devient partenaire officiel du Marathon de Moroni 2026. Découvrez notre engagement pour le sport aux Comores et comment participer.",
  },
];
// Fonction utilitaire pour obtenir un article par son slug
export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

// Fonction utilitaire pour obtenir les articles par catégorie
export const getArticlesByCategory = (categoryId: string): NewsArticle[] => {
  if (categoryId === "tous") return newsArticles;
  return newsArticles.filter((article) => article.categoryId === categoryId);
};

// Fonction utilitaire pour obtenir les articles en vedette
export const getFeaturedArticles = (): NewsArticle[] => {
  return newsArticles.filter((article) => article.featured);
};

// Fonction utilitaire pour obtenir les articles récents
export const getRecentArticles = (limit: number = 5): NewsArticle[] => {
  return [...newsArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

// Fonction utilitaire pour obtenir les articles populaires
export const getPopularArticles = (limit: number = 5): NewsArticle[] => {
  return [...newsArticles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
};
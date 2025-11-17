// Types pour la page Services

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug?: string;
}

export interface InsuranceProduct {
  id: string;
  category: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: string;
  coverImage: string;
  features: string[];
  benefits: string[];
  notCovered: string[];
  popular?: boolean;
  badge?: string;
  documents?: string[];
  faq?: ProductFAQ[];
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ServicesHeroConfig {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export interface ServicesCTAConfig {
  title: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  phone: string;
  email: string;
}

export interface ServicesFAQ {
  question: string;
  answer: string;
}
export interface ServicesAdvantage {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServicesPageConfig {
  hero: ServicesHeroConfig;
  categories: readonly ServiceCategory[];
  products: readonly InsuranceProduct[];
  cta: ServicesCTAConfig;
  faq: readonly ServicesFAQ[];
  advantages: readonly ServicesAdvantage[];
}

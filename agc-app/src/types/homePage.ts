export interface HeroConfig {
  title: string;
  subtitle: string;
  services: string;
  backgroundImage: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface AssurancesConfig {
  sectionTag: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  sectionTag: string;
  title: string;
  titleHighlight: string;
  description: readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  badge: {
    number: string;
    label: string;
  };
  cta: string;
}

export interface TestimonialsConfig {
  sectionTag: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
}

export interface ActualitesConfig {
  sectionTag: string;
  title: string;
  description: string;
}

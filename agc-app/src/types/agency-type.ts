/**
 * Types pour la gestion des agences
 */
export interface AgencyHeroConfig {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}
export interface AgencyHours {
  day: string;
  hours: string;
}

export interface AgencyCoordinates {
  lat: number;
  lng: number;
}

export interface Agency {
  id: string;
  name: string;
  address: string;
  shortAddress: string;
  phone: string;
  email: string;
  image: string;
  hours: AgencyHours[];
  services: string[];
  coordinates: AgencyCoordinates;
}

export interface Island {
  id: string;
  name: string;
  agencies: Agency[];
}

export interface AgencyPageConfig {
  hero: AgencyHeroConfig;
  islands: Island[];
  metadata: {
    title: string;
    description: string;
  };
  contact: {
    supportUrl: string;
    whatsapp?: string;
  };
}

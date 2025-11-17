export const agencyPageConfig = {
  hero: {
    title: "Nos agences",
    subtitle: "Trouvez l'agence la plus proche de chez vous",
    description:
      "Avec un réseau d'agences à travers tout le pays, nous sommes toujours à proximité pour répondre à vos besoins en assurance.",
    backgroundImage: "/images/agences/hero-bg.jpg",
  },
  metadata: {
    title: "Nos Agences aux Comores",
    description:
      "Découvrez nos agences de location de véhicules aux Comores. Présents sur Ngazidja, Ndzuani et Mwali.",
  },
  contact: {
    supportUrl: "/contact",
    whatsapp: "+269773123456", // Numéro WhatsApp principal
  },
  islands: [
    {
      id: "ngazidja",
      name: "Ngazidja (Grande Comore)",
      agencies: [
        {
          id: "moroni-mavouna",
          name: "Agence Moroni Centre",
          address: "Avenue de l'Indépendance, Moroni, Ngazidja, Comores",
          shortAddress: "Avenue de l'Indépendance, Moroni",
          phone: "+269 773 12 34",
          email: "moroni.centre@example.com",
          image: "/images/agencies/moroni-centre.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 18h00" },
            { day: "Samedi", hours: "8h00 - 13h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -11.7042, lng: 43.2402 },
        },
        {
          id: "moroni-el-marouf",
          name: "Agence Moroni El-Marouf",
          address: "Avenue de l'Indépendance, Moroni, Ngazidja, Comores",
          shortAddress: "Avenue de l'Indépendance, Moroni",
          phone: "+269 773 12 34",
          email: "moroni.centre@example.com",
          image: "/images/agencies/moroni-centre.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 18h00" },
            { day: "Samedi", hours: "8h00 - 13h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -11.7042, lng: 43.2402 },
        },
        {
          id: "mbeni",
          name: "Agence Mbeni",
          address: "Route Nationale, Mbeni, Ngazidja, Comores",
          shortAddress: "Route Nationale, Mbeni",
          phone: "+269 773 34 56",
          email: "mbeni@example.com",
          image: "/images/agencies/mbeni.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
            { day: "Samedi", hours: "8h00 - 12h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -11.4, lng: 43.25 },
        },
      ],
    },
    {
      id: "ndzuani",
      name: "Ndzuani (Anjouan)",
      agencies: [
        {
          id: "mutsamudu",
          name: "Agence Mutsamudu",
          address: "Centre-ville, Mutsamudu, Ndzuani, Comores",
          shortAddress: "Centre-ville, Mutsamudu",
          phone: "+269 771 12 34",
          email: "mutsamudu@example.com",
          image: "/images/agencies/mutsamudu.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 18h00" },
            { day: "Samedi", hours: "8h00 - 13h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -12.1667, lng: 44.4 },
        },
        {
          id: "domoni",
          name: "Agence Domoni",
          address: "Quartier Moya, Domoni, Ndzuani, Comores",
          shortAddress: "Quartier Moya, Domoni",
          phone: "+269 771 23 45",
          email: "domoni@example.com",
          image: "/images/agencies/domoni.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
            { day: "Samedi", hours: "8h00 - 12h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -12.258, lng: 44.533 },
        },
      ],
    },
    {
      id: "mwali",
      name: "Mwali (Mohéli)",
      agencies: [
        {
          id: "fomboni",
          name: "Agence Fomboni",
          address: "Centre-ville, Fomboni, Mwali, Comores",
          shortAddress: "Centre-ville, Fomboni",
          phone: "+269 772 12 34",
          email: "fomboni@example.com",
          image: "/images/agencies/fomboni.jpg",
          hours: [
            { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
            { day: "Samedi", hours: "8h00 - 12h00" },
            { day: "Dimanche", hours: "Fermé" },
          ],
          coordinates: { lat: -12.2814, lng: 43.7403 },
        },
      ],
    },
  ],
};
export type AgencyPageConfig = typeof agencyPageConfig;

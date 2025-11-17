import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "./ui/component/Navigation/Navigation";
import { Footer } from "./ui/component/Navigation/Footer/footer";
import { Main } from "@/app/ui/design-system/Layout/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AGC Assurances - Votre sécurité, notre priorité",
    template: "%s | AGC Assurances",
  },
  description:
    "Assurances Générales des Comores - Plus de 20 ans d'expérience dans l'assurance auto, voyage, maritime et chantier. Fidèle, à vos côtés quoi qu'il arrive.",
  keywords: [
    "assurance",
    "Comores",
    "assurance auto",
    "assurance voyage",
    "assurance maritime",
    "AGC",
    "devis assurance",
  ],
  authors: [{ name: "AGC Assurances" }],
  creator: "AGC Assurances",
  publisher: "AGC Assurances",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://agc-assurances.com",
    siteName: "AGC Assurances",
    title: "AGC Assurances - Votre sécurité, notre priorité",
    description:
      "Plus de 20 ans d'expérience dans l'assurance. Découvrez nos solutions pour l'auto, le voyage, le maritime et les chantiers.",
    images: [
      {
        url: "/assets/images/agc-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGC Assurances - Assurances Générales des Comores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGC Assurances - Votre sécurité, notre priorité",
    description: "Plus de 20 ans d'expérience dans l'assurance aux Comores.",
    images: ["/assets/images/agc-og-image.jpg"],
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/agclogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/agclogo.png" />

        {/* Préchargement des polices importantes */}
        <link
          rel="preload"
          href="/assets/images/routeBackground1.jpeg"
          as="image"
        />

        {/* Schema.org pour les moteurs de recherche */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Assurances Générales des Comores",
              alternateName: "AGC Assurances",
              description:
                "Compagnie d'assurance aux Comores spécialisée dans l'assurance auto, voyage, maritime et chantier",
              url: "https://agc-assurances.com",
              telephone: "+269-XXX-XXXX", // À remplacer par le vrai numéro
              address: {
                "@type": "PostalAddress",
                addressLocality: "Moroni",
                addressCountry: "KM",
              },
              sameAs: [
                "https://facebook.com/agcassurances",
                "https://linkedin.com/company/agcassurances",
              ],
              foundingDate: "2003",
              slogan: "Fidèle, à vos côtés quoi qu'il arrive",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {/* Skip to main content pour l'accessibilité */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50"
          >
            Aller au contenu principal
          </a>

          <Navigation />

          <Main id="main-content">{children}</Main>

          <Footer />
        </Providers>

        {/* Analytics - À remplacer par votre code Google Analytics */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}

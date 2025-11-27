"use client";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import Button from "@/app/ui/design-system/Button/Button";
import { ContactSectionProps } from "@/types/contact";
import { UrgencyBanner } from "./UrgencyBanner";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

export const ContactSection = ({
  contactInfo,
  onNewsletterSubmit,
  onContactClick,
  onDevisClick,
}: ContactSectionProps = {}) => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
    };
    onNewsletterSubmit?.(data);
  };

  const handleDevisClick = () => {
    onDevisClick?.();
  };

  return (
    <>
      {/* Section Contact - Structure simplifiée */}
      <FullSection className="relative bg-secondary/10 py-12 sm:py-16 lg:py-20">
        {/* Bloc 1 - CTA Devis */}
        <CenteredSection className="">
          <div className="bg-gray-100 rounded-2xl shadow-md p-8 text-center">
            <Typography variant="headingS" className="text-gray-900 mb-4">
              Prêt à nous faire confiance ?
            </Typography>
            <Typography variant="caption1" theme="gray" className="mb-6">
              Nos experts vous accompagnent pour choisir les meilleures
              solutions d'assurance adaptées à vos besoins.
            </Typography>
            <Button
              variant="accent"
              size="medium"
              className="inline-flex items-center gap-2"
              onClick={handleDevisClick}
            >
              Demander un devis gratuit →
            </Button>
          </div>

          {/* Bloc 2 - Newsletter */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <Typography variant="headingS" className="text-gray-900 mb-4">
              Restez informé
            </Typography>
            <Typography variant="caption1" theme="gray" className="mb-6">
              Conseils, actualités et offres exclusives directement dans votre
              boîte mail
            </Typography>

            <form className="space-y-4" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom *"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom *"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Je m'abonne
              </button>
            </form>

            {/* Informations de contact rapide si disponibles */}
            {contactInfo && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Typography
                  variant="caption3"
                  theme="gray"
                  className="mb-2 text-center"
                >
                  Informations non contractuelles
                </Typography>
                <Typography>
                  Les garanties peuvent donner lieu à exclusions, limitations et
                  franchises. Pour connaître le détail, l’étendue et les
                  conditions de garantie, reportez-vous aux dispositions
                  générales et particulières du contrat. La souscription d’un
                  contrat ou de certaines garanties demeure soumise aux règles
                  d’acceptation des risques de l’assureur.
                </Typography>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                  {contactInfo.phone && (
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary hover:text-primary-700 transition-colors"
                    >
                      📞 {contactInfo.phone}
                    </a>
                  )}
                  {contactInfo.email && (
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:text-primary-700 transition-colors"
                    >
                      ✉️ {contactInfo.email}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </CenteredSection>
      </FullSection>

      {/* Bande d'urgence conservée */}
      <UrgencyBanner />
    </>
  );
};

export default ContactSection;

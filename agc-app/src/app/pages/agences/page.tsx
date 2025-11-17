import { Metadata } from "next";
import { agencyPageConfig } from "@/config/agencyPage.config";
import AgenciesHero from "@/app/ui/component/sections/agency/AgencyHeroSection";
import AgenciesList from "@/app/ui/component/sections/agency/AgencyListSection";
import { servicesPageConfig } from "@/config/servicesPage.config";
import AgencyCTASection from "@/app/ui/component/sections/agency/AgencyCTASection";

export const metadata: Metadata = {
  title: agencyPageConfig.metadata.title,
  description: agencyPageConfig.metadata.description,
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AgenciesHero config={agencyPageConfig.hero} />

      <AgenciesList islands={agencyPageConfig.islands} />

      <AgencyCTASection
        config={servicesPageConfig.cta}
        title="Besoin d'aide pour choisir ?"
        description="Notre équipe est à votre disposition pour vous conseiller et répondre à toutes vos questions."
        buttonText="Nous contacter"
        buttonUrl={agencyPageConfig.contact.supportUrl}
      />
    </div>
  );
}

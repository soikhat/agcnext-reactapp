'use client';

import { HeroSection } from "./ui/component/sections/home/HeroSection/HeroSection";
import { AssurancesSection } from "./ui/component/sections/home/AssurancesSection/AssurancesSection";
import { AboutSection } from "./ui/component/sections/home/AboutSection/AboutSection";
import AgencesSection from "./ui/component/sections/home/AgencesSection/AgencesSection";
import { TestimonialsSection } from "./ui/component/sections/home/TestimonialsSection/TestimonialsSection";
import { ActualitesSectionWrapper } from "./ui/component/sections/home/ActualitesSection/ActualitesSectionWrapper";
import ContactSection from "./ui/component/sections/home/ContactSection/ContactSection";
import { FullSection } from "./ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "./ui/design-system/Layout/Section/CenteredSection";

import { homePageConfig } from "@/config/homePage.config";
import { useHomePageHandlers } from "@/hooks/useHomePageHandlers";

export default function Home() {
  const handlers = useHomePageHandlers();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection 
        config={homePageConfig.hero}
        onDevisClick={handlers.handleDevisClick}
        onServicesClick={handlers.handleServicesClick}
      />

      {/* Assurances Section */}
      <AssurancesSection config={homePageConfig.assurances} />

      {/* About Section */}
      <AboutSection 
        config={homePageConfig.about}
        onCtaClick={handlers.handleAboutClick}
      />

      {/* Agences Section */}
      <FullSection className="bg-gray-50 py-16">
        <CenteredSection>
          <AgencesSection />
        </CenteredSection>
      </FullSection>

      {/* Testimonials Section */}
      <TestimonialsSection config={homePageConfig.testimonials} />

      {/* Actualités Section */}
      <ActualitesSectionWrapper config={homePageConfig.actualites} />

      {/* Contact Section */}
      <FullSection className="bg-gray-50 py-12">
        <ContactSection
          contactInfo={homePageConfig.contact.info}
          onNewsletterSubmit={handlers.handleNewsletterSubmit}
          onDevisClick={handlers.handleDevisClick}
          onContactClick={handlers.handleContactClick}
        />
      </FullSection>
    </main>
  );
}

"use client";

import { AboutHeroSection } from "@/app/ui/component/sections/about/AboutHeroSection";
import { StoryTimelineSection } from "@/app/ui/component/sections/about/StoryTimelineSection";
import { MissionValuesSection } from "@/app/ui/component/sections/about/MissionValuesSection";
import { StatsSection } from "@/app/ui/component/sections/about/StatsSection";
import { TeamSection } from "@/app/ui/component/sections/about/TeamSection";
import { CommitmentSection } from "@/app/ui/component/sections/about/CommitmentSection";
import { PartnersSection } from "@/app/ui/component/sections/about/PartnersSection";
import { AboutCTASection } from "@/app/ui/component/sections/about/AboutCTASection";
import { aboutPageConfig } from "@/config/aboutPage.config";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <AboutHeroSection config={aboutPageConfig.hero} />

      {/* Notre Histoire - Timeline */}
      <StoryTimelineSection config={aboutPageConfig.story} />

      {/* Mission & Valeurs */}
      <MissionValuesSection config={aboutPageConfig.mission} />

      {/* Statistiques */}
      <StatsSection config={aboutPageConfig.stats} />

      {/* Notre Équipe */}
      <TeamSection config={aboutPageConfig.team} />

      {/* Nos Engagements */}
      <CommitmentSection config={aboutPageConfig.commitment} />

      {/* Nos Partenaires */}
      <PartnersSection config={aboutPageConfig.partners} />

      {/* CTA Final */}
      <AboutCTASection config={aboutPageConfig.cta} />
    </main>
  );
}

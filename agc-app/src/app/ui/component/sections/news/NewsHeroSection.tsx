import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { NewsHeroConfig } from "@/types/news-type";
import SearchBar  from "@/app/ui/component/searchBar/SearchBar"

interface HeroSectionProps {
  config: NewsHeroConfig;
}

export function NewsHeroSection({ config }: HeroSectionProps) {
  return (
    <FullSection
      className="bg-[url('/assets/images/HeroNewsPage-bg.png')] bg-cover bg-center text-white relative min-h-[400px] flex items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />

      <CenteredSection className="relative py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Typography
            variant="headingM"
            theme="white"
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {config.title}
          </Typography>

          <Typography
            variant="lead"
            theme="white"
            className="text-xl md:text-2xl font-light"
          >
            {config.subtitle}
          </Typography>
        </div>
        <div className="mt-12">
          <SearchBar
              placeholder="Recherchez des articles, des conseils..."
              title=""
              buttonText="Rechercher"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" />
                </svg>
              }
          />
        </div>
      </CenteredSection>
    </FullSection>
  );
}
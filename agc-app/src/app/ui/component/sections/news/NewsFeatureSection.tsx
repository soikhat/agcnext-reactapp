import { newsCategories } from "@/config/newsPage.config";
import { NewsArticle } from "@/types/news-type";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface NewsFeatureSectionProps {
  articles: NewsArticle[];
  categories: typeof newsCategories;
}

export function NewsFeatureSection({
  articles,
  categories,
}: NewsFeatureSectionProps) {
  return (
    <FullSection className="bg-gray-50 py-12">
      <CenteredSection>
        <div className="text-center mb-12"></div>
      </CenteredSection>
    </FullSection>
  );
}

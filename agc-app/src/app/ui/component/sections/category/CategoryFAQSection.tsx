// app/ui/component/sections/category/CategoryFAQSection.tsx

import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryFAQSectionProps {
  categoryName: string;
  faq: FAQItem[];
}

export function CategoryFAQSection({
  categoryName,
  faq,
}: CategoryFAQSectionProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <FullSection className="py-16 bg-gray-50">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="headingS" className="mb-4">
            Questions fréquentes sur l'assurance {categoryName}
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-2xl mx-auto"
          >
            Trouvez rapidement les réponses à vos questions
          </Typography>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
            >
              <summary className="font-semibold text-lg list-none flex items-center justify-between">
                {item.question}
                <span className="text-primary group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <Typography variant="caption3" theme="gray" className="mt-4">
                {item.answer}
              </Typography>
            </details>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}
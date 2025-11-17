// app/pages/services/categories/[categorySlug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { servicesPageConfig } from "@/config/servicesPage.config";
import { CategoryHeroSection } from "@/app/ui/component/sections/category/CategoryHeroSection";
import { CategoryAdvantagesSection } from "@/app/ui/component/sections/category/CategoryAdvantagesSection";
import { CategoryProductsSection } from "@/app/ui/component/sections/category/CategoryProductsSection";
import { CategoryHowItWorksSection } from "@/app/ui/component/sections/category/CategoryHowItWorksSection";
import { CategoryFAQSection } from "@/app/ui/component/sections/category/CategoryFAQSection";
import { CategoryCTASection } from "@/app/ui/component/sections/category/CategoryCTASection";

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Trouver la catégorie par slug
  const category = servicesPageConfig.categories.find(
    (c) => c.slug === params.categorySlug
  );

  if (!category) {
    notFound();
  }

  // Filtrer les produits de cette catégorie
  const categoryProducts = servicesPageConfig.products.filter(
    (p) => p.category === category.id
  );

  return (
    <main className="flex flex-col">
      {/* Breadcrumbs */}
      <FullSection className="bg-gray-50 py-4">
        <CenteredSection>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/pages/services"
              className="text-gray-600 hover:text-primary"
            >
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </CenteredSection>
      </FullSection>

      {/* Hero Section */}
      <CategoryHeroSection
        icon={category.icon}
        name={category.name}
        description={category.description}
      />

      {/* Avantages */}
      <CategoryAdvantagesSection
        categoryName={category.name}
        advantages={category.advantages}
      />

      {/* Produits */}
      <CategoryProductsSection
        categoryName={category.name}
        products={categoryProducts}
      />

      {/* Comment ça marche */}
      <CategoryHowItWorksSection />

      {/* FAQ */}
      <CategoryFAQSection categoryName={category.name} faq={category.faq} />

      {/* CTA Final */}
      <CategoryCTASection categoryName={category.name} />
    </main>
  );
}

// Générer les routes statiques
export async function generateStaticParams() {
  return servicesPageConfig.categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

// Métadonnées SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const category = servicesPageConfig.categories.find(
    (c) => c.slug === params.categorySlug
  );

  if (!category) {
    return { title: "Catégorie non trouvée" };
  }

  return {
    title: `Assurance ${category.name} - AGC Assurances`,
    description: category.description,
    openGraph: {
      title: `Assurance ${category.name}`,
      description: category.description,
    },
  };
}
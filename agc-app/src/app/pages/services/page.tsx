"use client";
import { Metadata } from "next";
import { useState } from "react";
import { ServicesHeroSection } from "@/app/ui/component/sections/services/ServicesHeroSection";
import { CategoriesGrid } from "@/app/ui/component/sections/services/CategoriesFilterGird";
import { ProductsGrid } from "@/app/ui/component/sections/services/ProductsGird";
import { ServicesCTASection } from "@/app/ui/component/sections/services/ServicesCTASection";
import { ServicesFAQSection } from "@/app/ui/component/sections/services/ServicesFAQSection";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { servicesPageConfig } from "@/config/servicesPage.config";
import { WhyUsSection } from "@/app/ui/component/sections/services/WhyUsSection";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <ServicesHeroSection config={servicesPageConfig.hero} />

      {/* Categories */}
      <FullSection className="py-16 bg-gray-50">
        <CenteredSection>
          <div className="text-center mb-12">
            <Typography variant="caption2" className="text-primary mb-2">
              Nos Solutions
            </Typography>
            <Typography variant="headingS" className="mb-4">
              Choisissez votre catégorie d'assurance
            </Typography>
            <Typography
              variant="caption1"
              theme="gray"
              className="max-w-2xl mx-auto"
            >
              Cliquez sur une catégorie pour filtrer les produits
            </Typography>
          </div>

          <CategoriesGrid
            categories={[
              { id: "all", name: "Toutes", icon: "car", description: "" },
              ...servicesPageConfig.categories,
            ]}
            activeCategory={activeCategory}
            onCategoryClick={setActiveCategory}
          />
        </CenteredSection>
      </FullSection>

      {/* Products Grid */}
      <FullSection className="py-16">
        <CenteredSection>
          <ProductsGrid
            products={servicesPageConfig.products}
            activeCategory={activeCategory}
          />
        </CenteredSection>
      </FullSection>
      {/* Why us Section */}
      <WhyUsSection  advantages={servicesPageConfig.advantages}/>
      {/* FAQ Section */}
      <ServicesFAQSection faq={servicesPageConfig.faq} />

      {/* CTA Section */}
      <ServicesCTASection config={servicesPageConfig.cta} />
    </main>
  );
}

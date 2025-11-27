'use client';
import { Metadata } from "next";
import { useState } from "react";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import {newsArticles} from "@/config/newsPage.config";
import { newsPageConfig } from "@/config/newsPage.config";
import { newsCategories } from "@/config/newsPage.config";
import { NewsHeroSection } from "@/app/ui/component/sections/news/NewsHeroSection";
import { NewsFeatureSection } from "@/app/ui/component/sections/news/NewsFeatureSection";
import { NewsCategoryFilter } from "@/app/ui/component/sections/news/NewsCategoryFilter";
//import { Newsletter } from "@/app/ui/component/sections/news/Newsletter";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <NewsHeroSection config={newsPageConfig.hero} />

      {/* Category Filter */}
      <NewsCategoryFilter
        categories={[
          { id: "all", name: "Toutes", description: "", color: "", slug: "" },
          ...newsCategories,
        ]}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />

      {/* Articles Grid */}
      {/*<NewsFeatureSection articles={newsArticles} categories={newsCategories} />*/}

      {/* Newsletter Section */}
      {/*newsPageConfig.newsletter.enabled && (
        <Newsletter config={newsPageConfig.newsletter} />
      )*/}
    </main>
  );
}
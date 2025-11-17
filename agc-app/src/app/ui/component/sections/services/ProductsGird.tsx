"use client";

import { useState, useMemo } from "react";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { ProductCard } from "../../cards/ServicesCard/Productcard";
import { InsuranceProduct } from "@/types/services-type";

interface ProductsGridProps {
  products: readonly InsuranceProduct[];
  activeCategory?: string;
}

export function ProductsGrid({
  products,
  activeCategory = "all",
}: ProductsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrer les produits
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filtrer par catégorie
    if (activeCategory && activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Barre de recherche */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="Rechercher une assurance..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <Typography variant="caption3" theme="gray">
          {filteredProducts.length} assurance
          {filteredProducts.length > 1 ? "s" : ""} trouvée
          {filteredProducts.length > 1 ? "s" : ""}
        </Typography>
      </div>

      {/* Grille de produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Typography variant="headingS" className="mb-4">
            Aucune assurance trouvée
          </Typography>
          <Typography variant="caption1" theme="gray">
            Essayez de modifier vos filtres ou votre recherche
          </Typography>
        </div>
      )}
    </div>
  );
}

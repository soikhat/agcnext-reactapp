// app/ui/component/sections/category/CategoryProductsSection.tsx

import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { RiCheckLine } from "react-icons/ri";

interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

interface CategoryProductsSectionProps {
  categoryName: string;
  products: Product[];
}

export function CategoryProductsSection({
  categoryName,
  products,
}: CategoryProductsSectionProps) {
  return (
    <FullSection id="produits" className="py-16 bg-gray-50">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="headingS" className="mb-4">
            Nos formules d'assurance {categoryName}
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-2xl mx-auto"
          >
            Choisissez la formule qui correspond le mieux à vos besoins
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              {product.popular && (
                <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                  ⭐ Le plus populaire
                </div>
              )}
              {product.badge && !product.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                  {product.badge}
                </div>
              )}

              <div className="p-6 space-y-4">
                <div>
                  <Typography variant="caption1" className="font-bold mb-2">
                    {product.name}
                  </Typography>
                  <Typography variant="caption3" theme="gray">
                    {product.shortDescription}
                  </Typography>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg">
                  <Typography variant="caption3" theme="gray" className="mb-1">
                    À partir de
                  </Typography>
                  <Typography variant="headingSection" className="text-primary">
                    {product.price}
                  </Typography>
                </div>

                {/* Garanties principales */}
                <div className="space-y-2">
                  <Typography
                    variant="caption3"
                    className="font-semibold text-gray-700"
                  >
                    Garanties principales :
                  </Typography>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <RiCheckLine
                          className="text-green-600 flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {product.features.length > 3 && (
                    <Typography variant="caption3" className="text-primary">
                      + {product.features.length - 3} autres garanties
                    </Typography>
                  )}
                </div>

                <Link
                  href={`/pages/services/${product.slug}`}
                  className="block"
                >
                  <Button variant="primary" size="medium" className="w-full">
                    Voir les détails
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}
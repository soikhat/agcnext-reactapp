import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { InsuranceProduct } from "@/types/services-type";
import { RiCheckLine, RiArrowRightLine } from "react-icons/ri";

interface ProductCardProps {
  product: InsuranceProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.coverImage}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.popular && (
            <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              Populaire
            </span>
          )}
          {product.badge && (
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        {/* Titre et prix */}
        <div>
          <Typography variant="caption1" className="font-bold text-lg mb-2">
            {product.name}
          </Typography>
          <Typography variant="caption3" className="text-primary font-semibold">
            {product.price}
          </Typography>
        </div>

        {/* Description */}
        <Typography variant="caption4" theme="gray" className="line-clamp-2">
          {product.shortDescription}
        </Typography>

        {/* Points clés (3 premiers) */}
        <div className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <RiCheckLine
                className="text-green-500 flex-shrink-0 mt-0.5"
                size={18}
              />
              <Typography variant="caption4" className="text-sm">
                {feature}
              </Typography>
            </div>
          ))}
          {product.features.length > 3 && (
            <Typography variant="caption4" className="text-primary text-sm">
              + {product.features.length - 3} autres garanties
            </Typography>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 space-y-2">
          <Link href={`/pages/services/${product.slug}`}>
            <Button variant="accent" size="medium" className="w-full">
              Voir les détails
              <RiArrowRightLine size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href={`/pages/contact?product=${product.slug}`}>
            <Button variant="outline" size="medium" className="w-full">
              Demander un devis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { ServiceCategory } from "@/types/services-type";
import {
  RiCarLine,
  RiPlaneLine,
  RiShipLine,
  RiHomeLine,
  RiHeartPulseLine,
  RiBriefcaseLine,
} from "react-icons/ri";

interface CategoriesGridProps {
  categories: readonly ServiceCategory[];
  activeCategory?: string;
  onCategoryClick?: (categoryId: string) => void;
}

const iconMap = {
  car: RiCarLine,
  plane: RiPlaneLine,
  ship: RiShipLine,
  home: RiHomeLine,
  health: RiHeartPulseLine,
  business: RiBriefcaseLine,
};

export function CategoriesGrid({
  categories,
  activeCategory = "all",
  onCategoryClick,
}: CategoriesGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon =
          iconMap[category.icon as keyof typeof iconMap] || RiCarLine;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryClick?.(category.id)}
            className={`p-6 rounded-xl transition-all duration-300 text-center
              ${
                isActive
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white hover:bg-primary-50 shadow-md hover:shadow-lg"
              }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                ${isActive ? "bg-white/20" : "bg-primary/10"}`}
              >
                <Icon
                  size={28}
                  className={isActive ? "text-white" : "text-primary"}
                />
              </div>
              <Typography
                variant="caption3"
                className={`font-semibold ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                {category.name}
              </Typography>
              {category.description && (
                <Typography
                  variant="caption4"
                  className={`text-xs ${
                    isActive ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {category.description}
                </Typography>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

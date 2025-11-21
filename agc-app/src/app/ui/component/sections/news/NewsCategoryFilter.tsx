'use client';
import { NewsCategory } from "@/types/news-type";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
interface NewsCategoryFilterProps {
  categories: NewsCategory[];
  activeCategory ?: string;
  onCategoryClick ?: (categoryId: string) => void;
}
export function NewsCategoryFilter({
    categories,
    activeCategory = "all",
    onCategoryClick,
}: NewsCategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center my-8 px-4">
            {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                    <button
                        key={category.id}
                        onClick={() => onCategoryClick?.(category.id)}
                        className={`px-5 py-3 rounded-full transition-all duration-300
              ${
                  isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white hover:bg-primary-50 shadow-md hover:shadow-lg"
              }`}
                    >
                        <Typography
                            variant="caption3"
                            className={isActive ? "text-white" : "text-primary"}
                        >
                            {category.name}
                        </Typography>
                    </button>
                );
            })}
        </div>
    );
}
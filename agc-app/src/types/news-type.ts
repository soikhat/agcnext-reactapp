// Types pour la page Actualités/Blog

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string; // Tailwind gradient class
}
export interface NewsHeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
}
export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  categoryId: string;
  author: Author;
  image: string;
  publishedAt: string; // ISO date string
  updatedAt: string; // ISO date string
  readTime: number; // minutes
  featured: boolean;
  tags: string[];
  views?: number;
  metaDescription: string;
  relatedArticles?: string[]; // Array of article IDs
}

export interface NewsPageConfig {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  pagination: {
    articlesPerPage: number;
  };
  newsletter: {
    enabled: boolean;
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
}

export interface ArticleCardProps {
  article: NewsArticle;
  category?: NewsCategory;
  priority?: boolean; // For image loading priority
}

export interface CategoryFilterProps {
  categories: NewsCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export interface NewsletterProps {
  config: NewsPageConfig["newsletter"];
}

export interface ArticleGridProps {
  articles: NewsArticle[];
  categories: NewsCategory[];
}

export interface RelatedArticlesProps {
  currentArticleId: string;
  articles: NewsArticle[];
  limit?: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export interface ShareButtonsProps {
  title: string;
  url: string;
}
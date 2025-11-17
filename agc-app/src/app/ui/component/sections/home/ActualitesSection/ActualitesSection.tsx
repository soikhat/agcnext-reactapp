import { Typography } from "../../../../design-system/Typography/Typography";
import { Actualite } from "../../../../../../types/actualites";
import { mockActualites } from "../../../../../../lib/actualites/mocks";
import Image from "next/image";

interface ActualitesSectionProps {
  actualites?: Actualite[];
}

const ActualitesSection = ({
  actualites = mockActualites,
}: ActualitesSectionProps) => {
  const [articlePrincipal, ...articlesSecondaires] = actualites;

  if (!articlePrincipal) {
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <Typography
          variant="headingSection"
          as="h2"
          theme="black"
          className="flex-shrink-0"
        >
          À la Une
        </Typography>

        <Typography
          as="link"
          href="/actualites"
          variant="body-lg"
          theme="primary"
          weight="medium"
          className="group flex items-center gap-2 hover:gap-3 transition-all duration-200 hover:text-primary/80"
        >
          Voir toutes les actualités
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Typography>
      </header>

      {/* Layout principal : Article featured + Articles secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article principal (2 colonnes sur desktop) */}
        <article className="lg:col-span-2 group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          {/* Image principale */}
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={articlePrincipal.imageUrl}
              alt={articlePrincipal.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge catégorie */}
            <div className="absolute top-4 left-4">
              <Typography
                variant="caption1"
                theme="white"
                weight="medium"
                className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {articlePrincipal.category}
              </Typography>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="p-8">
            <Typography
              variant="headingM"
              weight="bold"
              theme="black"
              className="mb-4 group-hover:text-primary transition-colors duration-200"
            >
              {articlePrincipal.title}
            </Typography>

            <Typography
              variant="body-lg"
              theme="gray"
              className="mb-6 leading-relaxed"
            >
              {articlePrincipal.excerpt}
            </Typography>

            <div className="flex items-center justify-between">
              <Typography variant="body-sm" theme="gray" weight="medium">
                {articlePrincipal.date}
              </Typography>

              <Typography
                as="link"
                href={`/actualite/${articlePrincipal.slug}`}
                variant="body-base"
                theme="primary"
                weight="semibold"
                className="group/link flex items-center gap-2 hover:gap-3 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-primary/5"
              >
                Lire l'article
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Typography>
            </div>
          </div>
        </article>

        {/* Articles secondaires (1 colonne sur desktop) */}
        <aside className="flex flex-col gap-4">
          {articlesSecondaires.slice(0, 5).map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <Typography
                as="link"
                href={`/actualite/${article.slug}`}
                className="flex gap-4 p-4 hover:bg-gray-50/50 transition-colors duration-200"
              >
                {/* Image compacte */}
                <div className="flex-shrink-0 w-20 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>

                {/* Contenu compact */}
                <div className="flex-1 min-w-0">
                  <Typography
                    variant="caption1"
                    theme="secondary"
                    weight="medium"
                    className="uppercase tracking-wider mb-1 block"
                  >
                    {article.category}
                  </Typography>

                  <Typography
                    variant="body-sm"
                    weight="semibold"
                    theme="black"
                    className="mb-1 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-tight"
                  >
                    {article.title}
                  </Typography>

                  <Typography variant="caption2" theme="gray" className="block">
                    {article.date}
                  </Typography>
                </div>
              </Typography>
            </article>
          ))}

          {/* Lien "Plus d'actualités" si on a plus de 4 articles */}
          {actualites.length > 4 && (
            <div className="mt-2">
              <Typography
                as="link"
                href="/actualites"
                variant="body-sm"
                theme="primary"
                weight="medium"
                className="group flex items-center justify-center gap-2 py-3 px-4 border border-primary/20 rounded-xl hover:bg-primary/5 transition-all duration-200"
              >
                <span>Plus d'actualités</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Typography>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default ActualitesSection;

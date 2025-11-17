import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { servicesPageConfig } from "@/config/servicesPage.config";
import {
  RiCheckLine,
  RiCloseLine,
  RiArrowLeftLine,
  RiShareLine,
} from "react-icons/ri";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Trouver le produit par slug
  const product = servicesPageConfig.products.find(
    (p) => p.slug === params.slug
  );

  // Si le produit n'existe pas, afficher 404
  if (!product) {
    notFound();
  }

  // Trouver la catégorie
  const category = servicesPageConfig.categories.find(
    (c) => c.id === product.category
  );

  // Produits similaires (même catégorie)
  const relatedProducts = servicesPageConfig.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

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
            {category && (
              <>
                <span className="text-gray-600">{category.name}</span>
                <span className="text-gray-400">/</span>
              </>
            )}
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </CenteredSection>
      </FullSection>

      {/* Hero Product */}
      <FullSection className="py-12">
        <CenteredSection>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {product.popular && (
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Populaire
                  </span>
                )}
                {product.badge && (
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Infos principales */}
            <div className="space-y-6">
              <div>
                <Typography variant="caption2" className="text-primary mb-2">
                  {category?.name}
                </Typography>
                <Typography variant="headingS" className="mb-4">
                  {product.name}
                </Typography>
                <Typography variant="lead" theme="gray">
                  {product.shortDescription}
                </Typography>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl">
                <Typography variant="caption3" theme="gray" className="mb-2">
                  À partir de
                </Typography>
                <Typography variant="headingS" className="text-primary">
                  {product.price}
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/pages/contact?product=${product.slug}`}
                  className="flex-1"
                >
                  <Button variant="accent" size="large" className="w-full">
                    Demander un devis gratuit
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="large"
                  className="flex items-center gap-2"
                >
                  <RiShareLine size={20} />
                  Partager
                </Button>
              </div>

              <Link
                href="/pages/services"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <RiArrowLeftLine size={20} />
                Retour à tous les services
              </Link>
            </div>
          </div>
        </CenteredSection>
      </FullSection>

      {/* Description détaillée */}
      <FullSection className="py-12 bg-gray-50">
        <CenteredSection>
          <Typography variant="headingSection" className="mb-8">
            Description
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="text-lg leading-relaxed"
          >
            {product.description}
          </Typography>
        </CenteredSection>
      </FullSection>

      {/* Ce qui est couvert */}
      <FullSection className="py-12">
        <CenteredSection>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Garanties incluses */}
            <div>
              <Typography
                variant="headingSection"
                className="mb-6 text-green-700"
              >
                ✓ Ce qui est couvert
              </Typography>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <RiCheckLine className="text-green-600" size={16} />
                    </div>
                    <Typography variant="caption3">{feature}</Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            {product.notCovered.length > 0 && (
              <div>
                <Typography
                  variant="headingSection"
                  className="mb-6 text-red-700"
                >
                  ✗ Ce qui n'est pas couvert
                </Typography>
                <div className="space-y-4">
                  {product.notCovered.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <RiCloseLine className="text-red-600" size={16} />
                      </div>
                      <Typography variant="caption3">{item}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CenteredSection>
      </FullSection>

      {/* Avantages */}
      <FullSection className="py-12 bg-primary-50">
        <CenteredSection>
          <Typography variant="headingSection" className="mb-8 text-center">
            Pourquoi choisir cette assurance ?
          </Typography>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md"
              >
                <Typography variant="caption1" className="font-semibold">
                  {benefit}
                </Typography>
              </div>
            ))}
          </div>
        </CenteredSection>
      </FullSection>

      {/* Documents requis */}
      {product.documents && product.documents.length > 0 && (
        <FullSection className="py-12">
          <CenteredSection>
            <Typography variant="headingSection" className="mb-6">
              Documents à fournir
            </Typography>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <ul className="space-y-3">
                {product.documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-blue-600">📄</span>
                    <Typography variant="caption3">{doc}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </CenteredSection>
        </FullSection>
      )}

      {/* FAQ produit */}
      {product.faq && product.faq.length > 0 && (
        <FullSection className="py-12 bg-gray-50">
          <CenteredSection>
            <Typography variant="headingSection" className="mb-8">
              Questions fréquentes
            </Typography>
            <div className="space-y-4">
              {product.faq.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm cursor-pointer group"
                >
                  <summary className="font-semibold text-lg list-none flex items-center justify-between">
                    {item.question}
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <Typography variant="caption3" theme="gray" className="mt-4">
                    {item.answer}
                  </Typography>
                </details>
              ))}
            </div>
          </CenteredSection>
        </FullSection>
      )}

      {/* Produits similaires */}
      {relatedProducts.length > 0 && (
        <FullSection className="py-12">
          <CenteredSection>
            <Typography variant="headingSection" className="mb-8">
              Produits similaires
            </Typography>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/pages/services/${relatedProduct.slug}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <Typography variant="caption1" className="font-semibold mb-2">
                    {relatedProduct.name}
                  </Typography>
                  <Typography variant="caption3" theme="gray" className="mb-4">
                    {relatedProduct.shortDescription}
                  </Typography>
                  <Typography
                    variant="caption3"
                    className="text-primary font-semibold"
                  >
                    {relatedProduct.price}
                  </Typography>
                </Link>
              ))}
            </div>
          </CenteredSection>
        </FullSection>
      )}

      {/* CTA Final */}
      <FullSection className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <CenteredSection>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Typography variant="headingS" theme="white">
              Prêt à vous protéger avec {product.name} ?
            </Typography>
            <Typography variant="lead" theme="white" className="opacity-90">
              Obtenez votre devis personnalisé en moins de 2 minutes
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/pages/contact?product=${product.slug}`}>
                <Button
                  variant="accent"
                  size="large"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Demander un devis
                </Button>
              </Link>
              <Link href="/pages/contact">
                <Button
                  variant="outline"
                  size="large"
                  className="border-white text-white hover:bg-white/10"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </CenteredSection>
      </FullSection>
    </main>
  );
}

// Générer les routes statiques pour tous les produits
export async function generateStaticParams() {
  return servicesPageConfig.products.map((product) => ({
    slug: product.slug,
  }));
}

// Métadonnées dynamiques pour le SEO
export async function generateMetadata({ params }: ProductDetailPageProps) {
  const product = servicesPageConfig.products.find(
    (p) => p.slug === params.slug
  );

  if (!product) {
    return {
      title: "Produit non trouvé",
    };
  }

  return {
    title: `${product.name} - AGC Assurances`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.coverImage],
    },
  };
}

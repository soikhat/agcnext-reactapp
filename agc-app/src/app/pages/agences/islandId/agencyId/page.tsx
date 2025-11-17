import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { agencyPageConfig } from "@/config/agencyPage.config";
import { Agency } from "@/types/agency-type";
import AgencyBreadcrumb from "@/app/ui/component/sections/agency/AgencyBreadcrumb";
import AgencyDetailHero from "@/app/ui/component/sections/agency/AgencyDetailsHero";
import AgencyServices from "@/app/ui/component/sections/agency/AgencyServices";
//import AgencyMap from "@/components/AgencyMap";
//import AgencyContactCard from "@/components/AgencyContactCard";

interface PageProps {
  params: {
    islandId: string;
    agencyId: string;
  };
}

// Fonction pour récupérer l'agence
function getAgency(
  islandId: string,
  agencyId: string
): { agency: Agency; islandName: string } | null {
  const island = agencyPageConfig.islands.find((i) => i.id === islandId);
  if (!island) return null;

  const agency = island.agencies.find((a) => a.id === agencyId);
  if (!agency) return null;

  return { agency, islandName: island.name };
}

// Génération des métadonnées dynamiques
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = getAgency(params.islandId, params.agencyId);

  if (!data) {
    return {
      title: "Agence introuvable",
    };
  }

  return {
    title: `${data.agency.name} - ${data.islandName} | Nos Agences`,
    description: `Agence ${data.agency.name} située à ${
      data.agency.shortAddress
    }. ${data.agency.services.join(", ")}.`,
  };
}

// Génération des routes statiques
export async function generateStaticParams() {
  const params: { islandId: string; agencyId: string }[] = [];

  agencyPageConfig.islands.forEach((island) => {
    island.agencies.forEach((agency) => {
      params.push({
        islandId: island.id,
        agencyId: agency.id,
      });
    });
  });

  return params;
}

export default function AgencyDetailPage({ params }: PageProps) {
  const data = getAgency(params.islandId, params.agencyId);

  if (!data) {
    notFound();
  }

  const { agency, islandName } = data;

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Nos Agences", href: "/agences" },
    { label: islandName },
    { label: agency.name },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItems} />

      <AgencyDetailHero
        name={agency.name}
        islandName={islandName}
        image={agency.image}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <AgencyServices services={agency.services} />
            <AgencyMap coordinates={agency.coordinates} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AgencyContactCard agency={agency} />

            {/* Back Link */}
            <Link
              href="/agences"
              className="block text-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Voir toutes les agences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

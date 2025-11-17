import { Island } from "@/types/agency-type";
import AgencyCard from "@/app/ui/component/cards/AgencyCard/AgencyCard";

interface IslandSectionProps {
  island: Island;
}

export default function IslandSection({ island }: IslandSectionProps) {
  return (
    <section className="mb-16 last:mb-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{island.name}</h2>
        <div className="w-20 h-1 bg-secondary-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {island.agencies.map((agency) => (
          <AgencyCard key={agency.id} agency={agency} islandId={island.id} />
        ))}
      </div>
    </section>
  );
}

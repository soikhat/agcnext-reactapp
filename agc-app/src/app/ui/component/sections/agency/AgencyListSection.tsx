import { Island } from "@/types/agency-type";
import IslandSection from "./IslandsSection";

interface AgenciesListProps {
  islands: Island[];
}

export default function AgenciesList({ islands }: AgenciesListProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {islands.map((island) => (
        <IslandSection key={island.id} island={island} />
      ))}
    </div>
  );
}

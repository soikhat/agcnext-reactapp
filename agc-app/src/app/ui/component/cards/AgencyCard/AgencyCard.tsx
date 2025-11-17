import Link from "next/link";
import Image from "next/image";
import { Agency } from "@/types/agency-type";
import { MapPin, Phone, Mail } from "lucide-react";

interface AgencyCardProps {
  agency: Agency;
  islandId: string;
}

export default function AgencyCard({ agency, islandId }: AgencyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={agency.image}
          alt={agency.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{agency.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{agency.shortAddress}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <a
              href={`tel:${agency.phone}`}
              className="text-sm hover:text-primary-600 transition-colors"
            >
              {agency.phone}
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <a
              href={`mailto:${agency.email}`}
              className="text-sm hover:text-primary-600 transition-colors"
            >
              {agency.email}
            </a>
          </div>
        </div>

        <Link
          href={`/agences/${islandId}/${agency.id}`}
          className="block w-full bg-primary-600 hover:bg-secondary text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Voir les détails
        </Link>
      </div>
    </div>
  );
}
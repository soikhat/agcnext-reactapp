import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Agency } from '@/types/agency-type';

interface AgencyContactCardProps {
  agency: Agency;
}

export default function AgencyContactCard({ agency }: AgencyContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Informations de contact
      </h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Adresse</p>
              <p className="text-sm">{agency.address}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-3 text-gray-700">
            <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Téléphone</p>
              <a 
                href={`tel:${agency.phone}`}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {agency.phone}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start gap-3 text-gray-700">
            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900 mb-1">Email</p>
              <a 
                href={`mailto:${agency.email}`}
                className="text-sm text-blue-600 hover:text-blue-700 break-all"
              >
                {agency.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-start gap-3 text-gray-700 mb-4">
          <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
          <div className="flex-1">
            <p className="font-medium text-gray-900 mb-3">Horaires d'ouverture</p>
            <div className="space-y-2">
              {agency.hours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{schedule.day}</span>
                  <span className="font-medium text-gray-900">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        
        <a  href={`tel:${agency.phone}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Appeler l'agence
        </a>
        <Link
          href="/reservation"
          className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Réserver un véhicule
        </Link>
      </div>
    </div>
  );
}
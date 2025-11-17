import { CheckCircle } from "lucide-react";

interface AgencyServicesProps {
  services: string[];
}

export default function AgencyServices({ services }: AgencyServicesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

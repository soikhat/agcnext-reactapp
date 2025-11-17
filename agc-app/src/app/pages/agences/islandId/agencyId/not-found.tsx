import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Agence introuvable
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          L'agence que vous recherchez n'existe pas ou a été déplacée. Consultez
          notre liste complète d'agences.
        </p>
        <Link
          href="/agences"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Voir toutes nos agences
        </Link>
      </div>
    </div>
  );
}

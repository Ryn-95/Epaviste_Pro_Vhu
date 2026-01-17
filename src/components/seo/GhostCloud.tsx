import { MapPin } from 'lucide-react';

export default function GhostCloud({ city }: { city: string }) {
  // Liste de "faux" lieux réalistes pour le SEO
  const keywords = [
    `Centre-ville ${city}`, `Gare de ${city}`, `Zone Industrielle ${city}`,
    `Quartier de la Mairie ${city}`, `Sortie Autoroute ${city}`, `Avenue de la République ${city}`,
    `Rue Jean Jaurès ${city}`, `Parc d'activité ${city}`, `ZAC des Vignes ${city}`,
    `Quartier Nord ${city}`, `Quartier Sud ${city}`, `Route Nationale ${city}`,
    `Proche Collège ${city}`, `Parking Stade ${city}`, `Zone Commerciale ${city}`
  ];

  return (
    <section className="mt-12 border-t border-gray-100 pt-8 bg-gray-50 p-6 rounded-xl">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-gray-600">
          <span>Voir les zones d'intervention spécifiques à {city}</span>
          <span className="transition group-open:rotate-180">
            <MapPin className="h-4 w-4" />
          </span>
        </summary>
        <div className="text-xs text-gray-400 mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          {keywords.map((kw, i) => (
            <span key={i} className="block">• {kw}</span>
          ))}
          {/* Le keyword stuffing pur pour les robots */}
          <p className="col-span-full mt-4 opacity-50 text-[10px]">
            Intervention épaviste {city} rapide, enlèvement épave {city} gratuit,
            destruction voiture {city}, ferrailleur {city}, casse auto {city} agréée.
          </p>
        </div>
      </details>
    </section>
  );
}

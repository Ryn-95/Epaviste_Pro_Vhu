import Link from 'next/link';
import { TOP_CITIES } from '@/lib/seo-data';

type Props = {
  currentCity: string;
  currentDept: string;
};

export default function NearbyCities({ currentCity, currentDept }: Props) {
  // Simple algorithm: suggest other cities in the same department, excluding current
  const neighbors = TOP_CITIES
    .filter(c => c.dept === currentDept && c.name !== currentCity)
    .slice(0, 5); // Limit to 5

  if (neighbors.length === 0) return null;

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="w-2 h-8 bg-[#000091] rounded-full"></span>
        Intervention également disponible à proximité de {currentCity} :
      </h3>
      <div className="flex flex-wrap gap-3">
        {neighbors.map((city) => (
          <Link 
            key={city.name}
            href={`/epaviste/${city.dept}/${city.name.toLowerCase().replace(/ /g, '-')}`}
            className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
          >
            Épaviste {city.name}
          </Link>
        ))}
      </div>
      <p className="text-xs text-slate-400 mt-4 italic">
        Notre maillage local nous permet d'intervenir en moins de 30 minutes dans tout le département {currentDept}.
      </p>
    </div>
  );
}

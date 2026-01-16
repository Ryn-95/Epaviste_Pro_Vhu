import Link from 'next/link';
import NextImage from 'next/image';
import { ALL_CITIES, DEPT_NAMES } from '@/lib/all-cities';
import { slugifyCity } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/seo-data';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 text-xs border-t-4 border-[#000091] overflow-hidden pb-safe">
      {/* Texture Noise */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

      {/* Tricolor Stripe */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-blue-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-red-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Section: Identity & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-slate-800 pb-8 gap-8">
          <div className="max-w-xs">
            <div className="relative w-32 h-32 mb-4 -ml-2">
              <NextImage 
                src="/Logoepaviste1.png" 
                alt="Logo Épaviste Pro VHU Agréé Île-de-France" 
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-white font-black text-lg mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 inline-block"></span>
              Centre VHU Agréé
            </h4>
            <div className="bg-slate-900 p-3 border border-slate-800 mb-4">
              <p className="mb-1 text-slate-300 font-bold uppercase">Agrément Préfectoral</p>
              <p className="text-white font-mono text-sm">{COMPANY_INFO.certification}</p>
            </div>
            <p className="mb-4 leading-relaxed text-slate-500 text-justify">
              Service officiel d'enlèvement et de destruction de véhicules hors d'usage (VHU) en Île-de-France. 
              Installation Classée pour la Protection de l'Environnement (ICPE). 
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
               <img src="/logo-etat.svg" alt="République Française" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
               <img src="/logo-ademe.svg" alt="ADEME" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
               <img src="/logo-iso.svg" alt="ISO 14001" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
               <img src="/logo-ecolo.svg" alt="Recyclage" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div className="flex gap-12">
             <div>
                <h5 className="text-white font-bold mb-3 uppercase border-b border-slate-700 pb-1">Information Légale</h5>
                <ul className="space-y-2">
                   <li><Link href="/mentions-legales" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Mentions Légales</Link></li>
                   <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Confidentialité (RGPD)</Link></li>
                   <li><Link href="/cgv" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> CGU / CGV</Link></li>
                   <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Contact</Link></li>
                </ul>
             </div>
             <div>
                <h5 className="text-white font-bold mb-3 uppercase border-b border-slate-700 pb-1">Services</h5>
                <ul className="space-y-2">
                   <li><Link href="/zones-intervention" className="hover:text-white transition-colors flex items-center gap-2 font-bold text-blue-400"><span>›</span> Zones d'Intervention</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Enlèvement Gratuit</Link></li>
                   <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span>›</span> Prime à la conversion</Link></li>
                </ul>
             </div>
             <div>
                <h5 className="text-white font-bold mb-3 uppercase border-b border-slate-700 pb-1">Contact Direct</h5>
                <ul className="space-y-2 text-slate-400">
                   <li className="flex flex-col">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Adresse :</span>
                      <span className="text-white">{COMPANY_INFO.address}</span>
                   </li>
                   <li className="flex flex-col mt-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Téléphone :</span>
                      <a href={COMPANY_INFO.phoneLink} className="text-white hover:text-[#E1000F] transition-colors font-bold">{COMPANY_INFO.phone}</a>
                   </li>
                   <li className="flex flex-col mt-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold">Email :</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">{COMPANY_INFO.email}</a>
                   </li>
                </ul>
             </div>
          </div>
        </div>

        {/* Zones d'intervention (Clean & SEO Friendly) */}
        <div className="mb-12">
          <h4 className="text-white font-bold text-sm mb-6 uppercase border-l-4 border-blue-600 pl-3">
            Zones d'intervention principales (Île-de-France et alentours)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-8">
             {Object.entries(ALL_CITIES).map(([deptCode, cities]) => (
                <div key={deptCode} className="space-y-2">
                   <h5 className="text-slate-300 font-bold border-b border-slate-800 pb-1 mb-2 text-[10px] uppercase tracking-wider flex justify-between items-center">
                      <span>{DEPT_NAMES[deptCode]} ({deptCode})</span>
                   </h5>
                   <ul className="space-y-1">
                      {/* Top 5 Cities Only */}
                      {cities.slice(0, 5).map(city => (
                         <li key={city}>
                            <Link 
                              href={`/epaviste/${deptCode}/${slugifyCity(city)}`} 
                              className="block hover:text-blue-400 transition-colors truncate text-[11px] text-slate-500 hover:underline" 
                              title={`Épaviste ${city}`}
                            >
                               {city}
                            </Link>
                         </li>
                      ))}
                   </ul>
                   <Link 
                      href={`/zones-intervention#dept-${deptCode}`}
                      className="inline-block text-[10px] font-bold text-blue-500 hover:text-blue-300 mt-2 uppercase tracking-wide"
                   >
                      » Voir toutes les villes ({deptCode})
                   </Link>
                </div>
             ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-600 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Centre VHU Agréé par la Préfecture.</p>
          <div className="flex gap-4 grayscale opacity-50 hover:opacity-100 transition-opacity">
            <span className="border border-slate-700 px-2 py-1 text-[10px] font-bold">AGRÉÉ VHU</span>
            <span className="border border-slate-700 px-2 py-1 text-[10px] font-bold">QUALICERT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

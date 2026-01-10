import { COMPANY_INFO } from '@/lib/seo-data';
import Link from 'next/link';

export default function ContentSilo({ city }: { city?: string }) {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Column */}
        <div className="lg:w-2/3 space-y-12">
          
          <article className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Législation VHU {city ? `à ${city}` : ''} : Cadre Réglementaire
            </h2>
            <div className="bg-slate-50 border-l-4 border-[#000091] p-6 mb-6">
              <p className="text-slate-800 font-medium leading-relaxed m-0">
                <strong>Article R.543-156 du Code de l'environnement :</strong> La destruction des véhicules hors d'usage est une obligation légale. {city ? `Les habitants de ${city}` : "Tout détenteur"} doit remettre son véhicule à un centre VHU agréé pour dépollution et broyage.
              </p>
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-4 text-justify">
              En tant que centre agréé <strong>{COMPANY_INFO.certification}</strong>, nous assurons la traçabilité complète de la destruction. L'abandon d'épave (délit de pollution) est sanctionné par l'article L.541-46 du Code de l'environnement (2 ans de prison / 75 000 € d'amende).
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#000091] inline-block"></span>
              Protocole de Dépollution (Directive 2000/53/CE)
            </h3>
            <ul className="list-none pl-0 space-y-2 border-t border-slate-200 pt-4">
              <li className="flex gap-4 items-start">
                 <span className="font-mono text-[#000091] font-bold">01.</span>
                 <span>Extraction des fluides polluants (huiles, liquides de frein, refroidissement).</span>
              </li>
              <li className="flex gap-4 items-start">
                 <span className="font-mono text-[#000091] font-bold">02.</span>
                 <span>Neutralisation des éléments pyrotechniques (airbags, prétensionneurs).</span>
              </li>
              <li className="flex gap-4 items-start">
                 <span className="font-mono text-[#000091] font-bold">03.</span>
                 <span>Démontage des pièces pour réemploi (économie circulaire).</span>
              </li>
            </ul>
          </article>
        </div>

        {/* Sticky Sidebar Menu */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-6 border border-slate-300">
              <h4 className="font-black text-lg mb-4 text-slate-900 uppercase border-b border-slate-200 pb-2">
                Couverture Territoriale
              </h4>
              <ul className="space-y-0 text-sm font-medium text-slate-600 divide-y divide-slate-100">
                <li className="flex items-center justify-between py-2">
                  <span>75 - Paris</span>
                  <span className="text-[#000091] font-bold">QUOTIDIEN</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span>92 - Hauts-de-Seine</span>
                  <span className="text-[#000091] font-bold">QUOTIDIEN</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span>93 - Seine-Saint-Denis</span>
                  <span className="text-[#000091] font-bold">QUOTIDIEN</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span>94 - Val-de-Marne</span>
                  <span className="text-[#000091] font-bold">QUOTIDIEN</span>
                </li>
                <li className="flex items-center justify-between py-2">
                  <span>95 - Val-d'Oise</span>
                  <span className="text-[#000091] font-bold">QUOTIDIEN</span>
                </li>
                 <li className="flex items-center justify-between py-2">
                  <span>78 - Yvelines</span>
                  <span className="text-slate-400">SUR RDV</span>
                </li>
                 <li className="flex items-center justify-between py-2">
                  <span>91 - Essonne</span>
                  <span className="text-slate-400">SUR RDV</span>
                </li>
                 <li className="flex items-center justify-between py-2">
                  <span>77 - Seine-et-Marne</span>
                  <span className="text-slate-400">SUR RDV</span>
                </li>
              </ul>
              <div className="mt-6">
                <a href={COMPANY_INFO.phoneLink} className="block w-full text-center bg-[#000091] hover:bg-blue-900 text-white font-bold py-4 text-sm uppercase tracking-wider transition-colors">
                  CONTACTER LE CENTRE
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6">
              <h4 className="font-bold text-sm mb-4 uppercase text-slate-500">Permanence Téléphonique</h4>
              <div className="space-y-2 text-sm font-mono text-slate-900">
                <div className="flex justify-between">
                  <span>LUN - VEN</span>
                  <span>08:00 - 22:00</span>
                </div>
                 <div className="flex justify-between">
                  <span>SAMEDI</span>
                  <span>08:00 - 20:00</span>
                </div>
                 <div className="flex justify-between">
                  <span>DIMANCHE</span>
                  <span>09:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

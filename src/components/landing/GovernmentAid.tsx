import React from 'react';
import { Euro, AlertTriangle, FileText, ExternalLink } from 'lucide-react';

export default function GovernmentAid() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase flex items-center gap-3 mb-2">
              <span className="bg-blue-600 text-white p-2 block">
                <Euro className="w-6 h-6" />
              </span>
              Dispositifs d'Aide de l'État 2026
            </h2>
            <p className="text-slate-600 font-medium">
              Votre destruction de véhicule peut vous rendre éligible à la <strong>Prime à la Conversion</strong>.
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-red-600 p-4 shadow-sm max-w-md">
             <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                   <strong>ATTENTION ZFE-m :</strong> Les restrictions de circulation dans le Grand Paris s'intensifient. Détruire un véhicule Crit'Air 3, 4 ou 5 est fortement recommandé avant les nouvelles sanctions.
                </div>
             </div>
          </div>
        </div>

        {/* Official Table */}
        <div className="overflow-x-auto bg-white border border-slate-300 shadow-sm mb-6">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-xs border-b border-slate-300">
              <tr>
                <th className="px-6 py-3 border-r border-slate-300">Type de Véhicule Acheté</th>
                <th className="px-6 py-3 border-r border-slate-300">Revenu Fiscal &lt; 6 358€</th>
                <th className="px-6 py-3 border-r border-slate-300">Revenu Fiscal &lt; 14 089€</th>
                <th className="px-6 py-3">Revenu Fiscal &gt; 14 089€</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 font-bold border-r border-slate-200">Voiture Électrique / Hydrogène</td>
                <td className="px-6 py-4 text-green-700 font-bold border-r border-slate-200">5 000 €</td>
                <td className="px-6 py-4 text-green-700 font-bold border-r border-slate-200">1 500 €</td>
                <td className="px-6 py-4 text-slate-500 font-medium">Non éligible</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold border-r border-slate-200">Voiture Crit'Air 1 (Essence/Hybride)</td>
                <td className="px-6 py-4 text-green-700 font-bold border-r border-slate-200">3 000 €</td>
                <td className="px-6 py-4 text-green-700 font-bold border-r border-slate-200">1 500 €</td>
                <td className="px-6 py-4 text-slate-500 font-medium">Non éligible</td>
              </tr>
              <tr>
                 <td className="px-6 py-4 font-bold border-r border-slate-200 bg-slate-50">Surprime ZFE (Grand Paris)</td>
                 <td className="px-6 py-4 text-blue-800 font-bold border-r border-slate-200 bg-slate-50">+ 1 000 €</td>
                 <td className="px-6 py-4 text-blue-800 font-bold border-r border-slate-200 bg-slate-50">+ 1 000 €</td>
                 <td className="px-6 py-4 text-blue-800 font-bold bg-slate-50">+ 1 000 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
           <FileText className="w-4 h-4" />
           <span>Source : Décret n° 2022-1761 du 30 décembre 2022 relatif aux aides à l'acquisition ou à la location de véhicules peu polluants.</span>
           <a href="#" className="ml-auto flex items-center gap-1 text-blue-700 hover:underline font-bold">
              Simuler ma prime <ExternalLink className="w-3 h-3" />
           </a>
        </div>

      </div>
    </section>
  );
}

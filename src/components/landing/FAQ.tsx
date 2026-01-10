import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "GRATUITÉ DU SERVICE",
    sub: "Conditions d'application de l'article R.543-156",
    a: "L'enlèvement est STRICTEMENT GRATUIT pour tout véhicule complet (moteur, pot catalytique, roues). Aucune somme ne vous sera demandée. Nous nous rémunérons uniquement via la valorisation des matières premières (acier, aluminium) en centre de recyclage agréé."
  },
  {
    q: "DOCUMENTS OBLIGATOIRES",
    sub: "Liste des pièces à fournir au chauffeur",
    a: "1. Carte grise originale du véhicule (barrée, signée, mention 'cédé pour destruction'). 2. Pièce d'identité du titulaire (CNI, Passeport). 3. Certificat de non-gage (Certificat de Situation Administrative) de moins de 15 jours."
  },
  {
    q: "CAS PARTICULIERS (GAGE / PERTE CG)",
    sub: "Procédures dérogatoires",
    a: "VÉHICULE GAGÉ : Destruction possible uniquement si le gage n'est pas une opposition au transfert de propriété (huissier/trésor public). CARTE GRISE PERDUE : Vous devez fournir une déclaration de perte (Formulaire Cerfa n°13753*04) visée par le commissariat ou la gendarmerie."
  },
  {
    q: "ACCESSIBILITÉ & INTERVENTION",
    sub: "Moyens techniques mis en œuvre",
    a: "Nos camions sont équipés pour tous types d'interventions : Parking sous-terrain (hauteur 1.90m), véhicules sans roues, véhicules incendiés, sortie de fourrière. Intervention possible le samedi et dimanche matin sur demande préfectorale ou urgence voirie."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 pb-4 border-b-2 border-[#000091] flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase">Foire Aux Questions</h2>
            <p className="text-slate-600 text-sm mt-1">Base de connaissance réglementaire et technique</p>
          </div>
          <div className="hidden md:block bg-blue-50 text-[#000091] px-3 py-1 text-xs font-bold border border-blue-100">
            Dernière mise à jour : Janvier 2026
          </div>
        </div>

        <div className="grid gap-4">
          {FAQS.map((item, idx) => (
            <details key={idx} className="group border border-slate-200 bg-slate-50 open:bg-white open:border-blue-800 open:ring-1 open:ring-blue-800 transition-all duration-200">
              <summary className="flex justify-between items-center p-4 cursor-pointer list-none hover:bg-white transition-colors">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-wide flex items-center gap-2">
                    <span className="text-[#000091] font-black">Q{idx + 1}.</span> {item.q}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium pl-8 hidden md:block">{item.sub}</p>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 group-open:text-[#000091] transition-transform" />
              </summary>
              <div className="px-4 pb-4 pl-12 text-slate-700 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs md:text-sm flex gap-3">
          <span className="text-2xl">💡</span>
          <p>
            <strong>Besoin d'une assistance juridique ?</strong> Pour toute question complexe concernant une succession, un véhicule étranger ou diplomatique, veuillez contacter notre service conformité au 01 88 33 22 11.
          </p>
        </div>
      </div>
    </section>
  );
}

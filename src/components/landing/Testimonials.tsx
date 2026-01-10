import React from 'react';
import { Star, FileText } from 'lucide-react';

const REVIEWS = [
  {
    id: "REF-29381",
    name: "Thomas D.",
    city: "92100 BOULOGNE",
    text: "Procédure respectée. Enlèvement effectué à l'heure convenue. Remise du Cerfa immédiate.",
    rating: 5,
    date: "02/01/2026"
  },
  {
    id: "REF-29344",
    name: "Sarah L.",
    city: "93200 ST-DENIS",
    text: "Véhicule en sous-sol (-2). Intervention technique réussie avec dépanneuse adaptée. Aucun frais.",
    rating: 5,
    date: "28/12/2025"
  },
  {
    id: "REF-29102",
    name: "Karim B.",
    city: "95100 ARGENTEUIL",
    text: "Traitement rapide du dossier administratif. Explications claires sur la prime à la conversion.",
    rating: 5,
    date: "20/12/2025"
  },
  {
    id: "REF-28993",
    name: "Marie P.",
    city: "75015 PARIS",
    text: "Enlèvement véhicule non-roulant. Conformité totale avec la législation.",
    rating: 5,
    date: "15/12/2025"
  }
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-16 bg-white border-t-8 border-[#000091]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-slate-900 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
              Avis <span className="text-[#000091]">Certifiés</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">
              Retours d'intervention en temps réel
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0 bg-[#000091] text-white px-6 py-3 shadow-[4px_4px_0_#000] transform -skew-x-6">
            <span className="text-xs font-black uppercase tracking-wider skew-x-6">Note Globale</span>
            <div className="flex text-[#E1000F] skew-x-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-xl font-black skew-x-6">4.9/5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-6 border-l-4 border-[#E1000F] shadow-md hover:shadow-xl transition-all relative">
              <div className="absolute top-2 right-2 opacity-10">
                 <FileText className="w-12 h-12 text-slate-900" />
              </div>
              
              <div className="flex flex-col mb-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Dossier {review.id}</span>
                <div className="flex text-[#E1000F]">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
              
              <p className="text-slate-800 text-sm font-medium italic leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-end">
                <div>
                  <span className="block font-black text-sm text-slate-900 uppercase">{review.name}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 bg-[#000091] rounded-full"></span> {review.city}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

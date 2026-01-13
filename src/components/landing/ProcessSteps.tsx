import React from 'react';
import { Phone, FileCheck, Truck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    id: "01",
    icon: Phone,
    title: "PRISE DE RENDEZ-VOUS",
    desc: "Contactez notre standard ou remplissez le formulaire Cerfa pré-rempli en ligne.",
    legal: "Art. R.543-156",
    details: "Disponibilité immédiate"
  },
  {
    id: "02",
    icon: Truck,
    title: "ENLÈVEMENT PHYSIQUE",
    desc: "Intervention de l'épaviste agréé sur le lieu de stationnement (domicile, voie publique, parking).",
    legal: "Art. R.543-157",
    details: "Intervention < 24h"
  },
  {
    id: "03",
    icon: FileCheck,
    title: "CERTIFICAT DE DESTRUCTION",
    desc: "Remise immédiate du Cerfa 14365*01 pour résiliation d'assurance et annulation préfecture.",
    legal: "Art. R.322-9",
    details: "Document Officiel"
  }
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-slate-900 border-y-4 border-[#E1000F] relative overflow-hidden">
      {/* Industrial pattern background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter transform -skew-x-6">
             Comment ça <span className="text-[#E1000F]">Marche ?</span>
           </h2>
           <p className="text-slate-400 mt-4 font-medium uppercase tracking-widest">Procédure simplifiée en 3 étapes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="group bg-white p-6 md:p-8 relative transform hover:-translate-y-2 transition-transform duration-300 border-b-8 border-[#000091] hover:border-[#E1000F] mt-8 md:mt-0">
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-10">
                <span className="font-black text-3xl md:text-4xl text-slate-300 group-hover:text-[#E1000F] transition-colors">{step.id}</span>
              </div>
              
              <div className="flex flex-col h-full relative z-0">
                <div className="w-16 h-16 bg-[#000091] group-hover:bg-[#E1000F] text-white flex items-center justify-center shadow-lg mb-6 skew-x-[-10deg] transition-colors">
                  <step.icon className="w-8 h-8 skew-x-[10deg]" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 uppercase leading-none mb-4 italic">{step.title}</h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-bold">
                  {step.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t-2 border-dashed border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase bg-slate-100 px-2 py-1 text-slate-500">
                      {step.legal}
                    </span>
                    <span className="text-xs font-black text-[#E1000F] uppercase flex items-center gap-1">
                      {step.details} <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action bar */}
        <div className="bg-[#E1000F] p-4 text-center mt-12 transform -skew-x-2 border-4 border-black shadow-[8px_8px_0_#000]">
          <p className="text-sm md:text-lg text-white font-bold uppercase tracking-wide">
            <span className="font-black text-black bg-yellow-400 px-2 mr-2">IMPORTANT</span> 
            Le certificat de destruction est remis <span className="underline decoration-black">immédiatement</span> sur place.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Car, Euro, AlertTriangle, Shield, Leaf, Clock, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Car,
    title: "ÉPAVISTE PRO VHU",
    desc: "Enlèvement d'épave gratuit par un professionnel agréé.",
    badge: "GRATUIT"
  },
  {
    icon: Euro,
    title: "RACHAT VÉHICULE",
    desc: "Rachat cash de votre véhicule roulant ou accidenté.",
    badge: "SUR DEVIS"
  },
  {
    icon: AlertTriangle,
    title: "ACCÈS DIFFICILE",
    desc: "Parking souterrain, sans roues, accidenté.",
    badge: "SUR MESURE"
  },
  {
    icon: Shield,
    title: "FORMALITÉS",
    desc: "Certificat de non-gage et destruction inclus.",
    badge: "INCLUS"
  },
  {
    icon: Leaf,
    title: "RECYCLAGE",
    desc: "Dépollution aux normes ISO 14001.",
    badge: "AGRÉÉ"
  },
  {
    icon: Clock,
    title: "URGENCE 24/7",
    desc: "Astreinte nuit et week-end.",
    badge: "RAPIDE"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter transform -skew-x-3 inline-block border-b-8 border-[#E1000F] pb-2">
            Services <span className="text-[#000091]">Agréés VHU</span>
          </h2>
          <p className="mt-6 text-xl font-bold text-slate-500 uppercase tracking-widest">Intervention rapide Île-de-France</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 border-2 border-slate-200 hover:border-[#E1000F] shadow-sm hover:shadow-[8px_8px_0_#E1000F] transition-all duration-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6 border-b-2 border-slate-100 pb-4">
                <div className="w-14 h-14 bg-[#000091] group-hover:bg-[#E1000F] text-white flex items-center justify-center rounded-sm shadow-md transition-colors transform -rotate-3 group-hover:rotate-0">
                  <service.icon className="w-7 h-7" />
                </div>
                <span className={`text-xs font-black px-3 py-1 uppercase tracking-wider skew-x-[-10deg] ${
                  service.badge === 'GRATUIT' ? 'bg-[#E1000F] text-white shadow-sm' : 
                  'bg-slate-900 text-white'
                }`}>
                  {service.badge}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase italic">{service.title}</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="tel:0695297785" className="flex items-center text-[#000091] group-hover:text-[#E1000F] text-sm font-black uppercase tracking-wide border-t-2 border-dotted border-slate-200 pt-4 cursor-pointer">
                Demander <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { deptMap } from '@/lib/idf-data';
import { MapPin, ArrowRight } from 'lucide-react';

export default function DepartmentsGrid() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Zones d'Intervention <span className="text-[#000091]">Île-de-France</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Notre service d'épaviste agréé couvre l'ensemble de la région parisienne. 
            Déplacement gratuit dans tous les départements pour l'enlèvement de votre véhicule.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(deptMap).map(([code, info]) => (
            <Link 
              key={code} 
              href={`/epaviste/${code}`}
              className="group bg-white p-6 rounded-sm shadow-sm border border-slate-200 hover:shadow-md hover:border-[#000091] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-[#000091] rounded-full flex items-center justify-center font-black text-lg group-hover:bg-[#000091] group-hover:text-white transition-colors">
                    {code}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#000091] transition-colors">
                    {info.name}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#000091] transition-colors opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 duration-300" />
              </div>
              
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <span>{info.topCities.slice(0, 3).join(', ')}...</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-sm font-bold text-slate-500 group-hover:text-[#000091] uppercase tracking-wide flex items-center gap-1">
                  Épaviste {info.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/zones-intervention" 
            className="inline-flex items-center gap-2 font-bold text-[#000091] hover:text-blue-700 uppercase tracking-wide border-b-2 border-[#000091] pb-1 hover:border-blue-700 transition-colors"
          >
            Voir toutes les villes d'intervention
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, ShieldAlert, Truck, CheckCircle, Clock, ChevronRight, FileCheck, AlertTriangle, FileText } from 'lucide-react';
import { getDeptInfo, formatCityName } from '@/lib/idf-data';
import Link from 'next/link';
import CitySEOContent from '@/components/landing/CitySEOContent';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Header from '@/components/landing/Header';

// Fonction pour la date (Hack Fraîcheur)
const getDynamicDate = () => {
  return new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
};

type Props = {
  params: { dept: string; ville: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = formatCityName(params.ville);
  
  return {
    title: `Épaviste Agréé ${city} (Gratuit) - Centre VHU Agréé`,
    description: `Service d'enlèvement d'épave gratuit à ${city} (${params.dept}). Centre VHU Agréé Préfecture. Destruction officielle, certificat Cerfa remis sur place.`,
    alternates: {
      canonical: `https://epaviste-agree-idf.fr/epaviste/${params.dept}/${params.ville}`,
    },
  };
}

export default function CityPage({ params }: Props) {
  const city = formatCityName(params.ville);
  const deptInfo = getDeptInfo(params.dept);
  const zipPrefix = params.dept;
  const today = getDynamicDate();

  return (
    <div className="bg-white font-sans text-slate-900">
      <LocalBusinessSchema city={city} />
      <Header />
      
      {/* 1. HEADER URGENCE STICKY */}
      <div className="bg-blue-950 text-white py-3 sticky top-0 z-50 shadow-xl border-b-4 border-red-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col leading-none">
             <span className="text-[10px] opacity-75 uppercase tracking-wider">Centre VHU Agréé État</span>
             <span className="font-bold text-sm md:text-lg flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               {city.toUpperCase()} ({zipPrefix})
             </span>
          </div>
          <a href="tel:0183621145" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-black text-sm md:text-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105">
            <Phone size={20} className="animate-wiggle" /> 01 83 62 11 45
          </a>
        </div>
      </div>

      {/* 2. HERO SECTION "GOUVERNEMENTALE" */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-12 pb-20 overflow-hidden">
        {/* Fond décoratif subtil */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 opacity-50 skew-x-12 translate-x-20"></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Colonne Gauche : Argumentaire */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-200 shadow-sm">
              <ShieldAlert size={14} /> Service Officiel de Destruction VHU
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Épaviste Agréé à <span className="text-blue-700">{city}</span> <span className="text-slate-400 font-normal">({zipPrefix})</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Intervention <strong>100% Gratuite</strong> et immédiate sur le secteur de {city}.
              <br className="hidden md:block" />
              Nous assurons la destruction administrative auprès de la <strong>{deptInfo.prefecture}</strong>.
              <span className="block mt-4 text-sm bg-amber-50 text-amber-800 p-3 rounded-lg border-l-4 border-amber-500 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span><strong>Spécial {deptInfo.name} :</strong> {deptInfo.risk}. {deptInfo.argument}</span>
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0183621145" className="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-center shadow-blue-200 shadow-xl transition flex items-center justify-center gap-2">
                <Truck /> ENLÈVEMENT GRATUIT
              </a>
              <a href="#procedure" className="flex-1 bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-center transition">
                DÉMARCHES
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-6 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-600"/> Agréé Préfecture</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-600"/> Cerfa Fourni</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-600"/> Recyclage 95%</span>
            </div>
          </div>

          {/* Colonne Droite : Formulaire Flottant */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 relative">
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md transform rotate-3">
              URGENCE {today.split(' ')[2]}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Demande d'enlèvement</h3>
            <p className="text-sm text-slate-500 mb-6">Réponse immédiate pour {city} et alentours.</p>
            
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase ml-1">Lieu du véhicule</label>
                <div className="relative mt-1">
                  <MapPin size={18} className="absolute left-3 top-3 text-slate-400" />
                  <input type="text" defaultValue={city} className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase ml-1">Téléphone</label>
                <div className="relative mt-1">
                  <Phone size={18} className="absolute left-3 top-3 text-slate-400" />
                  <input type="tel" placeholder="06 12 34 56 78" className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                <CheckCircle size={24} /> VALIDER MA DEMANDE
              </button>
              
              <p className="text-[10px] text-center text-slate-400 mt-2">
                <ShieldAlert size={10} className="inline mr-1" />
                Vos données restent confidentielles. Rappel sous 15 min.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 3. SEO Content with Dynamic City - EXCLUSIVE CONTENT */}
      <CitySEOContent city={city} deptCode={params.dept} deptName={deptInfo.name} />
    </div>
  );
}

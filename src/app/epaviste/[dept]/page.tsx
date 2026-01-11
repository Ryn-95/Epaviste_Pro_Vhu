import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { getDeptInfo } from '@/lib/idf-data';
import { MapPin, Phone, ShieldCheck, Truck, Clock, AlertTriangle, FileText, CheckCircle, Navigation } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    dept: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const deptInfo = getDeptInfo(params.dept);
  return {
    title: `Épaviste Agréé Préfecture ${deptInfo.name} (${params.dept}) - Enlèvement Gratuit`,
    description: `Service d'enlèvement d'épave gratuit dans le ${params.dept} (${deptInfo.name}). Agréé VHU Préfecture. Intervention rapide sur ${deptInfo.highways}. Certificat de destruction immédiat.`,
  };
}

export default function DepartmentPage({ params }: PageProps) {
  const deptInfo = getDeptInfo(params.dept);
  const deptCode = params.dept;

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-20">
      <Header />

      {/* HERO SECTION - LOCAL SEO OPTIMIZED */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tow-truck-night.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <MapPin size={16} />
              Zone d'intervention : {deptInfo.name}
            </div>
            <h1 className="font-serif text-3xl lg:text-5xl font-black leading-tight mb-6">
              Épaviste Agréé Préfecture <br/>
              <span className="text-red-500">{deptInfo.prefectureCity || deptInfo.name} ({deptCode})</span>
              <span className="block text-2xl lg:text-3xl text-slate-400 font-sans font-normal mt-4">
                Intervention Gratuite 7j/7
              </span>
            </h1>
            
            {/* LOCAL DATA INJECTION */}
            <div className="bg-slate-800/50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 backdrop-blur-sm">
              <p className="text-lg text-slate-300 leading-relaxed italic">
                "{deptInfo.terrain_text ? (
                  deptInfo.terrain_text
                ) : (
                  <>
                    Nos dépanneuses circulent en permanence sur les axes <span className="text-white font-bold not-italic">{deptInfo.highways}</span> pour rejoindre la <span className="text-white font-bold not-italic">{deptInfo.prefecture}</span> et les centres VHU partenaires.
                  </>
                )}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0695297785" className="bg-[#E1000F] hover:bg-[#b9000c] text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(225,0,15,0.4)] flex items-center justify-center gap-3">
                <Phone size={24} />
                Enlèvement Gratuit
              </a>
              <a href="#villes" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide transition-all flex items-center justify-center gap-3">
                <MapPin size={24} />
                Voir ma ville
              </a>
            </div>
          </div>

          {/* ARGUMENTAIRE SPECIFIQUE DEPT */}
          <div className="bg-white text-slate-900 p-8 rounded-sm shadow-2xl border-t-4 border-red-600">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-red-600" size={32} />
              Spécialiste {deptInfo.name}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Problématique locale : {deptInfo.risk}</h4>
                  <p className="text-slate-600 text-sm mt-1">{deptInfo.argument}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Démarches Préfecture Simplifiées</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Nous gérons la destruction administrative directement avec la {deptInfo.prefecture}.
                    Certificat de cession remis sur place.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg text-green-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Intervention Rapide</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Présence quotidienne sur {deptInfo.highways}. Arrivée en moins de 45 min.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITY CLUSTER GRID - INTERNAL MESHING */}
      <section id="villes" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Intervention dans tout le {deptInfo.name} ({deptCode})
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Retrouvez notre service d'épaviste gratuit dans les principales villes du département. 
            Cliquez sur votre ville pour plus de détails.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deptInfo.topCities.map((city, index) => (
            <Link 
              key={index}
              href={`/epaviste/${deptCode}/${city.toLowerCase().replace(/ /g, '-').replace(/é/g, 'e').replace(/è/g, 'e').replace(/â/g, 'a')}`}
              className="group bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Navigation size={16} className="text-slate-400 group-hover:text-red-500 transition-colors" />
                <span className="font-bold text-slate-700 group-hover:text-red-700 transition-colors text-sm">
                  {city}
                </span>
              </div>
              <CheckCircle size={14} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 italic mb-6">
            * Votre ville n'est pas dans la liste ? Nous intervenons partout dans le {deptCode}.
          </p>
          <a href="tel:0183621145" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded font-bold hover:bg-slate-800 transition-colors">
            <Phone size={18} />
            Appeler pour confirmer
          </a>
        </div>
      </section>
    </div>
  );
}

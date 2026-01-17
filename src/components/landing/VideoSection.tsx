import React from 'react';
import { Cog, Recycle, CheckCircle2 } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="bg-slate-900 py-16 border-t-4 border-[#E1000F] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#E1000F] p-3 text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              <Cog size={32} className="animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                Destruction <span className="text-[#E1000F]">VHU</span>
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                Processus de recyclage agréé
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase bg-green-400/10 px-3 py-1 border border-green-400/20 rounded">
            <Recycle size={16} />
            <span>95% de recyclage garanti</span>
          </div>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {/* Video 1 */}
          <div className="group relative bg-black border border-slate-700 shadow-2xl rounded-sm overflow-hidden">
             <div className="absolute top-0 left-0 bg-[#E1000F] text-white text-xs font-bold px-3 py-1 z-10 uppercase">
                Broyeur Industriel
             </div>
             <video 
                className="w-full h-full object-cover aspect-video"
                controls
                playsInline
                preload="auto"
                poster="/epaviste-1.jpg"
             >
                <source src="/videos/Ecrasementvoiture.mp4#t=0,10" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
             </video>
             <div className="bg-slate-800 p-4 border-t border-slate-700">
                <h3 className="font-bold text-lg uppercase flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-green-500" />
                   Compactage Véhicule
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                   Réduction du volume des épaves pour le transport vers la fonderie.
                </p>
             </div>
          </div>

          {/* Video 2 */}
          <div className="group relative bg-black border border-slate-700 shadow-2xl rounded-sm overflow-hidden">
             <div className="absolute top-0 left-0 bg-[#E1000F] text-white text-xs font-bold px-3 py-1 z-10 uppercase">
                Traitement VHU
             </div>
             <video 
                className="w-full h-full object-cover aspect-video"
                controls
                preload="metadata"
                poster="/wrecked-car.jpg"
             >
                <source src="/videos/Ecrasementvoiture2.mp4#t=0,3" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
             </video>
             <div className="bg-slate-800 p-4 border-t border-slate-700">
                <h3 className="font-bold text-lg uppercase flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-green-500" />
                   Destruction Finale
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                   Broyage complet et séparation des matières (ferraille, plastique, verre).
                </p>
             </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wider">
               * Vidéos réelles de nos centres partenaires agréés VHU
            </p>
        </div>
      </div>
    </section>
  );
}

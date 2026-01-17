import React from 'react';
import LeadForm from './LeadForm';
import { ShieldCheck, Clock, Phone, AlertTriangle, FileText, Truck, Wrench, Siren } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/seo-data';

export default function ModernHero({ city }: { city?: string }) {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden w-full">
      
      {/* BACKGROUND IMMERSIF "TERRAIN" */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/85 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-blue-950/60 z-10 mix-blend-color" />
        <div 
          className="w-full h-full bg-cover bg-center opacity-60 grayscale-[30%] contrast-125"
          style={{ backgroundImage: "url('/hero-tow.jpg')" }}
        />
        {/* TEXTURE BRUIT */}
        <div className="absolute inset-0 bg-noise z-10 opacity-30 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pt-[clamp(6rem,15vh,9rem)] pb-12 lg:pt-36 lg:pb-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* GAUCHE : AUTORITÉ & RIGUEUR */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8">
          
          {/* BADGES OFFICIELS - FLEX WRAP POUR MOBILE */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm px-2 py-1.5 sm:px-4 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 rounded-sm">
              <img src="/logo-etat.svg" alt="Logo Épaviste Agréé État VHU" className="h-4 sm:h-6 lg:h-8 w-auto opacity-90" />
              <div className="hidden sm:block w-px h-4 lg:h-6 bg-white/20 shrink-0"></div>
              <img src="/logo-ademe.svg" alt="Partenaire ADEME Recyclage Auto" className="h-4 sm:h-6 lg:h-8 w-auto opacity-90" />
              <div className="hidden sm:block w-px h-4 lg:h-6 bg-white/20 shrink-0"></div>
              <img src="/logo-iso.svg" alt="Certifié ISO 14001 Environnement" className="h-4 sm:h-6 lg:h-8 w-auto opacity-90" />
              <div className="hidden sm:block w-px h-4 lg:h-6 bg-white/20 shrink-0"></div>
              <img src="/logo-ecolo.svg" alt="Recyclage Écologique Épave" className="h-4 sm:h-6 lg:h-8 w-auto opacity-90" />
            </div>
            <div className="bg-[#E1000F]/90 text-white text-[9px] lg:text-[10px] font-bold uppercase px-2 lg:px-3 py-1 tracking-wider border border-[#E1000F] whitespace-nowrap rounded-sm">
              Centre VHU PR 920001 B
            </div>
          </div>

          {/* TITRE SERIF ROBUSTE - TAILLES FLUIDES */}
          <div className="max-w-full">
            <h1 className="font-serif text-[clamp(1.4rem,3.5vw,2.5rem)] leading-[1.15] font-black text-white uppercase drop-shadow-xl tracking-tight break-words">
              Intervention à domicile<br/>
              Destruction de votre véhicule<br/>
              <span className="text-[#E1000F]">au centre VHU agréé</span>
            </h1>
            <p className="mt-4 lg:mt-6 text-base sm:text-lg text-slate-300 max-w-xl font-medium leading-relaxed border-l-4 border-slate-600 pl-4 lg:pl-6">
              Service officiel d'enlèvement et de recyclage d'épaves {city ? `à ${city}` : "en Île-de-France"}. 
              <span className="block mt-1 text-slate-400 text-sm">Conformité préfectorale garantie (Code de l'environnement Art. R543-162).</span>
            </p>
          </div>
          
          {/* BOUTON ACTION "PROCÉDURE" */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-4 w-full sm:w-auto">
            <a href="tel:0695297785" className="group bg-[#E1000F] hover:bg-[#b9000c] text-white px-6 lg:px-8 py-4 lg:py-5 font-black text-lg uppercase tracking-wide shadow-[0_0_20px_rgba(225,0,15,0.3)] transition-all flex items-center justify-center gap-3 border border-white/10 w-full sm:w-auto rounded-lg sm:rounded-none">
               <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
               Démarrer la procédure
            </a>
            <div className="flex flex-col justify-center items-center sm:items-start px-6 py-3 sm:py-0 border-l-0 sm:border-l border-white/10 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-none">
               <div className="flex items-center gap-2 text-[#4ade80] font-bold text-xs uppercase tracking-wider mb-1">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 Standard : DISPONIBLE
               </div>
               <div className="text-slate-400 text-xs font-mono">
                 Délai intervention : &lt; 2h
               </div>
            </div>
          </div>

          {/* ICÔNES FILAIRES "TECHNIQUES" */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
             <div className="group flex flex-col items-center text-center gap-3 p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm">
                <Truck size={32} strokeWidth={1.5} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold uppercase text-slate-500 group-hover:text-slate-300">Enlèvement<br/>Gratuit</span>
             </div>
             <div className="group flex flex-col items-center text-center gap-3 p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm">
                <FileText size={32} strokeWidth={1.5} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold uppercase text-slate-500 group-hover:text-slate-300">Certificat<br/>Cession</span>
             </div>
             <div className="group flex flex-col items-center text-center gap-3 p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm">
                <Wrench size={32} strokeWidth={1.5} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold uppercase text-slate-500 group-hover:text-slate-300">Expertise<br/>Technique</span>
             </div>
             <div className="group flex flex-col items-center text-center gap-3 p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 rounded-sm">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-bold uppercase text-slate-500 group-hover:text-slate-300">Destruction<br/>Légale</span>
             </div>
          </div>

        </div>

        {/* DROITE : FORMULAIRE "DOSSIER" */}
        <div className="lg:col-span-5 mt-8 lg:mt-0">
           <div className="bg-slate-900 border border-slate-700 shadow-2xl relative overflow-hidden group">
             {/* Texture métal brossé CSS */}
             <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-slate-500 to-blue-900"></div>
             
             <div className="p-6 md:p-8 relative z-10">
               <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                 <div className="bg-slate-800 p-2 rounded-sm border border-slate-700">
                   <FileText size={20} className="text-slate-300" />
                 </div>
                 <div>
                   <h3 className="font-serif text-xl font-bold text-white uppercase tracking-tight">Dossier d'enlèvement</h3>
                   <p className="text-xs text-slate-500 font-mono">RÉF: VHU-{new Date().getFullYear()}-IDF</p>
                 </div>
               </div>
               
               <LeadForm />
               
               <div className="mt-4 flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-900/30 rounded-sm">
                  <Siren className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 animate-pulse" />
                  <p className="text-xs text-blue-200/80 leading-snug">
                    <strong>Information :</strong> La destruction est une obligation légale pour tout véhicule hors d'usage (Code de l'environnement).
                  </p>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

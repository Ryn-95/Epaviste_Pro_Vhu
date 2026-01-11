import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import Checklist from '@/components/tools/Checklist';
import { FileText, Download, Phone, CheckCircle, AlertCircle, FileCheck, Shield, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documents Destruction Voiture & Carte Grise : La Liste Officielle 2026',
  description: 'Liste complète des documents pour mettre une voiture à la casse. Téléchargez les Cerfa officiels (Cession, Non-Gage) et vérifiez votre dossier en ligne.',
};

export default function DocumentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-24 md:pb-20">
      <Header />
      
      {/* HERO SECTION - SEO OPTIMIZED */}
      <section className="bg-slate-900 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/paperwork-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <FileText size={16} />
            Guide Administratif 2026
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
            Documents Destruction Voiture & Carte Grise : <br/>
            <span className="text-blue-500">La Liste Officielle 2026</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Pour détruire votre véhicule légalement et arrêter l'assurance, vous devez fournir des documents précis. 
            Utilisez notre checklist interactive pour préparer votre dossier sans erreur.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-3 gap-12">
        {/* MAIN CONTENT - CHECKLIST */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* INTERACTIVE CHECKLIST */}
          <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <FileCheck className="text-blue-200" />
                Vérifiez vos documents
              </h2>
              <p className="text-blue-100 text-sm mt-1">Cochez les éléments que vous possédez déjà.</p>
            </div>
            
            <div className="p-8">
              <Checklist />
            </div>
          </div>

          {/* DOWNLOAD ZONE - LEAD MAGNET */}
          <div className="bg-slate-100 rounded-sm p-8 border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Download className="text-blue-600" />
              Téléchargements Officiels (PDF)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://www.service-public.fr/simulateur/calcul/15776" target="_blank" rel="noopener noreferrer" className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Cerfa 15776*02</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Certificat de Cession</h4>
                  <p className="text-sm text-slate-500">Obligatoire pour la vente ou destruction.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-blue-600 font-bold text-sm">
                  Télécharger PDF <ChevronRight size={16} />
                </div>
              </a>

              <a href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat_ng" target="_blank" rel="noopener noreferrer" className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Shield size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">CSA</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">Certificat Non-Gage</h4>
                  <p className="text-sm text-slate-500">Prouve l'absence d'opposition au transfert.</p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-blue-600 font-bold text-sm">
                  Site Gouvernement <ChevronRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-blue-900 rounded-xl p-8 text-white text-center sticky top-24">
            <h3 className="font-bold text-xl mb-4">Besoin d'aide pour les papiers ?</h3>
            <p className="text-blue-200 mb-6 text-sm">
              Notre secrétariat vous assiste gratuitement pour compléter votre dossier.
            </p>
            <a href="tel:0695297785" className="bg-white text-blue-900 w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition">
              <Phone size={18} />
              06 95 29 77 85
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE FLOATING CTA */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a href="tel:0183621145" className="bg-[#E1000F] text-white font-bold py-3 px-6 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 animate-bounce">
          <Phone size={20} fill="currentColor" />
          URGENCE 01 83 62 11 45
        </a>
      </div>

      {/* STICKY CTA DESKTOP */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-4 px-6 z-40 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 text-red-600 p-2 rounded-full">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-900">Il vous manque un document ?</p>
            <p className="text-sm text-slate-500">Nos experts administratifs gèrent les cas complexes (Perte CG, Gage, Héritage).</p>
          </div>
        </div>
        <a href="tel:0183621145" className="bg-[#E1000F] hover:bg-[#b9000c] text-white font-bold px-6 py-3 rounded shadow-lg uppercase tracking-wide flex items-center gap-2 transition-transform hover:scale-105">
          <Phone size={20} />
          01 83 62 11 45
          <span className="text-xs font-normal normal-case opacity-80 ml-1">| On gère pour vous</span>
        </a>
      </div>
    </div>
  );
}

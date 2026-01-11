import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { Euro, Car, CheckCircle, AlertTriangle, Clock, FileText, Banknote, ShieldCheck, XCircle, ChevronRight, Wrench, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rachat Cash de Votre Véhicule (Roulant ou HS) - Paiement Immédiat',
  description: 'Vendez votre voiture en l\'état. Rachat cash jusqu\'à 500€, enlèvement gratuit, certificat de cession immédiat. Sans contrôle technique.',
};

export default function RachatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Rachetez-vous les voitures sans contrôle technique ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous rachetons les véhicules sans contrôle technique, en panne, accidentés ou roulants."
        }
      },
      {
        "@type": "Question",
        "name": "Le paiement est-il immédiat ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le paiement est effectué sur place lors de l'enlèvement du véhicule."
        }
      },
      {
        "@type": "Question",
        "name": "Rachetez-vous les véhicules gagés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cela dépend de la nature du gage. Contactez-nous pour une étude gratuite de votre situation."
        }
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* HERO SECTION - DARK/GREEN THEME */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/tow-truck-front.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Banknote size={16} />
              Offre limitée : Bonus reprise +50€
            </div>
            <h1 className="font-serif text-3xl lg:text-5xl font-black leading-tight mb-6">
              Rachat de Véhicule <br/>
              <span className="text-green-500">Cash & Immédiat</span>
              <span className="block text-xl lg:text-2xl text-slate-400 font-sans font-normal mt-4">
                (Roulant, HS, Accidenté)
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed border-l-4 border-green-500 pl-6">
              Ne donnez pas votre voiture : <span className="text-white font-bold">Vendez-la.</span><br/>
              Jusqu'à <span className="text-green-400 font-bold text-xl">500€</span> selon modèle et état.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#simulator" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] flex items-center justify-center gap-3">
                <Euro size={24} />
                Estimer mon prix
              </a>
            </div>
          </div>

          {/* SIMULATEUR VISUEL */}
          <div id="simulator" className="bg-slate-800 text-white p-8 rounded-sm shadow-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-600"></div>
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
              <span className="bg-green-500/20 p-2 rounded-sm text-green-400"><Euro size={24} /></span>
              Simulateur de Prix
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Marque & Modèle</label>
                <input type="text" placeholder="Ex: Renault Clio 3..." className="w-full bg-slate-900 border border-slate-700 rounded-sm p-4 font-bold focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition text-white placeholder-slate-600" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Année</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-sm p-4 font-bold focus:border-green-500 outline-none text-white appearance-none">
                    <option>2010 - 2024</option>
                    <option>2000 - 2010</option>
                    <option>Avant 2000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">État</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-sm p-4 font-bold focus:border-green-500 outline-none text-white appearance-none">
                    <option>Roulant</option>
                    <option>Panne</option>
                    <option>Accidenté</option>
                    <option>HS / Épave</option>
                  </select>
                </div>
              </div>

              <Link href="/contact" className="w-full bg-[#E1000F] hover:bg-[#b9000c] text-white font-black text-xl py-4 rounded-sm shadow-lg uppercase tracking-wider flex items-center justify-center gap-2 mt-8 transition-transform hover:scale-[1.02]">
                ESTIMER MON PRIX MAINTENANT
                <ChevronRight size={24} />
              </Link>
              <p className="text-center text-xs text-slate-500 mt-2">
                *Estimation gratuite et immédiate par téléphone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-slate-600">Comparez notre offre avec une casse traditionnelle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 shadow-2xl rounded-sm overflow-hidden border border-slate-200">
            {/* Colonne Critères */}
            <div className="hidden md:block bg-slate-50 p-8 space-y-8 border-r border-slate-200">
              <div className="h-12 flex items-center font-bold text-slate-500 uppercase tracking-wider text-sm">Prix de rachat</div>
              <div className="h-12 flex items-center font-bold text-slate-500 uppercase tracking-wider text-sm">Remorquage</div>
              <div className="h-12 flex items-center font-bold text-slate-500 uppercase tracking-wider text-sm">Administratif</div>
              <div className="h-12 flex items-center font-bold text-slate-500 uppercase tracking-wider text-sm">Paiement</div>
            </div>

            {/* Colonne Casse Classique */}
            <div className="bg-red-50/50 p-8 space-y-8 text-center md:text-left border-r border-slate-200 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-200"></div>
              <h3 className="text-red-600 font-black uppercase tracking-widest text-sm mb-8">Casse Classique</h3>
              
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-700">
                <XCircle className="text-red-500 shrink-0" size={20} />
                <span className="font-medium">Reprise 0€ (Gratuit)</span>
              </div>
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-700">
                <XCircle className="text-red-500 shrink-0" size={20} />
                <span className="font-medium">Frais de déplacement</span>
              </div>
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-700">
                <XCircle className="text-red-500 shrink-0" size={20} />
                <span className="font-medium">Paperasse à votre charge</span>
              </div>
               <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-700">
                <XCircle className="text-red-500 shrink-0" size={20} />
                <span className="font-medium">Aucun paiement</span>
              </div>
            </div>

            {/* Colonne Notre Centre */}
            <div className="bg-white p-8 space-y-8 text-center md:text-left relative z-10 shadow-xl scale-[1.02] md:scale-105 border border-green-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase">Recommandé</div>
              <h3 className="text-green-600 font-black uppercase tracking-widest text-sm mb-8">Notre Centre Agréé</h3>
              
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-900">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span className="font-bold">Offre de rachat immédiate</span>
              </div>
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-900">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span className="font-bold">Remorquage 0€ (Offert)</span>
              </div>
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-900">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span className="font-bold">Certificat Cession fourni</span>
              </div>
              <div className="h-12 flex items-center md:justify-start justify-center gap-3 text-slate-900">
                <CheckCircle className="text-green-500 shrink-0" size={20} />
                <span className="font-bold">Paiement Cash / Immédiat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES DE RACHAT (GRID) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Tous types de véhicules acceptés
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Quel que soit l'état de votre véhicule, nous avons une solution de reprise adaptée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                <Car size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Véhicule Roulant</h3>
              <p className="text-center text-slate-600 mb-6 text-sm">
                Votre voiture roule encore ? Nous la rachetons au meilleur prix basé sur la cote Argus pro.
              </p>
              <div className="text-center font-bold text-blue-600 bg-blue-50 py-2 rounded">
                Reprise Cote Argus
              </div>
            </div>

            {/* Carte 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Véhicule Panne</h3>
              <p className="text-center text-slate-600 mb-6 text-sm">
                Moteur HS, boîte de vitesse cassée ? Nous reprenons pour l'export ou la pièce détachée.
              </p>
              <div className="text-center font-bold text-orange-600 bg-orange-50 py-2 rounded">
                Prix Export
              </div>
            </div>

            {/* Carte 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center text-red-600 mb-6 mx-auto">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Épave Complète</h3>
              <p className="text-center text-slate-600 mb-6 text-sm">
                Accidentée, brûlée ou très ancienne ? Recyclage écologique en centre VHU agréé.
              </p>
              <div className="text-center font-bold text-red-600 bg-red-50 py-2 rounded">
                Prix Ferraille
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (SCHEMA.ORG) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8 text-center">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Achetez-vous sans contrôle technique ?
              </h3>
              <p className="text-slate-600">Oui, absolument. En tant que professionnel, nous achetons les véhicules en l'état, sans obligation de CT de votre part.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Paiement en espèces ?
              </h3>
              <p className="text-slate-600">Conformément à la loi, le paiement en espèces est limité. Nous privilégions le virement instantané ou le chèque de banque certifié pour votre sécurité.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Véhicule gagé ?
              </h3>
              <p className="text-slate-600">Si le gage est administratif (amendes), il doit être levé. Si c'est un crédit, nous pouvons parfois solder le dossier. Appelez-nous pour vérifier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FLOATING CTA */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a href="tel:0183621145" className="bg-[#E1000F] text-white font-bold py-3 px-6 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 animate-bounce">
          <Phone size={20} fill="currentColor" />
          URGENCE 01 83 62 11 45
        </a>
      </div>
    </div>
  );
}

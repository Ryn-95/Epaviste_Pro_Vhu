import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Contactez votre Épaviste Agréé Île-de-France - RDV Immédiat',
  description: 'Besoin d\'un enlèvement d\'épave ? Contactez notre centre VHU agréé. Intervention 7j/7 dans toute l\'Île-de-France. Formulaire de contact et téléphone.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 uppercase tracking-tight text-center">
          Contact & Prise de Rendez-vous
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm mb-8">
              <h2 className="text-xl font-bold mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-[#000091] flex items-center justify-center rounded-full">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Téléphone (Urgence & RDV)</p>
                    <a href={COMPANY_INFO.phoneLink} className="text-xl font-black text-slate-900 hover:text-[#000091]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-[#000091] flex items-center justify-center rounded-full">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Zone d'Intervention</p>
                    <p className="font-medium text-slate-900">Toute l'Île-de-France et alentours (75, 77, 78, 91, 92, 93, 94, 95)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-[#000091] flex items-center justify-center rounded-full">
                    <Clock />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Horaires</p>
                    <p className="font-medium text-slate-900">Lundi - Dimanche : 08h00 - 20h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 border-t-4 border-[#000091] shadow-lg rounded-sm">
            <h2 className="text-xl font-bold mb-6">Envoyer un message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nom</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:border-[#000091] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Prénom</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:border-[#000091] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Téléphone</label>
                <input type="tel" className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:border-[#000091] outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded focus:border-[#000091] outline-none"></textarea>
              </div>

              <button className="w-full bg-[#000091] text-white font-bold py-4 rounded hover:bg-blue-800 transition uppercase tracking-wide">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

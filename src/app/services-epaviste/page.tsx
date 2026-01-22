import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { Truck, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services d\'Enlèvement d\'Épave Gratuit - Épaviste Agréé Île-de-France',
  description: 'Découvrez nos services d\'enlèvement d\'épave 100% gratuit. Intervention rapide en Île-de-France pour tous types de véhicules (voitures, utilitaires, 2 roues).',
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-[#000091] pb-4 inline-block">
          Services Épaviste Pro VHU - Enlèvement Gratuit
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
            <Truck className="w-10 h-10 text-[#000091] mb-4" />
            <h2 className="text-xl font-bold mb-2">Enlèvement Gratuit</h2>
            <p className="text-slate-600 text-sm">
              Service de remorquage 100% gratuit pour tout véhicule complet (moteur, boîte, roues) destiné à la destruction.
            </p>
          </div>
          <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
            <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Destruction Administrative</h2>
            <p className="text-slate-600 text-sm">
              Nous nous occupons de toutes les démarches administratives auprès de la préfecture (Certificat de destruction, SIV).
            </p>
          </div>
          <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-sm">
            <Clock className="w-10 h-10 text-red-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Intervention Rapide</h2>
            <p className="text-slate-600 text-sm">
              Rendez-vous sous 24h dans toute l'Île-de-France. Créneaux flexibles y compris le samedi.
            </p>
          </div>
        </div>

        <section className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Types de véhicules pris en charge</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {['Voitures particulières (VP)', 'Utilitaires et Camionnettes (CTTE)', 'Deux-roues (Motos, Scooters)', 'Véhicules accidentés ou brûlés', 'Véhicules sans roues (sur devis)', 'Véhicules en sous-sol (parking difficile)'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 bg-[#000091] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="prose prose-slate max-w-none">
          <h3>Pourquoi faire appel à un épaviste agréé ?</h3>
          <p>
            L'enlèvement d'épave est une obligation légale pour tout propriétaire d'un véhicule hors d'usage (VHU). 
            Selon l'article R.543-156 du Code de l'environnement, les VHU sont considérés comme des déchets dangereux 
            et doivent impérativement être traités par un centre VHU agréé.
          </p>
          <p>
            Notre service vous garantit une dépollution totale du véhicule et un recyclage conforme aux normes européennes 
            (taux de réutilisation et de valorisation de 95%).
          </p>
        </section>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-[#000091] text-white font-bold py-4 px-8 rounded hover:bg-blue-800 transition">
            PRENDRE RENDEZ-VOUS MAINTENANT
          </Link>
        </div>
      </main>
    </div>
  );
}

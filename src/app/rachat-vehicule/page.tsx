import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { Euro, Car, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rachat de Véhicule HS, Panne, Accidenté - Paiement Cash/Immédiat',
  description: 'Nous rachetons votre véhicule récent (moins de 10 ans) en l\'état : panne mécanique, accidenté, sans contrôle technique. Estimation gratuite.',
};

export default function RachatPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-none">
              Rachat de votre <span className="text-[#000091]">Véhicule Cash</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Votre véhicule est en panne, accidenté ou ne passe plus le contrôle technique ? 
              Nous pouvons peut-être le racheter plutôt que de le détruire.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="font-bold text-slate-700">Paiement Immédiat</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="font-bold text-slate-700">Pas de Contrôle Technique requis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <span className="font-bold text-slate-700">Enlèvement à domicile</span>
              </div>
            </div>

            <Link href="/contact" className="inline-block bg-[#000091] text-white font-bold py-4 px-8 rounded hover:bg-blue-800 transition">
              DEMANDER UNE ESTIMATION GRATUITE
            </Link>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-lg rounded-sm">
            <h2 className="text-xl font-bold mb-6 text-center border-b border-slate-100 pb-4">Critères d'Éligibilité au Rachat</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Car className="text-slate-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Année du véhicule</h3>
                  <p className="text-sm text-slate-600">Le véhicule doit généralement avoir moins de 10 ans pour être éligible au rachat.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Euro className="text-slate-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Estimation</h3>
                  <p className="text-sm text-slate-600">Le prix est fixé selon la cote Argus, déduction faite des frais de remise en état estimés.</p>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded text-sm text-slate-600">
                <strong>Note :</strong> Les véhicules de plus de 12 ans ou économiquement irréparables sont destinés à la destruction gratuite (recyclage).
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

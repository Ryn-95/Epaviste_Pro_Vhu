import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { FileCheck, Leaf, Recycle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Centre VHU Agréé Préfecture - Agrément PR - Épaviste Île-de-France',
  description: 'Tout savoir sur notre Centre VHU Agréé. Respect des normes environnementales, dépollution, recyclage et traçabilité des déchets automobiles.',
};

export default function CentreVhuPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-green-600 pb-4 inline-block">
          Notre Centre VHU Agréé
        </h1>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-12">
          <p className="font-bold text-green-900 text-lg flex items-center gap-2">
            <FileCheck /> Agrément Préfectoral PR 920001 B
          </p>
          <p className="text-green-800 mt-2">
            Notre installation est classée pour la protection de l'environnement (ICPE) et répond au cahier des charges strict de l'État.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <section className="prose prose-slate">
            <h3>Qu'est-ce qu'un Centre VHU ?</h3>
            <p>
              Un Centre VHU (Véhicules Hors d'Usage) est une installation agréée par la préfecture pour assurer la destruction 
              physique et administrative des véhicules en fin de vie. Seuls les centres agréés sont habilités à délivrer 
              le <strong>Certificat de Destruction</strong>, document indispensable pour annuler l'immatriculation en préfecture.
            </p>
            <h3>Nos Engagements Écologiques</h3>
            <ul>
              <li><strong>Dépollution systématique :</strong> Retrait des huiles, liquides de refroidissement, carburant, batteries.</li>
              <li><strong>Démontage sécurisé :</strong> Tri des matières plastiques, verre, et métaux.</li>
              <li><strong>Valorisation :</strong> Réemploi des pièces détachées et recyclage des matières premières.</li>
            </ul>
          </section>
          
          <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Recycle className="text-green-600" /> Le Cycle de Vie
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
                <div>
                  <h4 className="font-bold">Réception & Pesée</h4>
                  <p className="text-sm text-slate-600">Contrôle administratif et pesée du véhicule à l'entrée du site.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
                <div>
                  <h4 className="font-bold">Mise en sécurité</h4>
                  <p className="text-sm text-slate-600">Neutralisation des airbags et retrait des batteries.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">3</div>
                <div>
                  <h4 className="font-bold">Dépollution</h4>
                  <p className="text-sm text-slate-600">Extraction de tous les fluides polluants.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">4</div>
                <div>
                  <h4 className="font-bold">Broyage & Tri</h4>
                  <p className="text-sm text-slate-600">Séparation des métaux ferreux et non-ferreux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-900 text-white p-8 rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Lutte contre les filières illégales</h2>
          <p className="mb-4">
            Remettre son véhicule à un épaviste non agréé est passible de 2 ans d'emprisonnement et de 75 000 € d'amende (Art. L.541-46 du Code de l'environnement).
          </p>
          <p className="font-bold text-yellow-400">
            Exigez toujours le numéro d'agrément VHU lors de l'enlèvement.
          </p>
        </section>
      </main>
    </div>
  );
}

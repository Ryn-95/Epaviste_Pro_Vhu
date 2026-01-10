import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/landing/Header';
import { FileText, CreditCard, UserCheck, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documents à Fournir pour Enlèvement Épave - Liste Officielle',
  description: 'Liste complète des documents obligatoires pour la destruction de votre véhicule : Carte grise, Certificat de non-gage, Pièce d\'identité.',
};

export default function DocumentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-slate-400 pb-4 inline-block">
          Documents à Fournir
        </h1>

        <p className="text-lg text-slate-700 mb-8 font-medium">
          Pour procéder à l'enlèvement et à la destruction administrative de votre véhicule, vous devez obligatoirement nous remettre les documents originaux suivants le jour de l'intervention.
        </p>

        <div className="space-y-6">
          {/* Carte Grise */}
          <div className="bg-white p-6 border-l-4 border-[#000091] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <FileText className="text-[#000091]" /> 1. La Carte Grise (Originale)
            </h2>
            <p className="text-slate-600 mb-2">
              Elle doit être barrée avec la mention « Vendu le (date et heure) pour destruction » ou « Cédé le... » et signée par le(s) titulaire(s).
            </p>
            <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded">
              <strong>Cas particulier :</strong> Si la carte grise a été perdue ou volée, vous devez fournir la déclaration de perte ou de vol établie par la gendarmerie ou le commissariat.
            </div>
          </div>

          {/* Certificat de non-gage */}
          <div className="bg-white p-6 border-l-4 border-[#000091] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <FileText className="text-[#000091]" /> 2. Le Certificat de Non-Gage
            </h2>
            <p className="text-slate-600 mb-2">
              Aussi appelé "Certificat de Situation Administrative" (CSA). Il doit dater de moins de 15 jours.
            </p>
            <p className="text-sm text-slate-500">
              Ce document prouve qu'aucune opposition judiciaire ou trésor public n'empêche la destruction du véhicule.
            </p>
            <a href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat" target="_blank" rel="nofollow" className="inline-block mt-3 text-[#000091] font-bold underline text-sm">
              Télécharger le certificat sur le site du Ministère de l'Intérieur &rarr;
            </a>
          </div>

          {/* Pièce d'identité */}
          <div className="bg-white p-6 border-l-4 border-[#000091] shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <UserCheck className="text-[#000091]" /> 3. Pièce d'identité
            </h2>
            <p className="text-slate-600">
              Une copie de la pièce d'identité du titulaire de la carte grise (CNI, Passeport, Titre de séjour).
            </p>
          </div>

          {/* Certificat de Cession */}
          <div className="bg-white p-6 border-l-4 border-green-600 shadow-sm">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <FileText className="text-green-600" /> 4. Le Certificat de Cession (Cerfa n°15776*02)
            </h2>
            <p className="text-slate-600 mb-2">
              Nous apportons ce document le jour de l'enlèvement. Il sera rempli en trois exemplaires (un pour vous, un pour la préfecture, un pour le centre VHU).
            </p>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 p-6 rounded-sm flex items-start gap-4">
          <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-800 mb-1">Véhicule sans carte grise ?</h3>
            <p className="text-amber-700 text-sm">
              Si vous n'avez plus la carte grise, des procédures spécifiques existent (fiche d'identification du véhicule). Contactez-nous par téléphone pour que nous vous guidions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

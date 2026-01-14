import React from 'react';
import Link from 'next/link';

export default function SEOContentBlock() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-slate-800">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            L'Expertise <span className="text-[#E1000F]">Épaviste Pro VHU</span> en Île-de-France
          </h2>
          <div className="w-24 h-1 bg-[#000091] mx-auto"></div>
        </div>

        <article className="prose prose-slate max-w-none text-justify">
          <h3 className="text-[#000091] font-bold uppercase text-xl mb-4">
            Qu'est-ce qu'un Épaviste Pro VHU Agréé ?
          </h3>
          <p className="mb-6">
            Le terme <strong>Épaviste Pro VHU</strong> désigne un professionnel du recyclage automobile disposant d'un 
            agrément préfectoral officiel (numéro PR) pour traiter les Véhicules Hors d'Usage (VHU). 
            Contrairement à un ferrailleur classique, votre <strong>épaviste agréé</strong> respecte un cahier des charges 
            strict concernant la dépollution (retrait des huiles, batteries, liquides de refroidissement) et le recyclage des matériaux.
          </p>

          <h3 className="text-[#000091] font-bold uppercase text-xl mb-4">
            Pourquoi notre service d'épaviste est-il le n°1 en Île-de-France ?
          </h3>
          <p className="mb-6">
            Notre centre VHU agréé se distingue par une qualité de service irréprochable. En tant qu'<strong>épaviste gratuit</strong>, 
            nous intervenons dans tous les départements d'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95). 
            Notre flotte de dépanneuses nous permet d'assurer un enlèvement d'épave rapide, souvent dans la journée, 
            pour tout type de véhicule : voiture, utilitaire, moto, ou scooter.
          </p>

          <div className="bg-slate-50 p-6 border-l-4 border-[#E1000F] my-8">
            <h4 className="font-black uppercase text-sm text-slate-900 mb-2">Les avantages Épaviste Pro VHU :</h4>
            <ul className="list-disc list-inside space-y-2 text-sm font-bold text-slate-700">
              <li>Destruction administrative immédiate (Certificat de Cession pour Destruction).</li>
              <li>Service 100% Gratuit (conformément à la loi pour les véhicules complets).</li>
              <li>Intervention sur rendez-vous ou en urgence.</li>
              <li>Accompagnement administratif complet (carte grise, certificat de non-gage).</li>
            </ul>
          </div>

          <h3 className="text-[#000091] font-bold uppercase text-xl mb-4">
            Comment se déroule l'enlèvement avec un Épaviste ?
          </h3>
          <p>
            La procédure est simple. Une fois le rendez-vous fixé avec notre standard <strong>Épaviste Pro VHU</strong>, 
            notre chauffeur se présente à l'adresse indiquée. Il vérifie les documents du véhicule (carte grise, identité), 
            procède au chargement de l'épave sur le plateau, et vous remet instantanément le certificat de destruction. 
            Ce document est la preuve légale que vous n'êtes plus propriétaire du véhicule et arrête votre assurance auto.
          </p>
        </article>

        <div className="mt-12 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-[#000091] hover:bg-blue-800 text-white font-black uppercase tracking-wider py-4 px-8 rounded-sm shadow-lg transition-transform hover:-translate-y-1"
          >
            Contacter un Épaviste Pro VHU Maintenant
          </Link>
        </div>

      </div>
    </section>
  );
}

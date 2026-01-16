import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGV / CGU | Épaviste Pro VHU',
  description: 'Conditions Générales d\'Utilisation et de Service.',
  robots: 'noindex, nofollow'
};

export default function CGV() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-black mb-8 uppercase text-slate-900">Conditions Générales (CGU / CGV)</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Objet du service</h2>
        <p>Le service consiste en l'enlèvement de Véhicules Hors d'Usage (VHU) en vue de leur destruction dans un centre agréé, conformément à la réglementation environnementale en vigueur.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Gratuité de l'enlèvement</h2>
        <p>L'enlèvement est gratuit pour tout véhicule complet (moteur, pot catalytique, roues, batterie présents) situé en Île-de-France et accessible. Des frais peuvent s'appliquer uniquement pour des interventions complexes (parking souterrain difficile, véhicule brûlé, incomplet).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Obligations du propriétaire</h2>
        <p>Le propriétaire s'engage à fournir les documents obligatoires :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Carte grise originale (ou déclaration de perte/vol)</li>
          <li>Pièce d'identité du titulaire</li>
          <li>Certificat de non-gage de moins de 15 jours</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Responsabilité</h2>
        <p>Une fois le certificat de cession pour destruction signé, la responsabilité du véhicule est transférée au centre VHU agréé.</p>
      </section>
    </div>
  );
}
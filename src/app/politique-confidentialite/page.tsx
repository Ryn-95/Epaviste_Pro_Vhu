import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Épaviste Pro VHU',
  description: 'Notre politique de protection des données personnelles (RGPD).',
  robots: 'index, follow'
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-black mb-8 uppercase text-slate-900">Politique de Confidentialité</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Collecte des données</h2>
        <p>Nous collectons uniquement les données nécessaires au traitement de votre demande d'enlèvement d'épave :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse d'enlèvement</li>
          <li>Informations sur le véhicule</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Utilisation des données</h2>
        <p>Ces données sont utilisées exclusivement pour :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Vous contacter pour organiser l'enlèvement</li>
          <li>Établir le certificat de cession et de destruction</li>
          <li>Assurer la traçabilité administrative (SIV)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Conservation et Sécurité</h2>
        <p>Vos données sont conservées pendant la durée légale requise par la préfecture pour le suivi des dossiers VHU (5 ans). Elles ne sont jamais vendues à des tiers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Vos droits (RGPD)</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous par téléphone.</p>
      </section>
    </div>
  );
}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Épaviste Pro VHU',
  description: 'Mentions légales et informations juridiques de notre service d\'enlèvement d\'épaves agréé VHU.',
  robots: 'noindex, nofollow'
};

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-black mb-8 uppercase text-slate-900">Mentions Légales</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Éditeur du site</h2>
        <p>Le site <strong>Epaviste Pro VHU</strong> est édité par une entreprise spécialisée dans l'enlèvement et la destruction de véhicules hors d'usage.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Siège social :</strong> Île-de-France</li>
          <li><strong>Agrément VHU :</strong> PR 920001 B</li>
          <li><strong>Email :</strong> contact@epavisteprovhu.fr</li>
          <li><strong>Téléphone :</strong> 06 95 29 77 85</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. Hébergement</h2>
        <p>Le site est hébergé par Vercel Inc.</p>
        <p>Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Propriété intellectuelle</h2>
        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">4. Agrément VHU</h2>
        <p>Conformément aux articles R.543-153 et suivants du Code de l'environnement, nous disposons de l'agrément préfectoral VHU n° PR 920001 B nous autorisant à prendre en charge les véhicules destinés à la destruction.</p>
      </section>
    </div>
  );
}
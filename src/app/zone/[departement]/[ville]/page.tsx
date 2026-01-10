import { Metadata } from 'next';
import { COMPANY_INFO, DEPARTMENTS } from '@/lib/seo-data';
import Link from 'next/link';

type Props = {
  params: { departement: string; ville: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ville = params.ville.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Épaviste ${ville} (${params.departement}) - Enlèvement Épave Gratuit`,
    description: `Enlèvement d'épave à ${ville} (${params.departement}). Intervention immédiate 7j/7. Centre VHU Agréé. Destruction gratuite et certificat remis sur place.`,
  };
}

export default function ZonePage({ params }: Props) {
  const ville = params.ville.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const deptInfo = DEPARTMENTS.find(d => d.code === params.departement);

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Épaviste Agréé VHU à {ville} ({params.departement})</h1>
        <p className="text-lg mb-4">
          Vous cherchez un <strong>épaviste gratuit à {ville}</strong> ? Notre centre VHU agréé intervient en moins de 24h pour l'enlèvement de votre véhicule hors d'usage dans le département {deptInfo?.name || params.departement}.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
           <p className="text-xl font-bold text-blue-900 mb-2">Intervention immédiate à {ville}</p>
           <p className="mb-4">Appelez-nous pour une destruction de véhicule réglementaire.</p>
           <a href={COMPANY_INFO.phoneLink} className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700">
             Appeler le {COMPANY_INFO.phone}
           </a>
        </div>
        <Link href="/" className="text-blue-600 hover:underline">← Retour à l'accueil</Link>
      </div>
    </main>
  );
}

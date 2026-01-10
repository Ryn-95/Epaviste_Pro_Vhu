import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_CITIES, DEPT_NAMES } from '@/lib/all-cities';
import { slugifyCity } from '@/lib/utils';
import Header from '@/components/landing/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Zones d'Intervention Épaviste Île-de-France - Maillage Régional",
  description: "Liste complète des zones d'intervention pour l'enlèvement d'épaves en Île-de-France. Intervention rapide en 45 min dans toutes les communes (75, 77, 78, 91, 92, 93, 94, 95).",
};

export default function ZonesInterventionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Zones d'Intervention Épaviste Île-de-France",
    "description": "Liste exhaustive des communes desservies pour l'enlèvement gratuit d'épaves en Île-de-France.",
    "hasPart": Object.entries(ALL_CITIES).flatMap(([deptCode, cities]) => 
      cities.map(city => ({
        "@type": "Service",
        "name": `Enlèvement épave ${city}`,
        "areaServed": {
          "@type": "City",
          "name": city
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-8 border-[#E1000F] pl-6 uppercase tracking-tight">
          Zones d'Intervention Épaviste Île-de-France (Maillage Régional)
        </h1>

        <div className="bg-white p-8 border border-slate-200 shadow-sm mb-12 prose max-w-none text-slate-600 text-justify">
          <p className="lead font-bold text-slate-800">
            Notre service d'enlèvement d'épaves couvre l'intégralité de la région Île-de-France avec une efficacité logistique inégalée.
            Grâce à notre flotte de 15 dépanneuses agréées VHU réparties stratégiquement sur l'ensemble du territoire francilien, 
            nous garantissons une intervention en moins de 45 minutes dans chaque commune, quelle que soit la densité du trafic ou l'éloignement.
          </p>
          <p>
            Ce maillage territorial dense nous permet d'assurer une disponibilité 7 jours sur 7 et 24 heures sur 24 pour répondre à toutes les demandes d'enlèvement de véhicules hors d'usage (VHU). 
            Que vous soyez situé au cœur de Paris ou dans les communes les plus reculées de Seine-et-Marne, notre engagement reste le même : 
            fournir un service gratuit, rapide et conforme aux normes environnementales les plus strictes.
          </p>
          <p>
            Notre centre VHU agréé par la préfecture travaille en étroite collaboration avec les autorités locales pour assurer la dépollution et le recyclage 
            de votre véhicule dans le respect total de la législation (Code de l'environnement Art. R.543-156). 
            Chaque intervention donne lieu à la remise immédiate d'un certificat de destruction (CERFA 14365*01), vous dégageant de toute responsabilité administrative.
            Consultez ci-dessous la liste exhaustive de nos zones d'intervention prioritaires pour programmer votre enlèvement gratuit dès aujourd'hui.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(ALL_CITIES).map(([deptCode, cities]) => (
            <section key={deptCode} id={`dept-${deptCode}`}>
              <div className="flex items-center gap-4 mb-6 border-b border-slate-300 pb-2">
                <span className="text-3xl font-black text-[#E1000F]">{deptCode}</span>
                <h2 className="text-2xl font-bold text-slate-800 uppercase">
                  Épaviste {DEPT_NAMES[deptCode]}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/epaviste/${deptCode}/${slugifyCity(city)}`}
                    title={`Enlèvement épave gratuit à ${city}`}
                    className="text-slate-600 hover:text-[#000091] hover:underline text-xs font-medium transition-colors truncate block py-1 border-l-2 border-transparent hover:border-[#000091] pl-2"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

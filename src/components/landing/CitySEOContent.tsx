import { COMPANY_INFO } from '@/lib/seo-data';
import Link from 'next/link';
import { AlertTriangle, Leaf, Recycle, Truck, Phone, FileCheck, MapPin } from 'lucide-react';

interface CitySEOContentProps {
  city: string;
  deptCode: string;
  deptName: string;
}

export default function CitySEOContent({ city, deptCode, deptName }: CitySEOContentProps) {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        
        {/* Main Content Column (SEO Rich Text) */}
        <div className="lg:w-2/3">
          <article className="prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:text-slate-900 prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#000091] prose-a:text-[#E1000F] prose-a:no-underline hover:prose-a:underline">
            
            {/* Header Block like the example */}
            <div className="not-prose bg-slate-50 border border-slate-200 p-6 mb-8 rounded-sm">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase">
                Enlèvement épave gratuit à {city} ({deptCode})
              </h1>
              <p className="text-slate-600 font-medium mb-4">
                Service Agréé Préfecture <strong>{COMPANY_INFO.certification}</strong> | Intervention Immédiate
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-bold">
                 <span className="bg-[#000091] text-white px-3 py-1">CENTRE VHU AGRÉÉ</span>
                 <span className="bg-[#E1000F] text-white px-3 py-1">DESTRUCTION 100% GRATUITE</span>
              </div>
            </div>

            <p className="lead font-bold text-slate-800">
              L'Épaviste Agréé {deptCode} est disponible dès maintenant pour enlever votre épave à {city} et dans tout le département {deptName}.
            </p>

            <p>
              Avez-vous un véhicule qui ne fonctionne plus et qui encombre votre jardin, votre garage ou le parking près de chez vous à <strong>{city}</strong> ? 
              Vous ne savez pas quoi en faire ? Qu’il soit en état de marche ou HS, en panne, accidenté, brûlé ou simplement trop vieux... 
              Notre centre VHU procède à l’<strong>enlèvement d’épave gratuit à {city}</strong> et ses environs.
            </p>

            <div className="my-8 p-6 bg-[#f8fafc] border-l-4 border-[#000091]">
              <h3 className="flex items-center gap-2 !mt-0 !mb-2 !text-slate-900">
                <Leaf className="w-6 h-6 text-green-600" />
                Engagement Écologique & Réglementaire
              </h3>
              <p className="!mb-0 text-sm">
                Grâce à notre expertise et à notre agrément préfectoral <strong>{COMPANY_INFO.certification}</strong>, nous sommes engagés à renforcer nos actions en faveur de l’écologie. 
                C’est pourquoi nous proposons un service <strong>100% gratuit</strong> de retrait d’épave à {city}, directement à votre domicile. 
                On s’occupe de tout pour vous débarrasser de votre épave camion, épave scooter, épave moto et épave voiture.
              </p>
            </div>

            <h2>Pourquoi faire appel à un épaviste agréé à {city} ?</h2>
            <p>
              L’enlèvement d'épave gratuit dans le {deptCode} est primordial si vous souhaitez vous séparer de votre voiture hors d'usage en toute légalité. 
              L’abandon d’épave est un délit écologique grave (Article L.541-46 du Code de l'environnement) passible de <strong>2 ans de prison et 75 000€ d'amende</strong>.
              Faire appel à un <strong>épaviste agréé VHU</strong> est la seule solution légale pour obtenir votre certificat de destruction (Cerfa 14365*01) et arrêter votre assurance.
            </p>

            <h3 className="flex items-center gap-2">
              <Recycle className="w-5 h-5" />
              Recyclage et Dépollution : Un geste pour la planète
            </h3>
            <p>
              Une voiture est nuisible pour l’environnement car elle contient des fluides toxiques (huiles, liquides de refroidissement, batterie au plomb) qui polluent les sols et les nappes phréatiques. 
              Confier les véhicules endommagés à notre centre de destruction agréé qui dessert <strong>{city}</strong> constitue la solution idéale pour un traitement respectueux de l’environnement.
            </p>
            <p>
              Le recyclage des véhicules en fin de vie aide à réduire la pollution, à préserver les ressources naturelles, tout en favorisant la création de nouveaux emplois dans le secteur du recyclage (économie circulaire).
              Lorsque nos dépanneurs récupèrent votre véhicule à {city}, nous l’acheminons vers notre centre spécialisé agréé pour le recyclage, où les éléments toxiques sont traités selon les normes ICPE.
            </p>

            <h2>Enlèvement d’épave à {city} : Comment ça marche ?</h2>
            <p>
              Notre service d'intervention à {city} est simplifié pour vous faire gagner du temps. Voici les étapes pour vous débarrasser de votre véhicule :
            </p>
            <ul>
              <li><strong>Prise de rendez-vous :</strong> Appelez notre ligne directe au <strong>{COMPANY_INFO.phone}</strong> pour convenir d'un créneau. Nous intervenons 7j/7.</li>
              <li><strong>Documents à fournir :</strong> Préparez la carte grise (barrée avec la mention "Cédé pour destruction"), une copie de votre pièce d'identité et le certificat de non-gage (certificat de situation administrative).</li>
              <li><strong>Intervention :</strong> Notre dépanneuse arrive à l'adresse indiquée à {city}. L'enlèvement dure environ 15 minutes.</li>
              <li><strong>Administratif :</strong> Nous vous remettons immédiatement le <strong>Certificat de Destruction (Cerfa)</strong>. C'est la preuve légale que votre véhicule a été pris en charge par un professionnel agréé.</li>
            </ul>

            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
               <div className="bg-white p-4 border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-full"><Truck className="w-6 h-6 text-[#000091]" /></div>
                  <div>
                    <div className="font-bold text-slate-900">Tous véhicules</div>
                    <div className="text-xs text-slate-500">Auto, Moto, Utilitaire, Camion</div>
                  </div>
               </div>
               <div className="bg-white p-4 border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-full"><FileCheck className="w-6 h-6 text-[#E1000F]" /></div>
                  <div>
                    <div className="font-bold text-slate-900">Certificat Immédiat</div>
                    <div className="text-xs text-slate-500">Document officiel préfecture</div>
                  </div>
               </div>
            </div>

            <h2>Où sont emmenées les épaves de {city} ({deptCode}) ?</h2>
            <p>
              Lorsque nous récupérons une épave dans la région de {city}, celle-ci est acheminée directement vers un <strong>Centre VHU Agréé (Véhicule Hors d'Usage)</strong>. 
              Contrairement à une simple casse auto, un centre VHU répond à un cahier des charges strict imposé par la préfecture pour garantir une dépollution totale et un recyclage à 95% de la masse du véhicule.
            </p>
            <p>
              L’équipe d’Épaviste Agréé prend en charge tous types de véhicules à {city}, quelle que soit leur taille ou leur catégorie : 
              des scooters et motos, aux utilitaires, jusqu’aux grands camions. Peu importe l'état (accidenté, brûlé, sans roues, en sous-sol), nous disposons du matériel adapté.
            </p>

            <div className="bg-[#E1000F] text-white p-6 mt-8 text-center rounded-sm">
              <p className="font-bold text-lg mb-2 uppercase">Une épave à enlever à {city} ?</p>
              <p className="mb-6 opacity-90">Intervention gratuite et rapide aujourd'hui même.</p>
              <a href={COMPANY_INFO.phoneLink} className="inline-flex items-center gap-2 bg-white text-[#E1000F] font-black px-6 py-3 uppercase tracking-wide hover:bg-slate-100 transition-colors">
                <Phone className="w-5 h-5" />
                Appeler le {COMPANY_INFO.phone}
              </a>
            </div>
          </article>
        </div>

        {/* Sidebar Column */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white p-6 border border-slate-300 shadow-sm">
              <h4 className="font-black text-lg mb-4 text-slate-900 uppercase border-b border-slate-200 pb-2">
                Centre Agréé {deptCode}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-[#000091]">
                      <Phone className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Ligne Directe</div>
                      <a href={COMPANY_INFO.phoneLink} className="text-lg font-black text-slate-900 hover:text-[#E1000F]">{COMPANY_INFO.phone}</a>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-[#000091]">
                      <FileCheck className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Agrément VHU</div>
                      <div className="text-sm font-bold text-slate-900">{COMPANY_INFO.certification}</div>
                   </div>
                </div>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-[#000091]">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Zone d'intervention</div>
                      <div className="text-sm font-bold text-slate-900">Tout le {deptCode}</div>
                   </div>
                </div>
              </div>
              <div className="mt-6">
                <a href={COMPANY_INFO.phoneLink} className="block w-full text-center bg-[#000091] hover:bg-blue-900 text-white font-bold py-4 text-sm uppercase tracking-wider transition-colors">
                  DEMANDER L'ENLÈVEMENT
                </a>
              </div>
            </div>

            {/* List of neighbor cities in same dept if possible (Mockup for now) */}
            <div className="bg-slate-50 border border-slate-200 p-6">
              <h4 className="font-bold text-sm mb-4 uppercase text-slate-500">Intervention {deptName}</h4>
              <ul className="space-y-2 text-xs font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E1000F] rounded-full"></span>
                  Intervention rapide à {city}
                </li>
                 <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Enlèvement épave {deptName}
                </li>
                 <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  Centre VHU {deptCode}
                </li>
              </ul>
            </div>

          </div>
        </aside>

      </div>
    </section>
  );
}

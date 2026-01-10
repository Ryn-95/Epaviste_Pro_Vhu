import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

export default function GallerySection() {
  const images = [
    {
      src: "/Epaviste2.png",
      alt: "Intervention épaviste remorquage",
      caption: "Enlèvement sur route"
    },
    {
      src: "/Epaviste3.png",
      alt: "Véhicule accidenté VHU",
      caption: "Véhicules Accidentés"
    },
    {
      src: "/Epaviste4.png",
      alt: "Chargement épave camion plateau",
      caption: "Chargement Sécurisé"
    },
    {
      src: "/wrecked-car.jpg",
      alt: "Camion dépanneuse épaviste",
      caption: "Flotte d'Intervention"
    },
    {
      src: "/Logoepaviste1.png",
      alt: "Centre VHU Recyclage",
      caption: "Recyclage Agréé"
    },
    {
      src: "/epaviste-1.jpg",
      alt: "Remorquage épave gratuit",
      caption: "Service Rapide 7j/7"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#000091] p-2 text-white">
            <Camera size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase">
              Sur le Terrain
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Nos équipes d'épavistes agréés en intervention
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className={`group relative aspect-video bg-white overflow-hidden shadow-md border-b-4 border-[#E1000F] ${img.src.includes('Logo') ? 'p-8' : 'bg-slate-200'}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`${img.src.includes('Logo') ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white font-bold uppercase tracking-wider text-sm">
                  {img.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 italic">
                * Images d'illustration. Nos camions sont équipés pour tout type d'enlèvement (sous-sol, accidenté, brûlé).
            </p>
        </div>
      </div>
    </section>
  );
}

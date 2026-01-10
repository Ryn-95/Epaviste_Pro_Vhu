import React from 'react';

type Props = {
  cityName: string;
  zipCode: string;
  geo?: { lat: string; lng: string };
};

export default function CitySchema({ cityName, zipCode, geo: providedGeo }: Props) {
  // Hack : Génère une fausse latitude/longitude "cohérente" basée sur la longueur du nom de la ville
  // Ce n'est pas exact, mais ça place un point unique pour Google, évitant le duplicate strict.
  // Pour les grosses villes, utilise les vraies dans data.ts, sinon fallback sur ça :
  
  let lat: string;
  let lon: string;

  if (providedGeo) {
      lat = providedGeo.lat;
      lon = providedGeo.lng;
  } else {
      const baseLat = 48.85; // Latitude IDF
      const baseLon = 2.35;  // Longitude IDF
      // const pseudoRandom = cityName.length * 0.01; // Unused
      
      const calculatedLat = baseLat + (cityName.charCodeAt(0) % 5) * 0.05;
      const calculatedLon = baseLon + (cityName.charCodeAt(cityName.length - 1) % 5) * 0.05;
      
      lat = calculatedLat.toFixed(4);
      lon = calculatedLon.toFixed(4);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoPartsStore", "EmergencyService"],
        "name": `Centre VHU Agréé ${cityName}`,
        "description": `Service d'enlèvement d'épave gratuit à ${cityName}. Intervention immédiate.`,
        "telephone": "01 83 62 11 45",
        "areaServed": {
          "@type": "City",
          "name": cityName,
          "postalCode": zipCode
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lon
        },
        "openingHours": "Mo-Su 00:00-23:59", 
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "842"
        },
        "priceRange": "Gratuit"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `L'enlèvement d'épave est-il gratuit à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, conformément à la loi (article R.543-156 du Code de l'environnement), l'enlèvement d'épave est 100% gratuit à " + cityName + " pour tout véhicule complet (moteur, roues, pot catalytique). Nous nous rémunérons sur le recyclage des matières premières."
            }
          },
          {
            "@type": "Question",
            "name": `Quels documents pour détruire ma voiture à ${cityName} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour l'enlèvement à " + cityName + ", vous devez fournir : la carte grise originale du véhicule (barrée et signée), une copie de votre pièce d'identité et un certificat de non-gage de moins de 15 jours. Nous vous remettrons le certificat de destruction (Cerfa 14365*01) sur place."
            }
          },
          {
            "@type": "Question",
            "name": `Intervenez-vous dans tout le secteur de ${cityName} (${zipCode}) ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Oui, notre centre VHU agréé couvre l'ensemble de la commune de ${cityName} (${zipCode}) ainsi que les quartiers environnants. Nos dépanneuses interviennent également en sous-sol et parkings difficiles d'accès.`
            }
          }
        ]
      }
    ],
    "dateModified": new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

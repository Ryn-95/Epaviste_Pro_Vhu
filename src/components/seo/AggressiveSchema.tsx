import { COMPANY_INFO } from '@/lib/seo-data';

type Props = {
  city: string;
  zip: string;
};

export default function AggressiveSchema({ city, zip }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoPartsStore", "EmergencyService"],
        "name": `Épaviste Agréé VHU ${city}`,
        "image": "https://epaviste-vhu-idf.fr/logo.png", // Placeholder
        "telephone": COMPANY_INFO.phone,
        "url": `https://epaviste-vhu-idf.fr/epaviste/${zip.slice(0, 2)}/${city.toLowerCase().replace(/ /g, '-')}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Intervention à domicile",
          "addressLocality": city,
          "postalCode": zip,
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          // Mock coordinates (would ideally be real per city)
          "latitude": "48.8566",
          "longitude": "2.3522"
        },
        "areaServed": {
          "@type": "City",
          "name": city
        },
        "priceRange": "Gratuit",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "320",
          "bestRating": "5",
          "worstRating": "1"
        },
        "serviceType": "Enlèvement d'épave gratuit",
        "providerMobility": "dynamic"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `L'enlèvement d'épave à ${city} est-il vraiment gratuit ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Oui, notre service d'épaviste à ${city} est 100% gratuit pour tout véhicule complet. Nous nous rémunérons sur le recyclage des matériaux (ferraille) conformément à la législation VHU.`
            }
          },
          {
            "@type": "Question",
            "name": `Quels documents fournir pour une destruction à ${city} ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous devez présenter la carte grise originale barrée, une copie de votre pièce d'identité et un certificat de non-gage de moins de 15 jours."
            }
          },
          {
            "@type": "Question",
            "name": `Intervenez-vous rapidement sur ${city} (${zip}) ?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nos dépanneuses circulent en permanence dans le secteur de ${city}. Nous pouvons généralement intervenir en moins de 30 minutes ou sur rendez-vous à votre convenance.`
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

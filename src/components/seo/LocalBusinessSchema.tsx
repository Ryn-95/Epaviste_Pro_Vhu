import { COMPANY_INFO, DEPARTMENTS } from "@/lib/seo-data";

export default function LocalBusinessSchema({ city }: { city?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoPartsStore", "RecyclingCenter"],
    "name": `${COMPANY_INFO.name}${city ? ` - ${city}` : ''}`,
    "description": `Service d'enlèvement d'épave gratuit agréé VHU ${city ? `à ${city}` : 'en Île-de-France'}. Intervention rapide 7j/7 pour destruction de véhicule et recyclage.`,
    "url": "https://epaviste-vhu-idf.fr", // Placeholder domain
    "telephone": COMPANY_INFO.phone,
    "priceRange": COMPANY_INFO.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address.street,
      "addressLocality": COMPANY_INFO.address.city,
      "postalCode": COMPANY_INFO.address.postalCode,
      "addressRegion": COMPANY_INFO.address.region,
      "addressCountry": COMPANY_INFO.address.country
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": DEPARTMENTS.map(d => ({
      "@type": "AdministrativeArea",
      "name": d.name
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "842",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasMap": COMPANY_INFO.mapUrl,
    "knowsAbout": ["Enlèvement épave", "Destruction véhicule", "Recyclage auto", "VHU", "Casse auto"],
    // Adding certification as requested
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "policeId",
      "name": "Agrément VHU Préfecture",
      "value": COMPANY_INFO.certification
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

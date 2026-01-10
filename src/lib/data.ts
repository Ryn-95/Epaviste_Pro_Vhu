export const CITIES = [
  {
    name: "Paris",
    zip: "75000",
    department: "75",
    travelTime: "25 min",
    lat: "48.8566",
    lng: "2.3522"
  },
  {
    name: "Boulogne-Billancourt",
    zip: "92100",
    department: "92",
    travelTime: "20 min",
    lat: "48.8397",
    lng: "2.2399"
  },
  {
    name: "Saint-Denis",
    zip: "93200",
    department: "93",
    travelTime: "30 min",
    lat: "48.9362",
    lng: "2.3574"
  },
  {
    name: "Argenteuil",
    zip: "95100",
    department: "95",
    travelTime: "35 min",
    lat: "48.9479",
    lng: "2.2488"
  },
  {
    name: "Montreuil",
    zip: "93100",
    department: "93",
    travelTime: "28 min",
    lat: "48.8638",
    lng: "2.4484"
  },
];

export function spin(variations: string[]): string {
  return variations[Math.floor(Math.random() * variations.length)];
}

export function getCurrentDate(): string {
  const date = new Date();
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function getCurrentMonthYear(): string {
  const date = new Date();
  return date.toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric'
  });
}

// Générateur de coordonnées pseudo-aléatoires mais cohérentes pour IDF si ville inconnue
export function getFakeGeo(cityName: string) {
  // Hash simple pour générer toujours les mêmes coords pour une même ville
  let hash = 0;
  for (let i = 0; i < cityName.length; i++) {
    hash = cityName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Base IDF : Lat ~48.8, Lng ~2.3
  const latOffset = (hash % 1000) / 10000;
  const lngOffset = (hash % 1000) / 10000;
  
  return {
    lat: (48.85 + latOffset).toFixed(4),
    lng: (2.35 + lngOffset).toFixed(4)
  };
}

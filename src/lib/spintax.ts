/**
 * Utility to spin text variations for SEO uniqueness.
 * Usage: spin("{Option A|Option B|Option C}")
 */
export function spin(text: string): string {
  return text.replace(/\{([^{}]+)\}/g, (match, content) => {
    const choices = content.split('|');
    return choices[Math.floor(Math.random() * choices.length)];
  });
}

/**
 * Deterministic spin based on a seed (e.g., city name) to ensure
 * the same variation is always generated for the same page (avoid hydration mismatch).
 */
export function deterministicSpin(text: string, seed: string): string {
  const seedValue = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  return text.replace(/\{([^{}]+)\}/g, (match, content) => {
    const choices = content.split('|');
    // Simple pseudo-random choice based on seed
    const index = (seedValue + content.length) % choices.length;
    return choices[index];
  });
}

export const SEO_PATTERNS = {
  h1: "{Épaviste Agréé|Enlèvement Épave|Destruction VHU} à {ville} ({zip}) - {Service Gratuit|Intervention 0€}",
  metaTitle: "{Épaviste {ville} ({zip}) : Enlèvement Gratuit 7j/7|{ville} ({zip}) : Épaviste Agréé VHU - Destruction 0€|SOS Épave {ville} : Intervention Immédiate et Gratuite}",
  metaDesc: "{Besoin d'un épaviste à {ville} ?|Cherche épaviste gratuit sur {ville} ?} ✅ {Intervention en 30min|Déplacement immédiat} 👮 {Centre Agréé VHU|Agréé Préfecture} (PR 920001 B). {Certificat de destruction remis sur place|Papiers administratifs inclus}. {Appelez-nous !|Contactez le centre !}",
  intro: "{Vous habitez à {ville} et vous souhaitez vous débarrasser d'un véhicule encombrant ?|Propriétaire d'une épave à {ville} ({zip}) ?} Notre centre VHU agréé intervient {rapidement|en moins de 24h|immédiatement} pour {l'enlèvement gratuit|la récupération|le retrait} de votre voiture.",
  distance: "Nos dépanneuses sont actuellement à {2|3|4|5|6|7}km du centre de {ville}.",
};

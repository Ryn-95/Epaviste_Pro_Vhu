export function getDynamicDate() {
  const now = new Date();
  // Formatte la date en "4 janvier 2026"
  return now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getCurrentMonth() {
  const now = new Date();
  return now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

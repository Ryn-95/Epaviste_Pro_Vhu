import { DeptInfo } from './idf-data';

// Simple string hash function for deterministic randomness
const getHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Select a variation based on the hash of the city name
const selectVariation = (variations: string[], seed: string) => {
  const index = getHash(seed) % variations.length;
  return variations[index];
};

// ARCHETYPE LOGIC
type Archetype = 'URBAN_DENSE' | 'SUBURBAN' | 'RURAL_MIXED';

const getArchetype = (deptCode: string): Archetype => {
  switch (deptCode) {
    case '75': // Paris
    case '92': // Hauts-de-Seine
    case '93': // Seine-Saint-Denis
    case '94': // Val-de-Marne
      return 'URBAN_DENSE';
    case '77': // Seine-et-Marne (Plus vaste, plus vert)
      return 'RURAL_MIXED';
    default:   // 78, 91, 95 (Grande couronne)
      return 'SUBURBAN';
  }
};

// CONTENT POOLS BY ARCHETYPE

// 1. INTRO
const INTROS: Record<Archetype, string[]> = {
  URBAN_DENSE: [
    `Stationner un véhicule hors d'usage à **${'{city}'}** est un véritable casse-tête avec les règles de voirie strictes. Notre service d'épaviste agréé intervient directement dans les parkings souterrains et les rues étroites.`,
    `La fourrière vous menace ou votre assurance réclame la destruction ? À **${'{city}'}**, nous intervenons en urgence pour enlever votre épave, même sans clés ou en sous-sol (-1, -2...).`,
    `Vous habitez **${'{city}'}** et votre voiture ne démarre plus ? Ne risquez pas l'amende pour stationnement abusif. Nous la récupérons gratuitement aujourd'hui même.`,
    `Spécialiste des interventions difficiles à **${'{city}'}**, notre équipe retire votre véhicule en panne où qu'il soit : parking privé, box, ou sur la voie publique.`,
    `Marre de payer une assurance pour une voiture qui ne roule plus à **${'{city}'}** ? Libérez-vous de ce poids financier et administratif grâce à notre enlèvement 100% gratuit.`,
    `Les règles de stationnement à **${'{city}'}** ne pardonnent pas les véhicules ventouses. Évitez l'enlèvement fourrière coûteux en faisant appel à notre centre VHU agréé.`,
    `Votre véhicule est accidenté ou en panne dans un sous-sol à **${'{city}'}** ? Nous disposons de dépanneuses surbaissées spécialement conçues pour les accès limités en hauteur.`,
    `Besoin d'un certificat de destruction pour la prime à la conversion à **${'{city}'}** ? Nous vous fournissons tous les documents officiels sur place lors de l'enlèvement.`
  ],
  SUBURBAN: [
    `Votre voiture encombre votre allée ou votre garage à **${'{city}'}** ? Libérez de l'espace gratuitement grâce à notre service d'enlèvement d'épave agréé VHU.`,
    `Résidant à **${'{city}'}**, vous cherchez à vous débarrasser d'un vieux véhicule ? Nous nous déplaçons à votre domicile pour une prise en charge complète et gratuite.`,
    `Ne laissez pas votre véhicule se dégrader devant chez vous à **${'{city}'}**. En tant que centre VHU agréé, nous assurons son recyclage dans le respect des normes environnementales.`,
    `Besoin de faire place nette à **${'{city}'}** ? Qu'il soit roulant ou non, nous chargeons votre véhicule directement depuis votre domicile pour la casse.`,
    `Une vieille voiture prend la poussière dans votre jardin à **${'{city}'}** ? C'est le moment de faire du tri. Notre intervention est rapide, propre et totalement gratuite.`,
    `Vous ne savez pas comment transporter votre véhicule non-roulant jusqu'à la casse depuis **${'{city}'}** ? Ne vous déplacez pas, nous venons à vous avec notre camion plateau.`,
    `Protégez l'environnement de votre commune à **${'{city}'}** en confiant votre VHU à un professionnel qui assurera sa dépollution complète (huiles, batteries, fluides).`,
    `Le stationnement résidentiel à **${'{city}'}** est précieux. Ne le gâchez pas avec une épave. Récupérez votre place de parking dès demain.`
  ],
  RURAL_MIXED: [
    `Un véhicule abandonné au fond du jardin ou dans une grange à **${'{city}'}** ? Nous sommes équipés pour les enlèvements en terrain difficile ou en zone rurale.`,
    `La protection de la nature à **${'{city}'}** passe par le recyclage des vieilles voitures. Évitez la pollution des sols en nous confiant votre épave gratuitement.`,
    `Notre camion tout-terrain sillonne les routes autour de **${'{city}'}** pour débarrasser les particuliers de leurs véhicules hors d'usage (VHU). Service 100% offert.`,
    `Vous avez une carcasse de voiture qui traîne à **${'{city}'}** ? Même sans roues ou accidentée, nous venons la chercher pour la détruire en centre agréé.`,
    `Loin des centres-villes, se débarrasser d'une épave autour de **${'{city}'}** peut sembler compliqué. Pas avec nous : nous couvrons toute la zone sans frais kilométriques.`,
    `Préservez les paysages et les champs de **${'{city}'}**. Une épave qui rouille est une source de pollution visuelle et chimique. Nous l'enlevons gratuitement.`,
    `Que vous soyez dans le bourg ou en périphérie de **${'{city}'}**, notre service d'épaviste agréé vient jusqu'à votre porte pour récupérer tout type de véhicule.`,
    `Nous intervenons régulièrement dans les fermes et propriétés autour de **${'{city}'}** pour l'enlèvement de véhicules utilitaires, camionnettes ou voitures hors d'usage.`
  ]
};

// 2. PAIN POINTS / SITUATION
const SITUATIONS: Record<Archetype, string[]> = {
  URBAN_DENSE: [
    `Avec la chasse aux voitures ventouses à ${'{city}'}, garder une épave dans la rue est risqué. La mise en fourrière coûte cher et les points de permis peuvent sauter.`,
    `L'accès est difficile chez vous à ${'{city}'} ? Pas de souci. Nos dépanneuses "panier" sont conçues pour se faufiler dans la circulation dense et les accès exigus.`,
    `Le stationnement est une denrée rare à ${'{city}'}. Ne gaspillez pas une place pour une voiture qui ne roule plus. Libérez-la pour vous ou vos voisins.`,
    `Vous craignez les complications pour sortir un véhicule d'un box à ${'{city}'} ? Nos techniciens sont experts en manœuvres délicates en milieu urbain.`,
    `Les amendes pour stationnement abusif (plus de 7 jours) à ${'{city}'} pleuvent rapidement. N'attendez pas la notification de la police municipale pour agir.`,
    `Vendre une voiture en panne à ${'{city}'} attire souvent des acheteurs peu scrupuleux. Évitez les arnaques et choisissez la destruction officielle et sécurisée.`,
    `Votre syndic de copropriété à ${'{city}'} vous met en demeure d'enlever votre véhicule du parking ? Nous intervenons rapidement pour régulariser la situation.`,
    `La circulation dense à ${'{city}'} rend le remorquage par soi-même dangereux et illégal. Laissez faire nos professionnels équipés et assurés.`
  ],
  SUBURBAN: [
    `Un véhicule immobile à ${'{city}'} finit par attirer les nuisibles et rouiller, ce qui est mauvais pour votre terrain et l'esthétique de votre maison.`,
    `Votre assurance continue de vous prélever pour une voiture qui ne bouge plus à ${'{city}'} ? Stoppez les frais en obtenant votre certificat de destruction dès aujourd'hui.`,
    `Le voisinage à ${'{city}'} peut se plaindre d'une épave visible. Réglez le problème à l'amiable et gratuitement avec notre intervention rapide.`,
    `Difficile de vendre une voiture en panne à ${'{city}'} ? La destruction est souvent la solution la plus simple et la plus sûre juridiquement.`,
    `Une épave dans votre allée à ${'{city}'} fait baisser la valeur perçue de votre maison. Redonnez du cachet à votre propriété en nous laissant l'enlever.`,
    `Les enfants jouent parfois autour des voitures abandonnées à ${'{city}'}, ce qui représente un danger (verre brisé, rouille). Sécurisez votre domicile.`,
    `Vous manquez de place pour votre nouvelle voiture à ${'{city}'} ? Faites de la place en vous débarrassant de l'ancienne sans aucun frais.`,
    `Stocker un VHU (Véhicule Hors d'Usage) chez soi à ${'{city}'} est réglementé. Évitez les soucis avec la mairie en optant pour la destruction agréée.`
  ],
  RURAL_MIXED: [
    `Les épaves laissées en pleine nature autour de ${'{city}'} polluent les nappes phréatiques avec les fuites d'huile et de batterie. Agissez pour l'environnement.`,
    `Même si elle est stockée sur un terrain privé à ${'{city}'}, une épave reste un déchet dangereux aux yeux de la loi. Nous vous aidons à vous mettre en conformité.`,
    `Accès boueux ou chemin étroit à ${'{city}'} ? Notre matériel est adapté pour récupérer les véhicules même dans les endroits les moins accessibles.`,
    `Ne laissez pas la végétation envahir votre vieille voiture à ${'{city}'}. Nous la retirons proprement, sans laisser de traces ni de débris.`,
    `La rouille et les fluides toxiques s'infiltrent dans le sol de ${'{city}'}. Protégez votre terre et vos cultures en évacuant ces déchets métalliques.`,
    `Vous avez hérité d'un vieux tacot invendable à ${'{city}'} ? Nous vous délivrons le certificat de destruction nécessaire pour clore le dossier administratif.`,
    `Pas besoin de louer une remorque coûteuse. Nous venons chercher votre épave à ${'{city}'} gratuitement, quelle que soit la distance au centre de recyclage.`,
    `Nous aidons régulièrement les agriculteurs et propriétaires terriens de ${'{city}'} à nettoyer leurs terrains des vieilles mécaniques accumulées.`
  ]
};

// 3. SOLUTION
const SOLUTIONS: Record<Archetype, string[]> = {
  URBAN_DENSE: [
    `Notre force : la réactivité urbaine. À ${'{city}'}, nous intervenons souvent dans l'heure pour ne pas bloquer la voie publique.`,
    `Formalités express : le certificat de cession est rempli sur le capot de la dépanneuse à ${'{city}'}. Vous êtes couvert instantanément.`,
    `Spécialistes des ZFE (Zones à Faibles Émissions), nous détruisons les vieux diesels et essence de ${'{city}'} pour vous permettre d'accéder aux primes à la conversion.`,
    `Aucun frais caché. Le déplacement, le chargement et la destruction sont intégralement gratuits pour tout véhicule complet à ${'{city}'}.`
  ],
  SUBURBAN: [
    `Nous prenons tout en charge : de l'enlèvement devant votre portail à ${'{city}'} jusqu'à la dépollution totale en centre agréé VHU.`,
    `Profitez de notre passage régulier dans le secteur de ${'{city}'} pour grouper l'enlèvement si vous avez plusieurs véhicules ou ferrailles.`,
    `Notre service administratif s'occupe de déclarer la destruction en préfecture. Vous n'avez rien à envoyer, tout est géré pour vous à ${'{city}'}.`,
    `Une équipe locale, polie et ponctuelle. Nous respectons votre propriété à ${'{city}'} lors de l'opération de grutage.`
  ],
  RURAL_MIXED: [
    `Nous sommes l'un des rares épavistes à couvrir l'ensemble des lieux-dits et hameaux autour de ${'{city}'} sans facturer de frais kilométriques.`,
    `Gros volume ? Tracteur, utilitaire ou caravane à ${'{city}'} ? Appelez-nous pour vérifier notre capacité d'enlèvement spécifique.`,
    `Nous valorisons la ferraille au maximum. C'est pourquoi notre déplacement jusqu'à ${'{city}'} reste 100% gratuit pour vous.`,
    `Un service de proximité pour les gens du coin. Nous connaissons bien les routes de ${'{city}'} et arrivons équipés pour toutes les situations.`
  ]
};

// 4. WHY CHOOSE (Pourquoi faire appel à un épaviste agréé...)
const WHY_CHOOSE: Record<Archetype, string[]> = {
  URBAN_DENSE: [
    `À ${'{city}'}, l'espace public est surveillé. Une épave peut vous coûter très cher en amendes. Faire appel à un professionnel agréé, c'est la garantie d'une destruction légale et la fin immédiate de vos frais d'assurance.`,
    `Évitez la mise en fourrière de votre véhicule à ${'{city}'}. Notre service agréé VHU vous délivre instantanément le certificat de destruction (Cerfa) qui prouve que vous n'êtes plus responsable du véhicule.`,
    `Les règles de la préfecture à ${'{city}'} sont strictes. Seul un épaviste agréé peut traiter votre VHU pour qu'il ne soit plus considéré comme un déchet dangereux aux yeux de la loi.`
  ],
  SUBURBAN: [
    `Garder une épave chez soi à ${'{city}'} est illégal et dangereux. En passant par notre centre agréé, vous vous conformez à l'article L.541-46 du Code de l'environnement tout en libérant votre garage.`,
    `Pour vendre ou céder un véhicule non roulant à ${'{city}'}, la loi impose sa destruction par un centre VHU. Nous simplifions cette démarche en venant le chercher gratuitement chez vous.`,
    `Ne prenez pas de risques avec des ferrailleurs non déclarés. À ${'{city}'}, nous sommes officiellement mandatés par la préfecture pour assurer la traçabilité et la dépollution de votre auto.`
  ],
  RURAL_MIXED: [
    `Protéger les sols et les eaux de ${'{city}'} est une priorité. Une épave qui rouille libère des métaux lourds. Notre agrément VHU garantit un traitement écologique et sécurisé de ces déchets.`,
    `L'abandon de véhicule dans la nature autour de ${'{city}'} est sévèrement puni. Notre service gratuit vous permet de respecter la loi et de préserver votre environnement local sans effort.`,
    `En zone rurale comme à ${'{city}'}, il est tentant de stocker. Mais une épave est un déchet dangereux. Nous vous aidons à vous en débarrasser légalement et proprement.`
  ]
};

// 5. ECOLOGY (Recyclage et Dépollution...)
const ECOLOGY: Record<Archetype, string[]> = {
  URBAN_DENSE: [
    `En ville comme à ${'{city}'}, la qualité de l'air et des sols est cruciale. Nous dépolluons chaque véhicule (batterie, fluides, pneus) avant de broyer la carcasse pour réutiliser l'acier.`,
    `Participez à l'économie circulaire de ${'{city}'}. 95% de la masse de votre voiture sera recyclée. L'acier servira à produire de nouveaux matériaux, réduisant ainsi l'empreinte carbone urbaine.`,
    `Notre centre VHU proche de ${'{city}'} suit des normes drastiques. Rien n'est jeté dans la nature. Huiles usagées et plastiques sont valorisés dans des filières spécialisées.`
  ],
  SUBURBAN: [
    `Votre vieille voiture à ${'{city}'} contient des matières dangereuses. Notre processus industriel permet de les extraire en toute sécurité, protégeant ainsi votre quartier résidentiel.`,
    `Le recyclage automobile est un enjeu majeur. En nous confiant votre épave à ${'{city}'}, vous assurez qu'elle ne finira pas dans une décharge sauvage, mais qu'elle sera valorisée à 95%.`,
    `Agissez localement pour l'écologie à ${'{city}'}. Chaque voiture recyclée économise des tonnes de CO2 et de matières premières. C'est un geste citoyen gratuit et utile.`
  ],
  RURAL_MIXED: [
    `Préserver les terres agricoles et les forêts autour de ${'{city}'} commence par ne pas laisser traîner d'épaves. Nous garantissons une dépollution totale (zéro rejet dans le sol).`,
    `Les batteries et liquides de refroidissement sont des poisons pour la faune de ${'{city}'}. Notre agrément nous oblige à les traiter en circuit fermé. Rien ne fuite dans la nature.`,
    `Faire enlever son épave à ${'{city}'}, c'est aussi nettoyer le paysage. Nous transformons une pollution visuelle et chimique en ressources réutilisables pour l'industrie.`
  ]
};

export const generateCityContent = (city: string, deptCode: string, deptInfo: DeptInfo) => {
  const seed = `${city}-${deptCode}`;
  const archetype = getArchetype(deptCode);

  // Helper to replace placeholder
  const process = (text: string) => text.replace(/\{city\}/g, city).replace(/\{deptCode\}/g, deptCode);

  return {
    intro: process(selectVariation(INTROS[archetype], seed + 'intro')),
    situation: process(selectVariation(SITUATIONS[archetype], seed + 'situation')),
    solution: process(selectVariation(SOLUTIONS[archetype], seed + 'solution')),
    whyChoose: process(selectVariation(WHY_CHOOSE[archetype], seed + 'why')),
    ecology: process(selectVariation(ECOLOGY[archetype], seed + 'eco')),
    cta: process(selectVariation([
      `<a href="tel:0695297785" class="cta-button">📞 Appeler le 06 95 29 77 85</a>`,
      `<a href="tel:0695297785" class="cta-button">🚀 Intervention Immédiate</a>`,
      `<a href="tel:0695297785" class="cta-button">♻️ Destruction Gratuite</a>`
    ], seed + 'cta')),
    processIntro: process(selectVariation([
      `Étapes pour l'enlèvement à ${city} :`,
      `Comment se débarrasser de son auto à ${city} ?`,
      `Procédure de destruction VHU à ${city} :`,
      `Votre enlèvement à ${city} en 3 points :`
    ], seed + 'process')),
    
    // Keep Dept Specifics as they are already quite good/localized
    deptSpecifics: `Note pour les résidents de ${deptInfo.name} : ${deptInfo.risk}. ${deptInfo.argument}`
  };
};

export const generateCityMetadata = (city: string, deptCode: string) => {
  const seed = `${city}-${deptCode}-meta`;
  const archetype = getArchetype(deptCode);

  const titles = [
    `Épaviste Gratuit ${city} (${deptCode}) - Agréé VHU`,
    `Enlèvement Épave ${city} - Destruction Voiture Gratuite`,
    `Casse Auto ${city} : Épaviste Agréé & Gratuit`,
    `Se débarrasser de sa voiture à ${city} (Service Gratuit)`
  ];

  const descs = {
    URBAN_DENSE: [
      `Intervention rapide en parking et sous-sol à ${city}. Épaviste agréé pour destruction voiture. Certificat Cerfa immédiat. 100% Gratuit.`,
      `Épaviste ${city} spécialisé accès difficiles. Enlèvement épave gratuit 7j/7. Centre VHU agréé préfecture.`,
    ],
    SUBURBAN: [
      `Enlèvement d'épave à domicile à ${city}. Service gratuit et soigné. Destruction administrative officielle VHU.`,
      `Votre épaviste gratuit sur ${city}. On récupère votre véhicule roulant ou non. Papiers faits sur place.`,
    ],
    RURAL_MIXED: [
      `Ramassage épave gratuit ${city} et alentours. Intervention toutes distances ${deptCode}. Recyclage éco-responsable garanti.`,
      `Débarras de voiture, ferraille et utilitaire à ${city}. Épaviste gratuit agréé VHU. Déplacement offert.`,
    ]
  };

  return {
    title: selectVariation(titles, seed + 'title'),
    description: selectVariation(descs[archetype] || descs.URBAN_DENSE, seed + 'desc').replace(/\{city\}/g, city)
  };
};

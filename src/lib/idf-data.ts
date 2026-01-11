import { formatCityName as formatCity } from './utils';

export interface DeptInfo {
  name: string;
  prefecture: string;
  prefectureCity: string;
  risk: string;
  argument: string;
  highways: string;
  topCities: string[];
  terrain_text?: string;
}

export const deptMap: Record<string, DeptInfo> = {
    '75': {
      name: 'Paris',
      prefecture: 'Préfecture de Police de Paris',
      prefectureCity: 'Paris',
      risk: 'ZFE Grand Paris & Stationnement Gênant',
      argument: 'Intervention rapide dans les parkings souterrains et zones à accès réglementé.',
      highways: 'Périphérique, Voies sur berge',
      topCities: ['Paris', 'Paris 15', 'Paris 18', 'Paris 20', 'Paris 13', 'Paris 19', 'Paris 16', 'Paris 11', 'Paris 12', 'Paris 14', 'Paris 17', 'Paris 10', 'Paris 5', 'Paris 9', 'Paris 7', 'Paris 6', 'Paris 8', 'Paris 3', 'Paris 4', 'Paris 1']
    },
    '77': {
      name: 'Seine-et-Marne',
      prefecture: 'Préfecture de Melun',
      prefectureCity: 'Melun',
      risk: 'Pollution des Nappes Phréatiques',
      argument: 'Intervention dans les zones rurales et pavillonnaires avec dépanneuse adaptée.',
      highways: 'A4, A5, A6, N104 (Francilienne)',
      topCities: ['Chelles', 'Meaux', 'Melun', 'Pontault-Combault', 'Savigny-le-Temple', 'Bussy-Saint-Georges', 'Villeparisis', 'Champs-sur-Marne', 'Torcy', 'Roissy-en-Brie', 'Combs-la-Ville', 'Dammarie-les-Lys', 'Lagny-sur-Marne', 'Le Mée-sur-Seine', 'Ozoir-la-Ferrière', 'Mitry-Mory', 'Moissy-Cramayel', 'Montereau-Fault-Yonne', 'Brie-Comte-Robert', 'Noisiel']
    },
    '78': {
      name: 'Yvelines',
      prefecture: 'Préfecture de Versailles',
      prefectureCity: 'Versailles',
      risk: 'Protection des Espaces Naturels',
      argument: 'Enlèvement respectueux de l\'environnement en zone urbaine et forestière.',
      highways: 'A13, A12, A86, N10',
      terrain_text: "Nos dépanneuses sillonnent l'A13 et l'A12 en permanence. Intervention rapide à Versailles, Saint-Germain, Mantes. Accès difficile en forêt ou sous-sol résidentiel accepté.",
      topCities: ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye', 'Poissy', 'Conflans-Sainte-Honorine', 'Montigny-le-Bretonneux', 'Houilles', 'Trappes', 'Plaisir', 'Le Chesnay-Rocquencourt', 'Chatou', 'Guyancourt', 'Rambouillet', 'Élancourt', 'Maisons-Laffitte', 'Vélizy-Villacoublay', 'Achères', 'Les Mureaux', 'Saint-Cyr-l\'École']
    },
    '91': {
      name: 'Essonne',
      prefecture: 'Préfecture d\'Évry',
      prefectureCity: 'Évry',
      risk: 'Véhicules Ventouses',
      argument: 'Solution rapide pour libérer votre place de stationnement.',
      highways: 'A6, A10, N104, N20',
      terrain_text: "Présence quotidienne sur la N104 et l'A6. Dépannage express à Evry, Corbeil, Massy. Enlèvement épave zone industrielle et pavillonnaire.",
      topCities: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Palaiseau', 'Athis-Mons', 'Vigneux-sur-Seine', 'Viry-Châtillon', 'Ris-Orangis', 'Yerres', 'Draveil', 'Grigny', 'Brétigny-sur-Orge', 'Brunoy', 'Les Ulis', 'Étampes', 'Montgeron', 'Gif-sur-Yvette', 'Longjumeau']
    },
    '92': {
      name: 'Hauts-de-Seine',
      prefecture: 'Préfecture de Nanterre',
      prefectureCity: 'Nanterre',
      risk: 'Densité Urbaine Élevée',
      argument: 'Spécialiste des interventions en sous-sol et accès difficiles.',
      highways: 'A86, A13, A14, Périphérique',
      topCities: ['Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine', 'Colombes', 'Courbevoie', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Clichy', 'Antony', 'Neuilly-sur-Seine', 'Gennevilliers', 'Suresnes', 'Puteaux', 'Montrouge', 'Bagneux', 'Châtillon', 'Châtenay-Malabry', 'Malakoff', 'Meudon']
    },
    '93': {
      name: 'Seine-Saint-Denis',
      prefecture: 'Préfecture de Bobigny',
      prefectureCity: 'Bobigny',
      risk: 'Stationnement Abusif',
      argument: 'Intervention express pour mise en conformité immédiate.',
      highways: 'A1, A3, A86, N3',
      topCities: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy', 'Noisy-le-Grand', 'Pantin', 'Le Blanc-Mesnil', 'Bondy', 'Épinay-sur-Seine', 'Sevran', 'Bobigny', 'Saint-Ouen-sur-Seine', 'Rosny-sous-Bois', 'Livry-Gargan', 'Noisy-le-Sec', 'La Courneuve', 'Gagny', 'Stains', 'Villepinte']
    },
    '94': {
      name: 'Val-de-Marne',
      prefecture: 'Préfecture de Créteil',
      prefectureCity: 'Créteil',
      risk: 'Zones Inondables',
      argument: 'Évacuation prioritaire des véhicules à risque environnemental.',
      highways: 'A4, A86, A6, N6',
      topCities: ['Vitry-sur-Seine', 'Créteil', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Ivry-sur-Seine', 'Maisons-Alfort', 'Villejuif', 'Fontenay-sous-Bois', 'Vincennes', 'Alfortville', 'Choisy-le-Roi', 'Le Perreux-sur-Marne', 'Villeneuve-Saint-Georges', 'Nogent-sur-Marne', 'Charenton-le-Pont', 'L\'Haÿ-les-Roses', 'Cachan', 'Thiais', 'Fresnes', 'Sucy-en-Brie']
    },
    '95': {
      name: 'Val-d\'Oise',
      prefecture: 'Préfecture de Cergy',
      prefectureCity: 'Cergy',
      risk: 'Sécurité Routière',
      argument: 'Dégagement rapide des voies publiques et privées.',
      highways: 'A15, A115, N184, N104',
      topCities: ['Argenteuil', 'Cergy', 'Sarcelles', 'Garges-lès-Gonesse', 'Franconville', 'Goussainville', 'Pontoise', 'Bezons', 'Herblay-sur-Seine', 'Ermont', 'Villiers-le-Bel', 'Gonesse', 'Taverny', 'Sannois', 'Cormeilles-en-Parisis', 'Eaubonne', 'Saint-Ouen-l\'Aumône', 'Deuil-la-Barre', 'Montmorency', 'Saint-Gratien']
    }
  };

export const getDeptInfo = (deptCode: string): DeptInfo => {
  return deptMap[deptCode] || {
    name: 'Île-de-France et alentours',
    prefecture: 'Préfecture de Police',
    prefectureCity: 'Paris',
    risk: 'Réglementation Environnementale Stricte',
    argument: 'Service agréé couvrant toute la région Île-de-France et alentours.',
    highways: 'les principaux axes routiers franciliens',
    topCities: []
  };
};

export const formatCityName = formatCity;

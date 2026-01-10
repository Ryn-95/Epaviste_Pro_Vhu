import { formatCityName as formatCity } from './utils';

export interface DeptInfo {
  name: string;
  prefecture: string;
  risk: string;
  argument: string;
}

export const getDeptInfo = (deptCode: string): DeptInfo => {
  const deptMap: Record<string, DeptInfo> = {
    '75': {
      name: 'Paris',
      prefecture: 'Préfecture de Police de Paris',
      risk: 'ZFE Grand Paris & Stationnement Gênant',
      argument: 'Intervention rapide dans les parkings souterrains et zones à accès réglementé.'
    },
    '77': {
      name: 'Seine-et-Marne',
      prefecture: 'Préfecture de Melun',
      risk: 'Pollution des Nappes Phréatiques',
      argument: 'Intervention dans les zones rurales et pavillonnaires avec dépanneuse adaptée.'
    },
    '78': {
      name: 'Yvelines',
      prefecture: 'Préfecture de Versailles',
      risk: 'Protection des Espaces Naturels',
      argument: 'Enlèvement respectueux de l\'environnement en zone urbaine et forestière.'
    },
    '91': {
      name: 'Essonne',
      prefecture: 'Préfecture d\'Évry',
      risk: 'Véhicules Ventouses',
      argument: 'Solution rapide pour libérer votre place de stationnement.'
    },
    '92': {
      name: 'Hauts-de-Seine',
      prefecture: 'Préfecture de Nanterre',
      risk: 'Densité Urbaine Élevée',
      argument: 'Spécialiste des interventions en sous-sol et accès difficiles.'
    },
    '93': {
      name: 'Seine-Saint-Denis',
      prefecture: 'Préfecture de Bobigny',
      risk: 'Stationnement Abusif',
      argument: 'Intervention express pour mise en conformité immédiate.'
    },
    '94': {
      name: 'Val-de-Marne',
      prefecture: 'Préfecture de Créteil',
      risk: 'Zones Inondables',
      argument: 'Évacuation prioritaire des véhicules à risque environnemental.'
    },
    '95': {
      name: 'Val-d\'Oise',
      prefecture: 'Préfecture de Cergy',
      risk: 'Sécurité Routière',
      argument: 'Dégagement rapide des voies publiques et privées.'
    }
  };

  return deptMap[deptCode] || {
    name: 'Île-de-France et alentours',
    prefecture: 'Préfecture de Police',
    risk: 'Réglementation Environnementale Stricte',
    argument: 'Service agréé couvrant toute la région Île-de-France et alentours.'
  };
};

export const formatCityName = formatCity;

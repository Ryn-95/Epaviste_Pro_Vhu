"use client";

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Checklist() {
  const [items, setItems] = useState([
    { id: 1, label: "Carte Grise originale (barrée avec mention 'Cédé le...')", checked: false },
    { id: 2, label: "Certificat de Non-Gage (Daté de moins de 15 jours)", checked: false },
    { id: 3, label: "Pièce d'identité du titulaire (Recto/Verso)", checked: false },
    { id: 4, label: "Certificat de Cession (Cerfa 15776*02) rempli", checked: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const progress = Math.round((items.filter(i => i.checked).length / items.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className={progress === 100 ? "text-green-600" : "text-slate-500"}>
            {progress === 100 ? "Dossier Complet !" : "Progression de votre dossier"}
          </span>
          <span className="text-blue-600">{progress}%</span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out ${progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <label 
            key={item.id} 
            className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              item.checked 
                ? 'bg-green-50 border-green-500 shadow-sm' 
                : 'bg-white border-slate-100 hover:border-blue-200'
            }`}
          >
            <div className={`mt-1 w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
              item.checked ? 'bg-green-500 border-green-500' : 'bg-white border-slate-300'
            }`}>
              {item.checked && <CheckCircle size={16} className="text-white" />}
            </div>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={item.checked} 
              onChange={() => toggleItem(item.id)} 
            />
            <span className={`font-medium ${item.checked ? 'text-green-900' : 'text-slate-700'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle className="shrink-0" />
          <p className="font-bold text-sm">Tout est bon ! Vous pouvez appeler l'épaviste pour l'enlèvement.</p>
        </div>
      )}
    </div>
  );
}

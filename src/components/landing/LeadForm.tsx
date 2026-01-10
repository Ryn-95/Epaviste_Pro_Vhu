'use client';

import { useState } from 'react';
import { Phone, Send } from 'lucide-react';

export default function LeadForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Nom du propriétaire</label>
        <input 
          type="text" 
          id="name"
          placeholder="Ex: Jean Dupont"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-sm font-bold placeholder-slate-600 transition-colors uppercase"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Téléphone mobile</label>
        <input 
          type="tel" 
          id="phone"
          placeholder="06 00 00 00 00"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-sm font-bold placeholder-slate-600 transition-colors uppercase"
        />
      </div>
      
      <div>
        <label htmlFor="city" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Lieu du véhicule</label>
        <input 
          type="text" 
          id="city"
          placeholder="Code postal ou Ville"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-sm font-bold placeholder-slate-600 transition-colors uppercase"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-[#E1000F] hover:bg-red-700 text-white font-black text-lg py-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-6 uppercase"
      >
        <span>Valider le dossier</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}

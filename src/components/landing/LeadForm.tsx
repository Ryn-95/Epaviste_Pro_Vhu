'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { sendLeadEmail } from '@/app/actions';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    
    try {
      const result = await sendLeadEmail(formData);
      
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage("Une erreur technique est survenue.");
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/20 p-6 text-center rounded-sm animate-fade-in">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white uppercase mb-2">Dossier Transmis !</h3>
        <p className="text-slate-300 mb-6 text-sm">{message}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sm font-bold text-[#E1000F] hover:text-white underline uppercase transition-colors"
        >
          Envoyer un autre dossier
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" action={handleSubmit}>
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3 rounded-sm mb-4 animate-fade-in">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-red-200 text-sm font-medium">{message}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Nom du propriétaire</label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
          placeholder="Ex: Jean Dupont"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-base font-bold placeholder-slate-600 transition-colors uppercase appearance-none rounded-none"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Téléphone mobile</label>
        <input 
          type="tel" 
          id="phone"
          name="phone"
          required
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="06 00 00 00 00"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-base font-bold placeholder-slate-600 transition-colors uppercase appearance-none rounded-none"
        />
      </div>
      
      <div>
        <label htmlFor="city" className="block text-xs font-black text-slate-400 uppercase mb-1 tracking-wider">Lieu du véhicule</label>
        <input 
          type="text" 
          id="city"
          name="city"
          required
          placeholder="Code postal ou Ville"
          className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 focus:border-[#E1000F] text-white outline-none text-base font-bold placeholder-slate-600 transition-colors uppercase appearance-none rounded-none"
        />
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#E1000F] hover:bg-red-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-black text-lg py-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-6 uppercase group"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Valider le dossier</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

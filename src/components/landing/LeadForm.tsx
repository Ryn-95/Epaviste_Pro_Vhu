'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleClientSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const city = formData.get('city') as string;
    const ref = `VHU-${new Date().getFullYear()}-IDF`;

    // Validation locale
    if (name.length < 2) {
      setStatus('error');
      setMessage('Le nom doit contenir au moins 2 caractères.');
      return;
    }
    if (phone.length < 10) {
      setStatus('error');
      setMessage('Le numéro de téléphone doit être valide (10 chiffres).');
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/epaviste.provhu@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nouveau Dossier VHU : ${name} (${city})`,
          _template: 'table',
          _captcha: 'false',
          Reference: ref,
          Nom: name,
          Telephone: phone,
          Ville: city,
          Date: new Date().toLocaleDateString('fr-FR'),
          Source: 'Site Web Epaviste Pro VHU'
        })
      });

      const data = await response.json();

      if (data.success === 'false' || data.success === false) {
        if (data.message && data.message.includes('Activation')) {
          setStatus('success');
          setMessage('Dossier reçu ! Vérifiez vos emails (epaviste.provhu@gmail.com) pour activer le service lors de ce premier envoi.');
          return;
        }
        throw new Error(data.message || 'Erreur inconnue FormSubmit');
      }

      setStatus('success');
      setMessage('Dossier validé avec succès ! Nous vous rappelons sous 10 minutes.');
      
    } catch (error) {
      console.error('Erreur envoi:', error);
      setStatus('error');
      setMessage("Une erreur est survenue. Veuillez nous contacter directement par téléphone.");
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
    <form className="space-y-4" onSubmit={handleClientSubmit}>
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

'use server';

export async function sendLeadEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const city = formData.get('city') as string;
  const ref = `VHU-${new Date().getFullYear()}-IDF`;

  if (!name || !phone || !city) {
    return { success: false, message: 'Veuillez remplir tous les champs.' };
  }

  // Vérification basique anti-spam
  if (name.length < 2 || phone.length < 10) {
    return { success: false, message: 'Veuillez renseigner des informations valides.' };
  }

  // SOLUTION SANS MOT DE PASSE (Via FormSubmit.co)
  // L'email sera envoyé automatiquement à : epaviste.provhu@gmail.com
  // IMPORTANT : Lors du tout premier test, vous recevrez un mail de "FormSubmit" 
  // vous demandant de confirmer l'adresse email (bouton "Activate"). C'est tout !
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/epaviste.provhu@gmail.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Headers requis pour que FormSubmit accepte la requête venant d'un serveur (Server Action)
        'Referer': 'https://epaviste-pro-vhu.fr', 
        'Origin': 'https://epaviste-pro-vhu.fr'
      },
      body: JSON.stringify({
        _subject: `Nouveau Dossier VHU : ${name} (${city})`,
        _template: 'table', // Format tableau propre
        _captcha: 'false', // Pas de captcha compliqué
        _honey: '', // Champ anti-spam caché
        
        // Les données du formulaire
        Reference: ref,
        Nom: name,
        Telephone: phone,
        Ville: city,
        Date: new Date().toLocaleDateString('fr-FR'),
        Source: 'Site Web Epaviste Pro VHU'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    
    // FormSubmit renvoie 200 même en cas d'erreur (ex: activation requise)
    if (data.success === 'false' || data.success === false) {
      // Cas spécifique de l'activation
      if (data.message && data.message.includes('Activation')) {
         return { success: true, message: 'Dossier reçu ! Vérifiez vos emails (epaviste.provhu@gmail.com) pour activer le service lors de ce premier envoi.' };
      }
      throw new Error(data.message || 'Erreur inconnue FormSubmit');
    }

    return { success: true, message: 'Dossier validé avec succès ! Nous vous rappelons sous 10 minutes.' };
  } catch (error) {
    console.error('Erreur envoi email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, message: `Erreur technique : ${errorMessage}` };
  }
}

'use server';

import nodemailer from 'nodemailer';

export async function sendLeadEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const city = formData.get('city') as string;
  const ref = `VHU-${new Date().getFullYear()}-IDF`;

  if (!name || !phone || !city) {
    return { success: false, message: 'Veuillez remplir tous les champs.' };
  }

  // Configuration du transporteur SMTP (Outlook)
  // Nécessite les variables d'environnement : SMTP_EMAIL et SMTP_PASSWORD
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL || 'epaviste.provhu@outlook.fr',
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire VHU" <${process.env.SMTP_EMAIL || 'epaviste.provhu@outlook.fr'}>`,
      to: 'epaviste.provhu@outlook.fr',
      subject: `Nouveau Dossier VHU : ${name} (${city})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #E1000F; text-transform: uppercase; border-bottom: 2px solid #E1000F; padding-bottom: 10px;">Nouveau Dossier d'Enlèvement</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #555;">RÉFÉRENCE DOSSIER</p>
            <p style="margin: 5px 0 0 0; font-size: 18px; color: #000;">${ref}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; width: 40%; font-weight: bold; color: #555;">Nom du propriétaire</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #000;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Téléphone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #000; font-size: 16px;">
                <a href="tel:${phone}" style="color: #E1000F; text-decoration: none; font-weight: bold;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Lieu du véhicule</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #000;">${city}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            <p>Ce message a été envoyé automatiquement depuis le site Epaviste Pro VHU.</p>
          </div>
        </div>
      `,
    });

    return { success: true, message: 'Dossier validé avec succès ! Nous vous rappelons sous 10 minutes.' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, message: 'Une erreur est survenue. Veuillez nous contacter directement par téléphone.' };
  }
}

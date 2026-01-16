import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TrustBadge from "@/components/ui/TrustBadge";
import { Phone } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: '--font-roboto-slab' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.epavisteprovhu.fr'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  title: {
    template: "%s | Épaviste Pro VHU Gratuit - Agréé Préfecture",
    default: "Épaviste Pro VHU Gratuit Île-de-France - Agréé PR 920001 B",
  },
  description: "Service Épaviste Pro VHU Gratuit. Enlèvement d'épave 7j/7 en Île-de-France. Centre Agréé Préfecture (PR 920001 B). Certificat de Destruction immédiat.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "IdAKYkmSar288rIGFeySADxOY2PJk1YpjOUBkbnRX_U",
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon.png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.epavisteprovhu.fr',
    title: 'Épaviste Pro VHU Gratuit Île-de-France - Agréé Préfecture',
    description: "Service d'enlèvement d'épave gratuit 7j/7 en Île-de-France. Centre VHU Agréé (PR 920001 B). Certificat de destruction immédiat.",
    siteName: 'Épaviste Pro VHU',
    images: [
      {
        url: '/epaviste-action.jpg', // Ensure this image exists or use a valid one
        width: 1200,
        height: 630,
        alt: 'Épaviste Pro VHU Intervention',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Épaviste Pro VHU Gratuit Île-de-France',
    description: "Enlèvement d'épave gratuit et agréé en Île-de-France. Intervention rapide.",
    images: ['/epaviste-action.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${robotoSlab.variable} font-sans antialiased pb-16 md:pb-0`}>
        {children}
        <TrustBadge />
        <Footer />
        
        {/* MOBILE STICKY ACTION BAR */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[60px] md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <a 
            href="tel:0695297785" 
            className="flex-1 bg-[#E1000F] text-white flex flex-col items-center justify-center font-bold text-lg hover:bg-red-700 transition-colors uppercase tracking-widest pb-safe"
          >
             <div className="flex items-center gap-3">
              <Phone size={24} className="animate-pulse" />
              <span>Appeler l'épaviste</span>
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}

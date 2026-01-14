import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import TrustBadge from "@/components/ui/TrustBadge";
import { Phone, MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: '--font-roboto-slab' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.epavisteprovhu.fr'),
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
            href="https://wa.me/33695297785" 
            className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center font-bold text-sm hover:bg-[#128c7e] transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </div>
          </a>
          <a 
            href="tel:0695297785" 
            className="flex-1 bg-[#000091] text-white flex flex-col items-center justify-center font-bold text-sm hover:bg-blue-900 transition-colors"
          >
             <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>APPELER</span>
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}

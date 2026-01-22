'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '@/lib/seo-data';
import { Phone, Menu, X, Clock, MapPin, ShieldCheck, FileText, Truck, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effet de scroll pour réduire la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* ESPACEUR POUR COMPENSER LA BARRE FIXED - AJUSTÉ MOBILE */}
      <div className="h-[calc(70px+env(safe-area-inset-top))] md:h-[100px] w-full bg-slate-900 lg:hidden"></div>

      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        pt-[env(safe-area-inset-top)]
        lg:pt-0 lg:top-4 lg:left-4 lg:right-4 lg:max-w-7xl lg:mx-auto lg:rounded-2xl
        ${scrolled ? 'lg:top-2 shadow-2xl bg-slate-950/95' : 'bg-slate-900/90 backdrop-blur-md shadow-xl'}
        border-b lg:border border-white/10
      `}>
        
        {/* LIGNE TRICOLORE DISCRÈTE (EN BAS DE BARRE) */}
        <div className="absolute bottom-0 left-0 right-0 lg:left-4 lg:right-4 h-[2px] bg-gradient-to-r from-blue-600 via-white to-red-600 opacity-50 lg:rounded-full"></div>

        <div className="px-4 md:px-6 relative z-10">
          <div className="flex justify-between items-center h-[70px] md:h-[80px]">
            
            {/* LEFT GROUP: IDENTITY + ECO */}
            <div className="flex items-center gap-3 sm:gap-6 max-w-[80%]">
              {/* 1. IDENTITY BLOCK */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <div className={`
                  relative transition-all duration-300
                  ${scrolled ? 'w-9 h-9' : 'w-10 h-10 md:w-14 md:h-14'}
                  bg-gradient-to-br from-white to-slate-200 rounded-xl shadow-lg p-1 border border-white/20 shrink-0
                `}>
                  <NextImage 
                    src="/Logoepaviste1.png" 
                    alt="Logo Épaviste" 
                    fill
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="font-serif text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none group-hover:text-blue-400 transition-colors truncate">
                    Épaviste<span className="text-[#E1000F]">.PRO</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex gap-0.5 shrink-0">
                      {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-[#E1000F] text-[#E1000F]" />)}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                      Centre VHU Agréé
                    </span>
                  </div>
                </div>
              </Link>

              {/* CERTIFICATIONS BLOCK (Desktop) */}
              <div className="hidden 2xl:flex items-center gap-4 pl-6 border-l border-white/10 h-10 animate-fade-in">
                 {/* Agréé État */}
                 <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo-etat.svg" alt="Agréé État" className="h-8 w-auto" />
                 </div>
                 <div className="w-px h-6 bg-white/10"></div>
                 
                 {/* Partenaire ADEME */}
                 <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo-ademe.svg" alt="Partenaire ADEME" className="h-8 w-auto" />
                 </div>
                 <div className="w-px h-6 bg-white/10"></div>

                 {/* ISO 14001 */}
                 <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo-iso.svg" alt="Certifié ISO 14001" className="h-8 w-auto" />
                 </div>
                 <div className="w-px h-6 bg-white/10"></div>

                 {/* Ecolo */}
                 <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo-ecolo.svg" alt="Recyclage" className="h-8 w-auto" />
                 </div>
              </div>
            </div>

            {/* 2. CENTER NAVIGATION - CAPSULE STYLE */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
              {[
                { name: 'Enlèvement', href: '/services-epaviste' },
                { name: 'Documents', href: '/documents-obligatoires' },
                { name: 'Zones', href: '/zones-intervention' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`
                    px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300
                    ${pathname === item.href 
                      ? 'bg-white text-slate-900 shadow-lg scale-105' 
                      : 'text-slate-300 hover:text-white hover:bg-white/10'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 3. RIGHT ACTION - COMPACT & POWERFUL */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end text-right mr-2">
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Disponibilité Immédiate
                </span>
                <span className="text-xs text-slate-400 font-mono">7j/7 • 08h-20h</span>
              </div>
              
              <a 
                href="tel:0695297785" 
                className="group relative overflow-hidden bg-[#E1000F] hover:bg-[#c9000d] text-white pl-5 pr-6 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(225,0,15,0.4)] hover:shadow-[0_0_30px_rgba(225,0,15,0.6)] flex items-center gap-3"
              >
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold uppercase opacity-80 mb-0.5">Urgence VHU</span>
                  <span className="text-lg font-black tracking-tight">06 95 29 77 85</span>
                </div>
              </a>
            </div>

            {/* MOBILE ACTION & TOGGLE */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* MOBILE CALL BUTTON */}
              <a 
                href="tel:0695297785" 
                className="bg-[#E1000F] text-white p-2 rounded-lg hover:bg-[#c9000d] transition-colors shadow-lg animate-pulse-slow"
                aria-label="Appeler maintenant"
              >
                <Phone size={20} />
              </a>

              {/* MOBILE TOGGLE */}
              <button 
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU FULLSCREEN */}
        <div className={`
          fixed inset-0 top-[70px] bg-slate-950 z-40 overflow-y-auto
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          xl:hidden transition-all duration-300
        `}>
          <div className="p-4 space-y-6">
            <nav className="flex flex-col gap-2">
            {[
              { name: 'Enlèvement Gratuit', href: '/services-epaviste', icon: Truck },
              { name: 'Documents Requis', href: '/documents-obligatoires', icon: FileText },
              { name: 'Zones d\'Intervention', href: '/zones-intervention', icon: MapPin },
              { name: 'Centre VHU Agréé', href: '/centre-vhu-agree', icon: ShieldCheck },
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white transition-colors border border-transparent hover:border-white/5"
              >
                <div className="bg-[#E1000F]/10 p-2 rounded-lg text-[#E1000F]">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-lg">{item.name}</span>
                <ArrowRight size={16} className="ml-auto opacity-50" />
              </Link>
            ))}
            
            <a href="tel:0695297785" className="mt-4 bg-[#E1000F] text-white p-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg shadow-lg">
              <Phone size={20} />
              Appeler le 06 95 29 77 85
            </a>
          </nav>
          </div>
        </div>
      </header>
    </>
  );
}

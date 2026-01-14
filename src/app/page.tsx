import Header from '@/components/landing/Header';
import ModernHero from '@/components/landing/ModernHero';
import ProcessSteps from '@/components/landing/ProcessSteps';
import GallerySection from '@/components/landing/GallerySection';
import VideoSection from '@/components/landing/VideoSection';
import ServicesGrid from '@/components/landing/ServicesGrid';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import CitySEOContent from '@/components/landing/CitySEOContent';
import GovernmentAid from '@/components/landing/GovernmentAid';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import SEOContentBlock from '@/components/landing/SEOContentBlock';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <LocalBusinessSchema />
      
      {/* 1. Official Header */}
      <Header />

      {/* 2. Modern Hero with Lead Form */}
      <ModernHero />

      {/* 3. Services Grid */}
      <ServicesGrid />

      {/* 4. Government Aid Info (SEO + Trust) */}
      <GovernmentAid />

      {/* 5. How it works */}
      <ProcessSteps />

      {/* 5.5. Gallery - Real Interventions */}
      <GallerySection />

      {/* 5.6. Video Destruction */}
      <VideoSection />

      {/* 6. Trust & Testimonials */}
      <Testimonials />

      {/* 7. FAQ */}
      <FAQ />

      {/* 8. SEO Power Block - Keyword Density Booster */}
      <SEOContentBlock />

      {/* 9. Dynamic City Content (kept for ranking power) */}
      <CitySEOContent 
        city="Île-de-France" 
        deptCode="IDF" 
        deptName="Région Parisienne" 
      />
    </main>
  );
}

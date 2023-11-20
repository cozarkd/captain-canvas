

import NavBar from '@/components/NavBar';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import DownloadSection from '@/components/DownloadSection';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />

      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DownloadSection />
      <ContactForm />

      {/* Cualquier otro contenido que desees añadir */}
    </main>
  );
}

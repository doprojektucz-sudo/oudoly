import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import PondsPreview from '@/components/sections/PondsPreview';
import PricingPreview from '@/components/sections/PricingPreview';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <PondsPreview />
      <PricingPreview />
      <ContactSection />
    </main>
  );
}

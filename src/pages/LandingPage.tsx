import { CtaSection } from '../components/sections/CtaSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { HeroSection } from '../components/sections/HeroSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ProcessSection } from '../components/sections/ProcessSection';

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}

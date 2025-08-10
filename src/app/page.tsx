import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesPreview from '@/components/ServicesPreview/ServicesPreview';
import AdditionalServices from '@/components/AdditionalServices/AdditionalServices';
import ProcessSection from '@/components/ProcessSection/ProcessSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <AdditionalServices />
    </>
  );
}

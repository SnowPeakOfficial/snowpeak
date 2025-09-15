import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesPreview from '@/components/ServicesPreview/ServicesPreview';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import AdditionalServices from '@/components/AdditionalServices/AdditionalServices';
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects';
import Testimonials from '@/components/Testimonials/Testimonials';
import CallToActionBand from '@/components/CallToActionBand/CallToActionBand';

export default function Home() {
  // Feature flag for Additional Services section
  const showAdditionalServices = process.env.NEXT_PUBLIC_SHOW_ADDITIONAL_SERVICES === 'true';

  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessSection />
      {showAdditionalServices && <AdditionalServices />}
      <Testimonials />
      <CallToActionBand />
    </>
  );
}

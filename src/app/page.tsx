import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesPreview from '@/components/ServicesPreview/ServicesPreview';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import AdditionalServices from '@/components/AdditionalServices/AdditionalServices';
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects';
import Testimonials from '@/components/Testimonials/Testimonials';
import CallToActionBand from '@/components/CallToActionBand/CallToActionBand';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <ProcessSection />
      <AdditionalServices />
      <Testimonials />
      <CallToActionBand />
    </>
  );
}

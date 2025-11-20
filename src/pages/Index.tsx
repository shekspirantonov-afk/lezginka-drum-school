import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DirectionsSection from '@/components/DirectionsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import GallerySection from '@/components/GallerySection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header />
      <HeroSection />
      <DirectionsSection />
      <ScheduleSection />
      <PricingSection />
      <GallerySection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;

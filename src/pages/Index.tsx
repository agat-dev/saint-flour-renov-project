
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import EmergencySection from '../components/EmergencySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <EmergencySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

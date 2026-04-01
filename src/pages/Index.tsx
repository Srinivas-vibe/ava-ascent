import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <IndustriesSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <CTABanner />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

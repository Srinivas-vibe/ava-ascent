import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersBar from "@/components/PartnersBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PartnersBar />
    <WhyChooseUs />
    <IndustriesSection />
    <TestimonialsSection />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import PartnersBar from "@/components/PartnersBar";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold tracking-widest uppercase"
        >
          Who We Are
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mt-3"
        >
          About <span className="gradient-text">AVA</span>
        </motion.h1>
      </div>
    </section>

    <AboutSection />
    <PartnersBar />
    <IndustriesSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <CTABanner />
    <Footer />
  </div>
);

export default AboutPage;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PartnersBar from "@/components/PartnersBar";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero banner */}
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold tracking-widest uppercase"
        >
          What We Offer
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mt-3"
        >
          Our <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto"
        >
          AVA's services range from consultancy, internet/WAN connectivity, system procurement,
          adhoc IT support, ongoing support of existing systems to the implementation of full
          business systems and telephony.
        </motion.p>
      </div>
    </section>

    <ServicesSection />
    <ProcessSection />
    <PartnersBar />
    <CTABanner />
    <Footer />
  </div>
);

export default ServicesPage;

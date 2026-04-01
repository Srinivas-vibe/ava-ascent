import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PartnersBar from "@/components/PartnersBar";
import { motion } from "framer-motion";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-8 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold tracking-widest uppercase"
        >
          Reach Out
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold mt-3"
        >
          Contact <span className="gradient-text">Us</span>
        </motion.h1>
      </div>
    </section>

    <ContactSection />
    <PartnersBar />
    <Footer />
  </div>
);

export default ContactPage;

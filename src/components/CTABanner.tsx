import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden gradient-btn p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-[hsl(200,100%,45%)] opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your IT?
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
              Let's discuss how AVA Computing Services can help your business thrive with modern IT solutions.
            </p>
            <a
              href="#contact"
              className="inline-block bg-background text-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-background/90 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;

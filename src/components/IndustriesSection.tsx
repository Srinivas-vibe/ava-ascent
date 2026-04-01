import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Cpu, Landmark } from "lucide-react";

const industries = [
  { icon: Factory, title: "Manufacturing", description: "IT solutions for production environments, from small workshops to large-scale operations." },
  { icon: Cpu, title: "Engineering", description: "Supporting engineering firms with robust IT infrastructure and specialist system requirements." },
  { icon: Landmark, title: "Financial", description: "Secure, compliant IT systems for financial services businesses of all sizes." },
];

const IndustriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Industries</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Sectors We <span className="gradient-text">Serve</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center group hover:glow-card hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <ind.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

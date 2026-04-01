import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Clock, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Tailored Solutions", description: "Every solution is designed around your specific business requirements." },
  { icon: Users, title: "Trusted by SMEs", description: "From home offices to multi-site enterprises, we serve businesses of all sizes." },
  { icon: Clock, title: "20+ Years Experience", description: "Two decades of delivering reliable IT solutions across multiple sectors." },
  { icon: ShieldCheck, title: "Certified Partners", description: "Dell, BT, SonicWall, DrayTek — backed by industry-leading partnerships." },
];

const WhyChooseUs = () => {
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
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why AVA</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

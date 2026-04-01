import logoDell from "@/assets/logo-dell.png";
import logoBt from "@/assets/logo-bt.png";
import logoSonicwall from "@/assets/logo-sonicwall.png";
import logoEasynet from "@/assets/logo-easynet.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { src: logoDell, alt: "Dell Registered Partner", label: "Dell Registered Partner" },
  { src: logoEasynet, alt: "Easynet Connect", label: "Easynet Connect" },
  { src: logoBt, alt: "Reseller for BT", label: "Reseller for BT" },
  { src: logoSonicwall, alt: "SonicWall Partner", label: "SonicWall" },
];

const PartnersBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 px-6 border-t border-b border-border/20" ref={ref}>
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-10"
        >
          Trusted Technology Partners
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass flex items-center justify-center p-3 group-hover:glow-card transition-all duration-300">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-xs text-muted-foreground">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;

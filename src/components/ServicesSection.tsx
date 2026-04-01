import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Headphones, Globe, Network, Phone } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    description:
      "Independent advice on all aspects of IT/IS. We develop detailed action plans with clear objectives, including business analysis, system audits, and solution reviews.",
  },
  {
    icon: Headphones,
    title: "Support Services",
    description:
      "Comprehensive IT support ranging from ad-hoc assistance to fully managed services. We keep your systems running smoothly so you can focus on your business.",
  },
  {
    icon: Globe,
    title: "Internet Services",
    description:
      "Internet and WAN connectivity solutions tailored to your business needs. From broadband to dedicated leased lines, we ensure reliable connectivity.",
  },
  {
    icon: Network,
    title: "Network Installations",
    description:
      "Professional network design and installation for businesses of all sizes. From small offices to multi-site deployments with hundreds of machines.",
  },
  {
    icon: Phone,
    title: "Telecoms",
    description:
      "Modern telephony solutions including VoIP and unified communications. We implement full business telephone systems tailored to your requirements.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Please visit our service pages for full details on how we can help transform your IT infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 group hover:glow-card hover:-translate-y-2 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

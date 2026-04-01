import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ClipboardCheck, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Business Analysis",
    description: "An independent review and analysis of the client's business objectives.",
  },
  {
    icon: ClipboardCheck,
    title: "System Audit",
    description: "A detailed audit of all information and communication systems as well as business processes.",
  },
  {
    icon: Settings,
    title: "Solution Review",
    description: "A review of all currently available solutions that meet the project objectives.",
  },
  {
    icon: CheckCircle,
    title: "Final Recommendation",
    description: "Project solutions and final recommendations. The client can then implement independently or AVA can manage through to completion.",
  },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Our <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:text-${i % 2 === 0 ? "right" : "left"}`}
            >
              <div className="hidden md:block flex-1" />
              <div className="relative z-10 w-16 h-16 rounded-2xl gradient-btn flex items-center justify-center shrink-0 glow-primary">
                <step.icon className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

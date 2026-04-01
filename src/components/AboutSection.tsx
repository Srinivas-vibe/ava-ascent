import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Monitor, Award } from "lucide-react";

const badges = [
  { icon: Shield, label: "Dell Registered Partner" },
  { icon: Monitor, label: "BT Reseller" },
  { icon: Award, label: "SonicWall Partner" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
              Your Trusted IT Partner Since <span className="gradient-text">2004</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AVA Computing Services provide UK SME's with cost effective IT management, and support. 
                AVA's business strategy centers on IT solutions that revolve around your business and with 
                over twenty years experience in IT systems, we are well placed to offer a variety of services 
                tailored to meet your needs.
              </p>
              <p>
                Our customers operate within Manufacturing, Engineering and Financial sectors and their 
                computer systems range from one or two PC's operating from home or small office, to business 
                units with several hundred machines over multiple sites.
              </p>
              <p>
                AVA's services range from consultancy, internet/WAN connectivity, system procurement, adhoc 
                IT support, ongoing support of existing systems to the implementation of full business systems 
                and telephony.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <StatsCard value="20+" label="Years Experience" delay={0} inView={inView} />
              <StatsCard value="100+" label="Clients Served" delay={0.1} inView={inView} />
              <StatsCard value="500+" label="Projects Delivered" delay={0.2} inView={inView} />
              <StatsCard value="24/7" label="Support Available" delay={0.3} inView={inView} />
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 mt-6"
            >
              {badges.map((b) => (
                <div key={b.label} className="glass rounded-xl px-4 py-3 flex items-center gap-2 flex-1">
                  <b.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ value, label, delay, inView }: { value: string; label: string; delay: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    className="glass rounded-2xl p-6 text-center hover:glow-card transition-all duration-300"
  >
    <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </motion.div>
);

export default AboutSection;

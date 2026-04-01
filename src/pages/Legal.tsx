import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const legalSections = [
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "copyright", label: "Copyright Notice" },
];

const LegalPage = () => {
  const [active, setActive] = useState("terms");

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold"
          >
            <span className="gradient-text">Legal</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding !pt-8">
        <div className="container mx-auto max-w-4xl">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {legalSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === s.id ? "gradient-btn glow-primary" : "glass hover:bg-card/80 text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {active === "terms" && <TermsContent />}
          {active === "privacy" && <PrivacyContent />}
          {active === "copyright" && <CopyrightContent />}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const AnimatedContent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8 md:p-12 space-y-6 text-sm text-muted-foreground leading-relaxed"
    >
      {children}
    </motion.div>
  );
};

const TermsContent = () => (
  <AnimatedContent>
    <h2 className="font-display text-2xl font-bold text-foreground">Terms & Conditions</h2>
    <p>
      Your use of this Website constitutes your acceptance of these Terms and Conditions. AVA Computing
      Services reserves the right to change these Terms and Conditions at any time without prior notice.
    </p>
    <p>
      Although AVA Computing Services have made reasonable endeavors to ensure that information contained
      on this Website is correct, it is possible the information may be incomplete, contain errors or be
      out of date. You should verify any information obtained before acting upon it.
    </p>
    <p>
      AVA Computing Services will not be responsible or liable for any damages, whether direct, indirect
      or consequential, or any damages whatsoever arising from use or loss of use, data, or profits,
      whether in action of contract, negligence or otherwise, arising out of or in connection with the
      use of this Website. AVA Computing Services does not warrant that the functions or material contained
      in this Website will be uninterrupted or error free, that defects will be corrected, or that this
      Website or the server that makes it available are free of viruses, bugs or malicious code or the
      materials represent full functionality, accuracy and reliability.
    </p>
    <p>
      This Website may contain links to third party Websites. These Websites are beyond the control of
      AVA Computing Services, therefore AVA Computing Services accept no responsibility for their content.
    </p>
    <p>
      You may not add to or edit any material on this Website unless given specific permission to do so
      by AVA Computing Services.
    </p>
    <p>
      Terms & Conditions that apply to goods and services can be obtained by contacting AVA Computing Services.
    </p>
    <p>
      If these Terms and Conditions are not accepted in full, you do not have permission to access the
      contents of this Website and therefore should cease using this Website immediately.
    </p>
  </AnimatedContent>
);

const PrivacyContent = () => (
  <AnimatedContent>
    <h2 className="font-display text-2xl font-bold text-foreground">Privacy Policy</h2>
    <p>
      AVA Computing Services will collect personal information from its users through forms on this Website.
    </p>
    <p>
      AVA Computing Services will treat its users' personal details as confidential and will never sell,
      rent or give free the information collected.
    </p>
    <p>AVA Computing Services will only pass its users' personal details on to a third party:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>If in connection with an order placed with AVA Computing Services.</li>
      <li>If required to do so by the police or the courts.</li>
      <li>If placed on legal notice to do so.</li>
      <li>
        If AVA Computing Services believes a user may be in breach of our{" "}
        <button onClick={() => {}} className="text-primary hover:underline">Terms & Conditions</button>.
      </li>
    </ul>
  </AnimatedContent>
);

const CopyrightContent = () => (
  <AnimatedContent>
    <h2 className="font-display text-2xl font-bold text-foreground">Copyright Notice</h2>
    <p>
      This Website, including copy, site concept, artwork, graphics, code and any other material developed
      by AVA Computing Services are copyright ©2008 by AVA Computing Services.
    </p>
    <p>
      The re-use of any material contained on this Website is strictly forbidden, unless AVA Computing
      Services have given permission to do so.
    </p>
  </AnimatedContent>
);

export default LegalPage;

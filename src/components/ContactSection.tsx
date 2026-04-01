import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AVA Computing Services Ltd.<br />
                  27 Bulls Copse Lane<br />
                  Horndean<br />
                  Hants<br />
                  PO8 9QX
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a href="tel:+442392646268" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +44 (0) 23 92646268
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <div className="space-y-1">
                  <a href="mailto:info@avacss.co.uk" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@avacss.co.uk — General Information
                  </a>
                  <a href="mailto:sales@avacss.co.uk" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    sales@avacss.co.uk — Sales
                  </a>
                  <a href="mailto:support@avacss.co.uk" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    support@avacss.co.uk — Technical Support
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass rounded-2xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5!2d-1.0!3d50.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU1JzQ4LjAiTiAxwrAwMCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="AVA Computing Services Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass rounded-2xl p-8 space-y-5"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full gradient-btn flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your IT needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-btn py-3.5 rounded-xl font-semibold text-sm glow-primary hover:opacity-90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

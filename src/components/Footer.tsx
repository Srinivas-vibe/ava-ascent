import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-16 px-6">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="font-display font-bold text-xl mb-3">
            <span className="gradient-text">AVA</span>
            <span className="text-foreground/80 text-sm ml-1">Computing</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cost effective IT management and support for UK SMEs since 2004.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">IT Consultancy</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Support Services</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Internet Services</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Network Installations</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Telecoms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Copyright Notice</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>+44 (0) 23 92646268</p>
            <a href="mailto:info@avacss.co.uk" className="block hover:text-foreground transition-colors">info@avacss.co.uk</a>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="mailto:info@avacss.co.uk" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© AVA Computing Services Ltd. 2004 – {new Date().getFullYear()} All rights reserved | Company Reg No. 4808326</p>
        <p>27 Bulls Copse Lane, Horndean, Hants, PO8 9QX</p>
      </div>
    </div>
  </footer>
);

export default Footer;

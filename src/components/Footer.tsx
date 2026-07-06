import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Procedures', href: '#procedures' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/skincarebyadina?igsh=bzZ2YWZ0MTk0Zmw1', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@dr_adina_chauhdary?_r=1&_t=ZS-97Yzvq1mHb8', label: 'TikTok' },
    { icon: FaWhatsapp, href: 'https://wa.me/923079873642', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-heading pt-section-mobile pb-8 md:pt-section-desktop">
      <div className="container-max px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Brand & Social */}
          <div>
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                SkinCare by
                <br />
                <span className="text-primary">Dr. Adina</span>
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium skincare clinic dedicated to revealing your skin's natural radiance
              through expert care and innovative treatments.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+923079873642"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +92 307 9873642
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lumiereskin.com"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  skincarebyadina@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Mochi Wala Road, Street No. 6, near Riaz Parvez Workshop,
                  Gojra
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Dr. Adina Skin Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

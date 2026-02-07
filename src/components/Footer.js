import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Music,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo_final.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram DOD",
      href: "https://www.instagram.com/dod_studio_kn/",
    },
    {
      icon: Instagram,
      label: "Instagram Dream of Dance",
      href: "https://www.instagram.com/dream_of_dance_studio/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/c/VinodKashyapdod",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/dreamofdancestudio/",
    },
  ];

  const footerSections = [
    {
      title: "Locations",
      items: [
        "Branch 1: Artistic Hub, Downtown West, New Delhi - 110001",
        "Branch 2: Coming Soon",
      ],
      icon: MapPin,
    },
    {
      title: "Contact",
      items: ["info@dodstudio.com", "+91 999 000 1111"],
      icon: Mail,
    },
    {
      title: "What We Offer",
      items: [
        "Wedding Choreography",
        "Dance Competitions",
        "Workshops",
        "Fitness Classes",
      ],
      icon: Music,
    },
    {
      title: "Specialties",
      items: [
        "School Events",
        "College Events",
        "Dance Events",
        "Masterclasses",
      ],
      icon: Zap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-charcoal border-t border-gold/20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        {/* Top Section - Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <img
            src={logo}
            alt="Dream of Dance Studio Logo"
            className="h-20 w-auto mb-4"
          />
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-light">
            Dream of Dance Studio
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mt-8" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-20 flex-wrap"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 rounded-full border-2 border-gold/40 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all duration-300 group overflow-hidden"
                aria-label={social.label}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="relative z-10 group-hover:text-ivory transition-colors duration-300"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20 place-items-center"
        >
          {footerSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {Icon && (
                  <div className="mb-4 p-3 rounded-lg bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                )}
                <h5 className="font-cinzel text-gold tracking-widest text-sm uppercase font-semibold mb-4">
                  {section.title}
                </h5>
                <div className="space-y-2">
                  {section.items.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-xs text-ivory/60 leading-relaxed font-light hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-[11px] text-ivory/40 uppercase tracking-[0.25em] font-light mb-6 md:mb-0">
            © {currentYear} Dream of Dance. Curated for Artists.
          </p>

          <div className="flex items-center space-x-6 text-[11px] text-ivory/40 uppercase tracking-widest font-light">
            <button className="hover:text-gold transition-colors duration-300">
              Privacy
            </button>
            <span className="text-gold/20">•</span>
            <button className="hover:text-gold transition-colors duration-300">
              Terms
            </button>
            <span className="text-gold/20">•</span>
            <button className="hover:text-gold transition-colors duration-300">
              Sitemap
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;

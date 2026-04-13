"use client";
import React from "react";
import Image from "next/image";
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
import Link from "next/link";
import logo from "../assets/images/logo_final.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
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
        { 
          text: "G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri, Delhi-110053", 
          href: "https://maps.google.com/?q=G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri, Delhi-110053" 
        }
      ],
      icon: MapPin,
    },
    {
      title: "Contact",
      items: [
        { text: "dod@dreamofdancestudio.com", href: "mailto:dod@dreamofdancestudio.com" },
        { text: "+91 9560832548", href: "tel:+919560832548" }
      ],
      icon: Mail,
    },
    {
      title: "Programs",
      items: [
        { text: "Wedding Choreography", href: "/training" },
        { text: "Dance Competitions", href: "/pro-services#events" },
        { text: "Workshops", href: "/pro-services#events" },
        { text: "Fitness Classes", href: "/pro-services#fitness" },
      ],
      icon: Music,
    },
    {
      title: "Specialties",
      items: [
        { text: "Dance Events", href: "/pro-services#events" },
        { text: "College Events", href: "/pro-services#events" },
        { text: "School Events", href: "/pro-services#events" },
        { text: "Dance Workshops", href: "/pro-services#events" },
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
      <section className="relative -z-10">
        <h2 className="sr-only">Footer Navigation</h2>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </section>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top Section - Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10"
        >
          <Link href="/">
            <Image
              src={logo}
              alt="Dream of Dance Studio Logo"
              width={280}
              height={177}
              className="h-20 w-auto object-contain mb-4 hover:scale-105 transition-transform duration-300"
              sizes="280px"
            />
          </Link>
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
          className="flex justify-center gap-6 mb-12 flex-wrap"
        >
          {socialLinks.map((social) => {
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
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                <Icon
                  size={26}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 mb-16 items-start justify-items-center md:justify-items-start lg:justify-items-center"
        >
          {footerSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group w-full"
              >
                {Icon && (
                  <div className="mb-4 p-3 rounded-lg bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                )}
                <h2 className="font-cinzel text-gold tracking-widest text-sm uppercase font-semibold mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3 flex flex-col items-center">
                  {section.items.map((item, idx) => (
                    item.href.startsWith("http") || item.href.startsWith("mailto") || item.href.startsWith("tel") ? (
                      <a
                        key={idx}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs text-ivory/60 leading-relaxed font-light hover:text-gold transition-colors duration-300 max-w-[200px]"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <Link
                        key={idx}
                        href={item.href}
                        className="text-xs text-ivory/60 leading-relaxed font-light hover:text-gold transition-colors duration-300"
                      >
                        {item.text}
                      </Link>
                    )
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-[10px] text-gold/50 uppercase tracking-[0.2em] font-medium">
              Designed & Developed by <a href="https://deegonic.com/" target="_blank" rel="noopener noreferrer" className="text-gold/80 hover:text-gold cursor-pointer transition-colors">Deegonic</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <p className="text-[11px] text-ivory/40 uppercase tracking-[0.25em] font-light">
              © {currentYear} Dream of Dance
            </p>
            
            <div className="flex items-center space-x-6 text-[11px] text-ivory/40 uppercase tracking-widest font-light">
              <Link href="/privacy" className="hover:text-gold transition-colors duration-300">
                Privacy
              </Link>
              <span className="text-gold/20">•</span>
              <Link href="/terms" className="hover:text-gold transition-colors duration-300">
                Terms
              </Link>
              <span className="text-gold/20">•</span>
              <Link href="/sitemap.xml" className="hover:text-gold transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </motion.div>
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

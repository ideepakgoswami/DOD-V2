"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, ChevronRight, Quote, Camera } from "lucide-react";

// ──── Testimonials ────────────────────────────────────────────────────────
export const Testimonials = ({ testimonials }) => (
  <section className="py-24 px-6 lg:px-12 bg-[#050505] relative overflow-hidden border-y border-white/5">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-glow text-gold-gradient mb-6">Voice of Our Dancers</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-8 bg-charcoal/20 border border-white/5 rounded-2xl"
          >
            <Quote className="text-gold/20 absolute top-8 right-8 w-12 h-12" />
            <p className="text-ivory leading-relaxed font-normal italic mb-10 text-lg">"{t.quote}"</p>
            <div className="mt-auto">
              <h3 className="text-white font-cinzel text-sm font-bold">{t.name}</h3>
              <p className="text-gold/60 text-[10px] uppercase tracking-widest">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ──── Studio Gallery ───────────────────────────────────────────────────────
export const StudioGallery = ({ studioGallery }) => (
  <section className="py-24 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-glow text-gold-gradient mb-6">Inside Our Studio</h2>
        <p className="text-lg text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">Experience the energy of our modern spaces, designed for peak performance and ultimate comfort.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
        {studioGallery.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden group h-full"
          >
            <Image
              src={img}
              alt="Studio Facility"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
      <Link href="/gallery" className="inline-flex items-center gap-3 mt-12 text-gold hover:text-white transition-colors uppercase tracking-[.3em] text-xs font-bold px-10 py-5 border border-gold/30 hover:border-gold rounded-full">
        <Camera size={18} />
        Explore Full Gallery
      </Link>
    </div>
  </section>
);

// ──── Instagram Embed ──────────────────────────────────────────────────────
export const InstagramSection = () => (
  <section className="py-24 px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#f09433]/5 via-[#e6683c]/5 to-[#bc1888]/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-7/12 flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] shadow-luxury-gold/20 bg-transparent flex justify-center border-none">
          <iframe
            src="https://www.instagram.com/p/DT-Xpx7D4Ob/embed"
            width="100%"
            height="650"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
            loading="lazy"
            title="Dream of Dance Studio – Latest Instagram Choreography"
            className="border-none bg-transparent max-w-full"
          ></iframe>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-4/12 space-y-8"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl text-white">
            <Instagram size={24} />
          </div>
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-bold">Live from Instagram</p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-normal text-white leading-tight mb-8">
          Watch Our <span className="text-gold-gradient text-glow">Latest Choreography</span>
        </h2>
        <p className="text-lg text-ivory/70 font-light leading-relaxed">Catch up on our latest routines, behind-the-scenes moments, and competition highlights straight from the studio.</p>
        <a href="https://www.instagram.com/dod_studio_kn/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-3 px-8 py-4 border border-white/20 hover:border-[#bc1888] rounded-full transition-all duration-300">
          <span className="text-sm uppercase tracking-widest font-bold text-white group-hover:text-[#bc1888] transition-colors">Follow on Instagram</span>
          <ChevronRight size={18} className="text-white group-hover:text-[#bc1888] group-hover:translate-x-1 transition-all" />
        </a>
      </motion.div>
    </div>
  </section>
);

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Calendar,
  Trophy,
  Users,
  Lightbulb,
  Instagram,
  Star,
  Camera,
  CheckCircle,
  Music,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import slide1 from "../assets/images/slide1new.webp";
import slide2 from "../assets/images/slide2new.webp";
import slide3 from "../assets/images/slide3new.webp";
import groupPhoto from "../assets/images/group-photo.webp";
import Competition from "../assets/images/Competition.webp";
import Summer_Camp from "../assets/images/Summer_Camp.webp";
import Workshop from "../assets/images/Workshop.webp";
import Ladies_batch from "../assets/images/Ladies_batch.webp";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Dream of Dance Studio",
      subtitle: "Delhi’s Home for Professional Dance",
      description: "Comprehensive training programs designed to transform passionate beginners into professional performers.",
      ctas: [
        { text: "Start Training", link: "/training", primary: true },
        { text: "View Programs", link: "/pro-services#events", primary: false },
      ],
    },
    {
      id: 2,
      image: slide2,
      title: "Dance Workout",
      subtitle: "Fitness Through Movement",
      description: "High-energy Zumba, Aerobics & Yoga classes focusing on endurance, strength, and overall wellness.",
      ctas: [
        { text: "View Classes", link: "/pro-services#fitness", primary: true },
      ],
    },
    {
      id: 3,
      image: slide3,
      title: "Reality Shows & Competitions",
      subtitle: "Specialized Competition Training",
      description: "Intensive training to prepare our students for national dance competitions and top-tier reality television.",
      ctas: [
        {
          text: "Start Preparation",
          link: "/pro-services#events",
          primary: true,
        },
      ],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Wedding Choreography",
      subtitle: "Your Love Story in Motion",
      description: "Memorable custom routines created specifically to capture your style, personality, and journey on your special day.",
      ctas: [
        {
          text: "Book Consultation",
          link: "/connect",
          primary: true,
        },
      ],
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = slides[activeSlide];

  const dancePrograms = [
    {
      id: 1,
      title: "Hip-Hop",
      description: "Urban grooves & street style",
      image: "https://plus.unsplash.com/premium_photo-1710064058963-19c6443c98c3?q=80&w=826&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Contemporary",
      description: "Fluid expression & emotion",
      image: "https://plus.unsplash.com/premium_photo-1719682673290-e9f508e7670b?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Bollywood",
      description: "Vibrant energy & tradition",
image:"https://plus.unsplash.com/premium_photo-1720798650953-1bb37db7241c?q=80&w=898&auto=format&fit=crop&w=600&q=80",    },
    {
      id: 4,
      title: "Jazz Funk",
      description: "Fierce & expressive commercial style",
      image: "https://images.unsplash.com/photo-1571087917386-2fb7b100eba1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Bhangra",
      description: "High-energy traditional beats",
      image: "https://images.unsplash.com/photo-1723637375828-a3ecfcc6636d?q=80&w=2731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Popping",
      description: "Electric & dynamic isolation",
      image: "https://img.redbull.com/images/c_fill,g_auto,w_1850,h_1233/q_auto:low,f_jpg/redbullcom/2020/8/24/splbmhrz3o7dg9rm6g6k/popping-simcho",
    },
  ];



  const testimonials = [
    {
      id: 1,
      name: "Rohan Khanna",
      location: "Competitive Dancer",
      quote: "Dream of Dance transformed my raw energy into professional skill. The mentorship here is unmatched in Delhi.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Ananya Sharma",
      location: "Fitness Enthusiast",
      quote: "The Zumba classes are the highlight of my day. I've lost weight and gained a community I love.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Priya Malhotra",
      location: "Beginner Student",
      quote: "I was nervous to start at 25, but the teachers made me feel right at home. I'm now in the intermediate batch!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const studioGallery = [
    groupPhoto.src,
    Ladies_batch.src,
    Summer_Camp.src,
    Workshop.src,
  ];

  const upcomingEvents = [
    {
      id: 1,
      type: "Competition",
      title: "National Dance Championship 2024",
      date: "SEP 8-10, 2024",
      description: "Compete against India's best in Zumba, Bollywood, and Hip Hop styles.",
      icon: Trophy,
      image: Competition,
    },
    {
      id: 2,
      type: "Workshop",
      title: "Intensive Masterclass Series",
      date: "OCT 15-20, 2024",
      description: "Learn from industry-leading choreographers in this exclusive intensive series.",
      icon: Lightbulb,
      image: Workshop,  },
    {
      id: 3,
      type: "Event",
      title: "School & College Annual Events",
      date: "YEAR-ROUND",
      description: "Expert choreography to elevate your school & college annual celebrations.",
      icon: Users,
      image: Summer_Camp,  },
  ];

  return (
    <div className="relative overflow-hidden font-montserrat">
      {/* Hero Slider Section - Custom Heights */}
      <section className="relative w-full h-screen lg:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Slides Container */}
        <AnimatePresence>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority
              fetchPriority="high"
              className="w-full h-full object-cover"
              sizes="100vw"
            />

            {/* Overlay Gradient (Darker) */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
          key={`content-${activeSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto px-8"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gold tracking-[0.4em] uppercase font-montserrat text-xs font-bold mb-6 flex items-center justify-center space-x-3"
          >
            <span>{currentSlide.subtitle}</span>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={`text-4xl md:text-5xl lg:text-7xl font-cinzel font-normal mb-8 leading-tight text-glow text-gold-gradient drop-shadow-sm ${
              currentSlide.id === 1 ? "mt-4" : ""
            }`}
          >
            {currentSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-ivory/80 font-light drop-shadow-md"
          >
            {currentSlide.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6"
          >
            {currentSlide.ctas.map((cta) => (
              <Link
                key={cta.text}
                href={cta.link}
                className={`group relative px-10 py-4 overflow-hidden border transition-all duration-500 rounded-none ${
                  cta.primary
                    ? "border-gold bg-gold text-charcoal shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                    : "border-white/50 bg-white/10 hover:bg-white text-white hover:text-charcoal backdrop-blur-sm"
                }`}
              >
                {cta.primary && (
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
                )}
                <span
                  className={`relative z-10 uppercase tracking-widest text-sm font-bold flex items-center space-x-2 transition-colors ${
                    cta.primary
                      ? "text-charcoal"
                      : "group-hover:text-charcoal"
                  }`}
                >
                  <span>{cta.text}</span>
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-20 left-0 right-0 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 z-20 flex justify-center md:block px-6 md:px-0">
          <div className="flex items-center gap-12 md:block">
            <motion.button
              whileHover={{ opacity: 1 }}
              onClick={prevSlide}
              className="md:absolute md:left-6 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/40 hover:border-gold hover:bg-charcoal/80 flex items-center justify-center text-gold hover:text-ivory transition-all duration-300 bg-charcoal/20 backdrop-blur-md opacity-70 hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ opacity: 1 }}
              onClick={nextSlide}
              className="md:absolute md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gold/40 hover:border-gold hover:bg-charcoal/80 flex items-center justify-center text-gold hover:text-ivory transition-all duration-300 bg-charcoal/20 backdrop-blur-md opacity-70 hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>



        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/60 text-xs uppercase tracking-widest font-light text-center"
        >
          Scroll to Discover
        </motion.div>*/}
      </section>

      {/* Narrative Section - Magazine Style */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal-light relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="h-[1px] bg-gold mb-8"
                />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-normal leading-tight text-glow text-gold-gradient">
                  Dance Beyond the Ordinary
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-ivory/70 leading-relaxed font-light">
                  Dance is more than movement—it's expression, precision, and passion. We guide you whether you want to master competitive technique, get fit, or choreograph the perfect wedding story.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    "Expert Faculty",
                    "State-of-the-art Studios",
                    "Personalized Learning",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                      className="flex items-center space-x-3 text-ivory/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-sm font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/story"
                  className="inline-flex items-center text-gold hover:text-white transition-all duration-300 group text-sm uppercase tracking-[0.3em] font-bold py-4"
                >
                  <span className="relative">
                    Find Out More About Us
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gold/50 group-hover:bg-white transition-colors" />
                  </span>
                  <ChevronRight
                    className="ml-4 group-hover:translate-x-2 transition-transform"
                    size={20}
                  />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl group-hover:border-gold/40 transition-colors duration-700 pointer-events-none -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl pointer-events-none" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px]">
                <Image
                  src={groupPhoto}
                  alt="Dance Class Group"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Cinematic Texture Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20 opacity-60" />
                
                {/* Visual Label */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="flex items-center space-x-3 bg-charcoal/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/30">
                    <Users size={14} className="text-gold" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Our Signature Crew</span>
                  </div>
                </div>
              </div>

              {/* Aura Glow */}
              <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>

          
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-12 bg-charcoal border-y border-gold/20 relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1500+", label: "Students Trained" },
              { number: "1000+", label: "Dance Choreographies" },
              { number: "200+", label: "Wedding Choreographies" },
              { number: "18+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2 p-4 md:p-8 bg-transparent border-t border-gold/30 hover:border-gold transition-all duration-500 flex flex-col justify-center min-h-[140px]"
              >
                <h3 className="text-3xl md:text-5xl font-cinzel text-gold font-light">
                  {stat.number}
                </h3>
                <p className="text-ivory/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties Section - Integrated Reference Style */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal relative overflow-hidden">
        {/* Subtle Background Accent - Aligned with Brand */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-[10px] md:text-xs font-montserrat font-semibold mb-4 text-center">
              Our Specialties
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-white mb-6">
              Find Your <span className="text-gold-gradient drop-shadow-lg">Rhythm</span>
            </h2>
            <p className="text-lg text-ivory/70 max-w-2xl mx-auto font-light leading-relaxed">
              From traditional to contemporary, discover a dance style that speaks to your soul.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dancePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-[20px] cursor-pointer h-72 md:h-[340px] border border-white/10 hover:border-gold/50 transition-all duration-500 shadow-xl"
              >
                {/* Background Image */}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Enhanced Cinematic Overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700" />
                
                {/* Content at Bottom Left */}
                <div className="absolute bottom-5 left-5 right-5 text-left z-10 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                  <h3 className="text-lg md:text-xl font-cinzel font-bold text-white mb-2 group-hover:text-gold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight break-words">
                    {program.title}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-[1.5px] bg-gold mb-2.5 transition-all duration-500 ease-out" />
                  <p className="text-ivory/90 text-[10px] md:text-[11px] font-montserrat font-medium tracking-[0.1em] uppercase leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    {program.description}
                  </p>
                </div>

                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-[20px] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



 {/* Upcoming Events & Updates Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-[#0A0A0A] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[100px] animate-blob pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bronze/10 rounded-full filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-bold mb-4">
              Stay Updated
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-normal mb-8 text-glow text-gold-gradient">
              Upcoming Competitions, Workshops & Events
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {upcomingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/80 hover:border-2 shadow-lg hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-500 cursor-pointer h-[420px]"
                >
                  {/* Background Image */}
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Smooth Gradient - Fades to pure transparency at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/60 opacity-90 transition-opacity duration-500" />
                  
                  {/* Content */}
                  {/* Centered Content Layout */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-8 z-10 space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      {/* Date Badge */}
                      <div className="inline-block px-4 py-2 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.4)] transform group-hover:scale-105 transition-transform duration-300">
                        {event.date}
                      </div>

                      {/* Icon */}
                      <div className="mb-4 w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300 backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-white group-hover:text-gold transition-colors duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-cinzel font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] px-4">
                        {event.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-6">
                      {/* Description */}
                      <p className="text-ivory text-sm font-medium leading-relaxed max-w-[280px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {event.description}
                      </p>

                      {/* CTA */}
                      <Link
                        href="/connect"
                        className="group inline-flex items-center text-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em] border-b border-gold/30 pb-1"
                      >
                        Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bold Call to Action Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full mt-8 p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-gold/10 via-charcoal to-[#0A0A0A] border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(212,175,55,0.05)]"
          >
            <div className="text-left w-full md:w-2/3 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-cinzel text-glow text-gold-gradient mb-2">
                Ready to take the stage?
              </h3>
              <p className="text-ivory/70 font-light leading-relaxed">
                From national competitions to exclusive masterclasses with
                celebrity choreographers, we have the perfect opportunity waiting for you.
              </p>
            </div>
            
            <Link
              href="/connect"
              className="group relative flex-shrink-0 px-12 py-6 overflow-hidden border border-gold/50 bg-gold/10 hover:bg-gold hover:border-gold transition-all duration-500 rounded-full flex items-center shadow-lg transform hover:scale-105"
            >
              <span className="relative z-10 uppercase tracking-widest text-base font-bold flex items-center space-x-2 text-gold group-hover:text-charcoal transition-colors">
                <span>Register Now</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials */}
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
                  <h4 className="text-white font-cinzel text-sm">{t.name}</h4>
                  <p className="text-gold/60 text-[10px] uppercase tracking-widest">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Facilities / Gallery Preview */}
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

      {/* Latest Instagram Video Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#050505] relative overflow-hidden">
        {/* Subtle Background Glow for Insta */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#f09433]/5 via-[#e6683c]/5 to-[#bc1888]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Video/Embed Side (Larger) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 flex justify-center lg:justify-start"
          >
            {/* 
              INSTAGRAM DIRECT VIDEO EMBED
            */}
            <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] shadow-luxury-gold/20 bg-transparent flex justify-center border-none">
              <iframe
                src="https://www.instagram.com/p/DT-Xpx7D4Ob/embed"
                width="100%"
                height="650"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
                className="border-none bg-transparent max-w-full"
              ></iframe>
            </div>
          </motion.div>

          {/* Text/Info Side (Smaller) */}
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
              <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-bold">
                Live from Instagram
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-normal text-white leading-tight mb-8">
              Watch Our <span className="text-gold-gradient text-glow">Latest Choreography</span>
            </h2>

            <p className="text-lg text-ivory/70 font-light leading-relaxed">
              Catch up on our latest routines, behind-the-scenes moments, and competition highlights straight from the studio. Follow us to stay connected with the Dream of Dance community.
            </p>

            <a
              href="https://www.instagram.com/dod_studio_kn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-8 py-4 border border-white/20 hover:border-[#bc1888] rounded-full transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-widest font-bold text-white group-hover:text-[#bc1888] transition-colors">
                Follow on Instagram
              </span>
              <ChevronRight size={18} className="text-white group-hover:text-[#bc1888] group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;

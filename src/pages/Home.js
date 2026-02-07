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
} from "lucide-react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Dream of Dance",
      subtitle: "Where Passion Meets Performance",
      description: "Elite dance training, competitions & events across Delhi",
    },
    {
      id: 2,
      image: slide2,
      title: "Competitions & Workshops",
      subtitle: "Showcase Your Talent",
      description:
        "Regular competitions and masterclasses with renowned choreographers",
    },
    {
      id: 3,
      image: slide3,
      title: "Transform Your Fitness",
      subtitle: "Dance Your Way to Health",
      description: "Zumba, Yoga, Aerobics & Cardio Classes for all levels",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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

  const upcomingEvents = [
    {
      id: 1,
      type: "Competition",
      title: "National Dance Championship 2024",
      date: "September 8-10, 2024",
      description:
        "Compete against talented dancers from across India! Multiple categories for Zumba, Bollywood, Hip Hop, and Contemporary styles with exciting prizes.",
      icon: Trophy,
    },
    {
      id: 2,
      type: "Workshop",
      title: "Intensive Masterclass Series",
      date: "October 15-20, 2024",
      description:
        "Learn directly from India's top choreographers through our exclusive week-long masterclass. Cover Bollywood, contemporary, and fusion styles.",
      icon: Lightbulb,
    },
    {
      id: 3,
      type: "Event",
      title: "School & College Annual Events",
      date: "Year-Round",
      description:
        "Professional choreography and performances for your annual day, cultural fest, and special celebrations. Customized packages available.",
      icon: Users,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Slider Section - Full Screen */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Slides Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/50 to-charcoal" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative Animated Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl z-0"
        />

        {/* Content */}
        <motion.div
          key={`content-${activeSlide}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gold tracking-[0.3em] uppercase font-montserrat text-sm mb-8 flex items-center justify-center space-x-3"
          >
            <Sparkles size={16} />
            <span>{currentSlide.subtitle}</span>
            <Sparkles size={16} />
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-8 leading-tight text-gold-gradient"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-ivory/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            {currentSlide.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/academy"
              className="group relative px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 hover:shadow-lg rounded-lg"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-bold flex items-center space-x-2">
                <span>Explore Academy</span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
            </Link>

            <Link
              to="/pro-services"
              className="group px-10 py-4 border-2 border-ivory/30 hover:border-gold transition-all duration-300 rounded-lg hover:shadow-lg"
            >
              <span className="uppercase tracking-widest text-sm font-bold text-ivory group-hover:text-gold transition-colors flex items-center space-x-2">
                <span>Pro Services</span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ opacity: 1 }}
          onClick={prevSlide}
          className="absolute left-2 md:left-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold/60 hover:border-gold hover:bg-charcoal/80 flex items-center justify-center text-gold hover:text-ivory transition-colors duration-300 bg-charcoal/40 backdrop-blur-md opacity-90 active:opacity-75"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.button
          whileHover={{ opacity: 1 }}
          onClick={nextSlide}
          className="absolute right-2 md:right-12 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold/60 hover:border-gold hover:bg-charcoal/80 flex items-center justify-center text-gold hover:text-ivory transition-colors duration-300 bg-charcoal/40 backdrop-blur-md opacity-90 active:opacity-75"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </motion.button>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 rounded-full ${
                index === activeSlide
                  ? "w-10 h-3 bg-gold shadow-lg"
                  : "w-3 h-3 bg-gold/40 hover:bg-gold/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal-light relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Corner Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/40 transition-all duration-500 group-hover:border-gold/80" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/40 transition-all duration-500 group-hover:border-gold/80" />

              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="The Art of Movement"
                className="w-full h-[550px] object-cover rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-lg image-grayscale-hover"
              />

              {/* Overlay Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-charcoal/80 backdrop-blur-md border border-gold/30 rounded-lg p-6 text-center"
              >
                <p className="text-gold/80 text-sm italic font-light">
                  "Where dance, fitness & competition come together"
                </p>
              </motion.div>
            </motion.div>

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
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-gold via-gold to-transparent rounded-full mb-8"
                />
                <h2 className="text-5xl font-cinzel text-gold-gradient font-bold leading-tight">
                  Dance Beyond the Ordinary
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-ivory/80 leading-relaxed font-light">
                  At Dream of Dance, we offer more than just classes. We
                  organize national dance competitions, host masterclasses with
                  celebrated choreographers, and provide professional event
                  choreography for schools, colleges, and corporate occasions.
                </p>

                <p className="text-lg text-ivory/80 leading-relaxed font-light italic border-l-4 border-gold/40 pl-6">
                  "From fitness enthusiasts to competitive dancers, everyone
                  finds their space here. We're committed to nurturing talent,
                  promoting dance culture, and keeping our community energized."
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
                  to="/story"
                  className="inline-flex items-center text-gold hover:text-ivory transition-all duration-300 group text-sm uppercase tracking-widest font-semibold"
                >
                  <span className="border-b-2 border-gold group-hover:border-ivory transition-colors pb-1">
                    Our Studio Story
                  </span>
                  <ChevronRight
                    className="ml-3 group-hover:translate-x-2 transition-transform"
                    size={18}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-12 bg-charcoal border-y border-gold/20 relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Active Members" },
              { number: "50+", label: "Competitions Hosted" },
              { number: "100+", label: "Events & Workshops" },
              { number: "2", label: "Studio Branches" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-4xl md:text-5xl font-cinzel text-gold-gradient font-bold">
                  {stat.number}
                </h3>
                <p className="text-ivory/60 text-sm uppercase tracking-widest font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Updates Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-charcoal to-charcoal-light relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/2 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
              Stay Updated
            </p>
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-8">
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
                  className="group relative p-8 border border-gold/20 hover:border-gold/60 rounded-2xl bg-charcoal/50 backdrop-blur-sm transition-all duration-300"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300 -z-10" />

                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 bg-gold/15 border border-gold/30 rounded-lg flex items-center justify-center group-hover:bg-gold/25 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>

                  {/* Type Badge */}
                  <span className="inline-block mb-4 px-3 py-1 bg-gold/20 text-gold text-xs font-montserrat uppercase tracking-widest font-bold rounded-full border border-gold/30">
                    {event.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center mb-4 text-gold/80 font-light">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-ivory/70 text-sm font-light leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to="/connect"
                    className="inline-flex items-center text-gold hover:text-ivory transition-colors text-sm font-bold uppercase tracking-widest hover:translate-x-1 transition-transform"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-ivory/70 mb-6 font-light text-lg">
              From dance competitions to exclusive masterclasses with celebrity
              choreographers, there's always something exciting happening at
              Dream of Dance!
            </p>
            <Link
              to="/connect"
              className="group relative inline-block px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 rounded-lg"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-bold flex items-center space-x-2">
                <span>Register Now</span>
                <ChevronRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Heart,
  Users,
  Sparkles,
  ChevronRight,
  Award,
  Zap,
  Music,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const eventServices = [
  {
    id: 1,
    title: "Wedding Choreography",
    icon: Heart,
    tagline: "Your Love Story in Motion",
    image: "https://images.unsplash.com/photo-1587271636175-202a82d43e33",
    desc: "Transform your wedding celebration into an unforgettable visual spectacle with our bespoke choreography.",
    features: [
      "Couples choreography",
      "Family group performances",
      "Sangeet performances",
      "Professional dancers",
      "Full production support",
    ],
    highlights:
      "We create cinematic moments that tell your love story through dance. From intimate couple dances to grand ensemble performances, every move is tailored to your vision.",
    pricing: "Custom quotes",
  },
  {
    id: 2,
    title: "Dance Competitions",
    icon: Users,
    tagline: "Platform for Talent & Glory",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e",
    desc: "We regularly host dance competitions throughout the year, providing a platform for dancers of all styles to compete and showcase their talent.",
    features: [
      "Regular competitions",
      "Multiple categories",
      "Professional judging",
      "Prize & recognition",
      "Networking opportunities",
    ],
    highlights:
      "Our dance competitions are platforms for aspiring dancers to compete, showcase their talents, and connect with the dance community. We host these regularly throughout the year.",
    pricing: "Participation fees vary",
  },
  {
    id: 3,
    title: "Workshops & Masterclasses",
    icon: Sparkles,
    tagline: "Learn from Industry Experts",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3a9a8",
    desc: "Learn directly from celebrated choreographers and dancers through our exclusive workshops and intensive masterclasses.",
    features: [
      "Expert choreographers",
      "Specialized styles",
      "Intensive training",
      "Certificate programs",
      "Networking with professionals",
    ],
    highlights:
      "We regularly arrange workshops and masterclasses with celebrated artists and choreographers. These sessions provide invaluable learning experiences and exposure to contemporary dance trends.",
    pricing: "₹1000-5000 per workshop",
  },
  {
    id: 4,
    title: "School & College Events",
    icon: Award,
    tagline: "Perfect Your Events with Dance",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc: "Professional choreography and performances for school and college events, fests, and celebrations.",
    features: [
      "Event choreography",
      "Student performances",
      "Group dance training",
      "Technical direction",
      "On-site coordination",
    ],
    highlights:
      "Make your school and college events unforgettable with our professional choreography and performance services. Perfect for annual days, cultural fests, and special celebrations.",
    pricing: "Custom quotes",
  },
];

const fitnessServices = [
  {
    id: 5,
    title: "Zumba Classes",
    icon: Zap,
    tagline: "Party-Like Fitness Experience",
    image: "https://images.unsplash.com/photo-1545299438-1606cfd3ce39",
    desc: "Experience the ultimate party workout! Zumba combines Latin rhythms with high-energy dance moves to torch calories while having incredible fun.",
    features: [
      "All-level classes available",
      "Latin rhythms & beats",
      "Full-body cardio workout",
      "High-energy group sessions",
      "Certified instructors",
    ],
    highlights:
      "Zumba is not just a workout, it's a party! Our certified instructors create an infectious atmosphere where you'll dance, sweat, and smile. Perfect for all fitness levels and a favorite among our members.",
    pricing: "₹500/class or ₹3000/month",
  },
  {
    id: 6,
    title: "Yoga Classes",
    icon: Music,
    tagline: "Balance Mind, Body & Spirit",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    desc: "Strengthen your body, calm your mind, and find balance through authentic yoga practices suited for all fitness levels.",
    features: [
      "Beginner to advanced classes",
      "Breathing techniques",
      "Meditation & mindfulness",
      "Injury-safe practices",
      "Personalized modifications",
    ],
    highlights:
      "Build a stronger, more flexible body while calming your mind. Our experienced yoga instructors guide you through proven techniques to improve flexibility, strength, and mental clarity.",
    pricing: "₹500/class or ₹3000/month",
  },
  {
    id: 7,
    title: "Cardio Dance Fitness",
    icon: Sparkles,
    tagline: "High-Energy Dance Cardio",
    image: "https://images.unsplash.com/photo-1574680096145-f859b6e68e02",
    desc: "Combine the energy of dance with cardiovascular training for maximum calorie burn and muscle toning in every session.",
    features: [
      "High-intensity intervals",
      "Heart rate optimization",
      "Fat-burning focus",
      "Music-driven motivation",
      "Progress tracking",
    ],
    highlights:
      "Burn maximum calories while having fun dancing. Our trainers combine cardio science with dance choreography to keep your heart pumping and your spirit lifted.",
    pricing: "₹500/class or ₹3000/month",
  },
  {
    id: 8,
    title: "Aerobics Classes",
    icon: Heart,
    tagline: "Build Endurance & Strength",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    desc: "Build incredible stamina and strength through dynamic aerobic exercises combined with rhythmic dance choreography.",
    features: [
      "Full-body conditioning",
      "Strength building exercises",
      "Stamina development",
      "Low-impact options available",
      "Results-oriented training",
    ],
    highlights:
      "Build strong muscles and incredible endurance through our dynamic aerobics classes. Perfect for those looking to improve overall fitness, lose weight, and feel energized.",
    pricing: "₹500/class or ₹3000/month",
  },
];

const ProServices = () => {
  const [activeCategory, setActiveCategory] = useState("events");
  const [selectedService, setSelectedService] = useState(null);
  const location = { pathname: usePathname() };
  const router = useRouter();

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  // Handle hash links by listening to location changes
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash === "events" || hash === "fitness") {
      setActiveCategory(hash);
      const section = document.getElementById("services-category-toggle");
      if (section) {
        // Use a small timeout to ensure the DOM has updated before scrolling
        setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]); // Re-run this effect whenever the hash changes

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const currentServices =
    activeCategory === "events" ? eventServices : fitnessServices;

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Professional Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-8">
            Our Services
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-ivory/70 text-lg font-light leading-relaxed">
            Elevate your special moments with world-class choreography and
            artistic direction. From premium events to transformative fitness
            experiences, we bring professional excellence to every engagement.
          </p>
        </motion.div>
      </section>

      {/* Category Toggle */}
      <section
        id="services-category-toggle"
        className="max-w-7xl mx-auto mb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {[
            { id: "events", label: "Events & Productions" },
            { id: "fitness", label: "Fitness Classes" },
          ].map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push(`#${category.id}`);
                setSelectedService(null);
              }}
              className={`px-8 py-4 rounded-full font-cinzel uppercase tracking-widest text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? "bg-gold text-charcoal border-gold shadow-lg shadow-gold/30"
                  : "text-gold border-gold/40 hover:border-gold/80 bg-transparent hover:bg-gold/5"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {currentServices.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedService(service)}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 hover:border-gold/60 transition-all duration-300 cursor-pointer h-96"
              >
                {/* Background Image */}
                <img
                  src={service.image?.src || service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/60 to-charcoal/80 group-hover:via-charcoal/80 transition-all duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gold/20 border border-gold/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-gold" />
                    </motion.div>
                    <h3 className="text-3xl font-cinzel font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gold/80 text-sm font-montserrat uppercase tracking-widest font-light">
                      {service.tagline}
                    </p>
                  </div>

                  <div>
                    <p className="text-ivory/80 font-light text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal border border-gold/30 rounded-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedService.image?.src || selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/90" />

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-charcoal/60 hover:bg-charcoal/80 rounded-full flex items-center justify-center text-gold border border-gold/40 z-10"
                >
                  <X size={20} />
                </motion.button>

                {/* Title Over Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-4xl font-cinzel font-bold text-white mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gold/90 text-sm font-montserrat uppercase tracking-widest">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Description */}
                <p className="text-ivory/80 leading-relaxed font-light">
                  {selectedService.desc}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-gold font-cinzel text-sm uppercase tracking-widest font-semibold mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center space-x-3 text-ivory/70 text-sm font-light"
                      >
                        <div className="w-2 h-2 rounded-full bg-gold/80 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="p-6 bg-gold/5 border border-gold/20 rounded-lg">
                  <p className="text-ivory/80 text-sm font-light leading-relaxed">
                    {selectedService.highlights}
                  </p>
                </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <p className="text-gold tracking-widest uppercase text-xs font-semibold">
                    {selectedService.pricing}
                  </p>
                  <Link
                    href="/connect"
                    onClick={() => setSelectedService(null)}
                    className="group relative px-6 py-2 overflow-hidden border border-gold transition-all duration-300 rounded-lg"
                  >
                    <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-xs font-bold">
                      Inquire Now
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            Our Creative Process
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Consultation",
              desc: "Understand your vision and goals",
            },
            {
              step: "02",
              title: "Concept Development",
              desc: "Create a tailored artistic concept",
            },
            {
              step: "03",
              title: "Choreography",
              desc: "Develop stunning choreography",
            },
            {
              step: "04",
              title: "Production",
              desc: "Execute with professional precision",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 border border-gold/20 hover:border-gold/60 rounded-xl bg-charcoal-light/30 backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal font-bold text-lg border-4 border-charcoal group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                {item.step}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-cinzel font-bold text-ivory mb-3">
                  {item.title}
                </h3>
                <p className="text-ivory/60 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-gold/60 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Highlights */}
      {activeCategory === "events" && (
        <section className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
              Portfolio Highlights
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "50+ Weddings",
                desc: "Choreographed celebrations across cities",
                stat: "500+",
              },
              {
                title: "25+ Corporate Events",
                desc: "Successful brand activations and launches",
                stat: "99%",
              },
              {
                title: "15+ Productions",
                desc: "Music videos, shows, and performances",
                stat: "15+",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-12 border border-gold/20 hover:border-gold/60 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-300" />

                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold mb-4">
                    {item.stat}
                  </h3>
                  <h4 className="text-xl font-cinzel font-bold text-ivory mb-3">
                    {item.title}
                  </h4>
                  <p className="text-ivory/60 text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Fitness Stats */}
      {activeCategory === "fitness" && (
        <section className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
              Our Community
            </p>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
              Join Our Fitness Family
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1000+ Members",
                desc: "Active fitness enthusiasts from all backgrounds",
                stat: "1000+",
              },
              {
                title: "200+ Classes Monthly",
                desc: "Flexible schedules for every lifestyle",
                stat: "200+",
              },
              {
                title: "98% Satisfaction",
                desc: "Community members love their transformation journey",
                stat: "98%",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-12 border border-gold/20 hover:border-gold/60 rounded-xl text-center backdrop-blur-sm transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-300" />

                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold mb-4">
                    {item.stat}
                  </h3>
                  <h4 className="text-xl font-cinzel font-bold text-ivory mb-3">
                    {item.title}
                  </h4>
                  <p className="text-ivory/60 text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Why Choose DOD */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Why Partner With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            What Sets DOD Apart
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Expert Team",
              desc: "Industry professionals with global experience and award recognition",
            },
            {
              icon: Heart,
              title: "Artistic Vision",
              desc: "Creative storytelling that resonates with your audience",
            },
            {
              icon: Award,
              title: "Premium Execution",
              desc: "Technical excellence in choreography, production, and performance",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 border border-gold/20 hover:border-gold/60 rounded-xl bg-charcoal-light/30 backdrop-blur-sm transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-lg mx-auto mb-6 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ivory mb-3">
                  {item.title}
                </h3>
                <p className="text-ivory/60 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-20 px-12 bg-gradient-to-r from-charcoal-light/50 to-charcoal/50 border-2 border-gold/30 rounded-2xl text-center backdrop-blur-md"
      >
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
          {activeCategory === "events"
            ? "Ready to Create Magic?"
            : "Ready to Transform Your Body?"}
        </h2>
        <p className="text-ivory/70 text-lg font-light max-w-3xl mx-auto mb-12 leading-relaxed">
          {activeCategory === "events"
            ? "Let's transform your vision into an unforgettable experience. Whether it's a wedding, corporate event, or production, we're ready to bring your story to life through the art of movement."
            : "Join our community and start your fitness journey today. Experience the joy of dancing while achieving your fitness goals with our expert instructors."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/connect"
            className="group relative px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 rounded-lg"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-bold flex items-center space-x-2">
              <span>
                {activeCategory === "events"
                  ? "Book a Consultation"
                  : "Enroll Now"}
              </span>
              <ChevronRight size={18} />
            </span>
          </Link>

          <button className="px-10 py-4 border-2 border-gold/40 hover:border-gold text-ivory hover:text-gold transition-all duration-300 rounded-lg uppercase tracking-widest text-sm font-bold">
            {activeCategory === "events" ? "View Portfolio" : "Learn More"}
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProServices;

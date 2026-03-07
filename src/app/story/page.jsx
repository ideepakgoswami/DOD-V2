"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const Story = () => {
  const timelineEvents = [
    {
      year: "2016",
      title: "The Vision Begins",
      description:
        "Founded with a single dream: to redefine dance education as a holistic artistic journey.",
      icon: Lightbulb,
    },
    {
      year: "2018",
      title: "Studio Launch",
      description:
        "Opened our first luxury studio with state-of-the-art facilities in downtown.",
      icon: Heart,
    },
    {
      year: "2020",
      title: "Community Growth",
      description:
        "Expanded to 500+ active students and launched pro services for events.",
      icon: Users,
    },
    {
      year: "2024",
      title: "Legacy in Motion",
      description:
        "Recognized as the premier dance boutique, inspiring artists across the region.",
      icon: Sparkles,
    },
    {
      year: "2025",
      title: "New Branch",
      description: "Opened our Krishna Nagar branch.",
      icon: Sparkles,
    },
    {
      year: "Present",
      title: "Brahmpuri Branch",
      description: "Our current main branch in Brahmpuri, Delhi.",
      icon: Sparkles,
    },
  ];

  const values = [
    {
      title: "Artistry",
      description:
        "We believe dance is not just movement, but a profound form of self-expression and artistic truth.",
      icon: Sparkles,
    },
    {
      title: "Excellence",
      description:
        "Every class, every performance, every interaction reflects our commitment to premium quality.",
      icon: Heart,
    },
    {
      title: "Community",
      description:
        "We foster a safe, inclusive space where dancers of all levels can grow and celebrate together.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We continuously evolve, blending traditional techniques with contemporary choreography.",
      icon: Lightbulb,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="max-w-5xl mx-auto mb-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4"
        >
          Our Journey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-8"
        >
          Our Story
        </motion.h1>
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-ivory/70 text-lg font-light max-w-3xl mx-auto leading-relaxed"
        >
          From a single vision to a thriving community, Dream of Dance has
          transformed lives through the art of movement. Discover how passion,
          excellence, and artistry shape our journey.
        </motion.p>
      </section>

      {/* Main Story Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-40 h-40 border-t-2 border-l-2 border-gold/60 transition-all duration-500" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-b-2 border-r-2 border-gold/60 transition-all duration-500" />

              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80"
                alt="Studio"
                className="w-full h-[550px] object-cover shadow-2xl relative z-5 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-5xl font-cinzel font-bold text-gold-gradient mb-4">
                The Dream Genesis
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold to-transparent" />
            </div>

            <p className="text-lg text-ivory/80 leading-relaxed font-light">
              Dream of Dance (DOD) started with a single, powerful vision: to
              redefine dance education as a holistic artistic journey. What
              began as a small boutique studio in downtown has transformed into
              a prestigious hub for dancers of all ages and abilities.
            </p>

            <p className="text-lg text-ivory/80 leading-relaxed font-light">
              We believed then, as we do now, that every soul has a unique
              rhythm. Our mission was never to create dancers—it was to help
              people find their voice through movement, discover their strength,
              and celebrate their individuality.
            </p>

            <p className="text-lg text-ivory/70 leading-relaxed font-light italic border-l-4 border-gold/40 pl-6">
              "Our studio is more than just four walls. It's a living gallery of
              motion, a sanctuary where technique meets emotion, and every
              dancer can become their best self."
            </p>

            <div className="pt-6 space-y-4">
              <h3 className="font-cinzel text-gold text-xl font-semibold">
                What Drives Us
              </h3>
              <ul className="space-y-3">
                {[
                  "Expert faculty with industry recognition",
                  "Premium facilities with cutting-edge technology",
                  "Community-focused approach to growth",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-4 text-ivory/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Our Timeline
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            A Journey of Growth
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold/50 to-transparent hidden lg:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-8 items-center relative`}
                >
                  {/* Content - Alternating sides */}
                  <div className={isEven ? "lg:col-start-1" : "lg:col-start-2"}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-charcoal-light/50 border border-gold/20 hover:border-gold/60 backdrop-blur-md rounded-xl p-8 transition-all duration-300 shadow-lg hover:shadow-luxury-gold"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-gold/10 border border-gold/30 rounded-lg flex-shrink-0">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold font-montserrat">
                            {event.year}
                          </p>
                          <h3 className="text-2xl font-cinzel font-bold text-ivory mt-1">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-ivory/70 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-6 h-6 rounded-full bg-gold border-4 border-charcoal shadow-lg shadow-gold/50 relative z-10"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            The Pillars of DOD
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-ivory/70 font-light">
            These core values guide every decision we make and every class we
            teach
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-gradient-to-br from-charcoal-light/40 to-charcoal/40 border border-gold/20 hover:border-gold/60 backdrop-blur-md rounded-xl transition-all duration-300 shadow-lg hover:shadow-luxury-gold overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 mb-6 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-gold" />
                  </motion.div>

                  <h3 className="text-xl font-cinzel font-bold text-ivory mb-4">
                    {value.title}
                  </h3>

                  <p className="text-ivory/60 font-light leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Team Snapshot */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative p-12 lg:p-16 border-2 border-gold/30 rounded-2xl bg-gradient-to-r from-charcoal-light/50 to-charcoal/50 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-4">
                  500+
                </h3>
                <p className="text-ivory/70 font-light uppercase tracking-widest text-sm">
                  Active Students
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-4">
                  15+
                </h3>
                <p className="text-ivory/70 font-light uppercase tracking-widest text-sm">
                  Years of Excellence
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-cinzel font-bold text-gold-gradient mb-4">
                  8+
                </h3>
                <p className="text-ivory/70 font-light uppercase tracking-widest text-sm">
                  Years of Legacy
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-ivory/70 text-lg font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Every dancer who walks through our doors becomes part of the Dream
            of Dance legacy. Whether you're just beginning or perfecting your
            craft, there's a place for you here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/training"
              className="group relative px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 hover:shadow-luxury-gold rounded-lg"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-bold">
                Explore Training
              </span>
            </Link>

            <Link
              href="/connect"
              className="px-10 py-4 border-2 border-gold/40 hover:border-gold text-ivory hover:text-gold transition-all duration-300 rounded-lg uppercase tracking-widest text-sm font-bold"
            >
              Connect With Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Story;

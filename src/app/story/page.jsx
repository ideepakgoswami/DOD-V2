"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Sparkles, Music, CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import vinodPhoto from "../../assets/images/vinod-kashyap.jpg";

const Story = () => {
  const experienceFeatures = [
    {
      title: "Artistic Excellence",
      description: "We push the boundaries of creativity, blending tradition with modern innovation to create unique dance experiences.",
      icon: Sparkles,
    },
    {
      title: "Expert Guidance",
      description: "Our mentors are industry veterans with years of experience in national reality shows and global stages.",
      icon: Users,
    },
    {
      title: "Luxury Environment",
      description: "Train in an inspiring, premium studio space equipped with professional flooring and state-of-the-art facilities.",
      icon: Heart,
    },
    {
      title: "Holistic Development",
      description: "We focus on technical precision, emotional expression, and building confidence in every student.",
      icon: Lightbulb,
    },
  ];

  const choreographers = [
    {
      id: 1,
      name: "Vinod Kashyap",
      role: "Founder & Master Choreographer",
      style: "All Dance Forms",
      experience: "15+ Years of Industry Excellence",
      image: vinodPhoto.src,
    }
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
          About Dream of Dance
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
                src="/gallery/academy/academy_5.jpg"
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

      {/* Meet Our Founder */}
      <section className="mb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
              Our Leadership
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-glow text-gold-gradient mb-6">
              Meet Our Founder
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="text-lg text-ivory/70 font-light leading-relaxed max-w-2xl">
              Master the art of movement under India's elite performers. Founder Vinod Kashyap brings global stage experience and reality-TV excellence to every training session.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            {choreographers.map((ch, index) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-[620px] overflow-hidden rounded-2xl shadow-2xl border border-white/10 group-hover:border-gold/30 transition-all duration-700">
                  <img src={ch.image} alt={ch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                  
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-90 group-hover:opacity-80 transition-all duration-500" />
                  
                  <div className="absolute bottom-10 left-10 z-10">
                    <h3 className="text-3xl font-cinzel text-white mb-2 group-hover:text-gold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {ch.name}
                    </h3>
                    <div className="w-12 h-[2px] bg-gold mb-3" />
                    <p className="text-gold font-montserrat text-sm uppercase tracking-[0.2em] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      {ch.role}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 px-4">
                  <div className="flex items-center gap-3 text-ivory/80 text-sm font-light">
                    <Music size={16} className="text-gold" />
                    <span>{ch.style}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ivory/80 text-sm font-light">
                    <CheckCircle size={16} className="text-gold" />
                    <span>{ch.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            The DOD Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            Why We Lead
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-charcoal-light/40 border border-gold/20 p-8 rounded-2xl hover:border-gold/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-ivory mb-4">
                  {feature.title}
                </h3>
                <p className="text-ivory/70 font-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
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
            Join the Dream
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

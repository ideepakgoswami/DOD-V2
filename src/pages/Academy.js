import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Academy = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);

  const classData = [
    {
      id: 1,
      title: "The Prodigy",
      suffix: "Junior Batches",
      image:
        "https://images.unsplash.com/photo-1502519144081-acca18599776?auto=format&fit=crop&w=600&q=80",
      desc: "Ages 4-12. Building foundations with joy and technique.",
      icon: Star,
      details:
        "Discover dance through play and learn fundamental techniques in a fun, supportive environment.",
      schedule: "3 classes/week",
    },
    {
      id: 2,
      title: "The Urban",
      suffix: "Teen Squad",
      image:
        "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=600&q=80",
      desc: "Ages 13-19. Focus on style, performance, and expression.",
      icon: Zap,
      details:
        "Explore contemporary styles, build confidence, and master the art of stage presence.",
      schedule: "4 classes/week",
    },
    {
      id: 3,
      title: "Mastery",
      suffix: "Adult Open Class",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
      desc: "For those who never stopped dreaming. All levels.",
      icon: Users,
      details:
        "Transform your passion into skill. All levels welcome in our dynamic adult community.",
      schedule: "Flexible",
    },
  ];

  const ladiesBatch = {
    title: "Empowerment",
    suffix: "Ladies Only",
    image:
      "https://images.unsplash.com/photo-1495750186196-805179373977?auto=format&fit=crop&w=1200&q=80",
    desc: "A private, premium space for women to rediscover themselves through movement.",
    details:
      "A sanctuary exclusively for women to explore dance, build confidence, and celebrate their femininity.",
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 overflow-hidden">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Artistic Excellence
          </p>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-8">
            The Academy
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="max-w-2xl mx-auto text-ivory/70 text-lg font-light mb-4">
            Curated classes designed for every age and skill level. From first
            steps to professional performance.
          </p>
        </motion.div>
      </section>

      {/* Regular Batches Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {classData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -15 }}
                onClick={() => setSelectedBatch(item.id)}
                className="group relative h-[600px] overflow-hidden rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-luxury-gold"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent group-hover:via-charcoal/60 transition-all duration-300" />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: selectedBatch === item.id ? 0 : 20,
                    opacity: selectedBatch === item.id ? 1 : 0,
                  }}
                  className="absolute top-6 right-6 p-3 bg-gold/10 border border-gold/30 rounded-lg backdrop-blur-md"
                >
                  <Icon className="w-6 h-6 text-gold" />
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-cinzel font-bold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gold font-montserrat uppercase tracking-widest text-xs font-light mb-6">
                    {item.suffix}
                  </p>

                  {/* Animated Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-gold to-transparent mb-6"
                  />

                  {/* Description */}
                  <p className="text-ivory/80 text-sm font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Expanded Details */}
                  <motion.div
                    animate={{
                      height: selectedBatch === item.id ? "auto" : 0,
                      opacity: selectedBatch === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-ivory/60 text-xs font-light mb-4 pb-4 border-t border-gold/20 pt-4">
                      {item.details}
                    </p>
                    <p className="text-gold/80 text-xs uppercase tracking-widest font-semibold">
                      Schedule: {item.schedule}
                    </p>
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div
                    animate={{ x: selectedBatch === item.id ? 8 : 0 }}
                    className="absolute bottom-8 right-8"
                  >
                    <ChevronRight className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Ladies Premium Batch - Full Width */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="relative h-[450px] overflow-hidden rounded-2xl border-2 border-gold/30 hover:border-gold/70 transition-all duration-300 shadow-2xl hover:shadow-luxury-gold"
        >
          {/* Background Image */}
          <img
            src={ladiesBatch.image}
            alt="Ladies Premium"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />

          {/* Content */}
          <div className="relative inset-0 h-full flex flex-col items-center justify-center text-center p-12 z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-gold-gradient mb-4">
                {ladiesBatch.title}
              </h2>
              <p className="tracking-[0.4em] font-montserrat uppercase text-sm font-light text-gold mb-6">
                Premium Ladies Batch
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
              <p className="text-ivory/80 italic font-light max-w-2xl mx-auto mb-4 text-lg">
                "{ladiesBatch.desc}"
              </p>
              <p className="text-ivory/60 font-light text-sm max-w-xl mx-auto mb-12">
                {ladiesBatch.details}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-gold text-charcoal px-12 py-4 font-bold uppercase tracking-widest text-sm rounded-lg border border-gold transition-all duration-300 hover:shadow-luxury-gold">
                  Inquire for Privates
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose DOD Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Why Dream of Dance
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            Excellence Redefined
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Expert Faculty",
              desc: "Industry veterans with 15+ years experience",
            },
            {
              title: "Luxury Studios",
              desc: "State-of-the-art facilities with premium acoustics",
            },
            {
              title: "Small Batches",
              desc: "Personalized attention in intimate settings",
            },
            {
              title: "Performance Opportunities",
              desc: "Regular showcases and professional stages",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 border border-gold/20 hover:border-gold/60 rounded-xl bg-charcoal-light/30 backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 mx-auto mb-6 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-cinzel font-bold text-ivory mb-3">
                {item.title}
              </h3>
              <p className="text-ivory/60 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-32 py-20 px-12 bg-gradient-to-r from-charcoal-light/50 to-charcoal/50 border border-gold/20 rounded-2xl text-center backdrop-blur-md"
      >
        <h3 className="text-3xl md:text-4xl font-cinzel font-bold mb-6">
          Ready to Begin Your Journey?
        </h3>
        <p className="text-ivory/70 mb-8 max-w-2xl mx-auto font-light">
          Join our community of passionate dancers and discover the
          transformative power of movement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/connect"
            className="group relative px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 hover:shadow-luxury-gold rounded-lg"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-sm font-bold flex items-center space-x-2">
              <span>Enroll Now</span>
              <ChevronRight size={18} />
            </span>
          </Link>
          <button className="px-10 py-4 border-2 border-gold/40 hover:border-gold text-ivory hover:text-gold transition-all duration-300 rounded-lg uppercase tracking-widest text-sm font-bold">
            Schedule a Trial
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Academy;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, Users, Zap, Music, Heart, Plus, Minus, Trophy, Target, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Ladies from "../../assets/images/Ladies_batch.webp";

const Training = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const trainingPrograms = [
    {
      id: 1,
      title: "Hip-Hop",
      suffix: "Urban & Street Culture",
      image: "https://plus.unsplash.com/premium_photo-1710064058963-19c6443c98c3?q=80&w=826&auto=format&fit=crop&w=600&q=80",
      desc: "Master the foundations of popping, locking, and urban grooves.",
      icon: Zap,
      details: "Our Hip-Hop program covers everything from old school foundations to the latest commercial choreography styles. Perfect for those looking to build rhythm and confidence.",
      schedule: "Mon, Wed, Fri | 6:00 PM",
    },
    {
      id: 2,
      title: "Contemporary",
      suffix: "Fluid Expression",
      image: "https://plus.unsplash.com/premium_photo-1719682673290-e9f508e7670b?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Connect movement with emotion through fluid, expressive techniques.",
      icon: Star,
      details: "A beautiful fusion of modern, jazz, and ballet elements. This program focuses on breath, floor work, and tells stories through movement.",
      schedule: "Tue, Thu, Sat | 5:00 PM",
    },
    {
      id: 3,
      title: "Bollywood",
      suffix: "Vibrant & Energetic",
      image:"https://plus.unsplash.com/premium_photo-1720798650953-1bb37db7241c?q=80&w=898&auto=format&fit=crop&w=600&q=80",
      desc: "Experience the high-energy, cinematic magic of Indian dance.",
      icon: Music,
      details: "Celebrate the joy of Bollywood dance. Our classes combine traditional Indian movements with modern cinematic flair for a high-energy workout and performance experience.",
      schedule: "Sat, Sun | 11:00 AM",
    },
    {
      id: 4,
      title: "Jazz Funk",
      suffix: "Commercial & Expressive",
      image: "https://images.unsplash.com/photo-1602303917904-39912f325b69?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Fierce, dynamic, and highly expressive commercial dance style.",
      icon: Star,
      details: "A high-energy mix of hip hop and jazz techniques. Develop sharp, powerful movements and the performance quality needed for commercial and stage work.",
      schedule: "Mon, Wed, Fri | 4:00 PM",
    },
    {
      id: 5,
      title: "Special Ladies Batch",
      suffix: "Ladies Only",
      image: Ladies,
      desc: "A private, premium space to rediscover yourself through movement.",
      icon: Heart,
      details: "A sanctuary exclusively for women to explore dance, build confidence, and celebrate femininity in a supportive, private environment.",
      schedule: "Tue, Thu | 11:00 AM",
    },
    {
      id: 6,
      title: "Wedding Story",
      suffix: "Custom Choreography",
      image: "https://images.unsplash.com/photo-1735052709927-b2ef7615b42b?q=80&w=1200",
      desc: "Bespoke routines designed for your most precious moments.",
      icon: Heart,
      details: "We choreograph your love story for Ladies Sangeet, Haldi/Mehandi, Solo & Couple Dance, Family Group Dance, and the perfect Bride & Groom Entry.",
      schedule: "Flexible / Private Sessions",
    },
  ];

  const faqs = [
    {
      question: "I'm an absolute beginner. Are these classes right for me?",
      answer: "Absolutely! We welcome students of all skill levels. Whether you're taking your very first steps or looking to refine your technique, our expert instructors will place you in a batch that matches your pace and goals."
    },
    {
      question: "Can you prepare me for TV reality shows and dance competitions?",
      answer: "Yes! We specialize in intensive training for national dance competitions and top-tier reality television. Our master choreographers focus on technique, expression, and stage presence to get you audition-ready."
    },
    {
      question: "What makes the Special Ladies Batch different?",
      answer: "Our Special Ladies Batch is a dedicated, private space for women to learn dance, focus on fitness, and build a supportive community. It is tailored for absolute comfort, confidence, and privacy."
    },
    {
      question: "How does the Wedding Choreography process work?",
      answer: "We start with a consultation to understand your story. From there, we design bespoke routines for your Ladies Sangeet, Haldi, Bride & Groom performances, and family groups, guiding you step-by-step to a cinematic performance."
    },
    {
      question: "What should I wear to my dance sessions?",
      answer: "Comfort is key! For Hip Hop and Jazz Funk, breathable athletic wear and clean sneakers are perfect. For Contemporary or Yoga, you may prefer dancing barefoot or wearing specific grip socks. Avoid loose jewelry."
    }
  ];

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
    <div className="pt-24 pb-20 px-6 lg:px-12 overflow-hidden bg-charcoal">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Professional Training
          </p>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-8">
            Our Training
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <p className="max-w-2xl mx-auto text-ivory/70 text-lg font-light mb-4 text-glow">
            Curated programs designed for every skill level. From foundational 
            techniques to professional stage performance.
          </p>
        </motion.div>
      </section>

      {/* Regular Programs Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="sr-only">Our Training Programs</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainingPrograms.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -15 }}
                onClick={() => setSelectedBatch(selectedBatch === item.id ? null : item.id)}
                className="group relative h-[550px] overflow-hidden rounded-xl border border-gold/20 hover:border-gold/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold/10"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent group-hover:via-charcoal/50 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-cinzel font-bold text-white leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gold font-montserrat uppercase tracking-widest text-[10px] font-light mb-6">
                    {item.suffix}
                  </p>

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
                    <div className="flex items-center gap-2 text-gold/80 text-[10px] uppercase tracking-widest font-semibold">
                      <div className="h-1 w-1 bg-gold rounded-full" />
                      Schedule: {item.schedule}
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ x: selectedBatch === item.id ? 8 : 0 }}
                    className="absolute bottom-8 right-8"
                  >
                    <ChevronRight className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Premium Personal Training Section */}
      <section className="max-w-7xl mx-auto mb-32 relative group">
        <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-gold rounded-3xl p-12 lg:p-20 border border-gold/30 hover:border-gold/50 transition-all duration-500 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
                  Bespoke Excellence
                </p>
                <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-gold-gradient">
                  Personal Training
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-gold to-transparent mt-6" />
              </div>

              <p className="text-ivory/80 text-lg font-light leading-relaxed">
                Elevate your journey with one-on-one coaching from our Master Instructors. 
                Whether you're preparing for a professional audition, perfecting technique, 
                or seeking rapid transformation.
              </p>

              <div className="grid grid-cols-2 gap-6 pb-8">
                {[
                  { icon: Target, text: "Goal Oriented" },
                  { icon: Shield, text: "Private Studio" },
                  { icon: Trophy, text: "Elite Coaching" },
                  { icon: Users, text: "Solo Focused" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold/10 border border-gold/20">
                      <feature.icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-ivory/70 text-sm font-light">{feature.text}</span>
                  </div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/connect"
                  className="inline-block gold-gradient text-charcoal px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:shadow-gold/20 transition-all transition-shadow"
                >
                  Inquire for Privates
                </Link>
              </motion.div>
            </div>

            {/* Visuals */}
            <div className="relative">
              <div className="absolute inset-0 border border-gold/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <div className="h-[450px] lg:h-[550px] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personal Training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8">
            Frequently Asked
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gold/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
              >
                <span className="text-ivory font-cinzel font-semibold tracking-wide">{faq.question}</span>
                {openFaq === i ? (
                  <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-ivory/60 font-light text-sm leading-relaxed border-t border-gold/5 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-20 px-12 bg-gradient-to-br from-gold/5 via-transparent to-charcoal-light/30 border border-gold/20 rounded-3xl text-center backdrop-blur-md"
      >
        <h3 className="text-3xl md:text-4xl font-cinzel font-bold mb-6">
          Ready to Begin Your Journey?
        </h3>
        <p className="text-ivory/70 mb-10 max-w-2xl mx-auto font-light">
          Join our community of passionate dancers and discover the
          transformative power of movement under master guidance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/connect"
            className="group relative px-10 py-4 overflow-hidden border-2 border-gold transition-all duration-300 hover:shadow-gold/20 rounded-xl"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10 text-gold group-hover:text-charcoal transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2">
              Enroll Now <ChevronRight size={14} />
            </span>
          </Link>
          <Link
            href="/connect"
            className="px-10 py-4 border-2 border-gold/40 hover:border-gold text-ivory hover:text-gold transition-all duration-300 rounded-xl uppercase tracking-widest text-xs font-bold"
          >
            Schedule a Trial
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Training;

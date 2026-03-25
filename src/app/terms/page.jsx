"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-5xl mx-auto overflow-hidden text-ivory/80 font-light leading-relaxed">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-bold mb-4">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-8 text-white">
          Terms & Conditions
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-gold via-gold to-transparent mb-12" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing, browsing, or signing up for classes at Dream of Dance Studio, you agree to be bound by these Terms and Conditions. Please review them carefully before enrolling in any training sessions, workshops, or professional choreography services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">2. Class Registration & Payments</h2>
            <p className="mb-4">
              All class packages, membership tiers, and event choreography slots must be booked and paid for in advance. Prices are subject to change without prior notice, though ongoing memberships will be honored until their current billing cycle completes. All monthly, quarterly, and annual passes are non-transferable and non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">3. Class Etiquette & Safety</h2>
            <p className="mb-4">
              We strive to maintain a professional, supportive, and clean environment. Students are expected to arrive on time, respect choreographers and peers, and adhere to the studio dress code. Dream of Dance Studio is not liable for any physical injuries sustained during classes. Dancers must ensure they are physically fit and cleared by a physician to participate in rigorous physical activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">4. Cancellations & Make-Up Classes</h2>
            <p className="mb-4">
              If the studio cancels a scheduled class due to unforeseen circumstances or national holidays, a make-up session will be arranged. However, if a student misses a class voluntarily without prior 24-hour notice, a make-up class is not guaranteed. Make-up classes must be scheduled within the same billing month.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All choreographies taught at Dream of Dance Studio remain the intellectual property of the respective choreographer. Public performances of these routines (outside of studio recitals) requiring monetary compensation must receive prior written consent from the studio management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">6. Code of Conduct</h2>
            <p className="mb-4">
              We reserve the right to refuse service or revoke the membership of any individual who exhibits disruptive, disrespectful, or unsafe behavior on the premises.
            </p>
          </section>

          <p className="text-xs text-ivory/50 mt-12 pt-8 border-t border-gold/20">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;

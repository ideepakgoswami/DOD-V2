"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-gold via-gold to-transparent mb-12" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you interact with Dream of Dance Studio, whether through our website, classes, or events, we may collect personal information such as your name, email address, phone number, and physical billing address. We gather this data exclusively to provide our services and ensure you receive the best dance training experience possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">2. How We Use Your Data</h2>
            <p className="mb-4">
              Your personal information is utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manage your class registrations, schedules, and memberships.</li>
              <li>Communicate important updates regarding studio closures, events, or workshops.</li>
              <li>Improve our website performance and tailor our offerings to your preferences.</li>
              <li>Process payments and maintain billing history securely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">3. Media & Photography</h2>
            <p className="mb-4">
              Dream of Dance Studio occasionally records classes, events, and performances for promotional purposes across our digital channels (such as Instagram or YouTube). By participating in our programs, you consent to being photographed or recorded. If you choose not to be featured in such media, please inform our front desk staff prior to your session.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal identification information to others. We may use third-party service providers to help us operate our business, such as processing payments or sending out newsletters. We will only share your information with these parties strictly for those limited operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel font-bold text-white mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or any interactions with Dream of Dance Studio, feel free to contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> dod@dreamofdance.com</li>
              <li><strong>Phone:</strong> +91 9560832548</li>
              <li><strong>Address:</strong> G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri, Delhi-110053</li>
            </ul>
          </section>

          <p className="text-xs text-ivory/50 mt-12 pt-8 border-t border-gold/20">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;

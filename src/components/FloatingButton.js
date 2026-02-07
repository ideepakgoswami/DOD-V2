import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Phone, Mail } from "lucide-react";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-80 glass-gold rounded-xl shadow-2xl overflow-hidden border border-gold/40"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-charcoal-light to-charcoal p-6 border-b border-gold/20">
              <h3 className="font-cinzel text-gold text-lg tracking-widest font-semibold">
                Inquiry Hub
              </h3>
              <p className="text-xs text-ivory/50 mt-1 font-light uppercase tracking-wider">
                Get in touch with us
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-charcoal/40 border border-gold/20 p-3 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 rounded-lg backdrop-blur-sm hover:border-gold/40"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91"
                      className="w-full bg-charcoal/40 border border-gold/20 p-3 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 rounded-lg backdrop-blur-sm hover:border-gold/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-charcoal/40 border border-gold/20 p-3 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 rounded-lg backdrop-blur-sm hover:border-gold/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry..."
                    rows="3"
                    className="w-full bg-charcoal/40 border border-gold/20 p-3 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 rounded-lg backdrop-blur-sm hover:border-gold/40 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full gold-gradient text-charcoal font-bold py-3 text-sm uppercase tracking-widest rounded-lg hover:shadow-luxury-gold transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  Send Request
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </motion.button>

              {/* Quick Contact Links */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gold/20">
                <a
                  href="tel:+919990001111"
                  className="flex items-center justify-center space-x-2 bg-charcoal/30 hover:bg-gold/10 border border-gold/20 hover:border-gold/50 p-3 rounded-lg transition-all duration-300 group text-xs"
                >
                  <Phone
                    size={14}
                    className="text-gold/60 group-hover:text-gold"
                  />
                  <span className="text-ivory/60 group-hover:text-gold transition-colors hidden sm:inline">
                    Call
                  </span>
                </a>
                <a
                  href="mailto:info@dodstudio.com"
                  className="flex items-center justify-center space-x-2 bg-charcoal/30 hover:bg-gold/10 border border-gold/20 hover:border-gold/50 p-3 rounded-lg transition-all duration-300 group text-xs"
                >
                  <Mail
                    size={14}
                    className="text-gold/60 group-hover:text-gold"
                  />
                  <span className="text-ivory/60 group-hover:text-gold transition-colors hidden sm:inline">
                    Email
                  </span>
                </a>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center shadow-2xl text-charcoal font-bold hover:shadow-luxury-gold transition-all duration-300 relative group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <MessageSquare size={28} strokeWidth={2} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pulse Animation */}
        <motion.div
          animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gold"
        />
      </motion.button>

      {/* Floating Label */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-0 bg-charcoal/90 backdrop-blur-md border border-gold/30 rounded-lg px-4 py-2 text-xs text-gold whitespace-nowrap font-semibold tracking-wider pointer-events-none"
        >
          Questions? We're here!
        </motion.div>
      )}
    </div>
  );
};

export default FloatingButton;

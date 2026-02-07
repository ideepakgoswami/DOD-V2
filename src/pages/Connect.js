import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: "Academy Classes",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interestedIn: "Academy Classes",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "The Studio Hub",
      subtitle: "Visit Us",
      items: [
        "123 Artistic Boulevard",
        "Culture District",
        "State 54321, India",
      ],
      color: "rose",
    },
    {
      icon: Phone,
      title: "+91 98765 43210",
      subtitle: "Direct Line",
      items: [
        "Mon - Fri: 11:00 AM - 7:00 PM",
        "Sat: 10:00 AM - 6:00 PM",
        "Sun: By Appointment",
      ],
      color: "gold",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "hello@dreamofdance.com",
      subtitle: "Inquiries",
      items: ["Academy Classes", "Pro Services", "Private Sessions"],
      color: "ivory",
      href: "mailto:hello@dreamofdance.com",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: "When We're Here",
      items: [
        "Mon - Sat: 10:00 AM - 08:30 PM",
        "Sun: 04:00 PM - 08:00 PM",
        "Holidays: Closed",
      ],
      color: "gold",
    },
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
      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-8">
            Connect With Us
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-ivory/70 text-lg font-light leading-relaxed">
            Have questions about our academy, pro services, or want to discuss
            your event? We're here to help bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group p-8 border border-gold/20 hover:border-gold/60 rounded-xl backdrop-blur-md transition-all duration-300 ${
                  card.href
                    ? "cursor-pointer hover:shadow-luxury-gold"
                    : "bg-charcoal-light/30"
                }`}
              >
                {card.href ? (
                  <a href={card.href} className="block h-full">
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-lg font-cinzel font-bold text-ivory mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gold/80 text-xs uppercase tracking-widest font-semibold mb-6">
                        {card.subtitle}
                      </p>
                      <ul className="space-y-2 flex-grow">
                        {card.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-ivory/60 text-sm font-light"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-gold/10 flex items-center text-gold group-hover:translate-x-2 transition-transform">
                        <span className="text-xs uppercase tracking-widest font-semibold">
                          Open
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-cinzel font-bold text-ivory mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gold/80 text-xs uppercase tracking-widest font-semibold mb-6">
                      {card.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {card.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-ivory/60 text-sm font-light"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
                Let's Start a Conversation
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold to-transparent mb-8" />
              <p className="text-ivory/70 text-lg font-light leading-relaxed">
                Whether you're interested in joining our academy, booking pro
                services, or just want to chat about dance, we'd love to hear
                from you.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-gold/20">
              {[
                {
                  title: "Response Time",
                  desc: "We typically respond within 24 hours",
                },
                {
                  title: "Flexible Booking",
                  desc: "Custom scheduling available for all services",
                },
                {
                  title: "Trial Classes",
                  desc: "First class free for new academy students",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-ivory mb-1">
                      {item.title}
                    </h4>
                    <p className="text-ivory/60 text-sm font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-gold rounded-2xl p-10 border border-gold/40 shadow-elegant">
              <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-gold-gradient mb-2 text-center">
                Send us a Message
              </h3>
              <p className="text-center text-ivory/60 text-sm uppercase tracking-widest font-light mb-10">
                Fill out the form below and we'll get back to you soon
              </p>

              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="flex flex-col items-center justify-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-cinzel font-bold text-ivory mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-ivory/70 font-light">
                      Thank you for reaching out. We'll be in touch within 24
                      hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name"
                        className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name"
                        className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 (Optional)"
                      className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      I'm Interested In
                    </label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40"
                    >
                      <option value="Academy Classes">Academy Classes</option>
                      <option value="Wedding Choreography">
                        Wedding Choreography
                      </option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Private Sessions">Private Sessions</option>
                      <option value="Music Video Production">
                        Music Video Production
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your inquiry or project..."
                      rows="5"
                      className="w-full bg-charcoal/40 border border-gold/20 rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 resize-none hover:border-gold/40"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-charcoal font-bold py-4 text-sm uppercase tracking-widest rounded-lg hover:shadow-luxury-gold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>

                  {/* Privacy Note */}
                  <p className="text-xs text-ivory/40 text-center font-light">
                    We respect your privacy. Your information will only be used
                    to respond to your inquiry.
                  </p>
                </form>
              )}

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/5 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-2xl border-2 border-gold/20 overflow-hidden shadow-elegant"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/80 flex items-center justify-center">
            <div className="text-center z-10">
              <MapPin className="w-16 h-16 text-gold/40 mx-auto mb-6" />
              <h3 className="text-2xl font-cinzel font-bold text-ivory mb-4">
                Visit Our Studio
              </h3>
              <p className="text-ivory/60 text-sm font-light max-w-md">
                123 Artistic Boulevard, Culture District
                <br />
                New Delhi - 110001
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 px-8 py-3 border border-gold/40 hover:border-gold text-gold hover:text-ivory transition-all duration-300 uppercase tracking-widest text-xs font-semibold rounded-lg"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Connect;

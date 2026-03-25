"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: "Training Classes",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!formData.email.trim() && !formData.phone.trim()) {
      tempErrors.email = "Email or Phone is required";
      tempErrors.phone = "Email or Phone is required";
    } else {
      if (formData.email.trim() && !emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address";
      }
      if (formData.phone.trim() && !phoneRegex.test(cleanPhone)) {
        tempErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (!formData.message.trim()) tempErrors.message = "Please enter your message";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // --- GOOGLE FORM CONFIGURATION ---
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeipLK-zXBvT0gjAxCuQwT57qsZ_bQHaVhFzWphMzUUFZeMOg/formResponse";
    
    const entryIds = {
      firstName: "entry.547779292",
      lastName: "entry.1492766981",
      email: "entry.1393274855",
      phone: "entry.590843961",
      interest: "entry.794409786",
      message: "entry.1046751562"
    };

    const formDataToSubmit = new FormData();
    formDataToSubmit.append(entryIds.firstName, formData.firstName);
    formDataToSubmit.append(entryIds.lastName, formData.lastName);
    formDataToSubmit.append(entryIds.email, formData.email);
    formDataToSubmit.append(entryIds.phone, formData.phone);
    formDataToSubmit.append(entryIds.interest, formData.interestedIn);
    formDataToSubmit.append(entryIds.message, formData.message);

    try {
      // Send to Google Forms (using no-cors mode to bypass CORS issues)
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      // Data sent successfully (or at least attempted in no-cors)
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // --- WHATSAPP REDIRECT ---
      const whatsappNumber = "919560832548"; 
      const text = `Hi Dream of Dance Studio! I'm ${formData.firstName} ${formData.lastName}. 
I just visited your website and I'm interested in ${formData.interestedIn}.
My Email: ${formData.email}
My Phone: ${formData.phone}
Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      // Delay redirect slightly so they see the success message
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1000);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interestedIn: "Training Classes",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again or contact us via phone.");
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "DOD Studio",
      subtitle: "Visit Us",
      items: [
        "G-3/1, Ground Floor, St. No. 6",
        "Near Moni Baba Mandir, Brahmpuri",
        "Delhi-110053",
      ],
      color: "rose",
    },
    {
      icon: Phone,
      title: "+91 9560832548",
      subtitle: "Direct Line",
      items: [
        "Mon - Sun: 9:00 AM - 9:00 PM",
        "Operating same time all day",
        "Holidays: Closed",
      ],
      color: "gold",
      href: "tel:+919560832548",
    },
    {
      icon: Mail,
      title: "dod@dreamofdancestudio.com",
      subtitle: "Inquiries",
      items: ["Academy Classes", "Pro Services", "Private Sessions"],
      color: "ivory",
      href: "mailto:dod@dreamofdance.com",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: "When We're Here",
      items: [
        "Mon - Sun: 9:00 AM - 9:00 PM",
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
            Have questions about our training, pro services, or want to discuss
            your event? We're here to help bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="sr-only">Contact Information</h2>
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
                      <h3 className="text-lg font-cinzel font-bold text-ivory mb-2 break-all group-hover:text-gold transition-colors">
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
                    <h3 className="text-lg font-cinzel font-bold text-ivory mb-2 break-all">
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
                Whether you're interested in joining our training, booking pro
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
                  desc: "First class free for new training students",
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
                        className={`w-full bg-charcoal/40 border ${errors.firstName ? 'border-rose-500' : 'border-gold/20'} rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40`}
                      />
                      {errors.firstName && <p className="text-rose-500 text-[10px] mt-1 uppercase tracking-widest">{errors.firstName}</p>}
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
                        className={`w-full bg-charcoal/40 border ${errors.lastName ? 'border-rose-500' : 'border-gold/20'} rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40`}
                      />
                      {errors.lastName && <p className="text-rose-500 text-[10px] mt-1 uppercase tracking-widest">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full bg-charcoal/40 border ${errors.email ? 'border-rose-500' : 'border-gold/20'} rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40`}
                    />
                    {errors.email && <p className="text-rose-500 text-[10px] mt-1 uppercase tracking-widest">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3 block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 (10 digits)"
                      className={`w-full bg-charcoal/40 border ${errors.phone ? 'border-rose-500' : 'border-gold/20'} rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 hover:border-gold/40`}
                    />
                    {errors.phone && <p className="text-rose-500 text-[10px] mt-1 uppercase tracking-widest">{errors.phone}</p>}
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
                      <option value="Training Classes">Training Classes</option>
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
                      className={`w-full bg-charcoal/40 border ${errors.message ? 'border-rose-500' : 'border-gold/20'} rounded-lg p-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/60 outline-none transition-all duration-300 resize-none hover:border-gold/40`}
                    />
                    {errors.message && <p className="text-rose-500 text-[10px] mt-1 uppercase tracking-widest">{errors.message}</p>}
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

      {/* Map Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl border-2 border-gold/20 overflow-hidden shadow-elegant group"
        >
          {/* Map Overlay for branding feel */}
          <div className="absolute inset-0 bg-gold/5 mix-blend-color pointer-events-none z-10" />
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5976510343715!2d77.25608697550228!3d28.686153075635815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc091936c64b%3A0xc4868448eb52c803!2sBrahampuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709850000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ 
              border: 0, 
              filter: "brightness(0.7) contrast(1.2) sepia(0.2) saturate(1.4) hue-rotate(-15deg)" 
            }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-all duration-700 group-hover:brightness-90"
          ></iframe>

          {/* Location Info Card */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto z-20">
            <div className="bg-charcoal/95 backdrop-blur-xl p-6 rounded-2xl border border-gold/30 shadow-2xl max-w-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-gold mb-2 tracking-wide">Dream of Dance Studio</h4>
                  <p className="text-ivory/70 text-xs font-light leading-relaxed">
                    G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri, Delhi-110053
                  </p>
                  <a 
                    href="https://maps.google.com/?q=G-3/1, Ground Floor, St. No. 6, Near Moni Baba Mandir, Brahmpuri, Delhi-110053" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-gold font-bold hover:text-ivory transition-all"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Connect;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo_final.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [proServicesDropdown, setProServicesDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Training", path: "/training" },
    { title: "Gallery", path: "/gallery" },
    { title: "About Us", path: "/story" },
    { title: "Connect", path: "/connect" },
  ];

  const proServicesMenuItems = [
    { title: "Events & Productions", path: "/pro-services#events" },
    { title: "Fitness Classes", path: "/pro-services#fitness" },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/90 backdrop-blur-lg border-b border-gold/30"
            : "bg-charcoal/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <Link href="/">
              <Image src={logo} alt="Logo" className="h-14 w-auto object-contain" priority />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex gap-12 items-center flex-1 justify-center">
              {menuItems.map((i) => (
                <Link
                  key={i.path}
                  href={i.path}
                  className="text-xs uppercase tracking-widest text-ivory/70 hover:text-gold transition-colors"
                >
                  {i.title}
                </Link>
              ))}
              {/* Pro Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProServicesDropdown(true)}
                onMouseLeave={() => setProServicesDropdown(false)}
              >
                <Link
                  href="/pro-services#events"
                  className="flex items-center gap-1 cursor-pointer text-xs uppercase tracking-widest text-ivory/70 hover:text-gold transition-colors"
                >
                  Pro Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      proServicesDropdown ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                <AnimatePresence>
                  {proServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                    >
                      <div className="bg-charcoal/95 backdrop-blur-xl border border-gold/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="p-2 space-y-1">
                          {proServicesMenuItems.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setProServicesDropdown(false)}
                              className="group flex items-center px-4 py-3 text-xs uppercase tracking-widest text-ivory/70 hover:text-gold transition-all duration-300 hover:bg-gold/5"
                            >
                              <span className="w-0 group-hover:w-2 h-[1px] bg-gold mr-0 group-hover:mr-3 transition-all duration-300" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gold hover:scale-110 active:scale-90 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY (OUTSIDE NAV) ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-charcoal/98 backdrop-blur-[70px]"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

            {/* Close button */}
            <button
              className="absolute top-8 right-8 text-gold hover:rotate-90 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X size={36} />
            </button>

            <div className="flex h-full flex-col items-center justify-center gap-8 px-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-cinzel tracking-[0.2em] text-gold hover:text-ivory transition-colors inline-block pb-1 border-b border-transparent hover:border-gold/30"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              {/* Pro Services Mobile Dropdown */}
              <div className="w-full text-center">
                <div className="flex items-center justify-center gap-4 mx-auto">
                  <Link
                    href="/pro-services#events"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-cinzel tracking-[0.2em] text-gold hover:text-ivory outline-none"
                  >
                    Pro Services
                  </Link>
                  <button 
                    onClick={() => setProServicesDropdown(!proServicesDropdown)}
                    className="outline-none"
                  >
                    <ChevronDown 
                      size={28} 
                      className={`transition-transform duration-500 text-gold/50 ${proServicesDropdown ? "rotate-180 text-gold" : ""}`} 
                    />
                  </button>
                </div>
                
                <AnimatePresence>
                  {proServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="flex flex-col gap-6 py-6 bg-gold/5 rounded-3xl mx-4 border border-gold/10">
                        {proServicesMenuItems.map((item, i) => (
                          <motion.div
                            key={item.path}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Link
                              href={item.path}
                              onClick={() => setIsOpen(false)}
                              className="text-sm border-b border-gold/10 pb-2 uppercase tracking-[0.5em] text-ivory/60 hover:text-gold transition-colors inline-block"
                            >
                              {item.title}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { title: "Academy", path: "/academy" },
    { title: "Gallery", path: "/gallery" },
    { title: "Our Story", path: "/story" },
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
            : "bg-charcoal/50 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-14" />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex gap-12 items-center flex-1 justify-center">
              {menuItems.map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
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
                <div className="flex items-center gap-1 cursor-pointer text-xs uppercase tracking-widest text-ivory/70 hover:text-gold transition-colors">
                  Pro Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      proServicesDropdown ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {proServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-charcoal-light/90 backdrop-blur-lg border border-gold/30 rounded-lg shadow-lg"
                    >
                      <div className="p-2">
                        {proServicesMenuItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setProServicesDropdown(false)}
                            className="block px-4 py-2 text-sm text-ivory/80 hover:bg-gold/10 hover:text-gold rounded-md transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gold"
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
            className="fixed inset-0 z-[100] bg-charcoal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-gold"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex h-full flex-col items-center justify-center gap-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-cinzel tracking-widest text-gold hover:text-ivory"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              {/* Pro Services Mobile */}
              <div className="text-center">
                <p className="text-2xl font-cinzel tracking-widest text-ivory/70 mb-4">
                  Pro Services
                </p>
                {proServicesMenuItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: (menuItems.length + i) * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-xl font-cinzel tracking-widest text-gold hover:text-ivory"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

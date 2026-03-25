"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../assets/images/logo_final.webp"; // Ensure this matches actual path

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal site much faster
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Snappier bezier exit
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0a]"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Image
              src={logo}
              alt="Dream of Dance"
              width={200}
              height={126}
              priority
              className="object-contain opacity-90"
              sizes="200px"
            />
            {/* Elegant loading line */}
            <div className="mt-12 w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-xs tracking-[0.4em] uppercase font-montserrat text-ivory"
            >
              Dream of Dance Studio
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

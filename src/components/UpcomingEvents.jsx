"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Lightbulb, Users, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import eventsData from "../data/events.json";

const ICON_MAP = {
  Trophy: Trophy,
  Lightbulb: Lightbulb,
  Users: Users,
};



export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch('/api/events');
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) setEvents(data);
      }
    } catch (error) {
      console.error("Failed to fetch dynamically updated events:", error);
    } finally {
      setLoading(false);
    }
  }

  if (events.length === 0) {
    return (
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-[420px] rounded-2xl bg-white/5 animate-pulse border border-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {events.map((event, index) => {
        const IconComponent = ICON_MAP[event.icon] || Lightbulb;
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/80 hover:border-2 shadow-lg hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-500 cursor-pointer h-[420px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              {event.image ? (
                <Image
                  src={event.image}
                  alt={event.title || "Upcoming Event"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                />
              ) : (
                <div className="w-full h-full bg-[#1a1a1a]" />
              )}
            </div>
            
            {/* Smooth Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/60 opacity-90 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8 z-10 space-y-6">
              <div className="flex flex-col items-center space-y-4">
                {/* Date Badge */}
                <div className="inline-block px-4 py-2 bg-gold text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.4)] transform group-hover:scale-105 transition-transform duration-300">
                  {event.date}
                </div>

                {/* Icon */}
                <div className="mb-4 w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300 backdrop-blur-sm">
                  <IconComponent className="w-5 h-5 text-white group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-cinzel font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] px-4">
                  {event.title}
                </h3>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                {/* Description */}
                <p className="text-ivory text-sm font-medium leading-relaxed max-w-[280px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {event.description}
                </p>

                {/* CTA */}
                <Link
                  href="/connect"
                  className="group inline-flex items-center text-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em] border-b border-gold/30 pb-1"
                  aria-label={`View details and register for ${event.title}`}
                >
                  Event Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

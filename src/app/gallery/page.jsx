"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 📸 ADD YOUR OWN PHOTOS HERE
//
// Steps:
//  1. Drop your photo into the matching folder inside  public/gallery/<category>/
//  2. Add an entry below pointing to it:
//       { title: "My Photo Title", category: "Events", image: "/gallery/events/my-photo.jpg" }
//
// Available categories: Events | Performance | Fitness | Academy | Production
//
// If you leave this array empty, placeholder images will show instead.
// ─────────────────────────────────────────────────────────────────────────────
const MY_GALLERY_PHOTOS = [
  // ── Events ──────────────────────────────────────────────────────────────
  {
    title: "Event Photo 1",
    category: "Events",
    image: "/gallery/events/event_photo_1.jpg",
  },
  {
    title: "Event Photo 2",
    category: "Events",
    image: "/gallery/events/event_photo_2.jpg",
  },
  {
    title: "Event Photo 3",
    category: "Events",
    image: "/gallery/events/event_photo_3.jpg",
  },
  {
    title: "Event Photo 4",
    category: "Events",
    image: "/gallery/events/event_photo_4.jpg",
  },
  {
    title: "Event Photo 5",
    category: "Events",
    image: "/gallery/events/event_photo_5.jpg",
  },

  // ── Performance ─────────────────────────────────────────────────────────
  {
    title: "Performance 1",
    category: "Performance",
    image: "/gallery/performance/performance_1.jpg",
  },
  {
    title: "Performance 2",
    category: "Performance",
    image: "/gallery/performance/performance_2.jpg",
  },
  {
    title: "Performance 3",
    category: "Performance",
    image: "/gallery/performance/performance_3.jpg",
  },
  {
    title: "Performance 4",
    category: "Performance",
    image: "/gallery/performance/performance_4.jpg",
  },
  {
    title: "Performance 5",
    category: "Performance",
    image: "/gallery/performance/performance_5.jpg",
  },
  {
    title: "Performance 6",
    category: "Performance",
    image: "/gallery/performance/performance_6.jpg",
  },
  {
    title: "Performance 7",
    category: "Performance",
    image: "/gallery/performance/performance_7.jpg",
  },
  {
    title: "Performance 8",
    category: "Performance",
    image: "/gallery/performance/performance_8.jpg",
  },

  // ── Fitness ─────────────────────────────────────────────────────────────

  // ── Academy ─────────────────────────────────────────────────────────────
  {
    title: "Academy 1",
    category: "Academy",
    image: "/gallery/academy/academy_1.jpg",
  },
  {
    title: "Academy 2",
    category: "Academy",
    image: "/gallery/academy/academy_2.jpg",
  },

  // ── Production ──────────────────────────────────────────────────────────
];

// ─────────────────────────────────────────────────────────────────────────────
// Fallback placeholder images (Unsplash) — used when MY_GALLERY_PHOTOS is empty
// or to fill categories that have no custom photos yet.
// ─────────────────────────────────────────────────────────────────────────────
const PLACEHOLDER_PHOTOS = [
  // Events
  {
    title: "Wedding Sangeet Performance",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "School Annual Day Performance",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Festival Performance",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "College Fest Choreography",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  // Performance
  {
    title: "Contemporary Dance Performance",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Stage Dance Showcase",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2176d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Group Dance Performance",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1524594684888-c55847b4b629?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Solo Dance Performance",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
  },
  // Fitness
  {
    title: "Zumba Fitness Class",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1534294-4f3d1f1a0a4b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Aerobic Dance Fitness",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Yoga & Flexibility Training",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cardio Dance Workout",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
  // Academy
  {
    title: "Academy Students Performance",
    category: "Academy",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kids Dance Training",
    category: "Academy",
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2176d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Teen Batch Class",
    category: "Academy",
    image:
      "https://images.unsplash.com/photo-1524594684888-c55847b4b629?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Adult Training Session",
    category: "Academy",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=800&q=80",
  },
  // Production
  {
    title: "Music Video Production",
    category: "Production",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Behind the Scenes Shoot",
    category: "Production",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Professional Choreography Shoot",
    category: "Production",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Studio Production Setup",
    category: "Production",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Merge: your photos first, then any placeholder categories not yet covered
// ─────────────────────────────────────────────────────────────────────────────
function buildGallery() {
  return MY_GALLERY_PHOTOS;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = buildGallery().map((img, i) => ({ id: i + 1, ...img }));

  const categories = [
    "All",
    "Events",
    "Performance",
    "Fitness",
    "Academy",
    "Wedding",
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (filteredImages.length === 0) return;
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handlePrev = () => {
    if (filteredImages.length === 0) return;
    const newIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold/2 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-montserrat font-light mb-4">
            DOD Diaries
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-8">
            Gallery
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-ivory/70 text-lg font-light leading-relaxed">
            Explore our moments of magic. From stunning performances to
            transformative fitness classes, witness the artistry and energy of
            Dream of Dance Studio.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-montserrat uppercase tracking-widest text-xs font-light transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-gold text-charcoal border-gold shadow-lg shadow-gold/30"
                  : "text-gold border-gold/40 hover:border-gold/80 bg-transparent hover:bg-gold/5"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto mb-24">
        {filteredImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-ivory/60 text-lg">
              No images found in this category.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => handleImageClick(image, index)}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 hover:border-gold/60 transition-all duration-300 cursor-pointer h-80"
              >
                {/* Image */}
                <img
                  src={image.image?.src || image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 " //grayscale group-hover:grayscale-0
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-cinzel text-xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gold/80 text-sm font-montserrat uppercase tracking-widest font-light">
                    {image.category}
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gold/90 text-charcoal px-3 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-ivory hover:text-gold transition-colors"
              >
                <X size={32} />
              </motion.button>

              {/* Image */}
              <img
                src={selectedImage.image?.src || selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl border border-gold/40"
              />

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-cinzel font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gold/80 font-montserrat uppercase tracking-widest text-sm font-light mb-4">
                  {selectedImage.category}
                </p>
                <p className="text-ivory/60 text-sm">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </motion.div>

              {/* Navigation */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  className="pointer-events-auto bg-gold/20 hover:bg-gold/40 text-gold p-3 rounded-full transition-all duration-300 border border-gold/40"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="pointer-events-auto bg-gold/20 hover:bg-gold/40 text-gold p-3 rounded-full transition-all duration-300 border border-gold/40"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/gallery';

const Gallery = () => {
  const [gallery, setGallery] = useState(galleryData);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-20" data-testid="gallery-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="gallery-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6"
            >
              GALLERY
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Our <span className="text-[#1F6FEB]">Journey</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Moments captured from our events, workshops, competitions, and activities throughout the years.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#1A1D22] py-24" data-testid="gallery-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group relative overflow-hidden"
                data-testid={`gallery-item-${index}`}
              >
                <img 
                  src={item.imageUrl || item.image_url} 
                  alt={item.title} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0B0B0B] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                    <h3 className="text-xl font-bold text-[#F5F7FA] mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-[#B8C0CC] text-sm mb-2">{item.description}</p>
                    )}
                    {item.eventName && (
                      <span className="inline-block px-3 py-1 bg-[#1F6FEB] text-white text-xs font-semibold">
                        {item.eventName || item.event_name}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {gallery.length === 0 && (
            <div className="text-center py-16" data-testid="no-gallery">
              <p className="text-[#8B95A5] text-lg">No images available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
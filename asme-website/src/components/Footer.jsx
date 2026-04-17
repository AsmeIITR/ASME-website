import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const scrolled = window.scrollY > scrollThreshold;
      setIsVisible(scrolled);

      const backToTopThreshold = 300;
      setShowBackToTop(window.scrollY > backToTopThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.footer
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative bg-[#0B0B0B] overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(31, 111, 235, 0.03) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, rgba(31, 111, 235, 0.02) 0%, transparent 50%)`,
          }}
        >
          {/* Blueprint Grid Texture Overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(31, 111, 235, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(31, 111, 235, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Floating Blue Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-[#1F6FEB] rounded-full opacity-30"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 12)}%`,
              }}
              animate={{
                x: [0, 20, -20, 0],
                y: [0, -15, 15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            {/* SECTION 1 - Top CTA Area */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center mb-20"
            >
              <motion.h2
                variants={itemVariants}
                className="text-[#F5F7FA] text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Engineering Beyond Boundaries
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-[#B8C0CC] text-lg max-w-3xl leading-relaxed"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                ASME IIT Roorkee pioneers underwater robotics, autonomous systems, and cutting-edge engineering solutions.
                We build the future through innovation, technical excellence, and collaborative student engineering culture.
              </motion.p>
            </motion.div>

            {/* SECTION 2 - Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
              {/* Column 1 - Quick Links */}
              <motion.div variants={itemVariants} className="space-y-6 text-center">
                <h3 className="text-[#F5F7FA] text-lg font-bold uppercase tracking-wide mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Quick Links
                </h3>
                <div className="space-y-4">
                  {['Home', 'About', 'Team', 'Blogs', 'Events', 'Gallery', 'Contact'].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={linkVariants}
                      custom={index}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <Link
                        to={`/${item.toLowerCase()}`}
                        className="group text-[#B8C0CC] text-sm hover:text-[#1F6FEB] transition-colors duration-300 relative block"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1F6FEB] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Column 2 - Projects */}
              <motion.div variants={itemVariants} className="space-y-6 text-center">
                <h3 className="text-[#F5F7FA] text-lg font-bold uppercase tracking-wide mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Projects / Highlights
                </h3>
                <div className="space-y-4">
                  {['Underwater Robotics', 'Armageddon', 'Workshops', 'CAD Challenges', 'Technical Talks'].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={linkVariants}
                      custom={index}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <Link
                        to={`/projects/${item.toLowerCase().replace(' ', '-')}`}
                        className="group text-[#B8C0CC] text-sm hover:text-[#1F6FEB] transition-colors duration-300 relative block"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1F6FEB] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Column 3 - Connect */}
              <motion.div variants={itemVariants} className="space-y-6 text-center">
                <h3 className="text-[#F5F7FA] text-lg font-bold uppercase tracking-wide mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Connect
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Instagram', href: 'https://instagram.com/asmeiitr' },
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/asme-iit-roorkee' },
                    { name: 'Email', href: 'mailto:contact@asmeiitr.in' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={linkVariants}
                      custom={index}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <Link
                        to={item.href.startsWith('http') ? undefined : item.href}
                        href={item.href.startsWith('http') ? item.href : undefined}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group text-[#B8C0CC] text-sm hover:text-[#1F6FEB] transition-colors duration-300 relative block text-center"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1F6FEB] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            

            
              
            {/* SECTION 4 - Bottom Strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 py-8 border-t border-[#111317]"
            >
              <motion.p
                variants={itemVariants}
                className="text-[#8B95A5] text-sm text-center"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                2026 ASME IIT Roorkee
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[#8B95A5] text-sm text-center"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Made with engineering spirit at IITR
              </motion.p>

              <AnimatePresence>
                {showBackToTop && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="bg-[#1F6FEB] text-[#F5F7FA] px-6 py-3 text-xs font-bold transition-all duration-300 hover:bg-[#144E9C]"
                    style={{ borderRadius: '0 0 4px 0' }}
                  >
                    Back to Top
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
};

export default Footer;

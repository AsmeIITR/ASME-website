import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const menuItems = [
    { name: "ABOUT", href: "/about" },
    { name: "TEAM", href: "/team" },
    { name: "BLOGS", href: "/blogs" },
    { name: "EVENTS", href: "/events" },
    { name: "PARTICIPATION", href: "/participation" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  const panelVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0.08,
      scaleY: 0.03,
      x: 12,
      y: -4,
      transformOrigin: "top right",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },

    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      x: 0,
      y: 0,
      transformOrigin: "top right",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },

    exit: {
      opacity: 0,
      scaleX: 0.1,
      scaleY: 0.04,
      x: 8,
      y: -3,
      transformOrigin: "top right",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.22 },
    },
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-transparent"
        }`}
      >
        {/* Navbar layout */}
        <nav className="max-w-11xl mx-auto pl-6 pr-6 lg:pl-8 lg:pr-6 h-20 flex items-center justify-between">
          <a href="/" className="text-[#F5F7FA] text-2xl font-bold">
            ASME
          </a>

          {/* MENU button at extreme top-right */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 text-white transition-all duration-300 hover:bg-[#1F6FEB]"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              borderRadius: "0 0 4px 0",
              marginRight: "8px", // 8px from right edge
            }}
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-50"
              style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Popup */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed z-50 bg-[#0B0B0B]"
              style={{
                width: "clamp(280px, 86vw, 315px)",
                height: "75vh",
                right: "8px", // Aligns with MENU button
                top: "20px",
                transformOrigin: "top right",
              }}
            >
              <div className="h-full flex flex-col justify-between px-5 py-5">
                {/* Top */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#1F6FEB] text-white px-4 py-2 text-xs font-bold hover:bg-[#144E9C] transition-all"
                    style={{
                      borderRadius: "0 0 4px 0",
                      letterSpacing: "0.05em",
                    }}
                  >
                    CLOSE
                  </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 flex items-center justify-end">
                  <div className="flex flex-col gap-3 items-end text-right">
                    {menuItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        variants={itemVariants}
                        onClick={() => setIsOpen(false)}
                        className="group relative inline-block text-[#F5F7FA] font-bold uppercase"
                        style={{
                          fontSize: "clamp(26px, 3vw, 36px)",
                          lineHeight: "0.95",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        <span className="group-hover:text-[#1F6FEB] transition-colors duration-200">
                          {item.name}
                        </span>

                        <span className="absolute right-0 -bottom-1 h-[2px] w-0 bg-[#1F6FEB] transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="text-right space-y-2">
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com/asmeiitr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#B8C0CC] text-sm font-semibold tracking-wide hover:text-[#1F6FEB] transition-colors"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://linkedin.com/company/asme-iit-roorkee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#B8C0CC] text-sm font-semibold tracking-wide hover:text-[#1F6FEB] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Participation', path: '/participation' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1A1D22] border-b border-[#262B33]"
      data-testid="navbar"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="navbar-logo">
            <img src="data:image/png;base64,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" alt="ASME Logo" className="w-16 h-12" />
            <div>
              <div className="font-bold text-[#F5F7FA] text-lg font-quicksand">ASME</div>
              <div className="text-[#8B95A5] text-xs font-quicksand">IIT Roorkee</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  isActive(item.path)
                    ? 'text-[#1F6FEB]'
                    : 'text-[#B8C0CC] hover:text-[#F5F7FA]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1F6FEB]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#F5F7FA] p-2"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-6"
            data-testid="mobile-menu"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
                className={`block py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-[#1F6FEB]'
                    : 'text-[#B8C0CC] hover:text-[#F5F7FA]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
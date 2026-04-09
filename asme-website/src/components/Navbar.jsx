import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
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
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B] border-b border-[#262B33]"
      data-testid="navbar"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="navbar-logo">
            <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center font-bold text-white text-xl">
              ASME
            </div>
            <div>
              <div className="font-bold text-[#F5F7FA] text-lg">ASME</div>
              <div className="text-[#8B95A5] text-xs">IIT Roorkee</div>
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
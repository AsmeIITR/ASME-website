import React from 'react';
import { Link } from 'react-router-dom';
// import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#262B33] py-16" data-testid="footer">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#1F6FEB] flex items-center justify-center font-bold text-white">
                ASME
              </div>
              <div>
                <div className="font-bold text-[#F5F7FA]">ASME</div>
                <div className="text-[#8B95A5] text-xs">IIT Roorkee</div>
              </div>
            </div>
            <p className="text-[#8B95A5] text-sm leading-relaxed">
              Promoting excellence in mechanical engineering through innovation, education, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5F7FA] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">About Us</Link></li>
              <li><Link to="/events" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Events</Link></li>
              <li><Link to="/team" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Team</Link></li>
              <li><Link to="/contact" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#F5F7FA] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blogs" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Blogs</Link></li>
              <li><Link to="/resources" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Study Material</Link></li>
              <li><Link to="/gallery" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/participation" className="text-[#8B95A5] text-sm hover:text-[#1F6FEB] transition-colors duration-300">Participation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5F7FA] font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-[#8B95A5] text-sm">
                {/* <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>IIT Roorkee, Uttarakhand, India</span>
              </li>
              <li className="flex items-center space-x-2 text-[#8B95A5] text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span>contact@asme.iitr.ac.in</span>
              </li>
              <li className="flex items-center space-x-2 text-[#8B95A5] text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 123 456 7890</span> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262B33] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#8B95A5] text-sm">
            © 2024 ASME IIT Roorkee. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8B95A5] hover:text-[#1F6FEB] transition-colors duration-300" data-testid="footer-linkedin">
              <Linkedin size={20} />
            </a> */}
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8B95A5] hover:text-[#1F6FEB] transition-colors duration-300" data-testid="footer-github">
              <Github size={20} />
            </a> */}
            {/* <a href="mailto:contact@asme.iitr.ac.in" className="text-[#8B95A5] hover:text-[#1F6FEB] transition-colors duration-300" data-testid="footer-mail">
              <Mail size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
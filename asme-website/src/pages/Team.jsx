import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Linkedin, Github, Mail } from 'lucide-react';
import { teamData } from '../data/team';

const Team = () => {
  const [team, setTeam] = useState(teamData);

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
    <div className="min-h-screen pt-20" data-testid="team-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="team-hero">
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
              OUR TEAM
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Meet the <span className="text-[#1F6FEB]">Innovators</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Our team of dedicated students and leaders working together to drive innovation and excellence in mechanical engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#1A1D22] py-24" data-testid="team-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="asme-card group text-center"
                data-testid={`team-member-${index}`}
              >
                <div className="mb-6 overflow-hidden">
                  <img 
                    src={member.imageUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'} 
                    alt={member.name} 
                    className="w-32 h-32 object-cover mx-auto rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2 group-hover:text-[#1F6FEB] transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-[#79A9FF] font-semibold mb-6">
                  {member.role}
                </p>
                
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1A1D22] flex items-center justify-center text-[#8B95A5] hover:text-[#1F6FEB] hover:bg-[#262B33] transition-all duration-300"
                      data-testid={`team-member-${index}-linkedin`}
                    >
                      {/* <Linkedin size={20} /> */}
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1A1D22] flex items-center justify-center text-[#8B95A5] hover:text-[#1F6FEB] hover:bg-[#262B33] transition-all duration-300"
                      data-testid={`team-member-${index}-github`}
                    >
                      {/* <Github size={20} /> */}
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-[#1A1D22] flex items-center justify-center text-[#8B95A5] hover:text-[#1F6FEB] hover:bg-[#262B33] transition-all duration-300"
                      data-testid={`team-member-${index}-email`}
                    >
                      {/* <Mail size={20} /> */}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
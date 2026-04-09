import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target } from 'lucide-react';
import { participationData } from '../data/participation';

const Participation = () => {
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
    <div className="min-h-screen pt-20" data-testid="participation-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="participation-hero">
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
              PARTICIPATION & ACHIEVEMENTS
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Competitions & <span className="text-[#1F6FEB]">Achievements</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Our students participate in national and international competitions, bringing home awards and recognition for IIT Roorkee.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Participation Items */}
      <section className="bg-[#1A1D22] py-24" data-testid="participation-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {participationData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                data-testid={`participation-item-${index}`}
              >
                {/* Alternate layout */}
                {index % 2 === 0 ? (
                  <>
                    <div className="asme-card">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#F5F7FA]">{item.title}</h2>
                      </div>
                      
                      <p className="text-[#B8C0CC] leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-[#79A9FF] font-semibold mb-2">
                          <Target size={18} />
                          <span>Key Achievements</span>
                        </div>
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1F6FEB] mt-2 flex-shrink-0"></div>
                            <p className="text-[#8B95A5]">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="asme-card order-1 lg:order-2">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-[#F5F7FA]">{item.title}</h2>
                      </div>
                      
                      <p className="text-[#B8C0CC] leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-[#79A9FF] font-semibold mb-2">
                          <Target size={18} />
                          <span>Key Achievements</span>
                        </div>
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1F6FEB] mt-2 flex-shrink-0"></div>
                            <p className="text-[#8B95A5]">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111317] py-24" data-testid="participation-cta">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1D22] p-12 lg:p-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6">
              Want to Compete?
            </h2>
            <p className="text-[#B8C0CC] text-lg mb-8 max-w-2xl mx-auto">
              Join ASME IIT Roorkee and participate in exciting competitions at national and international levels.
            </p>
            <a href="/contact" className="asme-button" data-testid="participation-join-cta">
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Participation;
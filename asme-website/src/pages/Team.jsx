import React from 'react';
import { motion } from 'framer-motion';

const smoothEase = [0.33, 1, 0.68, 1];

const Team = () => {
  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "President",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Technical Lead",
      imageUrl: "https://images.unsplash.com/photo-1494790108757-9c897a68bf2a?w=400",
      email: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Workshop Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-7e327e28dce?w=400",
      email: "mike.johnson@example.com"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Events Manager",
      imageUrl: "https://images.unsplash.com/photo-1500853990562-f2597026475?w=400",
      email: "sarah.wilson@example.com"
    },
    {
      id: 5,
      name: "David Brown",
      role: "Design Lead",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5a8bb2422d3?w=400",
      email: "david.brown@example.com"
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Communications Lead",
      imageUrl: "https://images.unsplash.com/photo-1507001907741-3b5802325a73?w=400",
      email: "emily.davis@example.com"
    },
    {
      id: 7,
      name: "Robert Chen",
      role: "Technical Advisor",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "robert.chen@example.com"
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Project Manager",
      imageUrl: "https://images.unsplash.com/photo-1494790108757-9c897a68bf2a?w=400",
      email: "lisa.anderson@example.com"
    },
    {
      id: 9,
      name: "James Wilson",
      role: "Research Lead",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-7e327e28dce?w=400",
      email: "james.wilson@example.com"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.15, ease: smoothEase }
    }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.18,
        ease: smoothEase
      }
    }
  };


  return (
    <div className="min-h-screen pt-20" data-testid="team-page">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-start relative overflow-hidden bg-[#0A1F44] underwater-pattern bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.8), rgba(10, 31, 68, 0.8)), url("https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=1920")'
        }}
        data-testid="team-hero"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
          <div className="flex justify-center items-center min-h-[60vh]">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold text-[#B8C0CC]  mb-6"
              >
                Meet Our Team
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
              >
                The driving force behind ASME IIT Roorkee — a group of passionate innovators, engineers, and leaders working together to create, build, and inspire. 
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#0A1F44] py-24" data-testid="team-grid">
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
                className="asme-card text-center"
                data-testid={`team-member-${index}`}
              >
                <div className="mb-6 overflow-hidden">
                  <img 
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' 
                    alt={member.name} 
                    className="w-32 h-32 object-cover mx-auto rounded-full"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-[#79A9FF] mb-2">
                  {member.name}
                </h3>
                
                <p className="text-[#F5F7FA] font-semibold mb-6">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="bg-[#111317] py-24" data-testid="alumni-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="heading-h2 text-[#ffffff] mb-6 text-center -mt-12"
          >
            Our Alumni
          </motion.h2>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="asme-card text-center"
              data-testid="alumni-1"
            >
              <div className="mb-6 overflow-hidden">
                <img 
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' 
                  alt="Alumni" 
                  className="w-32 h-32 object-cover mx-auto rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">
                Alumni Name
              </h3>
              
              <p className="text-[#79A9FF] font-semibold mb-6">
                Class of 2020 - Mechanical Engineering
              </p>
              
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="asme-card text-center"
              data-testid="alumni-2"
            >
              <div className="mb-6 overflow-hidden">
                <img 
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' 
                  alt="Alumni" 
                  className="w-32 h-32 object-cover mx-auto rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">
                Alumni Name
              </h3>
              
              <p className="text-[#79A9FF] font-semibold mb-6">
                Class of 2021 - Computer Science
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="asme-card text-center"
              data-testid="alumni-3"
            >
              <div className="mb-6 overflow-hidden">
                <img 
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' 
                  alt="Alumni" 
                  className="w-32 h-32 object-cover mx-auto rounded-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">
                Alumni Name
              </h3>
              
              <p className="text-[#79A9FF] font-semibold mb-6">
                Class of 2022 - Electrical Engineering
              </p>
              
            
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Team;
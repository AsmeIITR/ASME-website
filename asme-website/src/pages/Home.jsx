import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const HERO_IMAGE =
  "https://media.istockphoto.com/id/667127454/vector/3d-rendered-illustration-of-sun-light-rays-under-water.jpg?s=612x612&w=0&k=20&c=NcIG8LaAEDn96LZS47c2l63_sxNjI59EUVZaBXIFkeQ="

const previewInner =
  'w-full box-border px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20';

const smoothEase = [0.33, 1, 0.68, 1];

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.15, ease: smoothEase }
    }
  };

  const slideInSide = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -90 : 90,
      y: 24
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: smoothEase }
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
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        data-testid="hero-section"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-cover scale-110 blur-sm animate-slow-pan"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundPosition: '44% center',
            animation: 'slowPan 20s ease-in-out infinite alternate'
          }}
        />
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
          <div className="flex justify-center items-center min-h-[60vh]">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-4xl"
            >
              <motion.h1
                variants={fadeInUp}
                className="heading-h1 text-[#1F6FEB] mb-8 drop-shadow-lg"
              >
                ASME
                <br />
                <span className="text-[#F5F7FA]">IIT Roorkee Student Section</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="body-large text-[#B8C0CC] max-w-2xl mx-auto mt-8 drop-shadow-md"
              >
                ASME IIT Roorkee Student Section, the first and leading student section of ASME in India, was officially registered as a society in Feb 2007 by some enthusiastic students of the Mechanical & Industrial Engineering Department (MIED). Our mission is to promote and enhance our members' technical competency and professional well-being through quality programs and activities in mechanical engineering.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* flagship events */}
      <section className="bg-[#0A1F44] py-24" data-testid="blogs-preview">
        <div className={previewInner}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px', amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col items-stretch w-full"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16 w-full">
              <h2 className="heading-h2 text-[#ffffff] mb-4">Flagship Projects and Activities</h2>
              <p className="body text-[#8B95A5]">
                Building the Future of Underwater Robotics
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 w-full">
              <motion.div
                variants={slideInSide}
                custom="left"
                className="asme-card w-full min-w-0"
                data-testid="blog-card-1"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <img
                    src="https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFVuZGVyd2F0ZXIlMjBSb2JvdGljc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Blog 1"
                    className="w-full lg:w-5/12 h-72 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="heading-h3 text-[#1F6FEB] mb-4">
                      🌊 Underwater Robotics & CAD Design
                    </h3>
                    <p className="body text-[#8B95A5]">
                      This flagship domain of ASME IIT Roorkee involves designing advanced underwater robotic systems and mechanical prototypes using industry-standard CAD tools like SolidWorks. The initiative encourages innovation in fluid environments, precision engineering, and system design. It reflects IIT Roorkee’s strong tradition of applied engineering and ASME’s global emphasis on solving real-world mechanical challenges.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideInSide}
                custom="right"
                className="asme-card w-full min-w-0"
                data-testid="blog-card-2"
              >
                <div className="flex flex-col lg:flex-row lg:flex-row-reverse items-center gap-8">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1723867360557-5cf397665890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtzaG9wJTIwdW5kZXJ3YXRlciUyMFJvYm90aWNzJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
                    alt="Blog 2"
                    className="w-full lg:w-5/12 h-72 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="heading-h3 text-[#1F6FEB] mb-4">
                      🏁 Workshops & Armageddon
                    </h3>
                    <p className="body text-[#8B95A5]">
                      ASME IIT Roorkee actively conducts technical workshops on robotics, CAD modeling, PCB design, and embedded systems to bridge the gap between theory and application. Members also participate in Armageddon, the robotics battle event held during Cognizance, IIT Roorkee’s annual technical fest. These activities foster collaboration, leadership, and hands-on engineering experience aligned with ASME’s global engineering standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={slideInSide}
                custom="left"
                className="asme-card w-full min-w-0"
                data-testid="blog-card-3"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <img
                    src="https://images.unsplash.com/photo-1487446594957-4e799860b28e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVuZGVyd2F0ZXIlMjAuUm9ib3RpY3MlMjAlMjYlMjBFbWJlZGRlZCUyMFN5c3RlbXN8ZW58MHx8MHx8fDA%3D"
                    alt="Blog 3"
                    className="w-full lg:w-5/12 h-72 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="heading-h3 text-[#1F6FEB] mb-4">
                      🤖 Robotics & Embedded Systems
                    </h3>
                    <p className="body text-[#8B95A5]">
                      As part of the ASME IIT Roorkee student chapter, this vertical focuses on building intelligent robotic systems using embedded electronics, sensors, and control systems. Members work on end-to-end development—from ideation to prototyping—while strengthening core mechanical and electronics integration skills. The projects reflect ASME’s mission of promoting innovative engineering solutions within IIT Roorkee’s technical ecosystem.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center mt-10">
              <Link to="/events" className="asme-button">
                Explore More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-[#09122e] py-24" data-testid="team-preview">
        <div className={previewInner}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px', amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col items-stretch w-full"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16 w-full">
              <h2 className="heading-h2 text-[#F5F7FA] mb-4">Our Team</h2>
              <p className="body text-[#8B95A5]">
                Meet the passionate individuals driving ASME IIT Roorkee forward
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mb-12">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                alt="ASME IIT Roorkee Team Group Photo"
                className="w-full max-w-4xl h-96 object-cover rounded-lg mx-auto mb-8 shadow-lg"
              />
              <p className="body-large text-[#B8C0CC] max-w-4xl mx-auto">
                Our diverse team of enthusiastic mechanical engineering students brings together expertise in robotics, CAD design, embedded systems, and project management. United by a passion for innovation and ASME's mission, we collaborate on cutting-edge projects, organize technical workshops, and participate in national competitions, fostering the next generation of mechanical engineers at IIT Roorkee.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Link to="/team" className="asme-button" data-testid="view-team">
                Meet the Full Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* About Preview */}
      <section className="bg-[#111317] py-24" data-testid="about-preview">
        <div className={`${previewInner} text-center`}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px', amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-h2 text-[#144E9C] mb-6"
            >
              About ASME
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large text-white mt-4 mb-4">
              ASME, which stands for American Society of Mechanical Engineers, is a non-profit
              membership organization. ASME serves a wide-ranging engineering community through
              quality learning, the development of codes and standards, certifications, research,
              conferences and publications, government relations, and other forms of outreach.
            </motion.p>
            <motion.p variants={fadeInUp} className="body-large text-white mt-4 mb-8">
              ASME helps the global engineering community develop solutions to real-world challenges.
              Founded in 1880 as the American Society of Mechanical Engineers, ASME is a
              not-for-profit professional organization that enables collaboration, knowledge
              sharing, and skill development across all engineering disciplines while promoting the
              vital role of the engineer in society with over a hundred thousand members in 140+
              countries. ASME hosts conferences and workshops throughout the year, providing a
              platform for like-minded individuals to share knowledge and experiences.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Link to="/about" className="asme-button" data-testid="about-preview-cta">
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;
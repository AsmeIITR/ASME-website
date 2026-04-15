import React from 'react';
import { motion } from 'framer-motion';


const smoothEase = [0.33, 1, 0.68, 1];

const About = () => {
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
    <div className="min-h-screen pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section 
        className="bg-[#0A1F44] py-16 underwater-pattern relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.85), rgba(10, 31, 68, 0.85)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920")'
        }}
        data-testid="about-hero"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center justify-center text-center"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                variants={fadeInUp}
                className="text-[#F5F7FA] mb-6"
                style={{ fontSize: '40px', lineHeight: '48px', fontWeight: 700 }}
              >
                <span className="text-[#1F6FEB]">WHO ARE WE ?</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-[#B8C0CC]"
                style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}
              >
                ASME IIT Roorkee Student Section, the first and leading student section of ASME in India, was officially registered as a society in Feb 2007 by some enthusiastic students of the Mechanical & Industrial Engineering Department (MIED). Our mission is to promote and enhance our members’ technical competency and professional well-being through quality programs and activities in mechanical engineering.
               
                We intend to organize regular competitions, industrial field trips, guest lectures, and interactive events. It enables skills development, career enrichment, and knowledge sharing. Over the past few years, we have conducted many workshops like Introduction to robotics, microcontrollers and microprocessors, image processing in robotics, PCB designing, and CAD using SolidWorks.
                ASME IIT Roorkee Student Section is the only club in IIT Roorkee which is aimed to promote underwater robotics. The team made its debut. Since then, the team has participated in competitions held by Flipkart- Grid 2.0- 2020, ASME E-Fest: HPVC- 2017, 2018, 2019, 2020, SDC- 2019, 2020. Continuing the legacy, the team participated remotely in ASME E-Fest HPVC- 2021 due to the pandemic.

                Before the pandemic, every year, ASME IITR Student Section organized Armageddon, a robotic battle event in Cognizance.

                Led by one faculty advisor, the team now consists of more than 50 members comprising not just the Mechanical and Electrical division but the Creatives team also who present our work to you all.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-[#09122e] py-24" data-testid="achievements-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-[#F5F7FA] mb-6" style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700 }}>Our Achievements</h2>
              <p className="text-[#B8C0CC] mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                ASME IIT Roorkee has consistently demonstrated excellence in technical competitions and innovation challenges across national and international platforms.
              </p>
              <p className="text-[#B8C0CC] mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                Our teams have secured podium finishes in prestigious competitions including ASME E-Fest HPVC (Human Powered Vehicle Challenge), SDC (Student Design Competition), and various robotics competitions organized by leading organizations like Flipkart.
              </p>
              <p className="text-[#B8C0CC] mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                We've successfully organized Armageddon, our flagship robotic battle event during Cognizance (IIT Roorkee's annual tech fest), attracting participants from across the country and showcasing cutting-edge engineering solutions.
              </p>
              <p className="text-[#B8C0CC]" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                Our members have received numerous accolades for their contributions to underwater robotics, sustainable engineering projects, and innovative mechanical designs that address real-world challenges.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="ASME Achievements"
                className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* History/Legacy */}
      <section className="bg-[#0A1F44] py-24" data-testid="history-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="ASME Legacy"
                className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="lg:text-right">
              <h2 className="text-[#F5F7FA] mb-6" style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700 }}>Our Legacy</h2>
              <p className="text-[#B8C0CC] mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                Established as one of the most active student chapters at IIT Roorkee, ASME has been instrumental in shaping the careers of hundreds of mechanical engineering students.
              </p>
              <p className="text-[#B8C0CC] mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                Over the years, we've organized numerous successful events, won prestigious competitions, and built a strong network of alumni working in top companies and research institutions worldwide.
              </p>
              <p className="text-[#B8C0CC]" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                Our members have gone on to work at organizations like Tesla, SpaceX, Google, and leading research labs, carrying forward the spirit of innovation and excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About ASME Section */}
      <section className="bg-[#111317] py-24" data-testid="about-asme-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px', amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-[#144E9C] mb-6"
                style={{ fontSize: '32px', lineHeight: '40px', fontWeight: 700 }}
              >
                About ASME
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white mt-4 mb-4" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                ASME, which stands for American Society of Mechanical Engineers, is a non-profit
                membership organization. ASME serves a wide-ranging engineering community through
                quality learning, the development of codes and standards, certifications, research,
                conferences and publications, government relations, and other forms of outreach.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-white mt-4 mb-8" style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 400 }}>
                ASME helps the global engineering community develop solutions to real-world challenges.
                Founded in 1880 as the American Society of Mechanical Engineers, ASME is a
                not-for-profit professional organization that enables collaboration, knowledge
                sharing, and skill development across all engineering disciplines while promoting the
                vital role of the engineer in society with over a hundred thousand members in 140+
                countries. ASME hosts conferences and workshops throughout the year, providing a
                platform for like-minded individuals to share knowledge and experiences.
              </motion.p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="ASME Organization"
                className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
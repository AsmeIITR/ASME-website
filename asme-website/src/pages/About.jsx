import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We foster creativity and push the boundaries of mechanical engineering through cutting-edge projects and research.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building a strong community where members support, learn from, and grow with each other.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do, from technical projects to professional development.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Looking ahead to shape the future of mechanical engineering and sustainable technologies.'
    }
  ];

  return (
    <div className="min-h-screen pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="about-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6"
            >
              ABOUT US
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Building the Future of <span className="text-[#1F6FEB]">Mechanical Engineering</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] leading-relaxed"
            >
              ASME IIT Roorkee is more than just a student chapter—we're a community of passionate engineers, innovators, and problem-solvers dedicated to advancing mechanical engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#1A1D22] py-24" data-testid="mission-vision">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="asme-card"
            >
              <Target className="w-12 h-12 text-[#1F6FEB] mb-6" />
              <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">Our Mission</h2>
              <p className="text-[#B8C0CC] leading-relaxed mb-4">
                To provide a platform for students to enhance their technical skills, foster innovation, and prepare for successful careers in mechanical engineering and related fields.
              </p>
              <p className="text-[#B8C0CC] leading-relaxed">
                We organize workshops, competitions, guest lectures, and hands-on projects that bridge the gap between academic learning and real-world applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="asme-card"
            >
              <Eye className="w-12 h-12 text-[#1F6FEB] mb-6" />
              <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">Our Vision</h2>
              <p className="text-[#B8C0CC] leading-relaxed mb-4">
                To be a leading student chapter that produces world-class mechanical engineers who drive innovation and contribute to solving global challenges.
              </p>
              <p className="text-[#B8C0CC] leading-relaxed">
                We envision a future where our members lead groundbreaking projects in areas like sustainable energy, autonomous systems, and advanced manufacturing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#111317] py-24" data-testid="values-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#F5F7FA] mb-4">Our Core Values</h2>
              <p className="text-[#8B95A5] text-lg">Principles that guide everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="asme-card text-center"
                  data-testid={`value-${index}`}
                >
                  <value.icon className="w-12 h-12 mx-auto text-[#1F6FEB] mb-4" />
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">{value.title}</h3>
                  <p className="text-[#8B95A5] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#1A1D22] py-24" data-testid="what-we-do">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6">What We Do</h2>
              <p className="text-[#B8C0CC] text-lg leading-relaxed max-w-3xl">
                ASME IIT Roorkee is at the forefront of technical education and innovation. We provide diverse opportunities for students to learn, grow, and excel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Technical Workshops',
                  description: 'Hands-on sessions covering CAD, robotics, manufacturing processes, and emerging technologies.'
                },
                {
                  title: 'Competitions',
                  description: 'Organize and participate in design competitions, hackathons, and technical challenges at national and international levels.'
                },
                {
                  title: 'Guest Lectures',
                  description: 'Host industry experts and researchers who share insights on latest trends and career opportunities.'
                },
                {
                  title: 'Research Projects',
                  description: 'Support student-led research in areas like autonomous systems, sustainable engineering, and advanced materials.'
                },
                {
                  title: 'Industry Visits',
                  description: 'Arrange visits to manufacturing facilities and R&D centers to bridge academic and industrial perspectives.'
                },
                {
                  title: 'Networking Events',
                  description: 'Create opportunities for students to connect with alumni, industry professionals, and fellow engineering enthusiasts.'
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="asme-card"
                  data-testid={`activity-${index}`}
                >
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">{activity.title}</h3>
                  <p className="text-[#8B95A5] leading-relaxed">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* History/Legacy */}
      <section className="bg-[#111317] py-24" data-testid="history-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6">Our Legacy</h2>
              <p className="text-[#B8C0CC] leading-relaxed mb-4">
                Established as one of the most active student chapters at IIT Roorkee, ASME has been instrumental in shaping the careers of hundreds of mechanical engineering students.
              </p>
              <p className="text-[#B8C0CC] leading-relaxed mb-4">
                Over the years, we've organized numerous successful events, won prestigious competitions, and built a strong network of alumni working in top companies and research institutions worldwide.
              </p>
              <p className="text-[#B8C0CC] leading-relaxed">
                Our members have gone on to work at organizations like Tesla, SpaceX, Google, and leading research labs, carrying forward the spirit of innovation and excellence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
                alt="ASME Legacy" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
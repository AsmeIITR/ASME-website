import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Award, BookOpen } from 'lucide-react';
import { eventsData } from '../data/events';
import { blogsData } from '../data/blogs';

const Home = () => {
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
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden underwater-pattern" data-testid="hero-section">
        <div className="absolute inset-0 wave-pattern opacity-50"></div>
        <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6"
              >
                AMERICAN SOCIETY OF MECHANICAL ENGINEERS
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6 leading-tight"
              >
                Innovate. Engineer. <span className="text-[#1F6FEB]">Transform.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#B8C0CC] mb-8 leading-relaxed"
              >
                Join IIT Roorkee's premier mechanical engineering community. We push boundaries, explore deep technologies, and build the future through innovation and collaboration.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/events" className="asme-button text-center" data-testid="hero-cta-events">
                  Explore Events <ArrowRight className="inline ml-2" size={20} />
                </Link>
                <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-[#262B33] text-[#F5F7FA] font-semibold hover:border-[#1F6FEB] hover:text-[#1F6FEB] transition-all duration-300 text-center" data-testid="hero-cta-about">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#1F6FEB] opacity-10 blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" 
                  alt="Mechanical Engineering" 
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111317] py-24" data-testid="stats-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, label: 'Active Members', value: '200+' },
              { icon: Award, label: 'Awards Won', value: '50+' },
              { icon: Zap, label: 'Events Organized', value: '100+' },
              { icon: BookOpen, label: 'Workshops', value: '80+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#1F6FEB]" />
                <div className="text-4xl font-bold text-[#F5F7FA] mb-2">{stat.value}</div>
                <div className="text-[#8B95A5] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#1A1D22] py-24" data-testid="about-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-[#F5F7FA] mb-6">
                Who We Are
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#B8C0CC] mb-4 leading-relaxed">
                ASME IIT Roorkee is a student chapter dedicated to advancing the art, science, and practice of mechanical engineering. We're a community of passionate engineers, innovators, and problem-solvers.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#B8C0CC] mb-6 leading-relaxed">
                From autonomous underwater vehicles to sustainable engineering solutions, we explore cutting-edge technologies and push the boundaries of what's possible.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="asme-button" data-testid="about-preview-cta">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" 
                alt="ASME Team" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#111317] py-24" data-testid="events-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#F5F7FA] mb-4">Upcoming Events</h2>
              <p className="text-[#8B95A5] text-lg">Join us for exciting technical events and workshops</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={fadeInUp}
                  className="asme-card group"
                  data-testid={`event-card-${index}`}
                >
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-48 object-cover mb-6"
                  />
                  <div className="inline-block px-3 py-1 bg-[#1A1D22] text-[#79A9FF] text-xs font-semibold mb-3">
                    {event.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-[#1F6FEB] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-[#8B95A5] text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="text-[#B8C0CC] text-sm">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link to="/events" className="asme-button" data-testid="view-all-events">
                View All Events
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="bg-[#1A1D22] py-24" data-testid="blogs-preview">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#F5F7FA] mb-4">Latest Insights</h2>
              <p className="text-[#8B95A5] text-lg">Explore technical articles and thought leadership</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogsData.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  variants={fadeInUp}
                  className="asme-card group"
                  data-testid={`blog-card-${index}`}
                >
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover mb-6"
                  />
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#1A1D22] text-[#79A9FF] text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-[#1F6FEB] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-[#8B95A5] text-sm mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="text-[#B8C0CC] text-sm">
                    By {blog.author}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link to="/blogs" className="asme-button" data-testid="view-all-blogs">
                View All Blogs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111317] py-24" data-testid="cta-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A1D22] p-12 lg:p-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-[#B8C0CC] text-lg mb-8 max-w-2xl mx-auto">
              Become part of a vibrant community of engineers and innovators. Let's build the future together.
            </p>
            <Link to="/contact" className="asme-button" data-testid="join-cta">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';

const smoothEase = [0.33, 1, 0.68, 1];
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "ASME IIT Roorkee Wins National Robotics Competition",
      excerpt: "Our team secured first place in the prestigious National Robotics Competition with innovative underwater robot design and advanced control systems.",
      imageUrl: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=800"
    },
    {
      id: 2,
      title: "Technical Workshop Series: CAD & 3D Printing",
      excerpt: "Comprehensive hands-on workshops covering advanced CAD modeling techniques and modern 3D printing technologies for mechanical engineering students.",
      imageUrl: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=800"
    },{
      id: 3,
      title: "Industry Visit: Tata Motors Plant",
      excerpt: "Exclusive industrial visit to Tata Motors manufacturing facility, providing insights into large-scale automotive engineering and production processes.",
      imageUrl: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=800"
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

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: smoothEase }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: smoothEase  }
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
    <div className="min-h-screen pt-20" data-testid="blogs-page">
      {/* Hero Section */}
      <section 
        className="py-52 underwater-pattern" 
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.85), rgba(10, 31, 68, 0.85)), url("https://static.wixstatic.com/media/df59d5_b7620913566341d9916271da065c7dec~mv2.png/v1/fill/w_924,h_584,al_c,q_90,enc_avif,quality_auto/df59d5_b7620913566341d9916271da065c7dec~mv2.png")'
        }}
        data-testid="blogs-hero"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
            <span className="text-[#1F6FEB]">Blogs & Insights</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-[#B8C0CC] max-w-4xl mx-auto leading-relaxed"
            >
              Explore ideas, innovations, and experiences from members of ASME IIT Roorkee — where engineering meets thought and creativity.  
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="bg-[#0A1F44] py-24" data-testid="blogs-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className="asme-card"
                data-testid={`blog-card-${index}`}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-1/2">
                    <img 
                      src={blog.imageUrl || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'} 
                      alt={blog.title} 
                      className="w-full h-64 lg:h-80 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl lg:text-4xl font-bold text-[#1F6FEB] mb-4">
                      {blog.title}
                    </h3>
                    
                    <p className="text-[#8B95A5] mb-6 leading-relaxed text-xl">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-center">
                      <a 
                        href="https://asmeiitr.medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#262B33] text-[#ffffff] text-sm font-semibold hover:bg-[#1F6FEB] transition-colors duration-300"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {blogs.length === 0 && (
            <div className="text-center py-16" data-testid="no-blogs">
              <p className="text-[#8B95A5] text-lg">No blogs available yet. Check back soon!</p>
            </div>
          )}
          
          <div className="text-center py-12">
            <a 
              href="https://asmeiitr.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="asme-button"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
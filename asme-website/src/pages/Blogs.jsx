import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import { blogsData } from '../data/blogs';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

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
    <div className="min-h-screen pt-20" data-testid="blogs-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="blogs-hero">
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
              BLOG
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Technical <span className="text-[#1F6FEB]">Insights</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Explore articles, research insights, and thought leadership from our community of engineers and innovators.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="bg-[#1A1D22] py-24" data-testid="blogs-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={fadeInUp}
                className="asme-card group"
                data-testid={`blog-card-${index}`}
              >
                <img 
                  src={blog.imageUrl || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'} 
                  alt={blog.title} 
                  className="w-full h-56 object-cover mb-6"
                />
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(blog.tags || []).slice(0, 2).map((tag, idx) => (
                    <div key={idx} className="inline-flex items-center space-x-1 px-3 py-1 bg-[#1A1D22] text-[#79A9FF] text-xs font-semibold">
                      <Tag size={12} />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4 group-hover:text-[#1F6FEB] transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-[#8B95A5] mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[#B8C0CC] text-sm">
                    <User size={16} className="text-[#1F6FEB]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#B8C0CC] text-sm">
                    <Calendar size={16} className="text-[#1F6FEB]" />
                    <span>{blog.date || new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
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
        </div>
      </section>
    </div>
  );
};

export default Blogs;
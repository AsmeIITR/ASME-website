import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, FileText, Code, Video } from 'lucide-react';
import { resourcesData } from '../data/resources';

const Resources = () => {
  const [resources, setResources] = useState(resourcesData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(resources.map(r => r.category))];
  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Standards': return BookOpen;
      case 'Software': return Code;
      case 'Research': return FileText;
      case 'Videos': return Video;
      default: return FileText;
    }
  };

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
    <div className="min-h-screen pt-20" data-testid="resources-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="resources-hero">
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
              RESOURCES
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Learning <span className="text-[#1F6FEB]">Resources</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Access study materials, tutorials, research papers, and other valuable resources for mechanical engineering students.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#1A1D22] py-8" data-testid="resource-filters">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
                className={`px-6 py-2 font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#1F6FEB] text-white'
                    : 'bg-[#111317] text-[#8B95A5] hover:text-[#F5F7FA]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="bg-[#1A1D22] py-24" data-testid="resources-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => {
              const Icon = getCategoryIcon(resource.category);
              return (
                <motion.div
                  key={resource.id}
                  variants={fadeInUp}
                  className="asme-card group"
                  data-testid={`resource-card-${index}`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#1A1D22] flex items-center justify-center">
                      <Icon className="text-[#1F6FEB]" size={24} />
                    </div>
                    <span className="px-3 py-1 bg-[#1A1D22] text-[#79A9FF] text-xs font-semibold">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4 group-hover:text-[#1F6FEB] transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-[#8B95A5] mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1F6FEB] font-semibold hover:text-[#79A9FF] transition-colors duration-300"
                    data-testid={`resource-link-${index}`}
                  >
                    Access Resource <ExternalLink className="ml-2" size={16} />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16" data-testid="no-resources">
              <p className="text-[#8B95A5] text-lg">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
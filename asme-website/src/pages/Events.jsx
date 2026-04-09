import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { eventsData } from '../data/events';

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(events.map(e => e.category))];
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(e => e.category === selectedCategory);

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
    <div className="min-h-screen pt-20" data-testid="events-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="events-hero">
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
              EVENTS
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Upcoming <span className="text-[#1F6FEB]">Events</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Join us for workshops, competitions, seminars, and networking events that push the boundaries of mechanical engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#1A1D22] py-8" data-testid="event-filters">
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

      {/* Events Grid */}
      <section className="bg-[#1A1D22] py-24" data-testid="events-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="asme-card group"
                data-testid={`event-card-${index}`}
              >
                <img 
                  src={event.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'} 
                  alt={event.title} 
                  className="w-full h-56 object-cover mb-6"
                />
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1A1D22] text-[#79A9FF] text-xs font-semibold mb-4">
                  <Tag size={14} />
                  <span>{event.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4 group-hover:text-[#1F6FEB] transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-[#8B95A5] mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[#B8C0CC] text-sm">
                    <Calendar size={16} className="text-[#1F6FEB]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#B8C0CC] text-sm">
                    <MapPin size={16} className="text-[#1F6FEB]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16" data-testid="no-events">
              <p className="text-[#8B95A5] text-lg">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
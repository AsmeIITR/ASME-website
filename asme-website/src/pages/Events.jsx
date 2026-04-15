import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen pt-20" data-testid="events-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24" data-testid="events-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6">
              EVENTS
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Upcoming <span className="text-[#1F6FEB]">Events</span>
            </h1>
            
            <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
              Join us for workshops, competitions, seminars, and networking events that push the boundaries of mechanical engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="bg-[#1A1D22] py-24" data-testid="events-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Our Events</h2>
            <p className="text-[#B8C0CC] leading-relaxed mb-12">
              We organize a variety of events throughout the year to help students learn, grow, and connect with the mechanical engineering community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Workshops</h3>
                <p className="text-[#8B95A5]">
                  Hands-on learning experiences with industry experts and cutting-edge technologies.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Competitions</h3>
                <p className="text-[#8B95A5]">
                  Test your skills and compete with peers in engineering challenges and design contests.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Seminars</h3>
                <p className="text-[#8B95A5]">
                  Learn from industry leaders and researchers about the latest trends in mechanical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
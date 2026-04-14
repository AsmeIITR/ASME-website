import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20" data-testid="gallery-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24" data-testid="gallery-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6">
              GALLERY
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Our <span className="text-[#1F6FEB]">Journey</span>
            </h1>
            
            <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
              Moments captured from our events, workshops, competitions, and activities throughout the years.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="bg-[#1A1D22] py-24" data-testid="gallery-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Photo Gallery</h2>
            <p className="text-[#B8C0CC] leading-relaxed mb-12">
              Browse through our collection of memories from various ASME IIT Roorkee events and activities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Workshops</h3>
                <p className="text-[#8B95A5]">
                  Hands-on learning experiences and technical workshops conducted by industry experts.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Events</h3>
                <p className="text-[#8B95A5]">
                  Annual events, competitions, and celebrations showcasing engineering excellence.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Activities</h3>
                <p className="text-[#8B95A5]">
                  Regular chapter activities, meetings, and community engagement initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
import React from 'react';

const Participation = () => {
  return (
    <div className="min-h-screen pt-20" data-testid="participation-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24" data-testid="participation-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6">
              PARTICIPATION & ACHIEVEMENTS
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Competitions & <span className="text-[#1F6FEB]">Achievements</span>
            </h1>
            
            <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
              Our students participate in national and international competitions, bringing home awards and recognition for IIT Roorkee.
            </p>
          </div>
        </div>
      </section>

      {/* Participation Content */}
      <section className="bg-[#1A1D22] py-24" data-testid="participation-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Our Achievements</h2>
            <p className="text-[#B8C0CC] leading-relaxed mb-12">
              ASME IIT Roorkee students regularly participate and excel in various engineering competitions and events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Design Competitions</h3>
                <p className="text-[#8B95A5]">
                  Excellence in mechanical design challenges and innovation contests at national level.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Technical Events</h3>
                <p className="text-[#8B95A5]">
                  Outstanding performance in technical symposiums and engineering competitions.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Research Projects</h3>
                <p className="text-[#8B95A5]">
                  Recognition for innovative research and development in mechanical engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111317] py-24" data-testid="participation-cta">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#1A1D22] p-12 lg:p-16 text-center">
            <h2 className="text-4xl font-bold text-[#F5F7FA] mb-6">
              Want to Compete?
            </h2>
            <p className="text-[#B8C0CC] text-lg mb-8 max-w-2xl mx-auto">
              Join ASME IIT Roorkee and participate in exciting competitions at national and international levels.
            </p>
            <a href="/contact" className="asme-button" data-testid="participation-join-cta">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participation;
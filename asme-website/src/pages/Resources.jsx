import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen pt-20" data-testid="resources-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24" data-testid="resources-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6">
              RESOURCES
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Learning <span className="text-[#1F6FEB]">Resources</span>
            </h1>
            
            <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
              Access study materials, tutorials, research papers, and other valuable resources for mechanical engineering students.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="bg-[#1A1D22] py-24" data-testid="resources-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Available Resources</h2>
            <p className="text-[#B8C0CC] leading-relaxed mb-12">
              Explore our comprehensive collection of learning materials and educational resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Study Materials</h3>
                <p className="text-[#8B95A5]">
                  Comprehensive notes, textbooks, and reference materials for mechanical engineering courses.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Research Papers</h3>
                <p className="text-[#8B95A5]">
                  Access to latest research publications and academic papers in mechanical engineering.
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4">Software Tools</h3>
                <p className="text-[#8B95A5]">
                  Licensed software and tools for CAD, simulation, and engineering analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
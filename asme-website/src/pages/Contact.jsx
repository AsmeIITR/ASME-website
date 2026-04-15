import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24" data-testid="contact-hero">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-[#1A1D22] text-[#79A9FF] text-sm font-semibold mb-6">
              GET IN TOUCH
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Contact <span className="text-[#1F6FEB]">Us</span>
            </h1>
            
            <p className="text-lg text-[#B8C0CC] max-w-3xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you. Reach out and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-[#1A1D22] py-24" data-testid="contact-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Contact Information</h2>
            <p className="text-[#B8C0CC] leading-relaxed mb-12">
              Feel free to reach out to us through any of the following channels. We're always excited to connect with fellow engineers and enthusiasts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Address</h3>
                <p className="text-[#8B95A5]">
                  ASME Student Chapter<br />
                  Mechanical Engineering Department<br />
                  IIT Roorkee, Uttarakhand 247667<br />
                  India
                </p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Email</h3>
                <p className="text-[#8B95A5]">contact@asme.iitr.ac.in</p>
                <p className="text-[#8B95A5]">president@asme.iitr.ac.in</p>
              </div>

              <div className="bg-[#111317] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Phone</h3>
                <p className="text-[#8B95A5]">+91 123 456 7890</p>
                <p className="text-[#8B95A5] text-sm mt-1">Available Mon-Fri, 9AM-5PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
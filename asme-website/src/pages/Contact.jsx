import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Thank you for reaching out! We\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
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
    <div className="min-h-screen pt-20" data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-[#111317] py-24 underwater-pattern" data-testid="contact-hero">
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
              GET IN TOUCH
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6"
            >
              Contact <span className="text-[#1F6FEB]">Us</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#B8C0CC] max-w-3xl mx-auto"
            >
              Have questions or want to collaborate? We'd love to hear from you. Reach out and let's build something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-[#1A1D22] py-24" data-testid="contact-content">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-[#B8C0CC] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    className="w-full px-4 py-3 bg-[#111317] text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#B8C0CC] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email-input"
                    className="w-full px-4 py-3 bg-[#111317] text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#B8C0CC] font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    data-testid="contact-subject-input"
                    className="w-full px-4 py-3 bg-[#111317] text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#B8C0CC] font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    data-testid="contact-message-input"
                    className="w-full px-4 py-3 bg-[#111317] text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] resize-none"
                  />
                </div>

                {status.message && (
                  <div 
                    data-testid="contact-status-message"
                    className={`p-4 ${
                      status.type === 'success' 
                        ? 'bg-[#1F6FEB] text-white' 
                        : 'bg-[#262B33] text-[#F5F7FA]'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="contact-submit-button"
                  className="asme-button w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#F5F7FA] mb-8">Contact Information</h2>
                <p className="text-[#B8C0CC] leading-relaxed mb-8">
                  Feel free to reach out to us through any of the following channels. We're always excited to connect with fellow engineers and enthusiasts.
                </p>
              </div>

              <div className="space-y-6">
                <div className="asme-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Address</h3>
                      <p className="text-[#8B95A5]">
                        ASME Student Chapter<br />
                        Mechanical Engineering Department<br />
                        IIT Roorkee, Uttarakhand 247667<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="asme-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Email</h3>
                      <p className="text-[#8B95A5]">contact@asme.iitr.ac.in</p>
                      <p className="text-[#8B95A5]">president@asme.iitr.ac.in</p>
                    </div>
                  </div>
                </div>

                <div className="asme-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1F6FEB] flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">Phone</h3>
                      <p className="text-[#8B95A5]">+91 123 456 7890</p>
                      <p className="text-[#8B95A5] text-sm mt-1">Available Mon-Fri, 9AM-5PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ShinyButton';
import BGPattern from './BGPattern';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    service: '',
    message: ''
  });

  const services = [
    "Tax Defense & Scrutiny",
    "Refund Recovery",
    "ED & PMLA Support",
    "CBI Liaison",
    "Record Reconstruction",
    "Corporate Strategy"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for reaching out. We will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black pt-32 pb-20 px-6 overflow-hidden transition-colors duration-500" id="contact">
      <BGPattern variant="dots" opacity="0.1" color="rgba(0, 82, 255, 0.4)" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Info - Minimal & Elegant */}
          <div className="flex flex-col max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[11px] font-black uppercase tracking-widest mb-6">
                Connect with us
              </div>
              <h1 className="text-4xl md:text-[56px] font-bold tracking-[-0.04em] leading-[1.05] text-gray-900 dark:text-white mb-6">
                Let's discuss <br />
                <span className="text-accent italic font-medium">your strategy.</span>
              </h1>
              <p className="text-gray-500 dark:text-white/40 text-lg font-medium tracking-tight mb-10 leading-relaxed max-w-md">
                Whether it's a routine audit or a complex investigation, our strategic advisors provide the clarity and protection you need.
              </p>
            </motion.div>

            {/* Contact Information - Tighter spacing to cover the gap */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-5 group">
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400 dark:text-white/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/20 mb-0.5">Location</h4>
                  <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">AL Barsha, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400 dark:text-white/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/20 mb-0.5">Email</h4>
                  <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">office@w7consultant.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400 dark:text-white/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-white/20 mb-0.5">Phone</h4>
                  <p className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">+91 98110 67275</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form - Enhanced Polish */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50/30 dark:bg-[#05070a] border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl backdrop-blur-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none rounded-[40px]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/20 ml-5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="E.g. Jane Smith"
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-full px-7 py-3.5 focus:outline-none focus:border-accent transition-all text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/5 text-[15px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/20 ml-5">Mobile</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    placeholder="+91"
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-full px-7 py-3.5 focus:outline-none focus:border-accent transition-all text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/5 text-[15px]"
                  />
                </div>
              </div>

              <div className="space-y-1.5 mb-5 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/20 ml-5">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  placeholder="name@organization.com"
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-full px-7 py-3.5 focus:outline-none focus:border-accent transition-all text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/5 text-[15px]"
                />
              </div>

              <div className="space-y-1.5 mb-5 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/20 ml-5">Required Service</label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    onChange={handleChange}
                    className="w-full appearance-none bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-full px-7 py-3.5 focus:outline-none focus:border-accent transition-all text-gray-900 dark:text-white text-[15px]"
                  >
                    <option value="" disabled selected>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s} className="dark:bg-black">{s}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 mb-8 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/20 ml-5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Briefly describe your situation..."
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-[28px] px-7 py-5 focus:outline-none focus:border-accent transition-all text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/5 resize-none text-[15px]"
                />
              </div>

              <ShinyButton type="submit" className="w-full py-4.5 text-base relative z-10">
                Submit Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </ShinyButton>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ShinyButton';

const DreamSection: React.FC = () => {
  const brandBlue = '#0052FF';

  return (
    <section className="bg-black py-20 px-6 md:px-12 relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Outer framing border - Thin Blue Frame from Screenshot */}
      <div className="absolute inset-4 md:inset-8 border border-accent/40 rounded-[2px] pointer-events-none z-20" />

      {/* Deep Blue Halo Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-blue-900/10 blur-[150px] opacity-50" />
      </div>

      {/* Top Left Blue Dot Accent */}
      <div className="absolute top-12 left-12 md:top-20 md:left-20 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(0,82,255,1)] z-30" />

      {/* Main Content Row: Text - Logo Card - Text */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 mb-20 w-full">
          
          {/* Left Text */}
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-[100px] lg:text-[120px] font-display font-bold text-white tracking-tighter text-center lg:text-right leading-[0.85]"
          >
            Let's Give <br className="hidden lg:block" /> Wings
          </motion.h2>

          {/* Center Logo Card - Precise Squircle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 bg-[#050505] border border-white/5 rounded-[64px] flex items-center justify-center relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,1)] group">
              {/* Subtle inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
              
              <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center relative z-10 p-6">
                <svg 
                  viewBox="0 0 1000 1000" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full h-full drop-shadow-[0_0_40px_rgba(0,82,255,0.45)]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path 
                    d="M500 216c14.4 0 26 11.6 26 26s-11.6 26-26 26-26-11.6-26-26 11.6-26 26-26zm-143 149.5c54.8 57.8 97.4 70.4 143 70.4s88.2-12.6 143-70.4l38.2 91.3c-30.7 77.5-97.4 88.9-181.2 88.9s-150.5-11.4-181.2-88.9l38.2-91.3zm703.5 47.6c-28.1-110.4-125-185.5-241.8-168.1-80.6 12.1-150.2 57.7-195.3 121.7l-6.1 8.7c-14.4-12.1-27.2-25.3-37.8-39.5l-84.9-114.4c-3.5-4.7-10.7-4.7-14.2 0l-84.9 114.4c-10.7 14.4-23.4 27.4-37.8 39.5l-6.1-8.7c-45.1-64-114.7-109.6-195.3-121.7-116.8-17.4-213.7 57.7-241.8 168.1-39 153.9-0.9 331.6 108.7 488.4 101.6 145.4 252.4 242 424.7 272.1l51.8 9 51.8-9c172.3-30.1 323.1-126.7 424.7-272.1 109.6-156.8 147.7-334.5 108.7-488.4zM500 959.4c-83.5 0-151.3-135.5-151.3-302.5s67.8-302.5 151.3-302.5 151.3 135.5 151.3 302.5-67.8 302.5-151.3 302.5z" 
                    fill={brandBlue}
                  />
                </svg>
              </div>
            </div>
            {/* The circular aura glow */}
            <div className="absolute inset-[-40%] bg-accent/20 blur-[80px] -z-10 rounded-full opacity-60 animate-pulse" />
          </motion.div>

          {/* Right Text */}
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-[100px] lg:text-[120px] font-display font-bold text-white tracking-tighter text-center lg:text-left leading-[0.85]"
          >
            To Your <br className="hidden lg:block" /> Dream!
          </motion.h2>
        </div>

        {/* Action Area */}
        <div className="text-center space-y-12 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-medium tracking-tight"
          >
            Need more clarity? Let our team help you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ShinyButton 
              onClick={() => window.location.href = '#contact'} 
              className="px-20 py-8 text-[18px] md:text-[20px] uppercase tracking-widest font-black rounded-full flex items-center gap-6"
            >
              BOOK A FREE CONSULTATION
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-45deg]">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </ShinyButton>
          </motion.div>
        </div>
      </div>

      {/* "NOMINEE" Vertical text as seen in screenshot */}
      <div className="absolute right-12 md:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-30 z-30">
        {['N', 'O', 'M', 'I', 'N', 'E', 'E'].map((char, i) => (
          <span key={i} className="text-white text-[14px] font-black leading-none">{char}</span>
        ))}
        <div className="w-[1px] h-48 bg-white/20 mt-8" />
      </div>

      {/* "Precision in Strategy" Floating Pill at bottom right */}
      <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20 hidden md:flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold text-[14px] shadow-3xl z-30 pointer-events-auto cursor-default transition-transform hover:scale-105">
        <span className="w-3.5 h-3.5 bg-accent rounded-full animate-pulse shadow-[0_0_12px_rgba(0,82,255,0.8)]"></span>
        Precision in Strategy
      </div>
    </section>
  );
};

export default DreamSection;


import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
    href: "#"
  },
];

// Expanded for loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

// Fixed: Added React.FC type to properly support key prop in lists
const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[380px] mx-3 h-full">
    <div className="bg-white dark:bg-[#080808] border border-gray-100 dark:border-white/10 p-7 rounded-[28px] hover:border-accent/40 transition-all duration-500 group flex flex-col h-full shadow-sm dark:shadow-none">
      <div className="flex items-center gap-3 mb-6">
        <img 
          src={testimonial.author.avatar} 
          alt={testimonial.author.name} 
          className="w-10 h-10 rounded-full object-cover border border-gray-100 dark:border-white/5"
        />
        <div className="flex flex-col">
          <span className="text-gray-900 dark:text-white font-bold text-[14px] leading-tight transition-colors">{testimonial.author.name}</span>
          <span className="text-gray-400 dark:text-white/40 text-[12px] font-medium leading-tight transition-colors">{testimonial.author.handle}</span>
        </div>
      </div>
      
      {/* Ensuring text wraps and doesn't cut */}
      <div className="flex-grow">
        <p className="text-gray-600 dark:text-white/70 text-[15px] md:text-[16px] leading-[1.6] font-medium whitespace-normal break-words overflow-visible transition-colors">
          "{testimonial.text}"
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
         {testimonial.href && (
            <a href={testimonial.href} target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent transition-colors text-[12px] font-bold uppercase tracking-widest">
              View Case Study
            </a>
          )}
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-accent/40">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-black overflow-hidden relative border-y border-gray-100 dark:border-white/5 transition-colors duration-500" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 tracking-tighter transition-colors"
        >
          Trusted by developers <span className="text-accent italic">worldwide</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium transition-colors"
        >
          Join thousands of developers who are already building the future with our AI platform
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden py-4">
        {/* Continuous Marquee */}
        <motion.div 
          className="flex flex-nowrap"
          animate={{ x: [0, -1500] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <TestimonialCard key={`${i}`} testimonial={t} />
          ))}
        </motion.div>
        
        {/* Side Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-gray-50 dark:from-black via-gray-50/40 dark:via-black/40 to-transparent z-20 pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-gray-50 dark:from-black via-gray-50/40 dark:via-black/40 to-transparent z-20 pointer-events-none transition-colors duration-500" />
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: "01",
    title: "Confidential Consultation",
    description: "Unlike traditional firms with rigid schedules, W7 is fluid. We listen and assess your situation—refunds, notices, or summons—with absolute discretion from day one.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeOpacity="0.5" />
        <path d="M2 12h20" strokeOpacity="0.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Multidimensional Document Review",
    description: "W7 offers a 360-degree support system, identifying legal issues and risks across all technical, financial, and regulatory aspects to optimize for success.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.3" />
        <path d="M3 9h18" strokeOpacity="0.5" />
        <path d="M9 21V9" strokeOpacity="0.5" />
        <circle cx="15" cy="15" r="3" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Focus on Strategic Action",
    description: "We prioritize solutions that address real-world legal challenges. By aligning with core technology and judicial precedents, you gain a competitive advantage.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" strokeOpacity="0.5" />
        <path d="M2 12l10 5 10-5" strokeOpacity="0.3" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Synergy-Driven Resolution",
    description: "Through W7, you'll connect with prospective key ecosystem partners. Collaboration is at our heart, enabling us to forge results that amplify your potential.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 11 2-2 3 3 5-5" />
        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" strokeOpacity="0.5" />
      </svg>
    )
  }
];

const SimpleProcess: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-black transition-colors duration-500 overflow-hidden" id="process">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold font-display text-gray-900 dark:text-white tracking-tighter leading-[0.95] mb-4 transition-colors"
          >
            What makes <br />
            W7 unique
          </motion.h2>
        </div>

        {/* Nucleus Style Grid */}
        <div className="flex flex-col md:flex-row bg-[#002AFF] border-y border-black/10 dark:border-black">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex-1 p-10 lg:p-14 min-h-[450px] flex flex-col justify-start relative group
                ${idx !== STEPS.length - 1 ? 'md:border-r border-black/10 dark:border-black' : ''}
                ${idx !== 0 ? 'border-t md:border-t-0 border-black/10 dark:border-black' : ''}
              `}
            >
              {/* Icon */}
              <div className="text-white mb-12 group-hover:scale-110 transition-transform duration-500 origin-left">
                {step.icon}
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight tracking-tight max-w-[240px]">
                  {step.title}
                </h3>
                <p className="text-white/80 text-[15px] lg:text-[16px] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleProcess;

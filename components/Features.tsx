
import React from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ShinyButton';

// Fixed: Added React.FC type and made children optional for proper JSX prop detection
const CircularGlowIcon: React.FC<{ children?: React.ReactNode, color: string, glowColor: string }> = ({ children, color, glowColor }) => (
  <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
    {/* Background Glow Bloom - Refined for deep background */}
    <div
      className="absolute inset-0 blur-2xl rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-70"
      style={{ backgroundColor: glowColor }}
    />

    {/* Circular Container */}
    <div
      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl overflow-hidden border border-white/20"
      style={{ backgroundColor: color }}
    >
      {/* Subtle Inner Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-white/20 pointer-events-none" />
      <div className="relative z-10 scale-90">
        {children}
      </div>
    </div>
  </div>
);

const FeatureCard = ({
  title,
  description,
  icon,
  delay,
  color,
  glowColor,
  badge,
  subtitle
}: {
  title: string,
  description: string,
  icon: React.ReactNode,
  delay: number,
  color: string,
  glowColor: string,
  badge?: string,
  subtitle?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    className="group bg-gray-50 dark:bg-[#030712] border border-gray-200 dark:border-white/[0.05] p-10 rounded-[32px] hover:border-accent/30 hover:bg-white dark:hover:bg-[#050b1a] transition-all duration-500 relative flex flex-col h-full shadow-lg dark:shadow-2xl"
  >
    {/* Top Right Arrow Indicator */}
    <div className="absolute top-8 right-8 text-gray-300 dark:text-white/10 group-hover:text-accent dark:group-hover:text-white/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>

    <CircularGlowIcon color={color} glowColor={glowColor}>
      {icon}
    </CircularGlowIcon>

    <div className="flex items-center gap-3 mb-1">
      <h3 className="text-[22px] font-bold text-gray-900 dark:text-white font-display tracking-tight group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      {badge && (
        <span className="bg-accent text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {badge}
        </span>
      )}
    </div>

    {subtitle && (
      <p className="text-gray-400 dark:text-white/30 text-[14px] font-bold mb-8 uppercase tracking-widest">
        {subtitle}
      </p>
    )}

    <p className="text-gray-600 dark:text-white/40 leading-relaxed text-[16px] font-medium mt-auto transition-colors group-hover:text-gray-900 dark:group-hover:text-white/60">
      {description}
    </p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Center Aligned */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold font-display text-gray-900 dark:text-white mb-8 tracking-tighter"
          >
            Why Clients Trust <br />
            <span className="text-accent italic">W7 Consultants</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-white/40 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-3xl mx-auto"
          >
            When your finances, reputation, or freedom are at stake, the choice of representation matters. Experience, expertise, and integrity are our core pillars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <ShinyButton onClick={() => window.location.href = '#process'}>
              Learn About Our Process
            </ShinyButton>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            delay={0.1}
            color="#f97316"
            glowColor="rgba(249, 115, 22, 0.4)"
            title="Case-Law Backed"
            badge="PRO"
            subtitle="Judicial Precision"
            description="Every reply we prepare is grounded in judicial precedents and supported by relevant provisions of law, not generic templates."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>}
          />
          <FeatureCard
            delay={0.2}
            color="#0f172a"
            glowColor="rgba(15, 23, 42, 0.4)"
            title="100% Confidential"
            subtitle="Secure Handling"
            description="Your matter is sensitive. We ensure all communications are handled with strict privacy and professional discretion."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
          />
          <FeatureCard
            delay={0.3}
            color="#3b82f6"
            glowColor="rgba(59, 130, 246, 0.4)"
            title="Result-Oriented"
            subtitle="Outcome Driven"
            description="We focus on resolution within the legal framework. Honest, realistic, and actionable advice to protect your interests."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
          />
          <FeatureCard
            delay={0.4}
            color="#8b5cf6"
            glowColor="rgba(139, 92, 246, 0.4)"
            title="Pan-India Coverage"
            subtitle="National Reach"
            description="We assist clients across all states and jurisdictions, coordinating with local officers and departments as needed."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}
          />
          <FeatureCard
            delay={0.5}
            color="#eab308"
            glowColor="rgba(234, 179, 8, 0.4)"
            title="Experienced Pros"
            badge="PRO"
            subtitle="Expert Advisory"
            description="Our team brings years of experience in tax advisory, litigation, and handling high-stakes ED and CBI cases."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>}
          />
          <FeatureCard
            delay={0.6}
            color="#22c55e"
            glowColor="rgba(34, 197, 94, 0.4)"
            title="Immediate Action"
            subtitle="Fast Turnaround"
            description="Notices have deadlines. We respond quickly to ensure you don't lose valuable legal protections through delay."
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

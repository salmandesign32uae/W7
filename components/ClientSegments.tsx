
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GridItem = ({
  area,
  icon,
  title,
  description,
  delay = 0
}: {
  area: string,
  icon: React.ReactNode,
  title: string,
  description: string,
  delay?: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`list-none group relative min-h-[16rem] ${area}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-[1.5rem] border border-gray-200 dark:border-white/5 p-[1px] bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:-translate-y-1"
      >
        {/* Intensified Glow Proximity Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.35), transparent 80%)`,
          }}
        />

        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1.4rem] bg-white dark:bg-[#050505] p-6 md:p-8 z-10 transition-colors duration-500 group-hover:bg-gray-50/50 dark:group-hover:bg-[#080808]">
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-2.5 text-accent group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight transition-colors duration-300 group-hover:text-accent dark:group-hover:text-white">
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-white/40 font-medium leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white/60 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>

          <div className="pt-4 mt-auto">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-white/40 group-hover:text-accent transition-all duration-300 group/link cursor-pointer">
              <span className="relative">
                Learn More
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

const VisualDashboard = ({ area }: { area: string }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`list-none group relative min-h-[20rem] ${area}`}
  >
    <div className="relative h-full rounded-[1.5rem] border border-gray-200 dark:border-white/10 p-2 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-all duration-500 group-hover:border-accent/30">
      <div className="relative h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#030303] p-6 shadow-2xl transition-colors">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-gray-900 dark:text-white text-lg font-bold font-display tracking-tight transition-colors">Strategic Protection Index</h4>
            <span className="text-[10px] bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded font-black uppercase tracking-tighter shadow-[0_0_10px_rgba(59,130,246,0.3)]">Live Monitor</span>
          </div>
          <p className="text-gray-400 dark:text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">National Enforcement Risk Analysis</p>
        </div>

        {/* Abstract Visualization */}
        <div className="flex-grow flex items-end gap-1.5 mb-8 px-2">
          {[40, 60, 45, 90, 65, 85, 50, 85, 100, 75, 95, 60, 45, 70].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              transition={{ duration: 1, delay: i * 0.05 }}
              className={`flex-1 rounded-t-[2px] transition-all duration-300 ${i === 8 ? 'bg-accent shadow-[0_0_25px_rgba(59,130,246,0.6)]' : 'bg-gray-100 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/15'}`}
            />
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 400 300">
            <path d="M0 200 Q 100 150 200 180 T 400 120" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4,4" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <div className="bg-gray-50 dark:bg-white/[0.03] p-3 rounded-lg border border-gray-100 dark:border-white/5 transition-colors group-hover:border-gray-200 dark:group-hover:border-white/10">
            <div className="text-[9px] text-gray-400 dark:text-white/40 font-bold uppercase mb-1 tracking-widest transition-colors">Case Velocity</div>
            <div className="text-gray-900 dark:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              99.8% Efficiency
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-white/[0.03] p-3 rounded-lg border border-gray-100 dark:border-white/5 transition-colors group-hover:border-gray-200 dark:group-hover:border-white/10">
            <div className="text-[9px] text-gray-400 dark:text-white/40 font-bold uppercase mb-1 tracking-widest transition-colors">Risk Mitigation</div>
            <div className="text-gray-900 dark:text-white font-bold text-sm transition-colors">₹1.2k Cr Protected</div>
          </div>
        </div>

        {/* Glow Overlay */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  </motion.li>
);

const ClientSegments: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-500 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold font-display leading-[1.1] mb-10 tracking-tighter text-gray-900 dark:text-white animate-fade-up transition-colors"
          >
            You're Not Alone — And You <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-gray-900 via-accent/90 to-accent dark:from-white dark:via-accent/90 dark:to-accent bg-clip-text text-transparent">
              Don't Have to Fight It Alone
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-white/40 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto transition-colors"
          >
            Tax and enforcement matters can be overwhelming. At W7 Consultants, we provide practical, lawful solutions tailored to your specific situation.
          </motion.p>
        </div>

        {/* Bento Grid Implementation */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:grid-rows-2">

          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            delay={0.1}
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>}
            title="Salaried Professionals"
            description="Your refund is stuck or you've received a notice? We help rectify AIS/26AS mismatches and handle CPC escalations."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            delay={0.2}
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>}
            title="Business Owners"
            description="Dealing with GST/ITR mismatches or scrutiny assessments? We defend your position with solid legal documentation."
          />

          <VisualDashboard
            area="md:[grid-area:2/1/3/13] xl:[grid-area:1/5/3/9]"
          />

          <GridItem
            area="md:[grid-area:3/1/4/7] xl:[grid-area:1/9/2/13]"
            delay={0.3}
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>}
            title="HNIs & NRIs"
            description="High-value refunds attract extra scrutiny. We handle foreign income reporting and FEMA compliance discreetly."
          />

          <GridItem
            area="md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]"
            delay={0.4}
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>}
            title="ED/CBI Cases"
            description="Facing a summons or inquiry? We provide strategic action plans for enforcement proceedings and document analysis."
          />
        </ul>
      </div>
    </section>
  );
};

export default ClientSegments;

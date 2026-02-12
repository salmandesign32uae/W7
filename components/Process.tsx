
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

// Fixed: Added React.FC type to handle key prop correctly in map()
const StepCard: React.FC<{ step: typeof PROCESS_STEPS[0], index: number }> = ({ step, index }) => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center py-12">
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        {/* Glow Background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 blur-[100px] pointer-events-none rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              {step.icon}
            </div>
            <div className="bg-white/5 border border-white/10 px-5 py-2 rounded-xl text-white/60 text-sm font-bold tracking-tight">
              {step.stage}
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6 tracking-tight">
            {step.title}
          </h3>

          <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            {step.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
            {step.tags.map(tag => (
              <span key={tag} className="bg-white/[0.03] border border-white/5 px-4 py-2 rounded-xl text-xs font-bold text-white/50 uppercase tracking-widest group-hover:border-accent/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  return (
    <section className="bg-black relative px-6" id="process" ref={containerRef}>
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="pt-32 pb-12">
          <div className="inline-flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-1.5 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] text-white/70 font-bold tracking-tight">How We Work?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-8 tracking-tighter max-w-3xl leading-[1.1]">
            We Simplify The Journey <br />
            From Design To Launch.
          </h2>

          <p className="text-white/40 text-xl font-medium max-w-2xl leading-relaxed">
            We make it easy to bring your ideas to life, guiding you from concept to a fully launched product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

          {/* Left: Content Steps */}
          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, idx) => (
              <StepCard key={idx} step={step} index={idx} />
            ))}
          </div>

          {/* Right: Sticky Image Gallery */}
          <div className="hidden lg:block h-screen sticky top-0 flex items-center">
            <div className="relative w-full aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl">
              {PROCESS_STEPS.map((step, idx) => {
                const start = idx / PROCESS_STEPS.length;
                const end = (idx + 1) / PROCESS_STEPS.length;

                // Opacity transform for cross-fade effect
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);

                return (
                  <motion.div
                    key={idx}
                    style={{ opacity }}
                    className="absolute inset-0"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    {/* Subtle info overlay on image */}
                    <div className="absolute bottom-12 left-12 right-12">
                      <div className="text-accent font-black text-xs uppercase tracking-[0.5em] mb-4">Stage {idx + 1} Visual</div>
                      <div className="w-full h-[1px] bg-white/10" />
                    </div>
                  </motion.div>
                );
              })}

              {/* Corner decorative element */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background separation lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/[0.03] pointer-events-none" />
    </section>
  );
};

export default Process;

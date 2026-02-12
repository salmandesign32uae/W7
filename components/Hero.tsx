import React, { useState, useRef } from 'react';
import { ShinyButton } from './ShinyButton';
import { STATS } from '../constants';
import BGPattern from './BGPattern';

const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(' ');

const Hero: React.FC = () => {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHeroHovered(true)}
      onMouseLeave={() => setIsHeroHovered(false)}
      className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-hidden flex items-center justify-center pt-20"
      id="hero"
    >
      {/* Dynamic Background Pattern */}
      <BGPattern variant="grid" mask="fade-edges" opacity="0.3" color="rgba(59, 130, 246, 0.2)" />

      {/* Secondary Decorative Dots */}
      <BGPattern variant="dots" mask="fade-center" opacity="0.1" color="rgba(59, 130, 246, 0.4)" />

      {/* Primary Floating Glow - Following Cursor */}
      <div
        className={cn(
          "absolute pointer-events-none z-10 rounded-full blur-[160px] transition-all duration-700 ease-out",
          isHeroHovered ? "opacity-30 bg-accent/40" : "opacity-0 bg-accent/10"
        )}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          width: isHeroHovered ? '800px' : '400px',
          height: isHeroHovered ? '800px' : '400px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-[#111111]/80 backdrop-blur-md border border-gray-200 dark:border-white/5 pl-1.5 pr-4 py-1.5 rounded-full mb-12 animate-fade-up">
          <span className="bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(59,130,246,0.5)]">Live</span>
          <span className="text-gray-600 dark:text-white/60 text-[14px] font-medium tracking-wide">Strategic Performance Audit</span>
        </div>

        {/* Headline with Gradient */}
        <h1
          className="text-5xl md:text-[92px] font-medium font-display leading-[0.95] mb-10 tracking-tighter text-gray-900 dark:text-white animate-fade-up max-w-5xl cursor-default transition-all duration-300"
          style={{ animationDelay: '150ms' }}
        >
          Where precision and<br className="hidden md:block" />
          <span className="bg-gradient-to-r from-gray-900 via-accent to-accent dark:from-white dark:via-accent/90 dark:to-accent bg-clip-text text-transparent">
            tax defense meet
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-[18px] md:text-[21px] text-gray-600 dark:text-white/50 max-w-3xl mx-auto mb-14 leading-[1.6] animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          W7 integrates with your leadership, audits complex operations, and generates high-impact strategies so you can focus entirely on executing your vision.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up mb-24"
          style={{ animationDelay: '450ms' }}
        >
          <ShinyButton onClick={() => window.location.href = '#contact'}>
            Start Free Assessment
          </ShinyButton>
        </div>

        {/* Integrated Stats Section */}
        <div
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-12 border-y border-gray-200 dark:border-white/5 animate-fade-up"
          style={{ animationDelay: '600ms' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center group/stat">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 tracking-tighter group-hover/stat:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-400 dark:text-white/40 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Bottom Glow Overlay */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-gradient-to-t from-white dark:from-black via-transparent to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
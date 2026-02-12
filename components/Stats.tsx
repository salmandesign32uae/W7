
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-1 text-accent text-sm font-bold mb-4">
            <span>(</span><span className="text-muted">Stats</span><span>)</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Numbers That Define Our Impact</h2>
          <p className="text-muted text-lg leading-relaxed max-w-lg">
            Our results-oriented approach has delivered measurable growth for startups and Fortune 500 companies alike across five continents.
          </p>
          <div className="mt-10">
            <a href="#contact" className="text-accent font-bold hover:underline flex items-center gap-2">
              Ready to scale? <span className="text-xl">→</span>
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card border border-border p-8 rounded-2xl hover:border-accent/30 transition-all group">
              <div className="text-5xl font-bold mb-4 text-white group-hover:text-accent transition-colors tracking-tighter">
                {stat.value}
              </div>
              <div className="text-muted font-medium uppercase text-xs tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

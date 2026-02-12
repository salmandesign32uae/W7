
import React from 'react';

const Integrations: React.FC = () => {
  const categories = ["Strategy", "Financial", "Technology", "Risk", "Global"];
  
  return (
    <section className="py-24 px-6 bg-background dark:bg-background-dark transition-colors duration-500" id="integrations">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="bg-card dark:bg-card-dark border border-border dark:border-border-dark p-12 rounded-[40px] aspect-square flex items-center justify-center relative overflow-hidden group transition-colors">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 w-full grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-background dark:bg-background-dark border border-border dark:border-border-dark rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:border-accent">
                   <div className="font-black text-xl italic text-muted transition-colors">PARTNER_{i}</div>
                </div>
              ))}
            </div>
            <div className="absolute w-32 h-32 bg-accent rounded-3xl rotate-45 flex items-center justify-center shadow-2xl">
              <div className="-rotate-45 text-white font-black text-2xl">W7</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <div className="flex items-center gap-1 text-accent text-sm font-bold mb-4">
            <span>(</span><span className="text-muted">Partnership</span><span>)</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 text-gray-900 dark:text-white transition-colors">Ecosystem Of Excellence</h2>
          <p className="text-muted text-lg mb-10 leading-relaxed transition-colors">
            We collaborate with world-class technology providers and financial institutions to ensure our clients have access to the best tools in the market.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <span key={cat} className="px-5 py-2 bg-secondary dark:bg-secondary-dark border border-border dark:border-border-dark rounded-full text-sm font-medium text-muted hover:border-accent transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

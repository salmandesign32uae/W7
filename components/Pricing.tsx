
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-background dark:bg-background-dark transition-colors duration-500" id="pricing">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-1 text-accent text-sm font-bold mb-4">
          <span>(</span><span className="text-muted">Investment</span><span>)</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 dark:text-white transition-colors">Scalable Strategic Plans</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto transition-colors">
          Choose the engagement level that best fits your current growth trajectory.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.name} className={`bg-card dark:bg-card-dark border ${plan.popular ? 'border-accent shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)]' : 'border-border dark:border-border-dark'} p-10 rounded-[30px] flex flex-col relative transition-all`}>
            {plan.popular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display transition-colors">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tighter transition-colors">${plan.price}</span>
                <span className="text-muted transition-colors">{plan.period}</span>
              </div>
              <p className="text-muted text-sm mt-4 transition-colors">{plan.description}</p>
            </div>

            <div className="flex-grow space-y-4 mb-10">
              <div className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider transition-colors">What's Included</div>
              {plan.features.map(feature => (
                <div key={feature} className="flex items-center gap-3 text-muted transition-colors">
                  <span className="text-accent text-xl">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-accent text-white hover:scale-[1.02] shadow-xl hover:shadow-accent/40' : 'bg-gray-100 dark:bg-secondary-dark text-gray-900 dark:text-white border border-border dark:border-border-dark hover:bg-gray-200 dark:hover:bg-border-dark'}`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

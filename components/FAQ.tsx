
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-background dark:bg-background-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-1 text-accent text-sm font-bold mb-4">
            <span>(</span><span className="text-muted">FAQ</span><span>)</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-900 dark:text-white transition-colors">Expert Answers</h2>
          <p className="text-muted text-lg leading-relaxed transition-colors">
            Frequently asked questions about our strategic methodology and engagement models.
          </p>
        </div>

        <div className="lg:w-2/3 space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-[20px] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors font-display">
                  {faq.question}
                </span>
                <span className={`text-2xl text-gray-400 dark:text-white transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-8 pt-0 text-muted leading-relaxed text-lg border-t border-border dark:border-border-dark/50 mt-[-1px] transition-colors">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background dark:bg-background-dark border-t border-border dark:border-border-dark pt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center pb-20">
        <div className="mb-8">
          <Logo className="h-12" />
        </div>

        <p className="text-muted leading-relaxed mb-8 max-w-xl transition-colors">
          W7 Consultancy transforms businesses through deep strategic insights, cutting-edge technical expertise, and relentless execution.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <a href="mailto:office@w7consultant.com" className="text-gray-900 dark:text-white font-semibold hover:text-accent transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            office@w7consultant.com
          </a>
          <a href="tel:+919811067275" className="text-gray-900 dark:text-white font-semibold hover:text-accent transition-colors flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            +91 98110 67275
          </a>
        </div>

      </div>

      <div className="border-t border-border dark:border-border-dark py-10 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-muted text-sm transition-colors">© W7 Consultancy 2026. All Rights Reserved.</p>
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-secondary-dark border border-border dark:border-border-dark px-6 py-2 rounded-full transition-colors">
            <span className="text-muted text-xs font-bold uppercase transition-colors">Built by</span>
            <span className="text-gray-900 dark:text-white text-sm font-bold transition-colors">W7 Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

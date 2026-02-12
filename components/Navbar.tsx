
import React from 'react';
import { NAV_LINKS } from '../constants';
import { ShinyButton } from './ShinyButton';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNavigate: (page: 'home' | 'contact') => void;
  currentPage: 'home' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, theme, onToggleTheme, onNavigate, currentPage }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-border dark:border-border-dark py-2.5' : 'bg-transparent py-5'} px-6`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo Link */}
        <button
          onClick={() => onNavigate('home')}
          className="group transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
          aria-label="W7 Consultancy Home"
        >
          <Logo className="h-10" theme={theme} />
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href.startsWith('#') && currentPage === 'home' ? link.href : '#'}
              onClick={(e) => {
                if (link.name === 'Home') {
                  e.preventDefault();
                  onNavigate('home');
                  return;
                }
                if (link.name === 'Contact') {
                  e.preventDefault();
                  onNavigate('contact');
                  return;
                }
                if (currentPage !== 'home') {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.querySelector(link.href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
              className={`text-[14px] font-bold uppercase tracking-widest transition-colors ${(link.name === 'Home' && currentPage === 'home') || (link.name === 'Contact' && currentPage === 'contact')
                ? 'text-accent'
                : 'text-gray-500 dark:text-white/40 hover:text-accent dark:hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-400 dark:text-white/30"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="18.36" x2="5.64" y2="19.78" /><line x1="18.36" y1="4.22" x2="19.78" y2="5.64" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          <ShinyButton
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 text-[13px] uppercase tracking-wider font-black"
          >
            Get Expert Help
          </ShinyButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

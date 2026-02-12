
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientSegments from './components/ClientSegments';
import EfficiencyInsights from './components/EfficiencyInsights';
import Features from './components/Features';
import SimpleProcess from './components/SimpleProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const navigateTo = (page: 'home' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-background-dark transition-colors duration-500">
      <Navbar
        scrolled={scrollY > 50}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={navigateTo}
        currentPage={currentPage}
      />

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <ClientSegments />
            <EfficiencyInsights />
            <Features />
            <SimpleProcess />
            <Testimonials />
            <FAQ />
          </>
        ) : (
          <Contact />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;

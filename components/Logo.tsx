
import React from 'react';
import logoLight from '../Images/Logo-W7-blue.png';
import logoDark from '../Images/Logo.png';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", theme = 'dark' }) => {
  return (
    <div className={`flex flex-row items-center ${className} group`}>
      <img
        src={theme === 'light' ? logoLight : logoDark}
        alt="W7 Consultant"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;

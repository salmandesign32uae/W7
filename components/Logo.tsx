
import React from 'react';
import logoImage from '../Images/Logo.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'adaptive';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'adaptive' }) => {
  return (
    <div className={`flex flex-row items-center ${className} group`}>
      <img
        src={logoImage}
        alt="W7 Consultancy"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;

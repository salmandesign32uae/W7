
import React from 'react';

type Variant = 'grid' | 'dots' | 'diagonal-stripes' | 'horizontal-lines' | 'vertical-lines' | 'checkerboard';
type Mask = 'fade-edges' | 'fade-center' | 'fade-y' | 'fade-right' | 'fade-bottom' | 'fade-top';

interface BGPatternProps {
  variant?: Variant;
  mask?: Mask;
  className?: string;
  opacity?: string;
  color?: string;
}

const BGPattern: React.FC<BGPatternProps> = ({ 
  variant = 'grid', 
  mask = 'fade-edges', 
  className = '',
  opacity = '0.4',
  color = 'rgba(59, 130, 246, 0.15)' // Default accent blue low opacity
}) => {
  
  const getPatternStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'grid':
        return {
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        };
      case 'dots':
        return {
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        };
      case 'diagonal-stripes':
        return {
          backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 1px, transparent 1px, transparent 10px)`,
        };
      case 'horizontal-lines':
        return {
          backgroundImage: `linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: '100% 40px',
        };
      case 'vertical-lines':
        return {
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px)`,
          backgroundSize: '40px 100%',
        };
      case 'checkerboard':
        return {
          backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 25%), linear-gradient(-45deg, ${color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${color} 75%), linear-gradient(-45deg, transparent 75%, ${color} 75%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        };
      default:
        return {};
    }
  };

  const getMaskClass = () => {
    switch (mask) {
      case 'fade-edges':
        return '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]';
      case 'fade-center':
        return '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,#000_100%)]';
      case 'fade-y':
        return '[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]';
      case 'fade-right':
        return '[mask-image:linear-gradient(to_right,black_70%,transparent_100%)]';
      case 'fade-bottom':
        return '[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]';
      case 'fade-top':
        return '[mask-image:linear-gradient(to_top,black_70%,transparent_100%)]';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 ${getMaskClass()} ${className}`}
      style={{ 
        ...getPatternStyles(),
        opacity: opacity 
      }}
    />
  );
};

export default BGPattern;

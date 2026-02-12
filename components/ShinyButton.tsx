
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  /* children is made optional to satisfy strict JSX prop checking in certain environments */
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// Added React.FC type to explicitly handle children and key props
export const ShinyButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = 'primary',
  type = "button",
  disabled = false
}) => {

  // Custom shadow styles adapted from the provided green-theme snippet to Blue
  const blueGlassShadows = `
    inset 0px 12px 32px 0px rgba(0, 82, 255, 0.04), 
    inset 0px 0px 20px 0px rgba(0, 82, 255, 0.12), 
    inset 0px 0px 12px 0px rgba(0, 82, 255, 0.08), 
    inset 0px 0px 8px 0px rgba(0, 82, 255, 0.04), 
    inset 0px 1px 1px 0px rgba(0, 82, 255, 0.16)
  `;

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#0052FF',
          boxShadow: `0 20px 40px -12px rgba(0, 82, 255, 0.4), ${blueGlassShadows}`,
          color: '#ffffff'
        };
      case 'secondary':
        return {
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0, 82, 255, 0.04)',
          boxShadow: blueGlassShadows,
          border: '1px solid rgba(0, 82, 255, 0.1)',
          color: 'inherit'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: '1px solid rgba(0, 82, 255, 0.2)',
          color: 'inherit'
        };
      default:
        return {};
    }
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? {
        scale: 1.02,
        y: -1,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      style={getVariantStyles() as React.CSSProperties}
      className={`
        relative px-8 py-3.5 rounded-[114px] font-bold text-[15px] md:text-[16px] tracking-tight transition-all duration-300
        flex items-center justify-center gap-2 overflow-hidden group
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {/* Shimmer Effect for Primary/Secondary */}
      {(variant === 'primary' || variant === 'secondary') && !disabled && (
        <>
          {/* Animated Shimmer Trail */}
          <div className="absolute inset-[-100%] [mask-image:radial-gradient(white,transparent_70%)] group-hover:opacity-100 opacity-40 transition-opacity">
            <div className="absolute inset-0 animate-[shimmer_4s_infinite_linear] bg-[conic-gradient(from_0deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)]" />
          </div>

          {/* Top Edge Highlight for depth */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-3" />
        </>
      )}

      {/* Content wrapper to ensure it stays above effects */}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </motion.button>
  );
}

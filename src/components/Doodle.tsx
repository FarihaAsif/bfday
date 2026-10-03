import React from 'react';
import { motion } from 'framer-motion';

type DoodleType = 'heart' | 'star' | 'arrow' | 'sparkle' | 'underline';

interface DoodleProps {
  type: DoodleType;
  color?: string;
  size?: number;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Doodle: React.FC<DoodleProps> = ({ 
  type, 
  color = 'var(--color-marker-ink)', 
  size = 40,
  rotation = 0,
  className = '',
  style
}) => {
  const renderSvg = () => {
    switch (type) {
      case 'heart':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 85C50 85 15 55 15 35C15 20 28 15 40 25C46 30 50 35 50 35C50 35 54 30 60 25C72 15 85 20 85 35C85 55 50 85 50 85Z" />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10L60 40H90L65 60L75 90L50 70L25 90L35 60L10 40H40L50 10Z" />
          </svg>
        );
      case 'arrow':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 50C40 40 60 40 80 50M60 30L80 50L60 70" />
          </svg>
        );
      case 'sparkle':
        return (
          <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10C50 30 70 50 90 50C70 50 50 70 50 90C50 70 30 50 10 50C30 50 50 30 50 10Z" />
          </svg>
        );
      case 'underline':
        return (
          <svg viewBox="0 0 200 40" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round">
            <path d="M10 20Q100 10 190 25" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`doodle doodle-${type} ${className}`}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        width: type === 'underline' ? size * 3 : size,
        height: type === 'underline' ? size * 0.5 : size,
        transform: `rotate(${rotation}deg)`,
        position: 'absolute',
        ...style
      }}
    >
      {renderSvg()}
    </motion.div>
  );
};

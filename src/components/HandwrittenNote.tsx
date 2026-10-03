import React from 'react';
import { motion } from 'framer-motion';

interface HandwrittenNoteProps {
  text: string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({ 
  text, 
  rotation = 0,
  className = '',
  style
}) => {
  return (
    <motion.div 
      className={`handwritten-note font-handwritten ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'none',
        ...style
      }}
    >
      {text}
    </motion.div>
  );
};

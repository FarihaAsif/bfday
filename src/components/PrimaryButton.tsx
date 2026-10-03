import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'light';
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Give it a subtle random rotation between -2 and 2 to look handmade
  const randomRotation = React.useMemo(() => (Math.random() * 4) - 2, []);

  return (
    <motion.button
      initial={{ rotate: randomRotation }}
      whileHover={{ scale: 1.05, rotate: randomRotation + 2 }}
      whileTap={{ scale: 0.95 }}
      className={`btn-sticker btn-sticker-${variant} font-ui ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

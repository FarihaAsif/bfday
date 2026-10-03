import React from 'react';
import { motion } from 'framer-motion';

interface GiftItemProps {
  src: string;
  alt: string;
  onClick: () => void;
  rotation?: number;
  className?: string;
}

export const GiftItem: React.FC<GiftItemProps> = ({ 
  src, 
  alt, 
  onClick, 
  rotation = 0,
  className = '' 
}) => {
  return (
    <motion.div 
      className={`gift-item-container ${className}`}
      initial={{ rotate: rotation }}
      whileHover={{ scale: 1.05, rotate: rotation, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ cursor: 'pointer', position: 'relative', minWidth: '150px', minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <img src={src} alt={alt} className="gift-item-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      {/* Soft shadow below the item to make it feel physical */}
      <div className="gift-item-shadow" />
    </motion.div>
  );
};

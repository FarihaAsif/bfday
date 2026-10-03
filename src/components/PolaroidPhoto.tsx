import React from 'react';
import { motion } from 'framer-motion';
import { WashiTape } from './WashiTape';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotation?: number;
  caption?: string;
}

export const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({ 
  src, 
  alt, 
  rotation = 0,
  caption
}) => {
  return (
    <motion.div 
      className="polaroid-container"
      initial={{ rotate: rotation - 5, opacity: 0, y: 20 }}
      animate={{ rotate: rotation, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, rotate: rotation + 1, zIndex: 30 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <WashiTape 
        color="pattern" 
        rotation={-3} 
        style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', width: '60px' }} 
      />
      <div className="polaroid-frame">
        <div className="polaroid-image-container">
          <img src={src} alt={alt} className="polaroid-image" />
        </div>
        {caption && (
          <div className="polaroid-caption font-handwritten">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );
};

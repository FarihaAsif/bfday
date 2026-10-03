import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, ScrapbookFrame, WashiTape, HandwrittenNote, Doodle } from '../components';
import { siteContent } from '../config/siteContent';

interface SadResponseScreenProps {
  onRetry: () => void;
}

export const SadResponseScreen: React.FC<SadResponseScreenProps> = ({ onRetry }) => {
  return (
    <motion.div 
      className="screen accept-screen" // Reusing background
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <ScrapbookFrame>
        <div className="accept-collage-wrapper">
          <Doodle type="underline" color="var(--color-tear-blue)" size={60} rotation={-10} style={{ top: '20%', left: '20%' }} />
          <HandwrittenNote text="why..." rotation={5} style={{ top: '30%', right: '25%', color: 'var(--color-navy)', fontSize: '2rem' }} />
          <HandwrittenNote text="really?!" rotation={-15} style={{ bottom: '15%', left: '15%', color: 'var(--color-navy)', fontSize: '1.5rem' }} />
          
          <motion.div
            className="sad-title-wrapper"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="accept-title font-display" style={{ marginBottom: 0 }}>{siteContent.acceptance.sadTitle}</h2>
          </motion.div>

          <motion.div 
            className="accept-image-container"
            initial={{ rotate: 2, y: 20 }}
            animate={{ rotate: -3, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <WashiTape color="cream" rotation={10} style={{ top: '-15px', right: '10px', width: '70px' }} />
            <img 
              src={siteContent.acceptance.characterCrying} 
              alt="Sad Character" 
              className="accept-character-image" 
            />
            {/* The tears can just be an overlapping sticker */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)', fontSize: '3rem' }}
            >
              💧💧
            </motion.div>
          </motion.div>

          <motion.div
            className="accept-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ zIndex: 15 }}
          >
            <div className="accept-buttons">
              <PrimaryButton variant="primary" onClick={onRetry} style={{ transform: 'rotate(2deg)' }}>
                {siteContent.acceptance.retryText}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

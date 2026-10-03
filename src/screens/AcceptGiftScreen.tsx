import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, ScrapbookFrame, WashiTape, HandwrittenNote, Doodle } from '../components';
import { siteContent } from '../config/siteContent';

interface AcceptGiftScreenProps {
  onYes: () => void;
  onNo: () => void;
}

export const AcceptGiftScreen: React.FC<AcceptGiftScreenProps> = ({ onYes, onNo }) => {
  return (
    <motion.div 
      className="screen accept-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <ScrapbookFrame>
        <div className="accept-collage-wrapper">
          <Doodle type="heart" color="var(--color-red)" size={50} rotation={-15} style={{ top: '15%', left: '20%' }} />
          <Doodle type="star" color="#f5c211" size={40} rotation={25} style={{ top: '35%', right: '15%' }} />
          
          <motion.div 
            className="accept-image-container"
            initial={{ rotate: -2, y: 20 }}
            animate={{ rotate: 3, y: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <WashiTape color="blue" rotation={-5} style={{ top: '-12px', left: '10px', width: '80px' }} />
            <img 
              src={siteContent.acceptance.characterCute} 
              alt="Cute Character" 
              className="accept-character-image" 
            />
            <HandwrittenNote text="Please??" rotation={-10} style={{ bottom: '-15px', right: '-40px' }} />
          </motion.div>

          <motion.div
            className="accept-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="accept-title font-display">{siteContent.acceptance.title}</h2>
            
            <div className="accept-buttons">
              <PrimaryButton variant="primary" onClick={onYes}>
                {siteContent.acceptance.yesText}
              </PrimaryButton>
              <PrimaryButton variant="light" onClick={onNo}>
                {siteContent.acceptance.noText}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

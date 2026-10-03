import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, ScrapbookPaper, WashiTape, Doodle, HandwrittenNote } from '../components';
import { siteContent } from '../config/siteContent';

interface IntroScreenProps {
  onContinue: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onContinue }) => {
  return (
    <motion.div 
      className="screen intro-screen bg-navy-texture"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="intro-collage-container">
        
        <Doodle type="star" color="#fff" size={60} rotation={15} style={{ top: '10%', left: '15%' }} />
        <Doodle type="star" color="#fff" size={40} rotation={-20} style={{ top: '25%', right: '20%' }} />
        <Doodle type="sparkle" color="#fff" size={30} rotation={45} style={{ bottom: '20%', left: '25%' }} />
        <HandwrittenNote text="for you ♡" rotation={-5} style={{ top: '25%', left: '25%', color: 'white', fontSize: '2rem' }} />

        <motion.div 
          initial={{ y: 50, opacity: 0, rotate: -2 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          transition={{ delay: 0.2, type: "spring" }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <ScrapbookPaper rotation={-2} className="intro-title-paper">
            <WashiTape color="pattern" rotation={-15} style={{ top: '-15px', left: '-15px', width: '80px' }} />
            <WashiTape color="red" rotation={5} style={{ bottom: '-10px', right: '-20px', width: '100px' }} />
            
            <h1 className="intro-title font-display">
              {siteContent.intro.titleTop}<br/>
              {siteContent.intro.titleMiddle}<br/>
              {siteContent.intro.titleBottom}
            </h1>
            <Doodle type="underline" color="var(--color-royal-blue)" size={80} style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)' }} />
          </ScrapbookPaper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ delay: 0.8, type: "spring" }}
          style={{ position: 'relative', zIndex: 10, marginTop: '3rem' }}
        >
          <PrimaryButton variant="light" onClick={onContinue}>
            {siteContent.intro.buttonText}
          </PrimaryButton>
          <HandwrittenNote text="click me!" rotation={-10} style={{ top: '-30px', right: '-40px', color: 'white', fontSize: '1.5rem' }} />
        </motion.div>

      </div>
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ScrapbookFrame, WashiTape, Doodle, HandwrittenNote, ScrapbookPaper, PrimaryButton } from '../components';
import { siteContent } from '../config/siteContent';

interface BouquetScreenProps {
  onComplete: () => void;
}

export const BouquetScreen: React.FC<BouquetScreenProps> = ({ onComplete }) => {
  const bouquetControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const triggerAnimation = async () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    await bouquetControls.start({
      scale: 1.5,
      rotate: -10,
      transition: { duration: 1.5, ease: "easeInOut" }
    });
  };

  return (
    <motion.div 
      className="screen bouquet-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrapbookFrame>
        <div className="bouquet-content-wrapper" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          
          {/* Back Button */}
          <div className="back-button-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: 20 }}>
            <PrimaryButton variant="light" onClick={onComplete} style={{ padding: '0.5rem 1rem', fontSize: '1rem', rotate: '-3deg' }}>
              &larr; Back
            </PrimaryButton>
          </div>

          {/* Background Doodles */}
          <Doodle type="star" color="#cbd5e0" size={50} rotation={20} style={{ position: 'absolute', top: '10%', left: '40%' }} />
          
          {/* Left Side: Text and Character */}
          <motion.div className="bouquet-left">
            <ScrapbookPaper rotation={-3} className="bouquet-heading-paper">
              <WashiTape color="red" rotation={5} style={{ top: '-10px', right: '10px', width: '80px' }} />
              <h2 className="bouquet-heading font-handwritten">
                {siteContent.bouquet.heading.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
            </ScrapbookPaper>

            <motion.div
              initial={{ y: 20, rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              style={{ position: 'relative', marginTop: 'var(--spacing-lg)' }}
            >
              <WashiTape color="blue" rotation={-10} style={{ top: '-15px', left: '20px', width: '60px' }} />
              <img 
                src={siteContent.acceptance.characterCute} 
                alt="Cute Character" 
                className="bouquet-character" 
              />
              <HandwrittenNote text="hehe" rotation={15} style={{ bottom: '10px', right: '-40px', fontSize: '1.5rem', color: 'var(--color-red)' }} />
            </motion.div>
          </motion.div>

          {/* Center: Doodle */}
          <motion.div className="bouquet-center font-handwritten">
            <div className="bouquet-doodle-text">FoR YoU;)</div>
            <Doodle type="arrow" color="var(--color-navy)" size={60} rotation={20} style={{ marginTop: '10px' }} />
          </motion.div>

          {/* Right Side: Bouquet Image */}
          <div className="bouquet-right" style={{ cursor: 'pointer' }} onClick={triggerAnimation}>
            <motion.img 
              src={siteContent.bouquet.image} 
              alt="Bouquet" 
              className="bouquet-image"
              animate={bouquetControls}
              initial={{ scale: 1, rotate: 5, x: 0, y: 0 }}
            />
            {!hasAnimated && (
              <HandwrittenNote text="click me!" rotation={-10} style={{ position: 'absolute', bottom: '10%', right: '10%', fontSize: '1.5rem', color: 'var(--color-red)' }} />
            )}
          </div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ScrapbookFrame, PolaroidPhoto, PrimaryButton, ScrapbookPaper, WashiTape, Doodle, HandwrittenNote } from '../components';
import { siteContent } from '../config/siteContent';

interface LetterScreenProps {
  onBack: () => void;
}

export const LetterScreen: React.FC<LetterScreenProps> = ({ onBack }) => {
  return (
    <motion.div 
      className="screen letter-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <ScrapbookFrame>
        <div className="letter-content-wrapper">
          {/* Back Button */}
          <div className="back-button-container">
            <PrimaryButton variant="light" onClick={onBack} style={{ padding: '0.5rem 1rem', fontSize: '1rem', rotate: '-3deg' }}>
              &larr; Back
            </PrimaryButton>
          </div>

          <div className="letter-layout">
            
            {/* Background Details */}
            <Doodle type="heart" color="#e0a0a0" size={80} rotation={25} style={{ top: '10%', left: '30%', opacity: 0.5 }} />
            <Doodle type="star" color="#cbd5e0" size={60} rotation={-15} style={{ bottom: '15%', right: '25%', opacity: 0.7 }} />

            {/* Central Paper Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, rotate: 1 }}
              animate={{ scale: 1, opacity: 1, rotate: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ width: '55%', height: '85%', zIndex: 5, position: 'relative' }}
            >
              <ScrapbookPaper rotation={0} className="letter-paper">
                <WashiTape color="pattern" rotation={-5} style={{ top: '-15px', left: '40%', width: '120px' }} />
                <WashiTape color="cream" rotation={3} style={{ bottom: '-10px', right: '10%', width: '80px' }} />
                
                <div className="letter-text font-handwritten">
                  {siteContent.letter.body.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </ScrapbookPaper>
            </motion.div>

            {/* Photos mapped around the paper, overlapping it */}
            <div className="letter-photo-tl" style={{ zIndex: 10 }}>
              <PolaroidPhoto 
                src={siteContent.letter.photos.topLeft} 
                alt="Photo 1" 
                rotation={-8} 
                caption="♡"
              />
            </div>
            
            <div className="letter-photo-tr" style={{ zIndex: 4 }}>
              <PolaroidPhoto 
                src={siteContent.letter.photos.topRight} 
                alt="Photo 3" 
                rotation={6} 
              />
            </div>

            <div className="letter-photo-bl" style={{ zIndex: 6 }}>
              <PolaroidPhoto 
                src={siteContent.letter.photos.bottomLeft} 
                alt="Photo 2" 
                rotation={-4} 
              />
              <HandwrittenNote text="us" rotation={-15} style={{ top: '-20px', left: '20px', fontSize: '1.2rem' }} />
            </div>

            <div className="letter-photo-br" style={{ zIndex: 10 }}>
              <PolaroidPhoto 
                src={siteContent.letter.photos.bottomRight} 
                alt="Photo 4" 
                rotation={7} 
                caption="so cute"
              />
            </div>

          </div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

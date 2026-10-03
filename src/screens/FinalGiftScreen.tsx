import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrapbookFrame, MusicPlayer, ScrapbookPaper, WashiTape, Doodle, HandwrittenNote } from '../components';
import { siteContent } from '../config/siteContent';

export const FinalGiftScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="screen final-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrapbookFrame>
        <div className="final-content-wrapper">
          {/* Left Side: Vinyl Artwork & Music */}
          <div className="final-left">
            <Doodle type="star" color="#cbd5e0" size={60} rotation={-20} style={{ top: '-40px', left: '-20px' }} />
            
            <ScrapbookPaper rotation={-2} className="vinyl-card">
              <WashiTape color="pattern" rotation={-15} style={{ top: '-10px', left: '-15px', width: '80px' }} />
              <img 
                src={siteContent.final.vinylImage} 
                alt="Vinyl" 
                className="vinyl-illustration" 
              />
              {siteContent.final.vinylText && (
                <div className="vinyl-text font-handwritten">
                  {siteContent.final.vinylText.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </ScrapbookPaper>

            <motion.div 
              initial={{ y: 20, opacity: 0, rotate: 3 }} 
              animate={{ y: 0, opacity: 1, rotate: 3 }}
              transition={{ delay: 0.5 }}
              className="music-player-wrapper"
            >
              <WashiTape color="red" rotation={-5} style={{ top: '-10px', right: '10px', width: '60px' }} />
              <MusicPlayer />
            </motion.div>
          </div>

          {/* Right Side: Card (Closed/Open) */}
          <div className="final-right">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <div key="closed-wrapper" className="final-card-wrapper">
                  <motion.div 
                    className="final-card-closed"
                    onClick={() => setIsOpen(true)}
                    initial={{ scale: 0.9, opacity: 0, rotate: 10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 10 }}
                    exit={{ scale: 1.1, opacity: 0, rotate: 15 }}
                    whileHover={{ scale: 1.05, rotate: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WashiTape color="blue" rotation={-10} style={{ top: '-10px', left: '-10px', width: '80px' }} />
                    <div className="card-open-heart">
                      <span className="font-handwritten" style={{ fontSize: '2.5rem' }}>OPEN</span>
                    </div>
                    <HandwrittenNote text="click!" rotation={-15} style={{ bottom: '20px', right: '-40px', color: 'var(--color-navy)' }} />
                  </motion.div>
                </div>
              ) : (
                <div key="open-wrapper" className="final-card-wrapper">
                  <motion.div 
                    className="final-card-open"
                    initial={{ rotateY: -90, opacity: 0, rotateZ: 5 }}
                    animate={{ rotateY: 0, opacity: 1, rotateZ: 5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <WashiTape color="blue" rotation={-5} style={{ top: '-10px', left: '-10px', width: '80px' }} />
                    <WashiTape color="pattern" rotation={10} style={{ bottom: '-10px', right: '-10px', width: '80px' }} />
                    
                    <h2 className="final-title font-heading">{siteContent.final.title}</h2>
                    <img 
                      src={siteContent.final.finalCardImage} 
                      alt="Final Illustration" 
                      className="final-illustration" 
                    />
                    <div className="final-subtitle">
                      <span className="font-handwritten" style={{ display: 'block', fontSize: '1.5rem', color: 'var(--color-red)' }}>
                        {siteContent.final.subtitle.split('\n')[0]}
                      </span>
                      <span className="font-heading" style={{ fontSize: '1.8rem' }}>
                        {siteContent.final.subtitle.split('\n')[1]}
                      </span>
                    </div>
                    <Doodle type="heart" color="var(--color-red)" size={40} rotation={15} style={{ top: '20px', right: '20px' }} />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

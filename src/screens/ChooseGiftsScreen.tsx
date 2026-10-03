import React from 'react';
import { motion } from 'framer-motion';
import { ScrapbookFrame, GiftItem, WashiTape, HandwrittenNote, Doodle } from '../components';
import { siteContent } from '../config/siteContent';

interface ChooseGiftsScreenProps {
  onSelectEnvelope: () => void;
  onSelectBouquet: () => void;
  onSelectGiftBox: () => void;
}

export const ChooseGiftsScreen: React.FC<ChooseGiftsScreenProps> = ({ 
  onSelectEnvelope, 
  onSelectBouquet, 
  onSelectGiftBox 
}) => {
  return (
    <motion.div 
      className="screen choose-gifts-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <ScrapbookFrame>
        <div className="gifts-content">
          <motion.div 
            className="gifts-title-container"
            initial={{ y: -20, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: -2 }}
            transition={{ delay: 0.2 }}
          >
            <WashiTape color="pattern" rotation={2} style={{ top: '-10px', left: '20px', width: '100px' }} />
            <h2 className="font-display gifts-title">
              {siteContent.gifts.title}
            </h2>
          </motion.div>

          <div className="gifts-row">
            {/* Envelope */}
            <div className="gift-wrapper gift-envelope" style={{ position: 'relative' }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ width: '100%', position: 'relative' }}
              >
                <GiftItem 
                  src={siteContent.gifts.envelopeImg} 
                  alt="Envelope" 
                  rotation={-8}
                  onClick={onSelectEnvelope} 
                />
                <HandwrittenNote text="open first!" rotation={-15} style={{ top: '-10%', left: '-10%', fontSize: '1.2rem', color: 'var(--color-red)' }} />
                <Doodle type="arrow" color="var(--color-red)" size={40} rotation={-45} style={{ top: '5%', left: '15%' }} />
              </motion.div>
            </div>

            {/* Bouquet */}
            <div className="gift-wrapper gift-bouquet" style={{ position: 'relative', zIndex: 10 }}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ width: '100%', position: 'relative' }}
              >
                <GiftItem 
                  src={siteContent.gifts.bouquetImg} 
                  alt="Bouquet" 
                  rotation={2}
                  onClick={onSelectBouquet} 
                />
                <HandwrittenNote text="for you ❀" rotation={5} style={{ bottom: '-5%', right: '-5%', fontSize: '1.4rem' }} />
              </motion.div>
            </div>

            {/* Gift Box */}
            <div className="gift-wrapper gift-box" style={{ position: 'relative' }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ width: '100%', position: 'relative' }}
              >
                <GiftItem 
                  src={siteContent.gifts.giftBoxImg} 
                  alt="Gift Box" 
                  rotation={5}
                  onClick={onSelectGiftBox} 
                />
                <WashiTape color="blue" rotation={-10} style={{ top: '10%', right: '-10%', width: '30%' }} />
                <HandwrittenNote text="save for last!" rotation={15} style={{ bottom: '-15%', left: '0', fontSize: '1.2rem' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </ScrapbookFrame>
    </motion.div>
  );
};

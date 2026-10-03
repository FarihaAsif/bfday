import React from 'react';
import { motion } from 'framer-motion';

export const ScrapbookFrame: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="scrapbook-layout-wrapper">
      <motion.div 
        className="scrapbook-page-container bg-graph-paper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="scrapbook-hand-border"></div>
        <div className="scrapbook-content">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

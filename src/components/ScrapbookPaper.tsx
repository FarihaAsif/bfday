import React from 'react';

interface ScrapbookPaperProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
}

export const ScrapbookPaper: React.FC<ScrapbookPaperProps> = ({ 
  children, 
  className = '',
  rotation = 0
}) => {
  return (
    <div 
      className={`scrapbook-paper-piece ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="paper-grain"></div>
      {children}
    </div>
  );
};

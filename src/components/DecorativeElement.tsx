import React from 'react';

interface DecorativeElementsProps {
  type: 'star' | 'swirl' | 'web' | 'sparkle' | 'plaid-strip';
  className?: string;
}

export const DecorativeElement: React.FC<DecorativeElementsProps> = ({ type, className = '' }) => {
  // We'll use CSS shapes and simple SVGs for the decorative elements based on type
  if (type === 'plaid-strip') {
    return <div className={`decor-plaid-strip ${className}`} />;
  }
  
  if (type === 'star') {
    return (
      <div className={`decor-star ${className}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    );
  }

  // Placeholder for others
  return <div className={`decor-generic decor-${type} ${className}`} />;
};

import React from 'react';

interface WashiTapeProps {
  color?: 'blue' | 'cream' | 'red' | 'pattern';
  rotation?: number;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const WashiTape: React.FC<WashiTapeProps> = ({ 
  color = 'cream', 
  rotation = 0,
  width = '120px',
  className = '',
  style
}) => {
  return (
    <div 
      className={`washi-tape washi-${color} ${className}`}
      style={{ 
        width,
        transform: `rotate(${rotation}deg)`,
        pointerEvents: 'none',
        ...style
      }}
    >
      <div className="washi-texture"></div>
    </div>
  );
};

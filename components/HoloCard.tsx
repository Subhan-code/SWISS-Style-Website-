import React, { ReactNode } from 'react';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  color?: 'teal' | 'pink' | 'orange'; // Kept for compatibility but unused visually
}

export const HoloCard: React.FC<HoloCardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        bg-white border-2 border-gray-100 p-8
        hover:border-swiss-black transition-colors duration-300
        group relative h-full flex flex-col justify-between
        ${className}
      `}
    >
       {/* Hover Indicator */}
       <div className="absolute top-0 left-0 w-0 h-1 bg-swiss-red transition-all duration-300 group-hover:w-full"></div>
       
       {children}
    </div>
  );
};
import React from 'react';

export const HUD: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b-4 border-swiss-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-8 h-8 bg-swiss-red mr-3"></div>
            <span className="font-bold text-xl tracking-tighter uppercase">Werkstatt 77</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['Work', 'Studio', 'Systems', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-swiss-black hover:text-swiss-red font-medium text-sm uppercase tracking-widest transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <div className="space-y-1.5 cursor-pointer">
                <div className="w-6 h-0.5 bg-swiss-black"></div>
                <div className="w-6 h-0.5 bg-swiss-black"></div>
                <div className="w-6 h-0.5 bg-swiss-black"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
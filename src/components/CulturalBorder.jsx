import React from 'react';

export default function CulturalBorder() {
  return (
    <div className="w-full h-2 bg-gradient-to-r from-primary via-gold-champion to-ocean-teal flex items-center justify-between overflow-hidden">
      <div className="w-full h-full opacity-30 flex">
        <div className="w-12 h-full bg-surface-container-lowest skew-x-12 -ml-2"></div>
        <div className="w-12 h-full bg-surface-container-lowest skew-x-12 ml-6"></div>
        <div className="w-12 h-full bg-surface-container-lowest skew-x-12 ml-10"></div>
        <div className="w-12 h-full bg-surface-container-lowest skew-x-12 ml-14"></div>
      </div>
    </div>
  );
}

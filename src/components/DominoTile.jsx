import React from 'react';

// Render domino pips (dots) cleanly
function renderPips(val) {
  const pips = [];
  for (let i = 0; i < val; i++) {
    pips.push(
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-navy-midnight shadow-inner shrink-0"
      />
    );
  }
  return pips;
}

export default function DominoTile({ top = 6, bottom = 6, size = 'md' }) {
  const isDoubleSix = top === 6 && bottom === 6;
  const isBalak = top === bottom;

  const sizeClasses = {
    sm: 'w-7 h-12 rounded-sm p-1 gap-0.5',
    md: 'w-10 h-20 rounded-md p-1.5 gap-1',
    lg: 'w-14 h-28 rounded-lg p-2 gap-1.5',
  }[size] || 'w-10 h-20 rounded-md p-1.5 gap-1';

  return (
    <div
      className={`inline-flex flex-col items-center justify-between bg-white border border-slate-300 shadow-md ${sizeClasses} select-none ${
        isDoubleSix ? 'ring-2 ring-gold-champion/80' : ''
      }`}
    >
      {/* Top Half */}
      <div className="flex-1 w-full flex flex-wrap items-center justify-center content-center gap-0.5 bg-slate-50 rounded-sm">
        {top === 0 ? (
          <span className="text-[9px] font-bold text-slate-300 uppercase">KOSONG</span>
        ) : (
          renderPips(top)
        )}
      </div>

      {/* Central Divider */}
      <div className="w-full h-0.5 bg-navy-midnight/80 rounded-full" />

      {/* Bottom Half */}
      <div className="flex-1 w-full flex flex-wrap items-center justify-center content-center gap-0.5 bg-slate-50 rounded-sm">
        {bottom === 0 ? (
          <span className="text-[9px] font-bold text-slate-300 uppercase">KOSONG</span>
        ) : (
          renderPips(bottom)
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white py-12 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-full p-2">
          <img 
            alt="Logo ORADO" 
            className="max-w-full max-h-full object-contain" 
            src="/logo_transparent.png"
          />
        </div>
        
        <div className="text-center font-jakarta text-sm text-slate-300 flex flex-col gap-1">
          <p className="font-bold text-white mb-1">Sekretariat Pengprov ORADO Papua Barat Daya</p>
          <p>Kota Sorong,</p>
          <p>Provinsi Papua Barat Daya</p>
        </div>
        
        <div className="text-center font-jakarta text-sm text-white font-semibold mt-2 hover:text-primary transition-colors cursor-pointer">
          <a href="mailto:info@orado.co.id">info@orado.co.id</a>
        </div>
      </div>
    </footer>
  );
}

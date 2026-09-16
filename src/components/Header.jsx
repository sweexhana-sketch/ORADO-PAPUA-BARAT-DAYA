import React from 'react';

export default function Header({ currentPath, setCurrentPath, isAdmin, setIsAdmin }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-2">
        
        {/* Left: Logo & Provincial Identity */}
        <button 
          onClick={() => setCurrentPath('beranda')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <img 
            alt="Logo ORADO Pengprov Papua Barat Daya" 
            className="h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxfQkcurSgzO3Keq8jNCSpMpxytreSTr_OcX-0FtM64bM3FU1t65jMg8p7YtHfs5Kld1yPPtVy4c5QzttGDBbCu7TVK6qt5zn92pZi1gy2zs8taa5YmZpD6xC91jIu_ZLmyBpmD8rP8eY0Eli6g6IyWbA55H4C7BA-TBHlh_ID828y-MMGL3Ja0dgku0NmwKTBNPBNLBMYEGOVepjSyY-rJhZzfk8jOY8A934eipNRPHzMBW-rBEmJH45Sg2bYbgO" 
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-outfit font-bold text-sm text-navy-midnight tracking-tight truncate">
                ORADO PENGPROV
              </span>
              <span className="font-outfit text-[10px] px-1.5 py-0.5 text-primary font-bold bg-primary/10 rounded-full border border-primary/20">
                PBD
              </span>
            </div>
            <span className="font-outfit text-[10px] text-text-secondary tracking-wider uppercase truncate">
              PAPUA BARAT DAYA
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { id: 'beranda', label: 'Beranda', icon: 'home' },
            { id: 'pendaftaran', label: 'Form Pendaftaran', icon: 'assignment' },
            { id: 'livescores', label: 'Live Score 101', icon: 'sports_score' },
            { id: 'bagan', label: 'Bagan Turnamen', icon: 'schema' },
            { id: 'atlet', label: 'Direktori Atlet', icon: 'badge' },
            { id: 'berita', label: 'Berita & Rules', icon: 'newspaper' },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => setCurrentPath(nav.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentPath === nav.id
                  ? 'bg-navy-midnight text-on-primary shadow-sm'
                  : 'text-text-secondary hover:bg-surface-container hover:text-navy-midnight'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{nav.icon}</span>
              {nav.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Role Switcher & Admin Portal Toggle */}
        <div className="flex items-center gap-2">
          {/* Admin Dashboard Toggle */}
          <button
            onClick={() => {
              setIsAdmin(!isAdmin);
              if (!isAdmin) setCurrentPath('admin');
              else setCurrentPath('beranda');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
              isAdmin
                ? 'bg-gold-champion text-navy-midnight border border-gold-champion/50'
                : 'bg-navy-surface text-on-secondary hover:bg-navy-midnight'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isAdmin ? 'admin_panel_settings' : 'shield_person'}
            </span>
            <span>{isAdmin ? 'Mode Admin Sekretariat' : 'Akses Panitia'}</span>
          </button>
        </div>
      </div>

      {/* Decorative Gradient Ribbon */}
      <div className="h-1 w-full flex">
        <div className="h-full w-2/3 bg-primary"></div>
        <div className="h-full w-1/3 bg-gold-champion"></div>
      </div>
    </header>
  );
}

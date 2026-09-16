import React from 'react';

export default function BottomNav({ currentPath, setCurrentPath, isAdmin }) {
  const items = [
    { id: 'beranda', label: 'Beranda', icon: 'home' },
    { id: 'pendaftaran', label: 'Daftar', icon: 'edit_document' },
    { id: 'livescores', label: 'Live 101', icon: 'sports_score' },
    { id: 'bagan', label: 'Bagan', icon: 'schema' },
    { id: 'atlet', label: 'Atlet', icon: 'badge' },
  ];

  if (isAdmin) {
    items.push({ id: 'admin', label: 'Admin', icon: 'admin_panel_settings' });
  }

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(6,21,36,0.08)] border-t border-slate-border">
      <div className="flex justify-around items-center h-16 px-1">
        {items.map((item) => {
          const active = currentPath === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPath(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 w-14 h-14 transition-colors ${
                active ? 'text-primary font-bold' : 'text-text-secondary hover:text-on-surface'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${active ? 'text-primary' : ''}`}>
                {item.icon}
              </span>
              <span className="font-outfit text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

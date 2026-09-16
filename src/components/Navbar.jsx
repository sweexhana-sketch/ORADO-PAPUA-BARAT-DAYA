import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Dropdown states for desktop
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { 
      name: 'Tentang Kami', 
      path: '#', 
      dropdown: [
        { label: 'Apa itu ORADO', path: '/tentang' },
        { label: 'Pengprov', path: '/tentang' },
        { label: 'Kontak', path: '/kontak' },
      ]
    },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kejurnas', path: '/kejurnas' },
    { name: 'Turnamen', path: '/turnamen' },
    { 
      name: 'Media', 
      path: '#', 
      dropdown: [
        { label: 'Berita', path: '/berita' },
        { label: 'Video', path: '/gallery' },
        { label: 'Press Release', path: '/berita' },
      ]
    },
    { name: 'Latihan', path: '/latihan' },
    { name: 'Pendaftaran', path: '/auth?tab=register' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <img 
              alt="Logo ORADO" 
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm" 
              src="/logo.png" 
            />
            <div className="ml-3 hidden sm:flex flex-col">
              <span className="font-outfit text-xl text-primary font-bold leading-none tracking-tight">ORADO</span>
              <span className="font-jakarta text-[8px] text-text-secondary leading-tight mt-0.5 tracking-wider">
                Federasi Olahraga Domino Nasional
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`font-outfit text-sm font-semibold flex items-center gap-1 py-2 ${
                      activeDropdown === link.name ? 'text-primary' : 'text-slate-500 hover:text-primary'
                    } transition-colors`}
                  >
                    {link.name}
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-outfit text-sm font-semibold py-2 relative group ${
                      isActive(link.path) ? 'text-primary' : 'text-slate-500 hover:text-primary'
                    } transition-colors`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t" />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl py-2 z-50">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm font-jakarta text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth?tab=register" className="px-5 py-2 rounded font-outfit text-sm font-bold bg-[#0f3b5f] text-white hover:bg-navy-midnight transition-colors">
              Daftar Akun
            </Link>
            <Link to="/auth?tab=login" className="px-5 py-2 rounded font-outfit text-sm font-bold border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors">
              Masuk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full text-left px-3 py-3 rounded-md text-base font-outfit font-semibold text-slate-700 hover:bg-slate-50 flex justify-between items-center"
                    >
                      {link.name}
                      <span className={`material-symbols-outlined transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-6 space-y-1 bg-slate-50 py-2 rounded-md">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-jakarta text-slate-500 hover:text-primary hover:bg-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-outfit font-semibold ${
                      isActive(link.path) ? 'text-primary bg-primary/5' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3 px-3">
              <Link to="/auth?tab=register" onClick={() => setMobileMenuOpen(false)} className="w-full px-5 py-2.5 rounded font-outfit text-sm font-bold bg-[#0f3b5f] text-white text-center">
                Daftar Akun
              </Link>
              <Link to="/auth?tab=login" onClick={() => setMobileMenuOpen(false)} className="w-full px-5 py-2.5 rounded font-outfit text-sm font-bold border border-slate-300 text-slate-600 text-center">
                Masuk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

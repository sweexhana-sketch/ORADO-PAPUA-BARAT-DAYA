import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import LiveScores from './pages/LiveScores';
import Brackets from './pages/Brackets';
import Athletes from './pages/Athletes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Gallery from './pages/Gallery';
import Kejurnas from './pages/Kejurnas';
import Turnamen from './pages/Turnamen';
import Latihan from './pages/Latihan';
import TentangKami from './pages/TentangKami';
import Berita from './pages/Berita';
import Kontak from './pages/Kontak';
import { fetchStats, fetchPengcab } from './services/api';

export default function App() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [pengcabList, setPengcabList] = useState([]);

  useEffect(() => {
    async function loadData() {
      const s = await fetchStats();
      const p = await fetchPengcab();
      setStats(s);
      setPengcabList(p);
    }
    loadData();
  }, []);

  const handleNavigate = (path) => {
    switch (path) {
      case 'pendaftaran': navigate('/registration'); break;
      case 'livescores': navigate('/live-scores'); break;
      case 'bagan': navigate('/brackets'); break;
      case 'beranda': navigate('/'); break;
      case 'turnamen': navigate('/brackets'); break;
      case 'berita': navigate('/'); break; // Not implemented yet
      case 'atlet-dan-wasit': navigate('/athletes'); break;
      case 'profil': navigate('/'); break; // Not implemented yet
      default: navigate('/');
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col relative w-full pt-24 bg-surface flex-1">
        {/* Top Decorative Cultural Strip */}
        <div className="w-full h-2 bg-gradient-to-r from-primary via-gold-champion to-ocean-teal flex items-center justify-between overflow-hidden">
          <div className="w-full h-full opacity-30 flex">
            <div className="w-12 h-full bg-surface-container-lowest skew-x-12 -ml-2"></div>
            <div className="w-12 h-full bg-surface-container-lowest skew-x-12 ml-6"></div>
            <div className="w-12 h-full bg-surface-container-lowest skew-x-12 ml-10"></div>
          </div>
        </div>

        {/* Content Routing */}
        <div className="w-full flex flex-col gap-6 mb-16">
          <Routes>
            <Route path="/" element={<Home stats={stats} pengcabList={pengcabList} onNavigate={handleNavigate} />} />
            <Route path="/registration" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/kejurnas" element={<Kejurnas />} />
            <Route path="/turnamen" element={<Turnamen />} />
            <Route path="/latihan" element={<Latihan />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/live-scores" element={<LiveScores onNavigate={handleNavigate} />} />
            <Route path="/brackets" element={<Brackets onNavigate={handleNavigate} />} />
            <Route path="/athletes" element={<Athletes onNavigate={handleNavigate} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

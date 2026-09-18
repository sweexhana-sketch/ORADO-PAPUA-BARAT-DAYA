import React, { useState } from 'react';

const photos = [
  { id: 1, caption: 'Pendaftaran dan supervisi ORADO di KONI Papua Barat Daya', cat: 'foto', img: '/koni_pbd.webp' },
  { id: 2, caption: 'Sosialisasi Domino 101 di Kota Sorong', cat: 'foto', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop' },
  { id: 3, caption: 'Audiensi dengan Dinas Pemuda & Olahraga', cat: 'foto', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop' },
  { id: 4, caption: 'Pelatihan Wasit Domino Tingkat Provinsi', cat: 'foto', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop' },
  { id: 5, caption: 'Rapat Koordinasi Pengcab se-Papua Barat Daya', cat: 'foto', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop' },
  { id: 6, caption: 'Pembentukan Pengcab ORADO Sorong Selatan', cat: 'foto', img: 'https://images.unsplash.com/photo-1551021794-01bf89c4456f?q=80&w=600&auto=format&fit=crop' },
  { id: 7, caption: 'Latihan Rutin Atlet Domino Kota Sorong', cat: 'foto', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop' },
  { id: 8, caption: 'Kunjungan Ketua ORADO Nasional ke Papua Barat Daya', cat: 'foto', img: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600&auto=format&fit=crop' },
  { id: 9, caption: 'Senam & Pemanasan sebelum Pertandingan', cat: 'foto', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop' },
  { id: 10, caption: 'Dokumentasi Pelantikan Pengurus 2026', cat: 'foto', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop' },
  { id: 11, caption: 'Sesi Foto Bersama Atlet & Pengurus', cat: 'foto', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop' },
  { id: 12, caption: 'Penyerahan Piagam Penghargaan Atlet', cat: 'foto', img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=600&auto=format&fit=crop' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('semua');
  const filtered = filter === 'semua' ? photos : photos.filter(p => p.cat === filter);

  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      {/* Page Header */}
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Galeri</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Dokumentasi kegiatan ORADO Pengurus Provinsi Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8">
          {['semua', 'foto', 'video'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 font-outfit text-sm font-semibold capitalize transition-all ${
                filter === tab
                  ? 'bg-[#0f3b5f] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab === 'semua' ? 'Semua' : tab === 'foto' ? 'Foto' : 'Video'}
            </button>
          ))}
        </div>

        {filter === 'video' ? (
          <div className="bg-white rounded-xl p-16 text-center shadow-sm border border-slate-200">
            <span className="material-symbols-outlined text-[64px] text-slate-300">videocam_off</span>
            <p className="font-outfit text-xl font-bold text-slate-400 mt-4">Belum Ada Video</p>
            <p className="font-jakarta text-sm text-slate-400 mt-1">Konten video akan segera hadir</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(photo => (
              <div key={photo.id} className="group bg-white overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img src={photo.img} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[40px] opacity-0 group-hover:opacity-100 transition-opacity">zoom_in</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-jakarta text-sm text-slate-700 font-medium leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

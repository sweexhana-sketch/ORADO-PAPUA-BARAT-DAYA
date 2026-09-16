import React from 'react';

export default function Home({ stats, pengcabList, onNavigate }) {
  // Data berita ORADO Papua Barat Daya
  const newsList = [
    {
      title: "Pengprov ORADO Papua Barat Daya Resmi Dikukuhkan, Siap Kembangkan Domino di 6 Kabupaten/Kota",
      date: "15 September 2026",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "ORADO Papua Barat Daya Audiensi dengan Dinas Pemuda dan Olahraga Provinsi, Siap Bersinergi",
      date: "14 September 2026",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Sosialisasi Olahraga Domino 101 Resmi Digelar di Kota Sorong, Antusias Tinggi dari Masyarakat",
      date: "13 September 2026",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Pengcab ORADO Sorong Selatan Terbentuk, Lengkapi 6 Wilayah Papua Barat Daya",
      date: "12 September 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "ORADO Papua Barat Daya Gelar Pelatihan dan Sertifikasi Wasit Domino 101 Tingkat Provinsi",
      date: "10 September 2026",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Ketua Pengprov ORADO Papua Barat Daya: Domino Naik Kelas, Kita Siap Menuju Kejurnas!",
      date: "8 September 2026",
      image: "https://images.unsplash.com/photo-1551021794-01bf89c4456f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col bg-[#e6ecef]">
      {/* 1. Welcome Section */}
      <div className="bg-white w-full py-16 md:py-24 shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Logo on the left */}
            <div className="flex-1 flex justify-center md:justify-end shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo ORADO Besar" 
                className="w-64 md:w-96 h-auto object-contain drop-shadow-xl" 
              />
            </div>
            {/* Text on the right */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-outfit text-xl md:text-2xl text-slate-600 mb-1 font-medium tracking-wide">
                SELAMAT DATANG DI PENGPROV
              </h2>
              <h1 className="font-outfit text-3xl md:text-5xl text-[#0b1b36] font-bold leading-tight mb-6">
                ORADO Papua Barat Daya
              </h1>
              <p className="font-jakarta text-sm md:text-base text-slate-600 max-w-lg mb-8 leading-relaxed">
                Pengurus Provinsi Federasi Olahraga Domino Nasional (ORADO) Papua Barat Daya adalah wadah organisasi resmi keolahragaan domino di wilayah Papua Barat Daya.
              </p>
              <button className="px-8 py-3.5 bg-[#0f3b5f] hover:bg-navy-midnight text-white font-outfit text-sm font-semibold shadow-md transition-colors">
                Tentang ORADO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Latest News Section */}
      <div className="w-full pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="font-outfit text-2xl font-bold text-[#0b1b36] uppercase tracking-wide">
              Berita Terbaru
            </h2>
            <button className="px-6 py-2 bg-[#0f3b5f] hover:bg-navy-midnight text-white font-outfit text-sm font-semibold flex items-center gap-2 transition-colors">
              <span>Lihat Semua</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((news, idx) => (
              <div key={idx} className="bg-[#0b1b36] text-white overflow-hidden shadow-md group cursor-pointer relative h-64 flex flex-col justify-end">
                {/* Background Image */}
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
                
                {/* Content Overlay */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="inline-block px-3 py-1 bg-primary text-xs font-bold font-outfit mb-3">
                    BERITA
                  </div>
                  <h3 className="font-outfit text-lg font-bold leading-tight mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-jakarta">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    <span>{news.date}</span>
                  </div>
                </div>

                {/* Pop-out icon */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-[18px]">open_in_new</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Pengcab Regional Breakdown Table */}
      <div className="w-full pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-outfit text-lg font-bold text-navy-midnight">Sebaran Pengcab ORADO (6 Wilayah)</h3>
                <p className="font-jakarta text-xs text-text-secondary">Rekapitulasi pendaftaran atlet resmi per Kabupaten / Kota Papua Barat Daya</p>
              </div>
              <span className="font-outfit text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                6 Pengcab Aktif
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pengcabList.map((p, idx) => (
                <div key={idx} className="p-4 bg-slate-surface border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-navy-midnight text-gold-champion font-outfit font-bold text-xs flex items-center justify-center shrink-0">
                      PBD
                    </div>
                    <div>
                      <div className="font-outfit font-bold text-xs text-navy-midnight">{p.name}</div>
                      <div className="font-jakarta text-[11px] text-text-secondary">Terverifikasi: {p.verified} Pasang</div>
                    </div>
                  </div>
                  <span className="font-outfit text-sm font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                    {p.count} Pasang
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

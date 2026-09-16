import React from 'react';

const pengurus = [
  { jabatan: 'Ketua Umum', nama: 'H. Mahmud Atururi, S.H., M.H.', foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
  { jabatan: 'Sekretaris Umum', nama: 'Ir. Benyamin Arisoy, M.T.', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
  { jabatan: 'Bendahara Umum', nama: 'Dra. Susanti Rahayu, M.M.', foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop' },
  { jabatan: 'Ketua Bidang Pembinaan & Prestasi', nama: 'Yusuf Mandobar, M.Pd.', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
  { jabatan: 'Ketua Bidang Organisasi', nama: 'Ahmad Fauzi, S.Pd.', foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  { jabatan: 'Ketua Bidang Humas & Media', nama: 'Rizky Pratama, S.Kom.', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
];

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Tentang Kami</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Mengenal ORADO Pengurus Provinsi Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col gap-8">
        {/* Hero + Deskripsi */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
          <div className="bg-[#0f3b5f] px-8 py-10 flex flex-col md:flex-row items-center gap-8">
            <img src="/logo.png" alt="Logo ORADO" className="h-36 w-auto object-contain drop-shadow-xl shrink-0" />
            <div className="text-white text-center md:text-left">
              <h2 className="font-outfit text-3xl font-bold leading-tight">ORADO Papua Barat Daya</h2>
              <p className="font-outfit text-[#fbbf24] font-semibold mt-1">Federasi Olahraga Domino Nasional — Pengurus Provinsi Papua Barat Daya</p>
              <p className="font-jakarta text-sm text-slate-300 mt-4 leading-relaxed max-w-xl">
                Pengurus Provinsi Federasi Olahraga Domino Nasional (ORADO) Papua Barat Daya adalah organisasi resmi yang bertugas membina, mengembangkan, dan memajukan olahraga domino di wilayah Provinsi Papua Barat Daya.
              </p>
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#cc1f1f]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#cc1f1f] text-[22px]">visibility</span>
              </div>
              <h2 className="font-outfit text-xl font-bold text-[#0b1b36]">Visi</h2>
            </div>
            <p className="font-jakarta text-sm text-slate-600 leading-relaxed">
              Menjadikan olahraga domino sebagai cabang olahraga yang diakui, berprestasi, dan digemari oleh seluruh lapisan masyarakat Papua Barat Daya serta mampu bersaing di tingkat nasional.
            </p>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0f3b5f]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0f3b5f] text-[22px]">flag</span>
              </div>
              <h2 className="font-outfit text-xl font-bold text-[#0b1b36]">Misi</h2>
            </div>
            <ul className="font-jakarta text-sm text-slate-600 space-y-2">
              {[
                'Membina dan mengembangkan potensi atlet domino di seluruh Kabupaten/Kota Papua Barat Daya',
                'Menyelenggarakan kompetisi yang teratur, transparan, dan berkualitas',
                'Menjalin sinergi dengan Pemerintah Daerah, KONI, dan pemangku kepentingan',
                'Meningkatkan kualitas wasit dan official yang profesional',
                'Mendorong tumbuhnya komunitas domino yang sehat dan sportif',
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#cc1f1f] font-bold shrink-0 mt-0.5">•</span>{m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sejarah */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-amber-600 text-[22px]">auto_stories</span>
            </div>
            <h2 className="font-outfit text-xl font-bold text-[#0b1b36]">Sejarah Singkat</h2>
          </div>
          <div className="font-jakarta text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              Federasi Olahraga Domino Nasional (ORADO) Papua Barat Daya dibentuk seiring dengan pemekaran Provinsi Papua Barat Daya yang diresmikan pada tahun 2022. Sejak saat itu, para pecinta dan praktisi olahraga domino di wilayah ini bersatu untuk membentuk wadah organisasi resmi di tingkat provinsi.
            </p>
            <p>
              Pengurus Provinsi ORADO Papua Barat Daya resmi dikukuhkan pada awal tahun 2024 dengan masa bakti 2024–2028. Organisasi ini berkomitmen untuk mengembangkan domino sebagai olahraga yang diakui dan kompetitif di Papua Barat Daya, dengan membina 6 Pengcab di seluruh Kabupaten/Kota.
            </p>
          </div>
        </div>

        {/* Struktur Pengurus */}
        <div>
          <h2 className="font-outfit text-xl font-bold text-[#0b1b36] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#cc1f1f]">groups</span>
            Struktur Pengurus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pengurus.map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-all">
                <img src={p.foto} alt={p.nama} className="w-14 h-14 rounded-full object-cover border-2 border-[#0f3b5f]/20 shrink-0" />
                <div>
                  <p className="font-jakarta text-[11px] text-[#cc1f1f] font-semibold uppercase tracking-wider">{p.jabatan}</p>
                  <p className="font-outfit font-bold text-[#0b1b36] text-sm mt-0.5 leading-snug">{p.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

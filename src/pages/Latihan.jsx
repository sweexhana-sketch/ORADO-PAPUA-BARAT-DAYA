import React from 'react';

const jadwal = [
  { hari: 'Selasa', waktu: '16:00 – 19:00 WIT', lokasi: 'GOR Kota Sorong', kategori: 'Latihan Umum', pelatih: 'Ahmad Fauzi, S.Pd' },
  { hari: 'Kamis', waktu: '16:00 – 19:00 WIT', lokasi: 'Aimas Convention Center', kategori: 'Latihan Teknik', pelatih: 'Yusuf Mandobar, M.Pd' },
  { hari: 'Sabtu', waktu: '08:00 – 12:00 WIT', lokasi: 'GOR Kabupaten Sorong', kategori: 'Latihan & Uji Tanding', pelatih: 'Ahmad Fauzi, S.Pd & Yusuf Mandobar, M.Pd' },
];

const tempat = [
  { nama: 'GOR Kota Sorong', alamat: 'Jl. Ahmad Yani, Kota Sorong', kapasitas: '20 Meja', icon: 'stadium' },
  { nama: 'Aimas Convention Center', alamat: 'Aimas, Kab. Sorong', kapasitas: '16 Meja', icon: 'location_city' },
  { nama: 'GOR Kabupaten Sorong', alamat: 'Aimas, Kab. Sorong', kapasitas: '24 Meja', icon: 'stadium' },
];

export default function Latihan() {
  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Jadwal Latihan</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Latihan rutin atlet ORADO Pengprov Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col gap-8">
        {/* Jadwal Mingguan */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-[#0f3b5f]">
            <h2 className="font-outfit text-lg font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
              Jadwal Latihan Mingguan
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {jadwal.map((j, idx) => (
              <div key={idx} className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#cc1f1f]/10 border-2 border-[#cc1f1f]/20 flex items-center justify-center shrink-0">
                    <span className="font-outfit font-black text-[#cc1f1f] text-xs text-center leading-tight">{j.hari}</span>
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0b1b36]">{j.kategori}</p>
                    <p className="font-jakarta text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>{j.waktu}
                    </p>
                    <p className="font-jakarta text-sm text-slate-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>{j.lokasi}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-jakarta text-xs text-slate-400">Pelatih</p>
                  <p className="font-outfit font-semibold text-[#0f3b5f] text-sm">{j.pelatih}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tempat Latihan */}
        <div>
          <h2 className="font-outfit text-xl font-bold text-[#0b1b36] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#cc1f1f]">location_on</span>
            Lokasi Latihan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tempat.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0f3b5f]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#0f3b5f] text-[28px]">{t.icon}</span>
                </div>
                <h3 className="font-outfit font-bold text-[#0b1b36]">{t.nama}</h3>
                <p className="font-jakarta text-sm text-slate-500 flex items-start gap-1">
                  <span className="material-symbols-outlined text-[14px] mt-0.5 shrink-0">location_on</span>{t.alamat}
                </p>
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-jakarta text-xs text-slate-400">Kapasitas Meja</span>
                  <span className="font-outfit font-bold text-[#0f3b5f] text-sm">{t.kapasitas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Kontak Pelatih */}
        <div className="bg-[#0f3b5f] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <p className="font-outfit font-bold text-lg">Ingin Bergabung Berlatih?</p>
            <p className="font-jakarta text-sm text-slate-300 mt-1">Hubungi sekretariat Pengprov ORADO Papua Barat Daya untuk informasi pendaftaran atlet.</p>
          </div>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-outfit font-bold text-sm rounded-lg transition-colors whitespace-nowrap shadow-lg">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

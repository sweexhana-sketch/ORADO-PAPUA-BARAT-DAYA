import React from 'react';

const riwayat = [
  { nama: 'Turnamen Domino Piala Bupati Sorong 2025', tanggal: '20–22 Juni 2025', lokasi: 'GOR Kabupaten Sorong', peserta: '64 Pasang', status: 'Selesai' },
  { nama: 'Open Turnamen Domino HUT Kota Sorong 2025', tanggal: '5–7 Februari 2025', lokasi: 'Aimas Convention Center', peserta: '48 Pasang', status: 'Selesai' },
  { nama: 'Turnamen Perdana Pengprov ORADO Papua Barat Daya', tanggal: '10–12 Oktober 2024', lokasi: 'GOR Kota Sorong', peserta: '32 Pasang', status: 'Selesai' },
];

export default function Turnamen() {
  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Turnamen Daerah</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Turnamen Domino 101 wilayah Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col gap-8">
        {/* No Active Tournament Banner */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-12 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-[48px] text-slate-400">sports_score</span>
          </div>
          <h2 className="font-outfit text-2xl font-bold text-slate-500">Tidak Ada Turnamen Aktif</h2>
          <p className="font-jakarta text-sm text-slate-400 max-w-md">Belum ada turnamen yang sedang berlangsung saat ini. Informasi turnamen berikutnya akan diumumkan melalui halaman ini dan media sosial resmi ORADO Papua Barat Daya.</p>
        </div>

        {/* Riwayat Turnamen */}
        <div>
          <h2 className="font-outfit text-xl font-bold text-[#0b1b36] mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#cc1f1f]">history</span>
            Riwayat Turnamen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {riwayat.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="bg-[#0f3b5f] px-5 py-4">
                  <span className="inline-block px-2.5 py-0.5 bg-emerald-400 text-emerald-900 font-outfit text-xs font-bold rounded-full mb-2">{t.status}</span>
                  <h3 className="font-outfit text-white font-bold leading-snug">{t.nama}</h3>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-600 font-jakarta text-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#0f3b5f]">calendar_today</span>
                    {t.tanggal}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-jakarta text-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#0f3b5f]">location_on</span>
                    {t.lokasi}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-jakarta text-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#0f3b5f]">groups</span>
                    {t.peserta}
                  </div>
                  <button className="mt-2 w-full py-2 border border-[#0f3b5f] text-[#0f3b5f] font-outfit text-xs font-semibold hover:bg-[#0f3b5f] hover:text-white transition-colors rounded">
                    Lihat Hasil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

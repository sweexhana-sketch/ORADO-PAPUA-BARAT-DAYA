import React from 'react';

const arsip = [
  { tahun: '2025', nama: 'Kejurnas Domino 101 Piala Panglima TNI', lokasi: 'Jakarta', peserta: '256 Pasang', status: 'Selesai' },
  { tahun: '2024', nama: 'Kejurnas Domino 101 Piala Presiden', lokasi: 'Surabaya', peserta: '224 Pasang', status: 'Selesai' },
  { tahun: '2023', nama: 'Kejurnas Domino 101 Piala Menpora', lokasi: 'Makassar', peserta: '192 Pasang', status: 'Selesai' },
];

export default function Kejurnas() {
  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Kejuaraan Nasional</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Informasi Kejuaraan Nasional Domino 101 seluruh Indonesia</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col gap-8">
        {/* No Active Kejurnas Banner */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-12 flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-[48px] text-slate-400">emoji_events</span>
          </div>
          <h2 className="font-outfit text-2xl font-bold text-slate-500">Belum Ada Jadwal Kejurnas</h2>
          <p className="font-jakarta text-sm text-slate-400 max-w-md">Jadwal Kejuaraan Nasional berikutnya belum diumumkan. Pantau terus halaman ini untuk informasi terbaru dari ORADO Pusat.</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg mt-2">
            <span className="material-symbols-outlined text-amber-500 text-[18px]">notifications</span>
            <span className="font-jakarta text-xs text-amber-700">Aktifkan notifikasi untuk mendapatkan info terbaru</span>
          </div>
        </div>

        {/* Arsip Kejurnas */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#0f3b5f] text-[22px]">history</span>
            <h2 className="font-outfit text-lg font-bold text-[#0b1b36]">Arsip Kejurnas</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {arsip.map((a) => (
              <div key={a.tahun} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0f3b5f] text-white flex items-center justify-center font-outfit font-bold text-sm shrink-0">
                    {a.tahun}
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#0b1b36]">{a.nama}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1 font-jakarta text-xs text-slate-500">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>{a.lokasi}
                      </span>
                      <span className="flex items-center gap-1 font-jakarta text-xs text-slate-500">
                        <span className="material-symbols-outlined text-[14px]">groups</span>{a.peserta}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-outfit text-xs font-bold">{a.status}</span>
                  <button className="px-4 py-2 border border-[#0f3b5f] text-[#0f3b5f] font-outfit text-xs font-semibold hover:bg-[#0f3b5f] hover:text-white transition-colors rounded">
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

import React from 'react';

const beritaList = [
  { judul: 'Pengprov ORADO Papua Barat Daya Resmi Dikukuhkan, Siap Kembangkan Domino di 6 Kab/Kota', tanggal: '15 Sep 2026', kategori: 'Organisasi', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop' },
  { judul: 'ORADO Papua Barat Daya Audiensi dengan Dinas Pemuda dan Olahraga Provinsi, Siap Bersinergi', tanggal: '14 Sep 2026', kategori: 'Kegiatan', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop' },
  { judul: 'Sosialisasi Olahraga Domino 101 Resmi Digelar di Kota Sorong, Antusias Tinggi dari Masyarakat', tanggal: '13 Sep 2026', kategori: 'Sosialisasi', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop' },
  { judul: 'Pengcab ORADO Sorong Selatan Terbentuk, Lengkapi 6 Wilayah Papua Barat Daya', tanggal: '12 Sep 2026', kategori: 'Organisasi', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop' },
  { judul: 'ORADO Papua Barat Daya Gelar Pelatihan dan Sertifikasi Wasit Domino 101 Tingkat Provinsi', tanggal: '10 Sep 2026', kategori: 'Pelatihan', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop' },
  { judul: 'Ketua Pengprov ORADO Papua Barat Daya: Domino Naik Kelas, Kita Siap Menuju Kejurnas!', tanggal: '8 Sep 2026', kategori: 'Prestasi', img: 'https://images.unsplash.com/photo-1551021794-01bf89c4456f?q=80&w=600&auto=format&fit=crop' },
  { judul: 'Rapat Koordinasi Pengcab se-Papua Barat Daya Bahas Program Kerja 2026–2027', tanggal: '5 Sep 2026', kategori: 'Organisasi', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop' },
  { judul: 'Kunjungan Ketua Umum ORADO Nasional ke Papua Barat Daya Perkuat Sinergi Pusat-Daerah', tanggal: '1 Sep 2026', kategori: 'Kegiatan', img: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600&auto=format&fit=crop' },
];

const katColors = {
  Organisasi: 'bg-blue-100 text-blue-700',
  Kegiatan: 'bg-purple-100 text-purple-700',
  Sosialisasi: 'bg-green-100 text-green-700',
  Pelatihan: 'bg-amber-100 text-amber-700',
  Prestasi: 'bg-red-100 text-red-700',
};

export default function Berita() {
  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Berita & Informasi</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Kabar terkini dari ORADO Pengprov Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beritaList.map((b, idx) => (
            <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-all group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={b.img} alt={b.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded font-outfit text-xs font-bold ${katColors[b.kategori] || 'bg-slate-100 text-slate-700'}`}>
                  {b.kategori}
                </span>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 font-jakarta text-xs text-slate-400 mb-2">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>{b.tanggal}
                </p>
                <h3 className="font-outfit font-bold text-[#0b1b36] leading-snug line-clamp-3 mb-4">{b.judul}</h3>
                <button className="flex items-center gap-1 font-outfit text-sm text-[#0f3b5f] font-semibold hover:gap-2 transition-all">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

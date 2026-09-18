import React, { useState } from 'react';

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#e6ecef] py-0">
      <div className="bg-white shadow-sm mb-8 border-b-4 border-[#cc1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-outfit text-3xl font-bold text-[#0b1b36] uppercase tracking-wide">Hubungi Kami</h1>
          <p className="font-jakarta text-sm text-slate-500 mt-1">Sampaikan pertanyaan atau saran Anda kepada ORADO Papua Barat Daya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Kontak */}
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f3b5f]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0f3b5f] text-[26px]">location_on</span>
              </div>
              <div>
                <p className="font-outfit font-bold text-[#0b1b36]">Alamat Sekretariat</p>
                <p className="font-jakarta text-sm text-slate-600 mt-1 leading-relaxed">
                  Sekretariat Pengprov ORADO Papua Barat Daya<br />
                  Kota Sorong, Provinsi Papua Barat Daya
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f3b5f]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0f3b5f] text-[26px]">mail</span>
              </div>
              <div>
                <p className="font-outfit font-bold text-[#0b1b36]">Email</p>
                <a href="mailto:info@orado-papuabaratdaya.id" className="font-jakarta text-sm text-[#0f3b5f] hover:underline mt-1 block">
                  info@orado-papuabaratdaya.id
                </a>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 shadow-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-emerald-600 text-[26px]">chat</span>
              </div>
              <div className="flex-1">
                <p className="font-outfit font-bold text-[#0b1b36]">WhatsApp</p>
                <p className="font-jakarta text-sm text-slate-600 mt-1">Hubungi kami langsung melalui WhatsApp untuk respon lebih cepat</p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-outfit font-bold text-sm rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  Chat WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <p className="font-outfit font-bold text-[#0b1b36] mb-3">Ikuti Kami</p>
              <div className="flex gap-3">
                {[
                  { label: 'Instagram', icon: 'photo_camera', color: 'bg-pink-500' },
                  { label: 'Facebook', icon: 'thumb_up', color: 'bg-blue-600' },
                  { label: 'YouTube', icon: 'play_circle', color: 'bg-red-500' },
                ].map(s => (
                  <button key={s.label} className={`flex items-center gap-2 px-4 py-2 ${s.color} text-white font-outfit text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
                    <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-8">
            <h2 className="font-outfit text-xl font-bold text-[#0b1b36] mb-6">Kirim Pesan</h2>
            {sent ? (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-600 text-[36px]">check_circle</span>
                </div>
                <p className="font-outfit font-bold text-xl text-[#0b1b36]">Pesan Terkirim!</p>
                <p className="font-jakarta text-sm text-slate-500">Terima kasih, kami akan merespons dalam 1–2 hari kerja.</p>
                <button onClick={() => setSent(false)} className="px-6 py-2.5 bg-[#0f3b5f] text-white font-outfit font-semibold text-sm rounded-lg mt-2 hover:bg-navy-midnight transition-colors">
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-jakarta text-sm font-semibold text-slate-700 mb-1.5 block">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap"
                    value={form.nama}
                    onChange={e => setForm({...form, nama: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-jakarta text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-[#0f3b5f] bg-slate-50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="font-jakarta text-sm font-semibold text-slate-700 mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Masukkan alamat email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-jakarta text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-[#0f3b5f] bg-slate-50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="font-jakarta text-sm font-semibold text-slate-700 mb-1.5 block">Pesan *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    value={form.pesan}
                    onChange={e => setForm({...form, pesan: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 font-jakarta text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-[#0f3b5f] bg-slate-50 focus:bg-white transition-all resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-[#0f3b5f] hover:bg-navy-midnight text-white font-outfit font-bold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

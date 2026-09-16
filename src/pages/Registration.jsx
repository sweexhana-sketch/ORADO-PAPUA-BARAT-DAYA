import React, { useState } from 'react';
import { submitRegistration } from '../services/api';

export default function Registration({ onComplete }) {
  const [formData, setFormData] = useState({
    kategori: 'Ganda Putra',
    pengcab: 'Kota Sorong',
    klub: '',
    atlet1Nama: '',
    atlet1Nik: '',
    atlet1Hp: '',
    atlet1Kta: '',
    atlet1KtpFile: null,
    atlet2Nama: '',
    atlet2Nik: '',
    atlet2Hp: '',
    atlet2Kta: '',
    atlet2KtpFile: null,
    official: '',
    officialHp: '',
    antiJudiCheck: false,
    keabsahanCheck: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successResult, setSuccessResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (field, e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [field]: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.antiJudiCheck || !formData.keabsahanCheck) {
      setError('Anda wajib menyetujui kedua Pakta Integritas (Anti-Judi & Keabsahan KTP).');
      return;
    }

    if (formData.atlet1Nik.length !== 16 || formData.atlet2Nik.length !== 16) {
      setError('Nomor Induk Kependudukan (NIK) harus berjumlah persis 16 digit.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        kategori: formData.kategori,
        pengcab: formData.pengcab,
        klub: formData.klub,
        atlet1: {
          nama: formData.atlet1Nama,
          nik: formData.atlet1Nik,
          hp: formData.atlet1Hp,
          kta: formData.atlet1Kta,
        },
        atlet2: {
          nama: formData.atlet2Nama,
          nik: formData.atlet2Nik,
          hp: formData.atlet2Hp,
          kta: formData.atlet2Kta,
        },
        official: formData.official,
        officialHp: formData.officialHp,
      };

      const res = await submitRegistration(payload);
      setSuccessResult(res.registration);
      if (onComplete) onComplete();
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan pendaftaran.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      {/* Header Banner */}
      <div className="bg-navy-midnight rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="font-outfit text-xs text-gold-champion font-bold uppercase tracking-wider">
            Portal Pendaftaran Resmi KEJURDA I 2026
          </span>
          <h2 className="font-outfit text-2xl font-extrabold mt-1">Formulir Pendaftaran Pasangan Atlet</h2>
          <p className="font-jakarta text-xs text-slate-300 mt-1">
            Lengkapi identitas kedua atlet berpasangan secara akurat untuk verifikasi berkas oleh Tim Keabsahan Atlet KONI PBD.
          </p>
        </div>
        <div className="bg-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 shrink-0 border border-white/10">
          <span className="material-symbols-outlined text-gold-champion text-[24px]">verified_user</span>
          <div className="flex flex-col text-left">
            <span className="font-outfit text-[10px] text-slate-300">Waktu Verifikasi</span>
            <span className="font-outfit text-xs font-bold text-white">Maksimal 1x24 Jam</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">error</span>
          <span>{error}</span>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col gap-8">
        
        {/* SECTION A: Kategori & Pengcab */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-navy-midnight">
            <span className="w-7 h-7 rounded-full bg-primary text-white font-outfit text-xs flex items-center justify-center font-bold">A</span>
            <h3 className="font-outfit text-base font-bold">Kategori &amp; Pengcab Asal Utusan</h3>
          </div>

          {/* Kategori Radio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['Ganda Putra', 'Ganda Putri', 'Ganda Campuran'].map((cat) => (
              <label
                key={cat}
                className={`relative flex flex-col p-4 rounded-xl cursor-pointer border transition-all ${
                  formData.kategori === cat
                    ? 'bg-primary/5 border-primary shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  name="kategori"
                  value={cat}
                  checked={formData.kategori === cat}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className={`material-symbols-outlined text-[24px] ${formData.kategori === cat ? 'text-primary' : 'text-slate-500'}`}>
                    {cat === 'Ganda Putra' ? 'male' : cat === 'Ganda Putri' ? 'female' : 'wc'}
                  </span>
                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.kategori === cat ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                    {formData.kategori === cat && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </span>
                </div>
                <span className={`font-outfit text-sm font-bold ${formData.kategori === cat ? 'text-primary' : 'text-navy-midnight'}`}>
                  {cat}
                </span>
                <span className="font-jakarta text-[11px] text-text-secondary mt-1">
                  {cat === 'Ganda Putra'
                    ? 'Khusus atlet putra domisili Papua Barat Daya'
                    : cat === 'Ganda Putri'
                    ? 'Khusus srikandi domino Papua Barat Daya'
                    : 'Kombinasi 1 atlet putra & 1 atlet putri'}
                </span>
              </label>
            ))}
          </div>

          {/* Select Pengcab & Klub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-bold text-navy-midnight">
                Utusan Pengcab / Wilayah Kabupaten/Kota <span className="text-primary">*</span>
              </label>
              <select
                name="pengcab"
                value={formData.pengcab}
                onChange={handleChange}
                required
                className="w-full bg-slate-100 rounded-xl py-3 px-4 text-xs font-jakarta text-navy-midnight focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-slate-200"
              >
                <option value="Kota Sorong">Pengcab ORADO Kota Sorong</option>
                <option value="Kabupaten Sorong">Pengcab ORADO Kabupaten Sorong (Tuan Rumah)</option>
                <option value="Raja Ampat">Pengcab ORADO Kabupaten Raja Ampat</option>
                <option value="Maybrat">Pengcab ORADO Kabupaten Maybrat</option>
                <option value="Tambrauw">Pengcab ORADO Kabupaten Tambrauw</option>
                <option value="Sorong Selatan">Pengcab ORADO Kabupaten Sorong Selatan</option>
                <option value="Klub Umum">Jalur Rekomendasi Khusus Klub / Gardu Umum Terdaftar</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-bold text-navy-midnight">Nama Klub / Gardu Domino</label>
              <input
                type="text"
                name="klub"
                value={formData.klub}
                onChange={handleChange}
                placeholder="Contoh: Domino Club Cenderawasih Aimas"
                className="w-full bg-slate-100 rounded-xl py-3 px-4 text-xs font-jakarta text-navy-midnight focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-slate-200"
              />
            </div>
          </div>
        </div>

        {/* SECTION B: Atlet 1 (Kapten) */}
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-navy-midnight">
              <span className="w-7 h-7 rounded-full bg-navy-midnight text-white font-outfit text-xs flex items-center justify-center font-bold">B</span>
              <div>
                <h3 className="font-outfit text-sm font-bold">Data Atlet 1 (Kapten Pasangan)</h3>
                <p className="font-jakarta text-[11px] text-text-secondary">Perwakilan teknis di meja pertandingan &amp; kapten tim</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary text-[24px]">stars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">Nama Lengkap Sesuai KTP <span class="text-primary">*</span></label>
              <input
                type="text"
                name="atlet1Nama"
                value={formData.atlet1Nama}
                onChange={handleChange}
                required
                placeholder="Nama Lengkap Atlet 1"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">NIK (16 Digit) <span className="text-primary">*</span></label>
              <input
                type="text"
                name="atlet1Nik"
                maxLength={16}
                value={formData.atlet1Nik}
                onChange={handleChange}
                required
                placeholder="9171xxxxxxxxxxxx"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary font-mono"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">No. WhatsApp Aktif <span className="text-primary">*</span></label>
              <input
                type="tel"
                name="atlet1Hp"
                value={formData.atlet1Hp}
                onChange={handleChange}
                required
                placeholder="08xxxxxxxxxx"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">Nomor E-KTA ORADO (Opsional)</label>
              <input
                type="text"
                name="atlet1Kta"
                value={formData.atlet1Kta}
                onChange={handleChange}
                placeholder="ORADO-PBD-2024-XXXX"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Upload KTP Atlet 1 */}
          <div className="flex flex-col gap-1.5">
            <label className="font-outfit text-xs font-semibold text-navy-midnight">Unggah Foto KTP Atlet 1 (Papua Barat Daya) <span className="text-primary">*</span></label>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">badge</span>
                <div>
                  <div className="font-outfit text-xs font-bold text-navy-midnight">
                    {formData.atlet1KtpFile || 'Lampirkan File KTP (JPG / PNG / PDF)'}
                  </div>
                  <div className="font-jakarta text-[10px] text-text-secondary">Maksimal ukuran 3 MB</div>
                </div>
              </div>
              <label className="py-1.5 px-3 rounded-lg bg-slate-200 text-navy-midnight font-outfit text-xs font-bold hover:bg-slate-300 cursor-pointer">
                Pilih File
                <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => handleFileChange('atlet1KtpFile', e)} />
              </label>
            </div>
          </div>
        </div>

        {/* SECTION C: Atlet 2 (Partner) */}
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-navy-midnight">
              <span className="w-7 h-7 rounded-full bg-navy-midnight text-white font-outfit text-xs flex items-center justify-center font-bold">C</span>
              <div>
                <h3 className="font-outfit text-sm font-bold">Data Atlet 2 (Partner Bermain)</h3>
                <p className="font-jakarta text-[11px] text-text-secondary">Pasangan bermain domino satu meja</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-ocean-teal text-[24px]">group</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">Nama Lengkap Sesuai KTP <span className="text-primary">*</span></label>
              <input
                type="text"
                name="atlet2Nama"
                value={formData.atlet2Nama}
                onChange={handleChange}
                required
                placeholder="Nama Lengkap Atlet 2"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">NIK (16 Digit) <span className="text-primary">*</span></label>
              <input
                type="text"
                name="atlet2Nik"
                maxLength={16}
                value={formData.atlet2Nik}
                onChange={handleChange}
                required
                placeholder="9171xxxxxxxxxxxx"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary font-mono"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">No. WhatsApp Aktif <span className="text-primary">*</span></label>
              <input
                type="tel"
                name="atlet2Hp"
                value={formData.atlet2Hp}
                onChange={handleChange}
                required
                placeholder="08xxxxxxxxxx"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-outfit text-xs font-semibold text-navy-midnight">Nomor E-KTA ORADO (Opsional)</label>
              <input
                type="text"
                name="atlet2Kta"
                value={formData.atlet2Kta}
                onChange={handleChange}
                placeholder="ORADO-PBD-2024-XXXX"
                className="w-full bg-white rounded-xl py-2.5 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Upload KTP Atlet 2 */}
          <div className="flex flex-col gap-1.5">
            <label className="font-outfit text-xs font-semibold text-navy-midnight">Unggah Foto KTP Atlet 2 (Papua Barat Daya) <span className="text-primary">*</span></label>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-ocean-teal text-[24px]">badge</span>
                <div>
                  <div className="font-outfit text-xs font-bold text-navy-midnight">
                    {formData.atlet2KtpFile || 'Lampirkan File KTP (JPG / PNG / PDF)'}
                  </div>
                  <div className="font-jakarta text-[10px] text-text-secondary">Maksimal ukuran 3 MB</div>
                </div>
              </div>
              <label className="py-1.5 px-3 rounded-lg bg-slate-200 text-navy-midnight font-outfit text-xs font-bold hover:bg-slate-300 cursor-pointer">
                Pilih File
                <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => handleFileChange('atlet2KtpFile', e)} />
              </label>
            </div>
          </div>
        </div>

        {/* SECTION D: Official / Manager */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-outfit text-xs font-bold text-navy-midnight">Nama Official / Manajer Tim (Opsional)</label>
            <input
              type="text"
              name="official"
              value={formData.official}
              onChange={handleChange}
              placeholder="Nama Pendamping Tim"
              className="w-full bg-slate-100 rounded-xl py-3 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-outfit text-xs font-bold text-navy-midnight">No. Kontak Official</label>
            <input
              type="tel"
              name="officialHp"
              value={formData.officialHp}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full bg-slate-100 rounded-xl py-3 px-4 text-xs font-jakarta border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* SECTION E: Pakta Integritas */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-navy-midnight">
            <span className="material-symbols-outlined text-gold-champion text-[24px]">gavel</span>
            <h4 className="font-outfit text-sm font-bold">Pakta Integritas Atlet Domino Papua Barat Daya</h4>
          </div>

          <div className="flex flex-col gap-3 text-xs font-jakarta text-navy-midnight">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="antiJudiCheck"
                checked={formData.antiJudiCheck}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 rounded text-primary accent-primary cursor-pointer"
              />
              <span>
                <strong>Komitmen Bebas Judi:</strong> Kami menjamin pendaftaran ini 100% demi prestasi olahraga daerah dan bebas dari segala bentuk praktik judi/taruhan sebelum, selama, dan sesudah turnamen.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="keabsahanCheck"
                checked={formData.keabsahanCheck}
                onChange={handleChange}
                required
                className="mt-0.5 w-4 h-4 rounded text-primary accent-primary cursor-pointer"
              />
              <span>
                <strong>Keabsahan Data KTP &amp; Statuta 101:</strong> Kami menyatakan keaslian KTP domisili Papua Barat Daya dan bersedia didiskualifikasi bila terbukti memberikan keterangan palsu.
              </span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <a
            href="https://wa.me/6281248009921"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-midnight font-outfit text-xs font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">forum</span>
            <span>Bantuan Sekretariat WA</span>
          </a>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-crimson-deep text-white font-outfit text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Memproses...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Kirim Formulir Pendaftaran</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Success Modal Output */}
      {successResult && (
        <div className="fixed inset-0 bg-navy-midnight/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center gap-5 border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>

            <div>
              <h3 className="font-outfit text-xl font-bold text-navy-midnight">Pendaftaran Berhasil Dikirim!</h3>
              <p className="font-jakarta text-xs text-text-secondary mt-1">
                Data pasangan atlet telah tersimpan ke dalam database portal ORADO PBD 2026.
              </p>
            </div>

            <div className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2 text-left">
              <div className="flex justify-between items-center">
                <span className="font-outfit text-[11px] text-text-muted">Kode Registrasi Unik:</span>
                <span className="font-outfit text-sm font-mono font-bold text-primary">{successResult.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-outfit text-[11px] text-text-muted">Pasangan Atlet:</span>
                <span className="font-outfit text-xs font-bold text-navy-midnight">{successResult.atlet1.nama} &amp; {successResult.atlet2.nama}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-outfit text-[11px] text-text-muted">Utusan Pengcab:</span>
                <span className="font-outfit text-xs font-bold text-navy-midnight">{successResult.pengcab}</span>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-midnight font-outfit text-xs font-bold flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                <span>Cetak Kartu Registrasi</span>
              </button>
              <button
                onClick={() => setSuccessResult(null)}
                className="flex-1 py-2.5 rounded-xl bg-navy-midnight hover:bg-navy-surface text-white font-outfit text-xs font-bold"
              >
                Selesai &amp; Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

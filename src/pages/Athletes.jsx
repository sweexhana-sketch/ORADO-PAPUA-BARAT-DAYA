import React, { useState, useEffect } from 'react';
import { fetchAthletes, verifyAthleteByNik } from '../services/api';

export default function Athletes() {
  const [athletes, setAthletes] = useState([]);
  const [searchNik, setSearchNik] = useState('');
  const [searchedAthlete, setSearchedAthlete] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchAthletes();
      setAthletes(data);
    }
    load();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setSearchedAthlete(null);

    if (!searchNik.trim()) return;

    try {
      const res = await verifyAthleteByNik(searchNik.trim());
      setSearchedAthlete(res);
    } catch (err) {
      setError('NIK atau No. E-KTA tidak ditemukan dalam database resmi Pengprov ORADO PBD.');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header Banner */}
      <div className="bg-navy-midnight rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="font-outfit text-xs text-gold-champion font-bold uppercase tracking-wider">
            DATABASE ATLET DOMINO PAPUA BARAT DAYA
          </span>
          <h2 className="font-outfit text-2xl font-extrabold mt-1">Direktori Atlet &amp; Cek Kartu E-KTA</h2>
          <p className="font-jakarta text-xs text-slate-300 mt-1">
            Verifikasi keabsahan lisensi atlet domino berprestasi terdaftar Pengprov PB ORADO.
          </p>
        </div>

        {/* E-KTA Search Form */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 bg-white/10 p-2 rounded-xl border border-white/10 shrink-0 w-full md:w-80">
          <input
            type="text"
            placeholder="Cari NIK / No. E-KTA..."
            value={searchNik}
            onChange={(e) => setSearchNik(e.target.value)}
            className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none font-outfit"
          />
          <button type="submit" className="px-3 py-1.5 rounded-lg bg-gold-champion text-navy-midnight font-outfit text-xs font-bold shrink-0">
            Verifikasi
          </button>
        </form>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">error</span>
          <span>{error}</span>
        </div>
      )}

      {/* Searched E-KTA Pass Output */}
      {searchedAthlete && (
        <div className="bg-gradient-to-br from-navy-surface via-navy-midnight to-primary/30 p-6 rounded-2xl text-white shadow-2xl border-2 border-gold-champion flex flex-col gap-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold-champion text-[28px]">verified</span>
              <div>
                <h3 className="font-outfit text-base font-bold text-white">Kartu E-KTA Atlet Domino Resmi</h3>
                <span className="font-outfit text-[10px] text-gold-champion font-bold uppercase">PENGPROV PB ORADO PAPUA BARAT DAYA</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-outfit text-xs font-extrabold">
              TERVERIFIKASI ABSAH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div>
              <div className="font-outfit text-[10px] text-slate-300">Nama Lengkap Atlet:</div>
              <div className="font-outfit text-lg font-bold text-white">{searchedAthlete.nama}</div>
            </div>
            <div>
              <div className="font-outfit text-[10px] text-slate-300">Nomor E-KTA ORADO:</div>
              <div className="font-outfit text-sm font-mono font-bold text-gold-champion">{searchedAthlete.kta}</div>
            </div>
            <div>
              <div className="font-outfit text-[10px] text-slate-300">Utusan Pengcab:</div>
              <div className="font-outfit text-xs font-semibold text-white">{searchedAthlete.pengcab}</div>
            </div>
            <div>
              <div className="font-outfit text-[10px] text-slate-300">Domisili Klub / Gardu:</div>
              <div className="font-outfit text-xs font-semibold text-white">{searchedAthlete.klub}</div>
            </div>
          </div>
        </div>
      )}

      {/* Roster Table of Verified Athletes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
        <h3 className="font-outfit text-base font-bold text-navy-midnight">Daftar Atlet Peringkat Utama Papua Barat Daya</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-jakarta text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-text-muted font-outfit text-[11px] uppercase tracking-wider">
                <th className="py-3 px-3">Rank</th>
                <th className="py-3 px-3">Nama Atlet</th>
                <th className="py-3 px-3">No. E-KTA</th>
                <th className="py-3 px-3">Pengcab</th>
                <th className="py-3 px-3">Klub</th>
                <th className="py-3 px-3 text-center">Tanding / Menang</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {athletes.map((a, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-3 font-outfit font-extrabold text-primary">#{a.peringkatProvinsi}</td>
                  <td className="py-3 px-3 font-outfit font-bold text-navy-midnight">{a.nama}</td>
                  <td className="py-3 px-3 font-mono text-slate-600">{a.kta}</td>
                  <td className="py-3 px-3 text-slate-700">{a.pengcab}</td>
                  <td className="py-3 px-3 text-slate-700">{a.klub}</td>
                  <td className="py-3 px-3 text-center font-outfit font-bold text-emerald-700">
                    {a.menang} / {a.totalTanding} Win
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

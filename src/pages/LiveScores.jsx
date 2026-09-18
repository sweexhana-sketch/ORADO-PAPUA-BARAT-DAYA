import React, { useState, useEffect } from 'react';
import { fetchMatches, updateMatchScore } from '../services/api';
import DominoTile from '../components/DominoTile';
import StatusBadge from '../components/StatusBadge';

export default function LiveScores({ isAdmin }) {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const data = await fetchMatches();
    setMatches(data);
    if (data.length > 0 && !selectedMatch) {
      setSelectedMatch(data[0]);
    } else if (selectedMatch) {
      const updated = data.find((m) => m.id === selectedMatch.id);
      if (updated) setSelectedMatch(updated);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScoreUpdate = async (matchId, deltaA, deltaB, logDesc) => {
    try {
      await updateMatchScore(matchId, {
        deltaA,
        deltaB,
        logText: logDesc,
      });
      await loadData();
    } catch (err) {
      alert('Gagal mengupdate skor pertandingan.');
    }
  };

  if (loading) {
    return (
      <div className="p-12 text-center font-outfit text-sm text-text-secondary">
        Memuat papan skor pertandingan Meja 101...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top Banner Header */}
      <div className="bg-navy-midnight rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright animate-ping" />
            <span className="font-outfit text-xs text-crimson-bright font-extrabold uppercase tracking-widest">
              SISTEM GUGUR MEJA 101 PB ORADO
            </span>
          </div>
          <h2 className="font-outfit text-2xl font-extrabold mt-1">Papan Skor Live Matches</h2>
          <p className="font-jakarta text-xs text-slate-300 mt-1">
            Pantau perolehan poin real-time Meja 1 s.d. Meja 16 Kejurda Domino Papua Barat Daya 2026.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 shrink-0">
          <DominoTile top={6} bottom={6} size="sm" />
          <div className="flex flex-col text-left">
            <span className="font-outfit text-[10px] text-slate-300">Aturan Meja</span>
            <span className="font-outfit text-xs font-bold text-gold-champion">Batas Poin Win 101</span>
          </div>
        </div>
      </div>

      {/* Grid Layout: Selected Active Match + Match Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Main Scoreboard Display (Selected Match) */}
        {selectedMatch && (
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-navy-midnight text-gold-champion font-outfit font-extrabold text-sm flex items-center justify-center">
                  #{selectedMatch.meja}
                </span>
                <div>
                  <h3 className="font-outfit text-base font-bold text-navy-midnight">{selectedMatch.babak}</h3>
                  <p className="font-jakarta text-[11px] text-text-secondary">Venue: Meja Pertandingan #{selectedMatch.meja}</p>
                </div>
              </div>
              <StatusBadge status={selectedMatch.status} />
            </div>

            {/* Score VS Board */}
            <div className="grid grid-cols-11 items-center p-6 rounded-2xl bg-gradient-to-br from-navy-surface to-navy-midnight text-white shadow-xl relative overflow-hidden">
              
              {/* Pair A */}
              <div className="col-span-5 flex flex-col items-center text-center gap-2">
                <span className="font-outfit text-[10px] px-2 py-0.5 rounded bg-primary text-white font-extrabold uppercase">
                  {selectedMatch.pairA.pengcab}
                </span>
                <h4 className="font-outfit text-base font-bold leading-tight">{selectedMatch.pairA.nama}</h4>
                <span className="font-jakarta text-[11px] text-slate-300">{selectedMatch.pairA.klub}</span>

                <div className="font-outfit text-5xl font-extrabold text-gold-champion mt-2">
                  {selectedMatch.scoreA}
                </div>
                <span className="font-outfit text-[10px] text-slate-300">Poin Meja 101</span>
              </div>

              {/* VS Divider */}
              <div className="col-span-1 flex flex-col items-center justify-center text-slate-400">
                <span className="font-outfit font-extrabold text-xs text-gold-champion">VS</span>
                <div className="w-px h-16 bg-slate-700 my-2" />
                <span className="font-outfit text-[10px] text-slate-400">101</span>
              </div>

              {/* Pair B */}
              <div className="col-span-5 flex flex-col items-center text-center gap-2">
                <span className="font-outfit text-[10px] px-2 py-0.5 rounded bg-ocean-teal text-white font-extrabold uppercase">
                  {selectedMatch.pairB.pengcab}
                </span>
                <h4 className="font-outfit text-base font-bold leading-tight">{selectedMatch.pairB.nama}</h4>
                <span className="font-jakarta text-[11px] text-slate-300">{selectedMatch.pairB.klub}</span>

                <div className="font-outfit text-5xl font-extrabold text-gold-champion mt-2">
                  {selectedMatch.scoreB}
                </div>
                <span className="font-outfit text-[10px] text-slate-300">Poin Meja 101</span>
              </div>
            </div>

            {/* Quick Admin Wasit Controller */}
            {isAdmin && selectedMatch.status === 'LIVE' && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-outfit text-xs font-bold text-navy-midnight flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-amber-600 text-[18px]">sports</span>
                    Kontrol Wasit / Input Poin Meja #{selectedMatch.meja}
                  </span>
                  <span className="font-outfit text-[10px] text-amber-800 font-semibold">Mode Admin Wasit</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Pair A Steppers */}
                  <div className="flex flex-col gap-1.5 p-3 bg-white rounded-lg border border-amber-200">
                    <span className="font-outfit text-[11px] font-bold text-primary truncate">{selectedMatch.pairA.nama}</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleScoreUpdate(selectedMatch.id, 10, 0, `Tambah +10 Poin (${selectedMatch.pairA.nama})`)}
                        className="flex-1 py-1.5 bg-primary text-white rounded font-outfit text-xs font-bold hover:bg-crimson-deep"
                      >
                        +10 Poin
                      </button>
                      <button
                        onClick={() => handleScoreUpdate(selectedMatch.id, 20, 0, `Tambah +20 Poin (${selectedMatch.pairA.nama})`)}
                        className="flex-1 py-1.5 bg-primary text-white rounded font-outfit text-xs font-bold hover:bg-crimson-deep"
                      >
                        +20 Poin
                      </button>
                    </div>
                  </div>

                  {/* Pair B Steppers */}
                  <div className="flex flex-col gap-1.5 p-3 bg-white rounded-lg border border-amber-200">
                    <span className="font-outfit text-[11px] font-bold text-ocean-teal truncate">{selectedMatch.pairB.nama}</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleScoreUpdate(selectedMatch.id, 0, 10, `Tambah +10 Poin (${selectedMatch.pairB.nama})`)}
                        className="flex-1 py-1.5 bg-ocean-teal text-white rounded font-outfit text-xs font-bold hover:bg-navy-midnight"
                      >
                        +10 Poin
                      </button>
                      <button
                        onClick={() => handleScoreUpdate(selectedMatch.id, 0, 20, `Tambah +20 Poin (${selectedMatch.pairB.nama})`)}
                        className="flex-1 py-1.5 bg-ocean-teal text-white rounded font-outfit text-xs font-bold hover:bg-navy-midnight"
                      >
                        +20 Poin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Match Log Timeline */}
            <div className="flex flex-col gap-2">
              <h4 className="font-outfit text-xs font-bold text-navy-midnight uppercase tracking-wider">Log Catatan Game Meja</h4>
              <div className="max-h-48 overflow-y-auto p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-1.5 font-jakarta text-xs text-text-secondary">
                {selectedMatch.history && selectedMatch.history.length > 0 ? (
                  selectedMatch.history.map((log, i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-b border-slate-200/60 last:border-0">
                      <span className="material-symbols-outlined text-[14px] text-primary">circle</span>
                      <span>{log}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-text-muted text-[11px]">Belum ada log pertandingan.</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Match Selector List (Sidebar) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <h3 className="font-outfit text-sm font-bold text-navy-midnight uppercase tracking-wider">
            Daftar Meja Pertandingan
          </h3>

          <div className="flex flex-col gap-3">
            {matches.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMatch(m)}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedMatch?.id === m.id
                    ? 'bg-navy-midnight text-white border-navy-midnight shadow-md'
                    : 'bg-white text-navy-midnight border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg font-outfit font-extrabold text-xs flex items-center justify-center shrink-0 ${
                    selectedMatch?.id === m.id ? 'bg-gold-champion text-navy-midnight' : 'bg-slate-100 text-navy-midnight'
                  }`}>
                    #{m.meja}
                  </div>
                  <div>
                    <div className="font-outfit text-xs font-bold truncate max-w-[180px]">
                      {m.pairA.nama} vs {m.pairB.nama}
                    </div>
                    <div className={`font-jakarta text-[11px] ${selectedMatch?.id === m.id ? 'text-slate-300' : 'text-text-secondary'}`}>
                      {m.babak}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="font-outfit font-extrabold text-sm text-gold-champion">
                    {m.scoreA} - {m.scoreB}
                  </div>
                  <StatusBadge status={m.status} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

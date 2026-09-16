import React, { useState, useEffect } from 'react';
import { fetchBrackets } from '../services/api';

export default function Brackets() {
  const [brackets, setBrackets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchBrackets();
      setBrackets(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="p-12 text-center font-outfit text-sm text-text-secondary">
        Memuat skema bagan turnamen Kejurda...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header Banner */}
      <div className="bg-navy-midnight rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="font-outfit text-xs text-gold-champion font-bold uppercase tracking-wider">
            SISTEM GUGUR MURNI BERPASANGAN
          </span>
          <h2 className="font-outfit text-2xl font-extrabold mt-1">Bagan Pertandingan &amp; Knockout Draw</h2>
          <p className="font-jakarta text-xs text-slate-300 mt-1">
            Visualisasi bagan pertandingan Kejurda Domino Papua Barat Daya 2026 dari Babak Penyisihan hingga Final.
          </p>
        </div>
        <div className="bg-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 border border-white/10 shrink-0">
          <span className="material-symbols-outlined text-gold-champion text-[24px]">account_tree</span>
          <div className="flex flex-col text-left">
            <span className="font-outfit text-[10px] text-slate-300">Format Laga</span>
            <span className="font-outfit text-xs font-bold text-white">Knockout 101 Points</span>
          </div>
        </div>
      </div>

      {/* Bracket Tree Viewer */}
      <div className="overflow-x-auto pb-6">
        <div className="min-w-[900px] grid grid-cols-4 gap-6 items-center">
          
          {/* Column 1: Babak 16 Besar */}
          <div className="flex flex-col gap-4">
            <div className="bg-navy-surface text-white p-2.5 rounded-xl font-outfit text-xs font-bold text-center uppercase tracking-wider">
              Babak 16 Besar (Pool A &amp; B)
            </div>

            {brackets?.roundOf16?.map((match) => (
              <div key={match.id} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between text-[11px] font-outfit">
                  <span className="text-text-muted">Meja #{match.meja}</span>
                  {match.live && (
                    <span className="px-1.5 py-0.2 rounded bg-crimson-bright/20 text-crimson-bright font-bold text-[9px] animate-pulse">
                      LIVE
                    </span>
                  )}
                  {match.winner && (
                    <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold text-[9px]">
                      SELESAI
                    </span>
                  )}
                </div>

                {/* Team A */}
                <div className={`flex justify-between items-center p-1.5 rounded font-outfit text-xs ${
                  match.winner === 'A' ? 'bg-amber-100 font-bold text-navy-midnight' : 'text-slate-700'
                }`}>
                  <span className="truncate max-w-[150px]">{match.pairA}</span>
                  <span className="font-extrabold">{match.scoreA}</span>
                </div>

                {/* Team B */}
                <div className={`flex justify-between items-center p-1.5 rounded font-outfit text-xs ${
                  match.winner === 'B' ? 'bg-amber-100 font-bold text-navy-midnight' : 'text-slate-700'
                }`}>
                  <span className="truncate max-w-[150px]">{match.pairB}</span>
                  <span className="font-extrabold">{match.scoreB}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Quarter Finals */}
          <div className="flex flex-col gap-8 justify-around">
            <div className="bg-navy-surface text-white p-2.5 rounded-xl font-outfit text-xs font-bold text-center uppercase tracking-wider">
              Quarter Finals (8 Besar)
            </div>

            {brackets?.quarterFinals?.map((match) => (
              <div key={match.id} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="text-[10px] text-text-muted font-outfit text-right">
                  Jadwal: {match.scheduled}
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-50 font-outfit text-xs font-semibold text-navy-midnight">
                  <span className="truncate">{match.pairA}</span>
                  <span>{match.scoreA}</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-50 font-outfit text-xs font-semibold text-navy-midnight">
                  <span className="truncate">{match.pairB}</span>
                  <span>{match.scoreB}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Semi Finals */}
          <div className="flex flex-col gap-12 justify-around">
            <div className="bg-navy-surface text-white p-2.5 rounded-xl font-outfit text-xs font-bold text-center uppercase tracking-wider">
              Semi Finals (4 Besar)
            </div>

            {brackets?.semiFinals?.map((match) => (
              <div key={match.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <div className="text-[10px] text-text-muted font-outfit text-right">
                  Jadwal: {match.scheduled}
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-50 font-outfit text-xs font-semibold text-navy-midnight">
                  <span className="truncate">{match.pairA}</span>
                  <span>{match.scoreA}</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-slate-50 font-outfit text-xs font-semibold text-navy-midnight">
                  <span className="truncate">{match.pairB}</span>
                  <span>{match.scoreB}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 4: GRAND FINAL */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-r from-gold-champion to-amber-500 text-navy-midnight p-3 rounded-xl font-outfit text-xs font-extrabold text-center uppercase tracking-wider shadow-lg">
              🏆 GRAND FINAL PIALA GUBERNUR
            </div>

            {brackets?.final && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-midnight to-navy-surface text-white shadow-2xl border-2 border-gold-champion flex flex-col gap-4 text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-gold-champion/20 text-gold-champion flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">emoji_events</span>
                </div>

                <div>
                  <h4 className="font-outfit text-sm font-bold text-gold-champion">{brackets.final.title}</h4>
                  <span className="font-jakarta text-[11px] text-slate-300">{brackets.final.scheduled}</span>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="p-3 rounded-xl bg-white/10 font-outfit text-xs font-bold text-white flex justify-between items-center">
                    <span>{brackets.final.pairA}</span>
                    <span className="text-gold-champion text-sm">{brackets.final.scoreA}</span>
                  </div>
                  <span className="font-outfit text-xs text-gold-champion font-extrabold">VS</span>
                  <div className="p-3 rounded-xl bg-white/10 font-outfit text-xs font-bold text-white flex justify-between items-center">
                    <span>{brackets.final.pairB}</span>
                    <span className="text-gold-champion text-sm">{brackets.final.scoreB}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

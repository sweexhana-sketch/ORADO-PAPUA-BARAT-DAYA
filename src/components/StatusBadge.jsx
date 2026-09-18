import React from 'react';

export default function StatusBadge({ status }) {
  let badgeStyle = 'bg-surface-container text-text-secondary';
  let label = status;

  switch (status) {
    case 'VERIFIED':
      badgeStyle = 'bg-emerald-100 text-emerald-800 border border-emerald-300';
      label = 'VERIFIKASI ABSAH';
      break;
    case 'PENDING':
      badgeStyle = 'bg-amber-100 text-amber-800 border border-amber-300';
      label = 'PROSES KEABSAHAN';
      break;
    case 'REJECTED':
      badgeStyle = 'bg-rose-100 text-rose-800 border border-rose-300';
      label = 'DITOLAK / REVISI';
      break;
    case 'LIVE':
      badgeStyle = 'bg-crimson-bright/20 text-crimson-bright border border-crimson-bright/30 animate-pulse';
      label = 'LIVE SCORE';
      break;
    case 'SELESAI':
      badgeStyle = 'bg-navy-midnight text-gold-champion font-bold';
      label = 'MATCH SELESAI';
      break;
    case 'MENUNGGU':
      badgeStyle = 'bg-slate-100 text-slate-600';
      label = 'MENUNGGU JADWAL';
      break;
    default:
      break;
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-outfit font-bold uppercase tracking-wider ${badgeStyle}`}>
      {status === 'LIVE' && <span className="w-1.5 h-1.5 rounded-full bg-crimson-bright" />}
      {label}
    </span>
  );
}

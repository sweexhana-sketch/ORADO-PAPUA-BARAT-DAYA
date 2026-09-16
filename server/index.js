import express from 'express';
import cors from 'cors';
import { getDB, saveDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Get Overall Portal Stats
app.get('/api/stats', (req, res) => {
  const db = getDB();
  res.json(db.stats);
});

// 2. Get Pengcab breakdown list
app.get('/api/pengcab', (req, res) => {
  const db = getDB();
  res.json(db.pengcabList);
});

// 3. Get Registrations list (with filter query support)
app.get('/api/registrations', (req, res) => {
  const db = getDB();
  const { status, pengcab, search } = req.query;
  let list = db.registrations;

  if (status && status !== 'ALL') {
    list = list.filter(r => r.status === status);
  }
  if (pengcab && pengcab !== 'ALL') {
    list = list.filter(r => r.pengcab.toLowerCase().includes(pengcab.toLowerCase()));
  }
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(r =>
      r.id.toLowerCase().includes(q) ||
      r.atlet1.nama.toLowerCase().includes(q) ||
      r.atlet2.nama.toLowerCase().includes(q) ||
      (r.klub && r.klub.toLowerCase().includes(q))
    );
  }
  res.json(list);
});

// 4. Submit New Registration
app.post('/api/registrations', (req, res) => {
  const db = getDB();
  const { kategori, pengcab, klub, atlet1, atlet2, official, officialHp } = req.body;

  if (!kategori || !pengcab || !atlet1?.nama || !atlet1?.nik || !atlet2?.nama || !atlet2?.nik) {
    return res.status(400).json({ error: 'Mohon lengkapi seluruh data wajib (Kategori, Pengcab, NIK & Nama Atlet 1 dan 2).' });
  }

  const nextSeq = String(db.registrations.length + 1).padStart(3, '0');
  const regId = `PBD-DOM-2026-${nextSeq}`;

  const newReg = {
    id: regId,
    kategori,
    pengcab,
    klub: klub || 'Gardu Umum',
    atlet1: {
      nama: atlet1.nama,
      nik: atlet1.nik,
      hp: atlet1.hp || '-',
      kta: atlet1.kta || '',
      ktpVerified: false
    },
    atlet2: {
      nama: atlet2.nama,
      nik: atlet2.nik,
      hp: atlet2.hp || '-',
      kta: atlet2.kta || '',
      ktpVerified: false
    },
    official: official || '-',
    officialHp: officialHp || '-',
    status: 'PENDING',
    registeredAt: new Date().toISOString(),
    notes: 'Menunggu Verifikasi KTP oleh Tim Keabsahan Atlet'
  };

  db.registrations.unshift(newReg);
  db.stats.registered += 1;
  db.stats.pending += 1;

  // Add athlete entries if not exist
  [atlet1, atlet2].forEach((atlet) => {
    const exists = db.athletes.find(a => a.nik === atlet.nik);
    if (!exists) {
      db.athletes.push({
        nik: atlet.nik,
        kta: atlet.kta || `ORADO-PBD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        nama: atlet.nama,
        pengcab,
        klub: klub || 'Gardu Umum',
        status: 'TERDAFTAR_PROSES_VERIFIKASI',
        peringkatProvinsi: db.athletes.length + 1,
        totalTanding: 0,
        menang: 0,
        prestasi: ['Peserta Kejurda Domino PBD 2026']
      });
    }
  });

  saveDB(db);
  res.status(201).json({ message: 'Pendaftaran berhasil dikirim', registration: newReg });
});

// 5. Update Registration Status (Admin Verification)
app.patch('/api/registrations/:id/status', (req, res) => {
  const db = getDB();
  const { id } = req.params;
  const { status, notes } = req.body;

  const item = db.registrations.find(r => r.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Data pendaftaran tidak ditemukan' });
  }

  const oldStatus = item.status;
  item.status = status;
  if (notes) item.notes = notes;
  if (status === 'VERIFIED') {
    item.atlet1.ktpVerified = true;
    item.atlet2.ktpVerified = true;
  }

  // Update stats counters
  if (oldStatus !== 'VERIFIED' && status === 'VERIFIED') {
    db.stats.verified += 1;
    if (db.stats.pending > 0) db.stats.pending -= 1;
  }

  saveDB(db);
  res.json({ message: 'Status pendaftaran diperbarui', registration: item });
});

// 6. Get Live Matches (Meja 101)
app.get('/api/matches', (req, res) => {
  const db = getDB();
  res.json(db.matches);
});

// 7. Update Live Match Score (Wasit / Admin Input)
app.post('/api/matches/:id/score', (req, res) => {
  const db = getDB();
  const { id } = req.params;
  const { deltaA, deltaB, balakMatiA, balakMatiB, logText, status } = req.body;

  const match = db.matches.find(m => m.id === id);
  if (!match) {
    return res.status(404).json({ error: 'Pertandingan tidak ditemukan' });
  }

  if (deltaA) match.scoreA = Math.min(101, Math.max(0, match.scoreA + deltaA));
  if (deltaB) match.scoreB = Math.min(101, Math.max(0, match.scoreB + deltaB));
  if (typeof balakMatiA === 'number') match.balakMatiA = balakMatiA;
  if (typeof balakMatiB === 'number') match.balakMatiB = balakMatiB;

  if (logText) {
    match.history.push(logText);
  }

  if (status) {
    match.status = status;
  }

  if (match.scoreA >= 101) {
    match.status = 'SELESAI';
    match.winner = 'pairA';
  } else if (match.scoreB >= 101) {
    match.status = 'SELESAI';
    match.winner = 'pairB';
  }

  saveDB(db);
  res.json({ message: 'Skor pertandingan berhasil diperbarui', match });
});

// 8. Get Tournament Brackets
app.get('/api/brackets', (req, res) => {
  const db = getDB();
  res.json(db.brackets);
});

// 9. Get Athlete List & Verify by NIK
app.get('/api/athletes', (req, res) => {
  const db = getDB();
  res.json(db.athletes);
});

app.get('/api/athletes/verify/:nik', (req, res) => {
  const db = getDB();
  const { nik } = req.params;
  const athlete = db.athletes.find(a => a.nik === nik || a.kta === nik);

  if (!athlete) {
    return res.status(404).json({ error: 'Atlet tidak ditemukan dalam sistem database ORADO PBD' });
  }

  res.json(athlete);
});

// 10. Get News
app.get('/api/news', (req, res) => {
  const db = getDB();
  res.json(db.news);
});

app.listen(PORT, () => {
  console.log(`[ORADO Express API] Running on http://localhost:${PORT}`);
});

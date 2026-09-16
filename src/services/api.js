// API Client service for ORADO Papua Barat Daya Portal

const API_BASE = '/api';

export async function fetchStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    console.warn('Backend unavailable, using fallback stats');
    return {
      totalQuota: 128,
      registered: 94,
      verified: 86,
      pending: 8,
      prizePool: 'Rp 150.000.000',
      pengcabCount: 6,
      venue: 'Aimas Convention Center (ACC), Kab. Sorong',
      dates: '24 – 28 Oktober 2026'
    };
  }
}

export async function fetchPengcab() {
  try {
    const res = await fetch(`${API_BASE}/pengcab`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [
      { name: 'Pengcab ORADO Kota Sorong', code: 'KOTA-SORONG', count: 28, verified: 26 },
      { name: 'Pengcab ORADO Kab. Sorong', code: 'KAB-SORONG', count: 24, verified: 22 },
      { name: 'Pengcab ORADO Raja Ampat', code: 'RAJA-AMPAT', count: 14, verified: 12 },
      { name: 'Pengcab ORADO Maybrat', code: 'MAYBRAT', count: 12, verified: 11 },
      { name: 'Pengcab ORADO Tambrauw', code: 'TAMBRAUW', count: 8, verified: 8 },
      { name: 'Pengcab ORADO Sorong Selatan', code: 'SORONG-SELATAN', count: 8, verified: 7 }
    ];
  }
}

export async function fetchRegistrations(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/registrations?${query}`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [];
  }
}

export async function submitRegistration(payload) {
  try {
    const res = await fetch(`${API_BASE}/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Gagal mengirim pendaftaran');
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function updateRegistrationStatus(id, status, notes) {
  try {
    const res = await fetch(`${API_BASE}/registrations/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, notes })
    });
    if (!res.ok) throw new Error('Gagal memperbarui status');
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function fetchMatches() {
  try {
    const res = await fetch(`${API_BASE}/matches`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [];
  }
}

export async function updateMatchScore(id, payload) {
  try {
    const res = await fetch(`${API_BASE}/matches/${id}/score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Gagal memperbarui skor');
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function fetchBrackets() {
  try {
    const res = await fetch(`${API_BASE}/brackets`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return {};
  }
}

export async function fetchAthletes() {
  try {
    const res = await fetch(`${API_BASE}/athletes`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [];
  }
}

export async function verifyAthleteByNik(nik) {
  try {
    const res = await fetch(`${API_BASE}/athletes/verify/${nik}`);
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Atlet tidak ditemukan');
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function fetchNews() {
  try {
    const res = await fetch(`${API_BASE}/news`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    return [];
  }
}

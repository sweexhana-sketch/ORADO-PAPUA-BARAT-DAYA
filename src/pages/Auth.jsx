import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'login';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="min-h-screen bg-[#b8ccd4] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="Logo ORADO"
              className="h-16 w-auto object-contain mb-2"
            />
            <span className="font-outfit font-bold text-2xl text-[#cc1f1f] tracking-wide">ORADO</span>
            <span className="font-jakarta text-[10px] text-slate-500 tracking-wider">Federasi Olahraga Domino Nasional</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-6">
            <button
              onClick={() => setTab('login')}
              className={`flex-1 pb-3 font-outfit text-sm font-semibold transition-all ${
                activeTab === 'login'
                  ? 'text-[#0f3b5f] border-b-2 border-[#0f3b5f]'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Masuk
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 pb-3 font-outfit text-sm font-semibold transition-all ${
                activeTab === 'register'
                  ? 'text-[#0f3b5f] border-b-2 border-[#0f3b5f]'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Daftar
            </button>
          </div>

          {/* LOGIN FORM */}
          {activeTab === 'login' && (
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Nama Pengguna (UserID) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">person</span>
                  <input
                    type="text"
                    placeholder="Masukkan nama pengguna"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan kata sandi"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined text-[18px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-end -mt-2">
                <button type="button" className="font-jakarta text-sm text-[#0f3b5f] hover:underline">
                  Lupa password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0f3b5f] hover:bg-navy-midnight text-white font-outfit font-bold text-sm rounded-lg transition-colors shadow-md mt-1"
              >
                Masuk
              </button>

              <p className="text-center font-jakarta text-xs text-slate-500">
                Belum punya akun?{' '}
                <button type="button" onClick={() => setTab('register')} className="text-[#0f3b5f] font-semibold hover:underline">
                  Daftar sekarang
                </button>
              </p>
            </form>
          )}

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">person</span>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Nama Pengguna (UserID) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">person</span>
                  <input
                    type="text"
                    placeholder="Masukkan nama pengguna"
                    maxLength={11}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                  <span className="font-jakarta text-xs text-slate-400">{username.length}/11</span>
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 block">
                  Email
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">mail</span>
                  <input
                    type="email"
                    placeholder="Masukkan email"
                    maxLength={50}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                  <span className="font-jakarta text-xs text-slate-400">{email.length}/50</span>
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Nomor HP (Whatsapp) <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="font-jakarta text-sm text-slate-500 font-semibold shrink-0">+62</span>
                  <div className="w-px h-4 bg-slate-300"></div>
                  <input
                    type="tel"
                    placeholder="Masukkan nomor hp"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan kata sandi"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined text-[18px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="font-jakarta text-sm text-slate-700 font-semibold mb-1.5 flex items-center gap-1">
                  Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50 focus-within:border-[#0f3b5f] focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">lock</span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Konfirmasi kata sandi"
                    className="flex-1 bg-transparent text-sm font-jakarta text-slate-700 placeholder-slate-400 outline-none"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-slate-400 hover:text-slate-600">
                    <span className="material-symbols-outlined text-[18px]">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0f3b5f] hover:bg-navy-midnight text-white font-outfit font-bold text-sm rounded-lg transition-colors shadow-md mt-2"
              >
                Daftar Sekarang
              </button>

              <p className="text-center font-jakarta text-xs text-slate-500">
                Sudah punya akun?{' '}
                <button type="button" onClick={() => setTab('login')} className="text-[#0f3b5f] font-semibold hover:underline">
                  Masuk di sini
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, School, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  selectedGrade?: 'sd' | 'smp' | 'sma';
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = '',
  selectedGrade = 'sd'
}) => {
  const [grade, setGrade] = useState<'sd' | 'smp' | 'sma'>(selectedGrade);
  const [studentClass, setStudentClass] = useState<string>('Kelas 5 SD');
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [parentName, setParentName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedGrade) {
      setGrade(selectedGrade);
      if (selectedGrade === 'sd') setStudentClass('Kelas 5 SD');
      if (selectedGrade === 'smp') setStudentClass('Kelas 8 SMP');
      if (selectedGrade === 'sma') setStudentClass('Kelas 12 SMA / SNBT');
    }
  }, [selectedGrade, isOpen]);

  const handleGradeChange = (g: 'sd' | 'smp' | 'sma') => {
    setGrade(g);
    if (g === 'sd') setStudentClass('Kelas 5 SD');
    if (g === 'smp') setStudentClass('Kelas 8 SMP');
    if (g === 'sma') setStudentClass('Kelas 12 SMA / SNBT');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border-2 border-orange-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800">
        {/* Top Header (30% Orange Banner) */}
        <div className="flex items-center justify-between px-6 py-4 bg-orange-600 text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm block">Uji Coba Gratis 7 Hari Cerdix</span>
              <span className="text-[11px] text-orange-100">Akses Penuh Seluruh Materi Jenjang SD, SMP, & SMA</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-orange-700/80 hover:bg-orange-800 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (60% White / Light Grey) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5 bg-slate-50">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Akun Trial Berhasil Diaktifkan!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Selamat <strong>{fullName}</strong>! Akun uji coba 7 hari gratis untuk jenjang <strong>{studentClass}</strong> telah aktif. Link login instan dan panduan belajar telah kami kirimkan ke nomor WhatsApp <strong>{whatsapp}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-1 text-left max-w-md mx-auto">
                <span className="font-bold block">Apa langkah selanjutnya?</span>
                <p>1. Buka pesan WhatsApp dari Cerdix Official.</p>
                <p>2. Klik tombol "Mulai Belajar Sekarang" untuk masuk ke dashboard.</p>
                <p>3. Ikuti tes diagnostik adaptif 5 menit untuk kalibrasi materi pertamamu.</p>
              </div>

              {/* 10% Yellow Contrast Button */}
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-transform hover:scale-105"
              >
                Mulai Masuk ke Dashboard Belajar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              {/* Selected Plan Notice */}
              {selectedPlan && (
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-center justify-between">
                  <span>Paket yang dipilih: <strong>{selectedPlan}</strong></span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black">
                    Trial Gratis 7 Hari
                  </span>
                </div>
              )}

              {/* Step 1: Grade Selection (SD - SMP - SMA) */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  1. Pilih Jenjang Pendidikan Siswa:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sd', label: '🎒 SD (Kelas 1–6)' },
                    { id: 'smp', label: '📘 SMP (Kelas 7–9)' },
                    { id: 'sma', label: '🎓 SMA (Kelas 10–12)' }
                  ].map((g) => (
                    <button
                      type="button"
                      key={g.id}
                      onClick={() => handleGradeChange(g.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                        grade === g.id
                          ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Specific Class Select */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  2. Tingkatan Kelas Spesifik:
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-orange-500"
                >
                  {grade === 'sd' && (
                    <>
                      <option>Kelas 1 SD (Fase A)</option>
                      <option>Kelas 2 SD (Fase A)</option>
                      <option>Kelas 3 SD (Fase B)</option>
                      <option>Kelas 4 SD (Fase B)</option>
                      <option>Kelas 5 SD (Fase C - Persiapan ANBK)</option>
                      <option>Kelas 6 SD (Fase C - Ujian Kelulusan)</option>
                    </>
                  )}
                  {grade === 'smp' && (
                    <>
                      <option>Kelas 7 SMP (Fase D)</option>
                      <option>Kelas 8 SMP (Fase D)</option>
                      <option>Kelas 9 SMP (Fase D - Persiapan Masuk SMA Favorit)</option>
                    </>
                  )}
                  {grade === 'sma' && (
                    <>
                      <option>Kelas 10 SMA (Fase E)</option>
                      <option>Kelas 11 SMA (Fase F)</option>
                      <option>Kelas 12 SMA / SNBT (Fase F - Pejuang Masuk PTN)</option>
                      <option>Alumni / Gap Year (Persiapan UTBK SNBT)</option>
                    </>
                  )}
                </select>
              </div>

              {/* Step 3: Identity Data */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    3. Nama Lengkap Siswa:
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Bima Pratama / Caca"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    4. Nomor WhatsApp (Untuk Aktivasi Instan):
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    5. Nama Orang Tua / Wali (Opsional):
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Contoh: Ibu Ratna / Bapak Hendra"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Guarantee Pill */}
              <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Bebas Biaya • Tanpa Perlu Kartu Kredit • Batal Kapan Saja</span>
              </div>

              {/* 10% Yellow Contrast Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md shadow-amber-400/30 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Aktifkan Akun Trial 7 Hari Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

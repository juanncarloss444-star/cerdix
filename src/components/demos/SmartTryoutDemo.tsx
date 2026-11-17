import React, { useState } from 'react';
import { Award, BarChart3, TrendingUp, CheckCircle2, AlertTriangle, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';

export const SmartTryoutDemo: React.FC = () => {
  const [scores, setScores] = useState({
    pu: 78,
    pk: 84,
    ppu: 68,
    pbm: 74,
    litIndo: 82,
    litInggris: 70
  });

  const [targetPTN, setTargetPTN] = useState<'ui' | 'itb' | 'ugm'>('itb');

  // Realistic IRT Weighted algorithm calculation
  // PK and PU have higher discrimination weight in SNBT
  const calculatedIrtScore = Math.round(
    320 +
    scores.pu * 1.35 +
    scores.pk * 1.55 +
    scores.ppu * 0.95 +
    scores.pbm * 1.05 +
    scores.litIndo * 0.9 +
    scores.litInggris * 0.95
  );

  const targets = {
    ui: { name: "Universitas Indonesia - Kedokteran / Ilmu Komputer", passingGrade: 735, desc: "Persaingan ketat, butuh PK & PU > 80" },
    itb: { name: "Institut Teknologi Bandung - STEI Rekayasa", passingGrade: 720, desc: "Sangat menonjol di Pengetahuan Kuantitatif" },
    ugm: { name: "Universitas Gadjah Mada - Teknik Sipil & Lingkungan", passingGrade: 690, desc: "Peluang aman dengan konsistensi skor > 700" }
  };

  const currentTarget = targets[targetPTN];
  const passingChance = Math.min(99, Math.max(15, Math.round(((calculatedIrtScore - (currentTarget.passingGrade - 120)) / 140) * 100)));

  const weakestSubtest = Object.entries(scores).reduce((min, curr) => curr[1] < min[1] ? curr : min, ['ppu', 100]);

  const subtestNames: Record<string, string> = {
    pu: 'Penalaran Umum (PU)',
    pk: 'Pengetahuan Kuantitatif (PK)',
    ppu: 'Pengetahuan Umum (PPU)',
    pbm: 'Pemahaman Membaca (PBM)',
    litIndo: 'Literasi Bhs Indonesia',
    litInggris: 'Literasi Bhs Inggris'
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-orange-200/90 p-5 md:p-8 shadow-xl relative overflow-hidden text-slate-800">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm md:text-base">Kalkulator IRT Smart Tryout</span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 font-bold">
                Standar SNBT & Asesmen ANBK
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Sistem Penilaian Bobot Butir Soal Resmi BPPP Kemendikbud</p>
          </div>
        </div>

        {/* Target PTN selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs">
          <span className="text-[11px] text-slate-500 px-2 font-bold">Target Kampus:</span>
          {(['ui', 'itb', 'ugm'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTargetPTN(t)}
              className={`px-3 py-1 rounded-xl uppercase font-black text-xs transition-all ${
                targetPTN === t
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Subtest Sliders */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Geser Skor Akurasi Subtes Ujian:
          </span>

          <div className="space-y-3">
            {Object.entries(scores).map(([key, val]) => (
              <div key={key} className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-800">{subtestNames[key]}</span>
                  <span className="font-mono font-black text-orange-600 text-xs">{val} / 100</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={val}
                  onChange={(e) =>
                    setScores((prev) => ({
                      ...prev,
                      [key]: parseInt(e.target.value) || 0
                    }))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: IRT Score & Diagnostic Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border-2 border-orange-200/80 text-center space-y-3">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
              Estimasi Skor IRT Total
            </span>
            <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">
              {calculatedIrtScore}
            </div>
            <p className="text-xs text-slate-600">
              Passing Grade Aman: <strong className="text-slate-900">{currentTarget.passingGrade}</strong>
            </p>

            {/* Contrast Yellow Passing Chance Badge */}
            <div className="p-3 rounded-2xl bg-amber-400 text-slate-950 font-black text-xs shadow-sm flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 fill-slate-950" />
                Peluang Lolos:
              </span>
              <span className="text-base font-mono font-black">{passingChance}%</span>
            </div>

            <p className="text-[11px] text-slate-500 leading-tight">
              {currentTarget.name} • {currentTarget.desc}
            </p>
          </div>

          {/* AI Weakness Diagnosis Box */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950">
            <div className="flex items-center gap-2 font-bold mb-1">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Prioritas Remedial Materi AI:</span>
            </div>
            <p className="leading-relaxed">
              Subtes terendahmu saat ini adalah <strong>{subtestNames[weakestSubtest[0]]} ({weakestSubtest[1]} poin)</strong>.
              Cerdix AdaptiMatch AI merekomendasikan tonton 3 video animasi konsep dasar di Dapur Belajar sebelum tryout berikutnya!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, XCircle, Sparkles, ArrowRight, RefreshCw, BarChart2, ShieldCheck, School } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: number;
  grade: 'sd' | 'smp' | 'sma';
  gradeLabel: string;
  subtest: string;
  difficulty: 'Mudah Ceria' | 'Sedang Logika' | 'HOTS Tinggi';
  question: string;
  context: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  conceptExplanation: string;
  adaptiFixTip: string;
}

const SAMPLE_QUESTIONS: Record<'sd' | 'smp' | 'sma', Question> = {
  sd: {
    id: 1,
    grade: 'sd',
    gradeLabel: 'Jenjang SD (Kelas 4–6)',
    subtest: 'Matematika & Logika Bilangan Pecahan',
    difficulty: 'Sedang Logika',
    context: 'Ibu membeli sebuah kue bolu dan membaginya menjadi 8 potong sama besar. Andi memakan 2 potong, dan Siti memakan 3 potong.',
    question: 'Berapa bagian kue yang masih tersisa untuk Ayah?',
    options: [
      { label: "A", text: "2/8 bagian (atau 1/4)", isCorrect: false },
      { label: "B", text: "3/8 bagian", isCorrect: true },
      { label: "C", text: "5/8 bagian", isCorrect: false },
      { label: "D", text: "1/2 bagian", isCorrect: false },
    ],
    conceptExplanation: "Total kue utuh = 8/8. Kue yang sudah dimakan = 2 potong + 3 potong = 5/8 bagian. Sisa untuk Ayah = 8/8 - 5/8 = 3/8 bagian.",
    adaptiFixTip: "Konsep pecahan SD: Jumlahkan pembilang jika penyebutnya sudah sama (2/8 + 3/8 = 5/8), lalu kurangkan dari 1 utuh (8/8)."
  },
  smp: {
    id: 2,
    grade: 'smp',
    gradeLabel: 'Jenjang SMP (Kelas 7–9)',
    subtest: 'Aljabar & Persamaan Linear',
    difficulty: 'Sedang Logika',
    context: 'Harga 3 buah buku tulis dan 2 pulpen adalah Rp 17.000. Jika harga 1 pulpen adalah Rp 2.500...',
    question: 'Berapakah harga 1 buah buku tulis?',
    options: [
      { label: "A", text: "Rp 3.500", isCorrect: false },
      { label: "B", text: "Rp 4.000", isCorrect: true },
      { label: "C", text: "Rp 4.500", isCorrect: false },
      { label: "D", text: "Rp 5.000", isCorrect: false },
    ],
    conceptExplanation: "Misalkan harga buku = b. Persamaan: 3b + 2(2.500) = 17.000 → 3b + 5.000 = 17.000 → 3b = 12.000 → b = Rp 4.000.",
    adaptiFixTip: "Konsep Aljabar SMP: Isolasi variabel yang dicari dengan memindahkan konstanta ke ruas kanan."
  },
  sma: {
    id: 3,
    grade: 'sma',
    gradeLabel: 'Jenjang SMA (Kelas 10–12 / SNBT)',
    subtest: 'Penalaran Matematika & Laju Perubahan',
    difficulty: 'HOTS Tinggi',
    context: 'Sebuah tangki air diisi oleh dua pipa A dan B. Pipa A mengisi penuh dalam 4 jam, pipa B dalam 6 jam. Keduanya dibuka bersamaan selama 2 jam.',
    question: 'Tentukan fraksi tangki air yang berhasil terisi setelah 2 jam:',
    options: [
      { label: "A", text: "5/12 bagian", isCorrect: false },
      { label: "B", text: "5/6 bagian", isCorrect: true },
      { label: "C", text: "3/4 bagian", isCorrect: false },
      { label: "D", text: "7/12 bagian", isCorrect: false },
    ],
    conceptExplanation: "Laju pipa A = 1/4 tangki/jam. Laju pipa B = 1/6 tangki/jam. Laju gabungan = 1/4 + 1/6 = 5/12 tangki/jam. Dalam 2 jam, bagian terisi = 2 × (5/12) = 10/12 = 5/6 bagian.",
    adaptiFixTip: "Konsep laju gabungan: Jumlahkan debit kerja per satuan waktu (1/t_total = 1/t1 + 1/t2)."
  }
};

export const AdaptiMatchDemo: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<'sd' | 'smp' | 'sma'>('sma');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [masteryScore, setMasteryScore] = useState(72);

  const question = SAMPLE_QUESTIONS[selectedGrade];

  const handleSelectGrade = (gr: 'sd' | 'smp' | 'sma') => {
    setSelectedGrade(gr);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setMasteryScore(gr === 'sd' ? 85 : gr === 'smp' ? 76 : 70);
  };

  const handleSelect = (label: string, isCorrect: boolean) => {
    if (isAnswered) return;
    setSelectedAnswer(label);
    setIsAnswered(true);

    if (isCorrect) {
      setMasteryScore((prev) => Math.min(100, prev + 15));
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Confetti fallback
      }
    } else {
      setMasteryScore((prev) => Math.max(30, prev - 8));
    }
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-orange-200/90 p-5 md:p-8 shadow-xl relative overflow-hidden text-slate-800">
      {/* Subtle Warm Glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with Grade Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm md:text-base">Simulator AdaptiMatch AI</span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 font-bold">
                Multi-Jenjang SD–SMA
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">{question.subtest}</p>
          </div>
        </div>

        {/* Grade Level Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs">
          <span className="text-[11px] text-slate-500 px-2 font-bold">Pilih Jenjang:</span>
          {(['sd', 'smp', 'sma'] as const).map((g) => (
            <button
              key={g}
              onClick={() => handleSelectGrade(g)}
              className={`px-3 py-1 rounded-xl uppercase font-black text-xs transition-all ${
                selectedGrade === g
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {g === 'sd' ? '🎒 SD' : g === 'smp' ? '📘 SMP' : '🎓 SMA'}
            </button>
          ))}
        </div>
      </div>

      {/* Question Context Box */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 mb-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1">
            <School className="w-3.5 h-3.5" />
            {question.gradeLabel}
          </span>
          <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold ${
            question.difficulty === 'Mudah Ceria'
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              : question.difficulty === 'Sedang Logika'
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-rose-100 text-rose-800 border border-rose-200'
          }`}>
            Tingkat Kesulitan: {question.difficulty}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
          {question.context}
        </p>
        <p className="text-sm sm:text-base font-bold text-slate-900">
          {question.question}
        </p>
      </div>

      {/* Options List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {question.options.map((opt) => {
          let stateStyle = "bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/40 text-slate-800";
          if (isAnswered) {
            if (opt.isCorrect) {
              stateStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-sm";
            } else if (selectedAnswer === opt.label) {
              stateStyle = "bg-rose-50 border-rose-500 text-rose-950 font-medium";
            } else {
              stateStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={opt.label}
              disabled={isAnswered}
              onClick={() => handleSelect(opt.label, opt.isCorrect)}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left flex items-start gap-3 transition-all ${stateStyle}`}
            >
              <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                isAnswered && opt.isCorrect
                  ? 'bg-emerald-600 text-white'
                  : isAnswered && selectedAnswer === opt.label
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {opt.label}
              </span>
              <span className="text-xs sm:text-sm pt-0.5">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Diagnostic Explanation Banner after response */}
      {isAnswered && (
        <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200 mb-5 animate-fadeIn">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="font-bold text-xs text-orange-950">
              Analisis Konsep Inti (Cerdix Core Concept):
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed mb-3">
            {question.conceptExplanation}
          </p>
          <div className="p-3 rounded-xl bg-white border border-orange-200 text-xs text-orange-900 font-medium flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <span><strong>Rekomendasi AI:</strong> {question.adaptiFixTip}</span>
          </div>
        </div>
      )}

      {/* Real-time Adaptive Mastery Calibration Bar */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div className="flex-1 sm:flex-initial">
            <div className="flex items-center justify-between sm:justify-start gap-2">
              <span className="text-xs font-bold text-slate-700">Level Penguasaan AI:</span>
              <span className="text-xs font-mono font-black text-orange-600">{masteryScore}%</span>
            </div>
            <div className="w-full sm:w-48 h-2 rounded-full bg-slate-200 overflow-hidden mt-1.5">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500"
                style={{ width: `${masteryScore}%` }}
              />
            </div>
          </div>
        </div>

        {/* Contrast Yellow Button (10% Action) */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {isAnswered && (
            <button
              onClick={() => {
                setSelectedAnswer(null);
                setIsAnswered(false);
              }}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 hover:bg-slate-100 font-bold flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Soal</span>
            </button>
          )}

          <button
            onClick={() => handleSelectGrade(selectedGrade === 'sd' ? 'smp' : selectedGrade === 'smp' ? 'sma' : 'sd')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs shadow-sm flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <span>Soal Berikutnya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

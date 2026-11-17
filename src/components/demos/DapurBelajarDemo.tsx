import React, { useState } from 'react';
import { Clapperboard, Play, Pause, Bookmark, RotateCcw, Volume2, FileText, Check, ChevronRight, School, Sparkles } from 'lucide-react';

interface VideoSample {
  grade: 'sd' | 'smp' | 'sma';
  gradeName: string;
  subject: string;
  title: string;
  conceptNote: string;
  duration: string;
  formulaTip: string;
}

const VIDEO_SAMPLES: Record<'sd' | 'smp' | 'sma', VideoSample> = {
  sd: {
    grade: 'sd',
    gradeName: 'Jenjang SD (Kelas 1–6)',
    subject: 'IPAS Ceria: Bab Daur Air & Cuaca',
    title: 'Petualangan Tetes Air: Mengapa Hujan Turun?',
    conceptNote: 'Evaporasi (menguap) → Kondensasi (jadi awan) → Presipitasi (hujan turun) dijelaskan lewat animasi tetesan air sahabat anak.',
    duration: '04:12',
    formulaTip: 'Daur Air = Evaporasi (Panas Matahari) + Kondensasi (Mendingin di Langit) + Presipitasi (Hujan).'
  },
  smp: {
    grade: 'smp',
    gradeName: 'Jenjang SMP (Kelas 7–9)',
    subject: 'IPA Fisika: Hukum Gerak Newton',
    title: 'Hukum II Newton: Gaya, Massa, & Akselerasi',
    conceptNote: 'Mengapa mobil kosong berakselerasi lebih cepat dibanding truk muatan penuh? Visualisasi F = m × a dengan analogi seru.',
    duration: '05:05',
    formulaTip: 'Hukum II Newton: F = m × a (Gaya berbanding lurus dengan percepatan dan massa benda).'
  },
  sma: {
    grade: 'sma',
    gradeName: 'Jenjang SMA (Kelas 10–12 / SNBT)',
    subject: 'Matematika Lanjut: Turunan & Aplikasi Maksimum',
    title: 'Aplikasi Turunan: Gradien Garis Singgung & Titik Balik',
    conceptNote: 'Memahami f\'(x) = 0 bukan sekadar hafalan, melainkan kondisi saat kurva berada di puncak elevasi sebelum berbalik arah.',
    duration: '05:24',
    formulaTip: 'Syarat Nilai Ekstrim: f\'(x) = 0. Uji turunan kedua f\'\'(x) < 0 untuk Maksimum, f\'\'(x) > 0 untuk Minimum.'
  }
};

export const DapurBelajarDemo: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<'sd' | 'smp' | 'sma'>('sd');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<'1x' | '1.25x' | '1.5x' | '2x'>('1.25x');
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const video = VIDEO_SAMPLES[selectedGrade];

  return (
    <div className="bg-white rounded-3xl border-2 border-orange-200/90 p-5 md:p-8 shadow-xl relative overflow-hidden text-slate-800">
      {/* Background warm tint */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
            <Clapperboard className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm md:text-base">Dapur Belajar Player</span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 font-bold">
                18.000+ Video Animasi SD–SMA
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Konsep Singkat, Padat, dan Mudah Dipahami</p>
          </div>
        </div>

        {/* Grade switch */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs">
          <span className="text-[11px] text-slate-500 px-2 font-bold">Pilih Jenjang:</span>
          {(['sd', 'smp', 'sma'] as const).map((g) => (
            <button
              key={g}
              onClick={() => {
                setSelectedGrade(g);
                setIsPlaying(false);
              }}
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

      {/* Mock Video Canvas */}
      <div className="relative rounded-2xl bg-slate-950 overflow-hidden aspect-video max-h-[360px] flex items-center justify-center border-2 border-slate-900 shadow-lg group">
        {/* Animated Background Simulation */}
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950/40 to-slate-950 flex flex-col items-center justify-center p-6 text-center transition-all ${
          isPlaying ? 'opacity-90' : 'opacity-100'
        }`}>
          {/* Animated illustration graphic */}
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 mb-4 shadow-xl shadow-orange-500/30 flex items-center justify-center animate-pulse">
            <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center text-white">
              <Clapperboard className="w-10 h-10 text-orange-400" />
            </div>
          </div>

          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <School className="w-3.5 h-3.5" />
            {video.gradeName} • {video.subject}
          </span>
          <h4 className="text-base sm:text-xl font-black text-white max-w-lg mb-2">
            {video.title}
          </h4>
          <p className="text-xs text-slate-300 max-w-md hidden sm:block">
            {video.conceptNote}
          </p>

          {/* Yellow Contrast Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-4 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-400/30 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" />
                <span>Pause Animasi</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Putar Animasi Konsep</span>
              </>
            )}
          </button>
        </div>

        {/* Video progress bottom bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 flex items-center justify-between text-[11px] text-slate-300">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="font-mono text-slate-200">
              {isPlaying ? '01:45' : '00:00'} / {video.duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-1.5 rounded-lg transition-colors ${
                bookmarked ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Simpan ke rangkuman saya"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-[10px] font-bold">
              {(['1x', '1.25x', '1.5x'] as const).map((sp) => (
                <button
                  key={sp}
                  onClick={() => setPlaybackSpeed(sp)}
                  className={`px-1.5 py-0.5 rounded ${playbackSpeed === sp ? 'bg-orange-600 text-white' : 'text-slate-400'}`}
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Concept Details */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
          <span className="text-[11px] font-bold text-orange-950 uppercase tracking-wider block mb-1">
            Rumus & Konsep Inti (Cheat Sheet):
          </span>
          <p className="text-xs text-orange-900 font-mono font-semibold">
            {video.formulaTip}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-700 block">Unduh Rangkuman PDF Visual</span>
            <span className="text-[10px] text-slate-500">Gratis untuk seluruh siswa SD, SMP, & SMA</span>
          </div>
          <button
            onClick={() => setShowCheatsheet(!showCheatsheet)}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>{showCheatsheet ? 'Tutup Catatan' : 'Lihat Catatan'}</span>
          </button>
        </div>
      </div>

      {showCheatsheet && (
        <div className="mt-3 p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950 animate-fadeIn">
          <div className="flex items-center gap-2 font-bold mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Catatan Visual Master Teacher Cerdix ({video.gradeName})</span>
          </div>
          <p className="leading-relaxed">
            Materi video ini disertai animasi interaktif yang menghubungkan teori buku sekolah dengan fenomena kehidupan sehari-hari, melatih cara berpikir kritis daripada sekadar menghafal.
          </p>
        </div>
      )}
    </div>
  );
};

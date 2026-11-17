import React, { useState } from 'react';
import { X, Megaphone, FileText, Target, Sparkles, Copy, Check, Info, Layers } from 'lucide-react';
import { ACADEMIC_COPYWRITING } from '../../data/educoreData';

interface CopywritingPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopywritingPortfolioModal: React.FC<CopywritingPortfolioModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCopy = ACADEMIC_COPYWRITING[activeTab];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border-2 border-orange-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800">
        {/* Top bar (Orange 30% banner) */}
        <div className="flex items-center justify-between px-6 py-4 bg-orange-600 text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm block">Portofolio Periklanan & Copywriting Cerdix</span>
              <span className="text-[11px] text-orange-100">Tugas Deliverable Poin 4 & 5 • Creative Communication Paper</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-orange-700/80 hover:bg-orange-800 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pt-3 bg-slate-50 border-b border-slate-200 flex overflow-x-auto gap-2">
          {ACADEMIC_COPYWRITING.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setActiveTab(idx)}
              className={`pb-3 px-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {item.type}
            </button>
          ))}
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
                {currentCopy.type}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                {currentCopy.title}
              </h3>
            </div>

            {/* Contrast Yellow Copy Button */}
            <button
              onClick={() => handleCopy(`${currentCopy.headline}\n\n${currentCopy.opening}\n\n${currentCopy.bodyCopy}\n\nCTA: ${currentCopy.cta}`, 'copy')}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105"
            >
              {copiedKey === 'copy' ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Naskah Iklan</span>
                </>
              )}
            </button>
          </div>

          {/* Academic Brief: Media Kanal & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Target className="w-4 h-4 text-orange-600" />
                <span>Kanal Distribusi Media:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{currentCopy.channel}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Info className="w-4 h-4 text-orange-600" />
                <span>Target Audiens Spesifik:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{currentCopy.target}</p>
            </div>
          </div>

          {/* Actual Advertisement Mockup Box */}
          <div className="p-6 rounded-3xl bg-slate-50 border-2 border-orange-200 space-y-4">
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest block">
              Materi Naskah Iklan (Copywriting Deliverable):
            </span>

            <div className="space-y-3">
              <h4 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
                "{currentCopy.headline}"
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 italic">
                {currentCopy.opening}
              </p>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {currentCopy.bodyCopy}
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs">
                  <span>Call to Action:</span>
                  <span className="text-amber-300 font-black">{currentCopy.cta}</span>
                </div>

                <div className="text-[11px] text-slate-500">
                  Target: <strong>Remaja 13–18 th (SD–SMA) & Orang Tua</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Comparative Analysis */}
          <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-2">
            <span className="font-bold text-sm block flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Penjelasan Rasional & Pendekatan Komunikasi:
            </span>
            <p className="leading-relaxed text-slate-700">
              {currentCopy.rationalExplanation}
            </p>
          </div>
        </div>

        {/* Modal bottom bar */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
          >
            Tutup Portofolio
          </button>
        </div>
      </div>
    </div>
  );
};

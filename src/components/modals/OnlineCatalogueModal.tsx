import React, { useState } from 'react';
import { X, BookOpen, ChevronLeft, ChevronRight, CheckCircle2, Download, Printer, Sparkles, ArrowRight, ShieldCheck, School, Star } from 'lucide-react';
import { EDUCORE_BRAND, PRODUCT_FEATURES, PRICING_PACKAGES } from '../../data/educoreData';

interface OnlineCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage?: (planName: string) => void;
}

export const OnlineCatalogueModal: React.FC<OnlineCatalogueModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border-2 border-orange-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800">
        {/* Top bar (Orange 30% banner) */}
        <div className="flex items-center justify-between px-6 py-4 bg-orange-600 text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm block">Katalog Produk Digital Cerdix 2026</span>
              <span className="text-[11px] text-orange-100">Dokumen Resmi Pemasaran • PT Cerdix Nusantara Digital</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-xs text-white font-bold transition-colors"
              title="Cetak Katalog"
            >
              <Printer className="w-3.5 h-3.5" /> Cetak / PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-orange-700/80 hover:bg-orange-800 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Page Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50">
          {/* PAGE 1: COVER */}
          {currentPage === 1 && (
            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-14 space-y-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-orange-700">
                <Sparkles className="w-3.5 h-3.5" /> EDTECH PRODUCT CATALOGUE 2026
              </div>

              <div className="space-y-3 max-w-xl">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-orange-600">
                  CERDIX
                </h1>
                <p className="text-lg sm:text-xl font-bold text-orange-600">
                  {EDUCORE_BRAND.slogan}
                </p>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Ekosistem bimbingan belajar digital terpadu berbasis kecerdasan buatan adaptif untuk SD, SMP, SMA, dan Persiapan Masuk PTN Impian.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full pt-4">
                {EDUCORE_BRAND.stats.map((st) => (
                  <div key={st.label} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-xl sm:text-2xl font-black text-orange-600 font-mono block">
                      {st.value}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 font-medium">
                Penerbit: Divisi Kreatif & Komunikasi Pemasaran • PT Cerdix Nusantara Digital
              </div>
            </div>
          )}

          {/* PAGE 2: BRAND INTRODUCTION */}
          {currentPage === 2 && (
            <div className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Bagian 1</span>
                <h2 className="text-2xl font-black text-slate-900">Pengenalan Brand & Profil Perusahaan</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block">Nama Entitas Bisnis:</span>
                    <p className="text-slate-600">{EDUCORE_BRAND.companyName}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block">Filosofi Nama "Cerdix":</span>
                    <p className="text-slate-600 leading-relaxed">{EDUCORE_BRAND.brandMeaning}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 space-y-1.5">
                    <span className="font-bold block">Key Message (Pesan Kunci):</span>
                    <p className="italic">"{EDUCORE_BRAND.keyMessage}"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block">Unique Selling Proposition (USP):</span>
                    <p className="text-slate-600 leading-relaxed">{EDUCORE_BRAND.usp}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block">Cakupan Jenjang Pendidikan:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Lengkap dari <strong>SD (Kelas 1–6)</strong>, <strong>SMP (Kelas 7–9)</strong>, hingga <strong>SMA (Kelas 10–12 & SNBT)</strong> dengan integrasi Kurikulum Merdeka Terupdate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 3: PRODUCT OVERVIEW & 4 CORE FEATURES */}
          {currentPage === 3 && (
            <div className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Bagian 2</span>
                <h2 className="text-2xl font-black text-slate-900">4 Pilar Fitur Utama & Manfaat Pelanggan</h2>
                <p className="text-xs text-slate-500 mt-1">Solusi komprehensif untuk meningkatkan hasil belajar siswa secara efisien.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRODUCT_FEATURES.map((feat) => (
                  <div key={feat.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-orange-600">{feat.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold">
                        {feat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{feat.description}</p>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[11px] font-bold text-emerald-700 block">Manfaat Siswa:</span>
                      <p className="text-xs text-slate-600">{feat.customerBenefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 4: PRODUCT SPECIFICATIONS & PACKAGES */}
          {currentPage === 4 && (
            <div className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Bagian 3</span>
                <h2 className="text-2xl font-black text-slate-900">Spesifikasi Paket Belajar (SD - SMA)</h2>
                <p className="text-xs text-slate-500 mt-1">Daftar paket komprehensif mulai dari SD hingga intensif tembus PTN SNBT.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PRICING_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`p-4 rounded-2xl border flex flex-col justify-between ${
                      pkg.popular
                        ? 'bg-orange-50/70 border-orange-400 shadow-md ring-1 ring-orange-400'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <span className="text-[10px] font-black uppercase text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full inline-block mb-1">
                          🔥 Paling Populer
                        </span>
                      )}
                      <h4 className="font-bold text-sm text-slate-900">{pkg.name}</h4>
                      <span className="text-[11px] text-slate-500 block mb-2">{pkg.targetAudience}</span>
                      <div className="my-2">
                        <span className="text-xs line-through text-slate-400 block">Rp {pkg.originalPrice.toLocaleString('id-ID')}</span>
                        <span className="text-lg font-black text-orange-600 font-mono">
                          Rp {pkg.monthlyPrice.toLocaleString('id-ID')}/bln
                        </span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-slate-600 mt-3 pt-3 border-t border-slate-200">
                        {pkg.features.slice(0, 4).map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        if (onSelectPackage) onSelectPackage(pkg.name);
                        onClose();
                      }}
                      className="mt-4 w-full py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-transform hover:scale-105"
                    >
                      Pilih Paket Ini
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 5: CALL TO ACTION & CONTACT */}
          {currentPage === 5 && (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-3xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Daftarkan Putra-Putri Anda di Cerdix Sekarang
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Dapatkan <strong>Akses Uji Coba Gratis 7 Hari</strong> tanpa kartu kredit. Rasakan lompatan pemahaman konsep belajar dalam 1 minggu pertama.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 max-w-md w-full text-left space-y-2">
                <span className="font-bold block">Hotline Konsultasi Pendidikan:</span>
                <p>WhatsApp: <strong>+62 812-9900-CERDIX</strong></p>
                <p>Email: <strong>halo@cerdix.id</strong></p>
                <p>Alamat: Menara Cerdix Lt. 18, Jl. TB Simatupang Kav. 88, Jakarta Selatan</p>
              </div>

              <button
                onClick={() => {
                  if (onSelectPackage) onSelectPackage('Cerdix SD Ceria & Juara');
                  onClose();
                }}
                className="px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-400/30 flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span>Mulai Uji Coba Gratis 7 Hari</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100 border-t border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-bold">Halaman {currentPage} dari {totalPages}</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === p ? 'bg-orange-600 w-5' : 'bg-slate-300'
                  }`}
                  aria-label={`Ke halaman ${p}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 font-bold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white disabled:opacity-40 font-bold flex items-center gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

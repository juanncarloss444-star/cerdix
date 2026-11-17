import React from 'react';
import { Sparkles, Heart, Mail, Phone, MapPin, Instagram, Youtube, ExternalLink, ShieldCheck, BookOpen, Megaphone, Users, ArrowRight } from 'lucide-react';
import { EDUCORE_BRAND } from '../../data/educoreData';

interface FooterProps {
  onOpenCatalogue: () => void;
  onOpenCopywriting: () => void;
  onOpenTeam: () => void;
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCatalogue,
  onOpenCopywriting,
  onOpenTeam,
  onOpenTrial
}) => {
  return (
    <footer className="bg-slate-900 border-t-4 border-orange-500 text-slate-400 text-xs">
      {/* Top CTA Banner in Warm Orange Gradient with subtle ambient glow */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="animate-float-drift absolute -top-12 left-10 w-56 h-56 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
        <div className="animate-float-drift-reverse absolute -bottom-16 right-16 w-64 h-64 rounded-full bg-white/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">
              Siap Taklukkan Ujian Sekolah & Tembus PTN Impian?
            </h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-xl">
              Coba gratis sekarang untuk jenjang SD, SMP, hingga SMA tanpa kartu kredit!
            </p>
          </div>

          <button
            onClick={onOpenTrial}
            className="btn-shimmer px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-400/40 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Mulai Uji Coba Gratis 7 Hari</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-600 p-0.5 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                </div>
              </div>
              <span className="text-xl font-black text-orange-500 font-mono">
                CERDIX
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              <strong>{EDUCORE_BRAND.companyName}</strong> adalah perusahaan EdTech Indonesia yang mengintegrasikan kecerdasan buatan adaptif dengan kurikulum nasional resmi untuk menghadirkan pengalaman belajar yang cerdas, efisien, dan ramah kantong bagi jenjang SD hingga SMA.
            </p>

            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-[11px] text-orange-300">
              <span className="font-bold text-white block">Pesan Utama (Key Message):</span>
              "{EDUCORE_BRAND.keyMessage}"
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="Instagram Cerdix"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="YouTube Cerdix"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Jenjang & Fitur */}
          <div className="space-y-3">
            <h4 className="font-black text-sm text-white uppercase tracking-wider text-orange-400">
              Jenjang Belajar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  🎒 SD Ceria & Juara (Kelas 1–6)
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  📘 SMP Juara (Kelas 7–9)
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  🎓 SMA Pintar & Mandiri (Kelas 10–12)
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">
                  🎯 Intensif UTBK SNBT 2026
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  4 Pilar Fitur Adaptif
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Tugas & Deliverable Kelompok */}
          <div className="space-y-3">
            <h4 className="font-black text-sm text-white uppercase tracking-wider text-orange-400">
              Dokumen Tugas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenCatalogue}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                  <span>Katalog Produk (5 Hal)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCopywriting}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <Megaphone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Portofolio 3 Iklan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTeam}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <Users className="w-3.5 h-3.5 text-orange-400" />
                  <span>Lembar Tim (5 Mahasiswa)</span>
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Profil Brand Cerdix
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimoni Pelajar & Orang Tua
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak & Legal */}
          <div className="space-y-3">
            <h4 className="font-black text-sm text-white uppercase tracking-wider text-orange-400">
              Kantor Pusat
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Menara Cerdix Lt. 18, Jl. TB Simatupang Kav. 88, Cilandak, Jakarta Selatan 12430</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>+62 812-9900-CERDIX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>halo@cerdix.id</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong>PT Cerdix Nusantara Digital</strong>. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Kelompok Tema 4: E-Learning (Cerdix) • Refrensi Ruangguru</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

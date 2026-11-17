import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Megaphone, Users, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCatalogue: () => void;
  onOpenCopywriting: () => void;
  onOpenTeam: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCatalogue,
  onOpenCopywriting,
  onOpenTeam,
  onOpenTrial
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, y / maxScroll)));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b border-orange-200/80 shadow-md shadow-orange-900/5'
          : 'bg-white/85 border-b border-orange-100 shadow-xs'
      }`}
    >
      {/* Main Navigation Bar (60% White Base) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-orange-600 p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-orange-600 font-mono">
              CERDIX
            </span>
            <span className="text-[9px] text-slate-500 block -mt-1 tracking-wider uppercase font-bold">
              Adaptive E-Learning (SD–SMA)
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
          {[
            { href: '#curriculum', label: 'Kurikulum SD–SMA' },
            { href: '#about', label: 'Tentang Kami' },
            { href: '#testimonials', label: 'Testimoni' },
            { href: '#features', label: 'Fitur Unggulan' },
            { href: '#demos', label: 'Live Simulator' },
            { href: '#pricing', label: 'Paket & Biaya' },
            { href: '#faq', label: 'FAQ' },
            { href: '#contact', label: 'Kontak' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-orange-600 transition-colors whitespace-nowrap group"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </nav>

        {/* Right CTA: 10% Contrast Yellow Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="btn-shimmer px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md shadow-amber-400/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Daftar Trial Gratis 7 Hari</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenTrial}
            className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px]"
          >
            Coba Gratis
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-orange-100 px-4 py-5 space-y-3 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2.5 text-sm font-bold text-slate-700">
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Kurikulum Lengkap (SD, SMP, & SMA)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Tentang Kami & PT Cerdix
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Testimoni Siswa & Orang Tua
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              4 Fitur Utama (AdaptiMatch & Dapur Belajar)
            </a>
            <a
              href="#demos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Interactive Simulator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Paket Harga (Diskon 50%)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Pusat Bantuan & FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-orange-600"
            >
              Hubungi Advisor Pendidikan
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogue();
              }}
              className="w-full py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" /> Buka Katalog Produk Digital
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCopywriting();
              }}
              className="w-full py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Megaphone className="w-3.5 h-3.5" /> Portofolio Naskah Iklan
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTeam();
              }}
              className="w-full py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" /> Lembar Tim & Bukti Kontribusi
            </button>
          </div>
        </div>
      )}

      {/* Sleek Reading Scroll Progress Indicator */}
      <div className="h-[2.5px] w-full bg-orange-100/60 overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 origin-left transition-transform duration-75 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
};

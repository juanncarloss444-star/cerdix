import React, { useEffect, useRef, useState } from 'react';
import {
  BrainCircuit,
  Clapperboard,
  Award,
  Video,
  Sparkles,
  BookOpen,
  Compass,
  TrendingUp,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';

/**
 * AmbientHeroBackground
 * Ultra-lightweight 2D canvas + CSS atmospheric layer inspired by atmospheric cloud/aurora intros,
 * tuned strictly to Cerdix's 60% clean white/slate, 30% warm orange, 10% contrast amber palette.
 * Zero WebGL/Three.js overhead; pauses automatically when scrolled out of view or tab is hidden.
 */
export const AmbientHeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let pointerX = 0.5;
    let pointerY = 0.4;
    let targetX = 0.5;
    let targetY = 0.4;

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      hue: string;
      phase: number;
    }

    const particles: Particle[] = Array.from({ length: 28 }, (_, idx) => ({
      x: Math.random(),
      y: Math.random(),
      r: 2.2 + Math.random() * 4.2,
      vx: (Math.random() - 0.5) * 0.00018,
      vy: -0.00012 - Math.random() * 0.00022,
      alpha: 0.16 + Math.random() * 0.28,
      hue: idx % 3 === 0 ? '251, 191, 36' : '234, 88, 12', // amber-400 & orange-600
      phase: Math.random() * Math.PI * 2
    }));

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 320);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        targetY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let startTime = performance.now();

    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible || document.hidden) return;

      const t = (now - startTime) * 0.001;
      pointerX += (targetX - pointerX) * 0.04;
      pointerY += (targetY - pointerY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Soft warm ribbon waves (inspired by Sora atmospheric horizon motion)
      const waveConfigs = [
        { baseY: height * 0.68, amp: 24, freq: 0.0032, speed: 0.45, color: 'rgba(251, 146, 60, 0.10)' },
        { baseY: height * 0.76, amp: 18, freq: 0.0045, speed: -0.35, color: 'rgba(251, 191, 36, 0.09)' }
      ];

      waveConfigs.forEach((wave, wIdx) => {
        ctx.beginPath();
        const parallaxOffset = (pointerY - 0.5) * (wIdx === 0 ? 18 : -12);
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 36) {
          const y =
            wave.baseY +
            parallaxOffset +
            Math.sin(x * wave.freq + t * wave.speed + pointerX * 1.4) * wave.amp +
            Math.cos(x * wave.freq * 0.5 - t * 0.25) * (wave.amp * 0.45);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Subtle floating luminous sparks
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -0.05) {
          p.y = 1.05;
          p.x = Math.random();
        }
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;

        const px = p.x * width + (pointerX - 0.5) * 14 * (p.r / 4);
        const py = p.y * height + (pointerY - 0.5) * 10 * (p.r / 4);
        const pulse = 0.65 + 0.35 * Math.sin(t * 1.8 + p.phase);

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${(p.alpha * pulse).toFixed(3)})`;
        ctx.fill();
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Studio Crisp Base + Warm Aurora Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/85 via-white to-slate-50" />

      {/* Architectural Dot Grid */}
      <div className="absolute inset-0 cerdix-dot-grid opacity-75" />

      {/* Soft Drifting Cloud / Aura Layers (GPU transform only) */}
      <div className="animate-float-drift absolute -top-28 -left-24 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-orange-200/45 via-amber-100/35 to-transparent blur-3xl" />
      <div className="animate-float-drift-reverse absolute top-16 -right-24 w-[480px] h-[420px] rounded-full bg-gradient-to-bl from-amber-200/40 via-orange-100/35 to-transparent blur-3xl" />
      <div className="animate-float-drift absolute -bottom-24 left-1/3 w-[520px] h-[260px] rounded-full bg-gradient-to-t from-orange-100/50 to-transparent blur-2xl" />

      {/* Lightweight 2D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

/**
 * SectionAmbientBackdrop
 * Subtle floating warm geometry & ambient light aura for section depth without hurting readability.
 */
export const SectionAmbientBackdrop: React.FC<{ variant?: 'warm' | 'soft' }> = ({ variant = 'soft' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {variant === 'warm' ? (
        <>
          <div className="animate-float-drift absolute -top-20 right-10 w-80 h-80 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="animate-float-drift-reverse absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-amber-200/25 blur-3xl" />
        </>
      ) : (
        <>
          <div className="animate-float-drift-reverse absolute top-10 -left-16 w-72 h-72 rounded-full bg-orange-100/40 blur-3xl" />
          <div className="animate-float-drift absolute bottom-10 -right-16 w-72 h-72 rounded-full bg-amber-100/35 blur-3xl" />
        </>
      )}
    </div>
  );
};

/**
 * HeroHeadlineAnimated
 * Masked staggered word-up animation inspired by Sora Cloud's intro display headline.
 */
export const HeroHeadlineAnimated: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const words = text.split(' ');
  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, idx) => (
        <React.Fragment key={idx}>
          <span className="hero-word-mask">
            <span
              className="hero-word"
              style={{ ['--word-i' as string]: idx }}
            >
              {word}
            </span>
          </span>
          {idx < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </h1>
  );
};

/**
 * Reveal
 * Lightweight IntersectionObserver entrance transition matching Sora's `.reveal` pattern.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'scale'
      ? 'reveal-scale'
      : '';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${inView ? 'in' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}s` }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedCounter
 * Smooth numeric count-up when entering the viewport, preserving formatted suffixes (e.g. 500K+, 18.000+, 94%, 4.9/5).
 */
export const AnimatedCounter: React.FC<{ value: string; className?: string }> = ({ value, className = '' }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        // Parse known stat shapes cleanly
        if (value === '500K+') {
          animateVal(0, 500, 950, (n) => `${Math.round(n)}K+`);
        } else if (value === '18.000+') {
          animateVal(0, 18000, 1050, (n) => `${Math.round(n).toLocaleString('id-ID')}+`);
        } else if (value === '94%') {
          animateVal(0, 94, 900, (n) => `${Math.round(n)}%`);
        } else if (value === '4.9/5') {
          animateVal(0, 4.9, 900, (n) => `${n.toFixed(1)}/5`);
        } else {
          setDisplay(value);
        }
      },
      { threshold: 0.3 }
    );

    const animateVal = (from: number, to: number, duration: number, fmt: (n: number) => string) => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        // cubic ease out
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(fmt(from + (to - from) * eased));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplay(value);
        }
      };
      requestAnimationFrame(step);
    };

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

/**
 * ScrollCue
 * Animated vertical scroll indicator anchored below the Hero, fades gently on scroll.
 */
export const ScrollCue: React.FC<{ targetId: string }> = ({ targetId }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const next = Math.max(0, 1 - window.scrollY / 220);
      setOpacity(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="hidden lg:flex flex-col items-center gap-1.5 mt-6 transition-opacity duration-300"
      style={{ opacity }}
    >
      <a
        href={`#${targetId}`}
        className="group flex flex-col items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-orange-600/80 hover:text-orange-600 transition-colors"
      >
        <span>Gulir untuk jelajahi kurikulum</span>
        <span className="cerdix-scroll-cue-line" />
      </a>
    </div>
  );
};

/**
 * LearningMarquee
 * Continuous infinite dual-set marquee ribbon showcasing Cerdix features & national curriculum tracks.
 */
const MARQUEE_ITEMS = [
  { label: 'AdaptiMatch AI', sub: 'Kalibrasi Soal Real-Time', icon: BrainCircuit },
  { label: 'Dapur Belajar', sub: '18.000+ Video Animasi', icon: Clapperboard },
  { label: 'ANBK SD Ceria', sub: 'Literasi & Numerasi Kelas 1–6', icon: BookOpen },
  { label: 'Live Tutor Studio', sub: 'Master Teacher Interaktif', icon: Video },
  { label: 'Smart Tryout IRT', sub: 'Prediksi Skor UTBK SNBT', icon: Award },
  { label: 'Kurikulum Merdeka', sub: 'Terstandar SD • SMP • SMA', icon: Compass },
  { label: 'Laporan Progres Ortu', sub: 'Rekap Mingguan via WhatsApp', icon: ShieldCheck },
  { label: 'Hemat Waktu 60%', sub: 'Belajar Fokus Anti-Mager', icon: TrendingUp },
  { label: 'Target PTN Impian', sub: 'UI • ITB • UGM • UNAIR', icon: GraduationCap },
  { label: 'Gamifikasi Misi', sub: 'Streak & Lencana Prestasi', icon: Sparkles }
];

export const LearningMarquee: React.FC = () => {
  return (
    <section
      aria-label="Keunggulan & Materi Cerdix"
      className="py-5 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        <span>Ekosistem Lengkap Kurikulum Nasional & Ujian Resmi</span>
      </div>

      <div className="cerdix-marquee">
        <div className="cerdix-marquee-track">
          {[0, 1].map((dupIdx) => (
            <ul
              key={dupIdx}
              aria-hidden={dupIdx === 1}
              className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
              {MARQUEE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li
                    key={`${dupIdx}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-black text-slate-800">{item.label}</span>
                    <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                      • {item.sub}
                    </span>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  BrainCircuit,
  Clapperboard,
  Video,
  Award,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Search,
  TrendingUp,
  GraduationCap,
  Sliders,
  CheckCircle2
} from 'lucide-react';

import {
  EDUCORE_BRAND,
  GRADE_CURRICULA,
  TESTIMONIALS,
  PRODUCT_FEATURES,
  PRICING_PACKAGES,
  FAQ_LIST
} from './data/educoreData';

import { AdaptiMatchDemo } from './components/demos/AdaptiMatchDemo';
import { DapurBelajarDemo } from './components/demos/DapurBelajarDemo';
import { LiveTutorDemo } from './components/demos/LiveTutorDemo';
import { SmartTryoutDemo } from './components/demos/SmartTryoutDemo';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { OnlineCatalogueModal } from './components/modals/OnlineCatalogueModal';
import { CopywritingPortfolioModal } from './components/modals/CopywritingPortfolioModal';
import { TeamProjectModal } from './components/modals/TeamProjectModal';
import { FreeTrialModal } from './components/modals/FreeTrialModal';

import {
  AmbientHeroBackground,
  SectionAmbientBackdrop,
  HeroHeadlineAnimated,
  Reveal,
  AnimatedCounter,
  ScrollCue,
  LearningMarquee
} from './components/ui/AmbientMotion';

export default function App() {
  // Modal states
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isCopywritingOpen, setIsCopywritingOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedPlanForTrial, setSelectedPlanForTrial] = useState<string>('');
  const [selectedGradeForTrial, setSelectedGradeForTrial] = useState<'sd' | 'smp' | 'sma'>('sd');

  // Interactive UI states
  const [activeCurriculumTab, setActiveCurriculumTab] = useState<'sd' | 'smp' | 'sma'>('sd');
  const [testimonialFilter, setTestimonialFilter] = useState<'all' | 'sd' | 'smp' | 'sma' | 'ortu'>('all');
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>('adaptimatch');
  const [activeDemoTab, setActiveDemoTab] = useState<'adaptimatch' | 'dapur-belajar' | 'live-tutor' | 'smart-tryout'>('adaptimatch');
  const [pricingGradeFilter, setPricingGradeFilter] = useState<'all' | 'sd' | 'smp' | 'sma'>('all');
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-0');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactWa, setContactWa] = useState('');
  const [contactGrade, setContactGrade] = useState('SD (Kelas 1–6)');
  const [contactNote, setContactNote] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Subtle Hero Pillar spotlight cycle (pauses while hovering)
  const [highlightedPillarIdx, setHighlightedPillarIdx] = useState<number>(0);
  const [isPillarHovered, setIsPillarHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isPillarHovered) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setHighlightedPillarIdx((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPillarHovered]);

  const handleOpenTrialWithPlan = (planName: string, grade: 'sd' | 'smp' | 'sma' = 'sd') => {
    setSelectedPlanForTrial(planName);
    setSelectedGradeForTrial(grade);
    setIsTrialOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
  };

  // Filter pricing packages
  const filteredPricing = PRICING_PACKAGES.filter((p) => {
    if (pricingGradeFilter === 'all') return true;
    return p.gradeCategory === pricingGradeFilter || p.gradeCategory === 'all';
  });

  // Filter Testimonials
  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (testimonialFilter === 'all') return true;
    return t.gradeCategory === testimonialFilter;
  });

  // Filter FAQs
  const filteredFaqs = FAQ_LIST.filter((f) => {
    const matchCategory = faqCategory === 'all' || f.category === faqCategory;
    const matchSearch =
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  const activeCurriculum = GRADE_CURRICULA.find((c) => c.id === activeCurriculumTab) || GRADE_CURRICULA[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenCopywriting={() => setIsCopywritingOpen(true)}
        onOpenTeam={() => setIsTeamOpen(true)}
        onOpenTrial={() => handleOpenTrialWithPlan('Cerdix SD Ceria & Juara', 'sd')}
      />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION (SD - SMA COVERAGE, 60-30-10 PALETTE) */}
        {/* ========================================================================= */}
        <section className="relative pt-8 pb-14 lg:pt-14 lg:pb-16 overflow-hidden border-b border-orange-100">
          {/* Lightweight Animated Canvas + Atmospheric Cloud Layers */}
          <AmbientHeroBackground />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headline, Key Message, Fast Grade Buttons, CTAs */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                {/* USP Badge with SD-SMA Scope */}
                <div
                  className="hero-stagger inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/90 backdrop-blur-xs border border-orange-200 text-orange-800 text-xs font-bold shadow-xs"
                  style={{ ['--intro-delay' as string]: '0.05s' }}
                >
                  <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                  <span>Platform E-Learning Adaptif Jenjang Lengkap SD – SMP – SMA</span>
                </div>

                {/* Primary Headline & Key Message (Word-by-word masked rise like Sora) */}
                <HeroHeadlineAnimated
                  text="Bikin Pinter, Anti Mager!"
                  className="text-3xl sm:text-5xl lg:text-[3.35rem] font-black tracking-tight text-orange-600 leading-[1.14]"
                />

                <p
                  className="hero-stagger text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ ['--intro-delay' as string]: '0.32s' }}
                >
                  Bersama <strong>Cerdix</strong>, siswa dari jenjang <strong>SD, SMP, hingga SMA</strong> memahami konsep dasarnya, taklukkan semua ujian dengan mudah!
                  Integrasi <strong>AdaptiMatch AI</strong>, 18.000+ animasi <strong>Dapur Belajar</strong>, dan <strong>Live Tutor</strong> Master Teacher memangkas waktu belajar tak terarah hingga 60%.
                </p>

                {/* Jenjang Fast-Switcher Badges in Hero */}
                <div
                  className="hero-stagger flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs"
                  style={{ ['--intro-delay' as string]: '0.42s' }}
                >
                  <span className="text-[11px] font-bold text-slate-500">Pilih Jenjang Trial:</span>
                  <button
                    onClick={() => handleOpenTrialWithPlan('Cerdix SD Ceria & Juara', 'sd')}
                    className="px-3.5 py-1.5 rounded-xl bg-white/95 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-orange-700 font-bold transition-all hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
                  >
                    🎒 Kelas 1–6 SD
                  </button>
                  <button
                    onClick={() => handleOpenTrialWithPlan('Cerdix SMP Juara', 'smp')}
                    className="px-3.5 py-1.5 rounded-xl bg-white/95 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-orange-700 font-bold transition-all hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
                  >
                    📘 Kelas 7–9 SMP
                  </button>
                  <button
                    onClick={() => handleOpenTrialWithPlan('Cerdix SMA Pintar & Mandiri', 'sma')}
                    className="px-3.5 py-1.5 rounded-xl bg-white/95 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-400 text-orange-700 font-bold transition-all hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
                  >
                    🎓 Kelas 10–12 SMA
                  </button>
                </div>

                {/* Action Buttons: 10% Yellow Contrast CTA & White Secondary */}
                <div
                  className="hero-stagger flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                  style={{ ['--intro-delay' as string]: '0.52s' }}
                >
                  <button
                    onClick={() => setIsTrialOpen(true)}
                    className="btn-shimmer w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-lg shadow-amber-400/35 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Mulai Trial Gratis 7 Hari (SD–SMA)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#demos"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/95 hover:bg-orange-50/70 border-2 border-orange-200 hover:border-orange-400 text-orange-700 font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-xs whitespace-nowrap"
                  >
                    <Sliders className="w-4 h-4 text-orange-600" />
                    <span>Coba Live Simulator</span>
                  </a>
                </div>

                {/* Social Proof Stats with Animated Count-Up */}
                <div
                  className="hero-stagger pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80"
                  style={{ ['--intro-delay' as string]: '0.62s' }}
                >
                  {EDUCORE_BRAND.stats.map((st) => (
                    <div key={st.label} className="text-center lg:text-left">
                      <AnimatedCounter
                        value={st.value}
                        className="text-xl sm:text-2xl font-black text-slate-900 font-mono block"
                      />
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Lightweight Interactive 4-Pillar Showcase Card (Zero WebGL overhead) */}
              <div
                className="lg:col-span-6 hero-stagger"
                style={{ ['--intro-delay' as string]: '0.35s' }}
                onMouseEnter={() => setIsPillarHovered(true)}
                onMouseLeave={() => setIsPillarHovered(false)}
              >
                <div className="bg-white/95 backdrop-blur-xs rounded-3xl border-2 border-orange-200 shadow-xl shadow-orange-900/10 overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                  {/* Orange Header Banner */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center animate-float-gentle">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-black text-sm block">4 Pilar Belajar Cerdix</span>
                        <span className="text-[11px] text-orange-100">Klik pilar untuk langsung coba simulatornya</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wide whitespace-nowrap shadow-xs">
                      SD • SMP • SMA
                    </span>
                  </div>

                  {/* 4 Interactive Pillar Cards */}
                  <div className="p-5 sm:p-6 space-y-4 bg-slate-50/70">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        {
                          id: 'adaptimatch' as const,
                          title: 'AdaptiMatch AI',
                          desc: 'Soal otomatis menyesuaikan level kemampuanmu',
                          badge: 'AI Adaptif',
                          icon: BrainCircuit
                        },
                        {
                          id: 'dapur-belajar' as const,
                          title: 'Dapur Belajar',
                          desc: '18.000+ video animasi singkat 3–7 menit',
                          badge: 'Visual Seru',
                          icon: Clapperboard
                        },
                        {
                          id: 'live-tutor' as const,
                          title: 'Live Tutor',
                          desc: 'Kelas interaktif langsung bareng Master Teacher',
                          badge: 'Real-Time',
                          icon: Video
                        },
                        {
                          id: 'smart-tryout' as const,
                          title: 'Smart Tryout',
                          desc: 'Simulasi ANBK & UTBK SNBT sistem nilai IRT',
                          badge: 'Skor Akurat',
                          icon: Award
                        }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        const isSelected = activeDemoTab === item.id;
                        const isSpotlight = !isPillarHovered && highlightedPillarIdx === idx;
                        return (
                          <button
                            key={item.id}
                            onMouseEnter={() => setHighlightedPillarIdx(idx)}
                            onClick={() => {
                              setActiveFeatureTab(item.id);
                              setActiveDemoTab(item.id);
                              const demoEl = document.getElementById('demos');
                              if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-0.5 ${
                              isSelected || isSpotlight
                                ? 'bg-orange-50/90 border-orange-500 shadow-md shadow-orange-500/10'
                                : 'bg-white border-slate-200 hover:border-orange-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div
                                className={`p-2 rounded-xl transition-all duration-300 ${
                                  isSelected || isSpotlight
                                    ? 'bg-orange-600 text-white scale-110'
                                    : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 whitespace-nowrap">
                                {item.badge}
                              </span>
                            </div>
                            <h3 className="font-black text-sm text-slate-900 group-hover:text-orange-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom Quick Motivation & CTA Strip */}
                    <div className="p-4 rounded-2xl bg-white border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-2.5 text-left">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block">
                            Hemat Waktu Belajar Hingga 60%
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Sesuai Kurikulum Merdeka SD, SMP, hingga persiapan SNBT
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleOpenTrialWithPlan('Cerdix SD Ceria & Juara', 'sd')}
                        className="btn-shimmer w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shrink-0 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        Daftar Gratis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sora-inspired Animated Scroll Cue */}
            <ScrollCue targetId="curriculum" />
          </div>
        </section>

        {/* Continuous Infinite Learning Marquee */}
        <LearningMarquee />

        {/* ========================================================================= */}
        {/* INTERACTIVE GRADE STAGES SECTION: SD – SMP – SMA */}
        {/* ========================================================================= */}
        <section id="curriculum" className="py-14 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200">
          <SectionAmbientBackdrop variant="soft" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Jelajahi Ekosistem Kurikulum Merdeka
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Kurikulum Terpadu untuk Jenjang SD, SMP, & SMA
              </h2>
              <p className="text-sm text-slate-600">
                Setiap fase usia memiliki pendekatan pembelajaran yang disesuaikan secara ilmiah agar belajar tetap menyenangkan dan efektif.
              </p>
            </Reveal>

            {/* Segmented Grade Switcher with Sliding Pill */}
            <Reveal delay={0.08}>
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl mx-auto">
                {GRADE_CURRICULA.map((cur) => {
                  const isActive = activeCurriculumTab === cur.id;
                  return (
                    <button
                      key={cur.id}
                      onClick={() => setActiveCurriculumTab(cur.id)}
                      className={`relative flex-1 min-w-[150px] py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-colors shadow-xs overflow-hidden ${
                        isActive
                          ? 'border-orange-600 text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-orange-200 hover:text-slate-900'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="curriculumTabBg"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 bg-orange-600 rounded-[14px]"
                        />
                      )}
                      <span className="relative z-10 block font-black">{cur.name}</span>
                      <span className={`relative z-10 text-[11px] font-normal ${isActive ? 'text-orange-100' : 'text-slate-500'}`}>
                        {cur.ageRange}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Active Grade Curriculum Detail Card with Smooth Tab Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCurriculum.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-50/95 border-2 border-orange-200/80 space-y-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">{activeCurriculum.label}</h3>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-bold ${activeCurriculum.badgeColor}`}>
                        {activeCurriculum.ageRange}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-2xl">
                      {activeCurriculum.summary}
                    </p>
                  </div>

                  {/* Contrast Yellow Action Button */}
                  <button
                    onClick={() => handleOpenTrialWithPlan(`Cerdix ${activeCurriculum.name}`, activeCurriculum.id)}
                    className="btn-shimmer px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Coba Gratis {activeCurriculum.name}</span>
                  </button>
                </div>

                {/* Core Subjects List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Mata Pelajaran & Modul Utama:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {activeCurriculum.coreSubjects.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:-translate-y-0.5 text-xs text-slate-800 flex items-center gap-2 shadow-xs transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-semibold">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                  <strong>Inovasi Unggulan:</strong> {activeCurriculum.flagshipFeature}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: ABOUT US / ABOUT THE PRODUCT */}
        {/* ========================================================================= */}
        <section id="about" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Tentang PT Cerdix Nusantara Digital
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Merevolusi Cara Belajar Siswa SD Hingga SMA
              </h2>
              <p className="text-sm text-slate-600">
                Lahir dari keresahan atas metode belajar konvensional yang kaku dan melelahkan, Cerdix hadir sebagai teman belajar cerdas dan anti-mager bagi siswa di seluruh Indonesia.
              </p>
            </Reveal>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={0.04}>
                <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Fondasi "Cerdas + Digital" (Cerdix)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kami percaya rumus matematika atau sains di SD, SMP, hingga SMA bukan untuk dihafal mati, melainkan dipahami esensinya agar siswa mampu menyelesaikan variasi soal apa pun.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Hemat Waktu & Anti-Kelelahan</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tidak ada lagi waktu 2–3 jam yang terbuang sia-sia di kemacetan jalan sepulang sekolah. Pelajar memiliki waktu istirahat cukup, kesehatan mental terjaga, dan energi optimal untuk fokus belajar.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Standar Ujian Resmi IRT & ANBK</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Simulasi Asesmen Nasional (ANBK) untuk SD dan sistem Item Response Theory (IRT) untuk SMA menyajikan analisis kelemahan materi paling presisi dan ilmiah.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Comparison Table: Bimbel Konvensional vs Cerdix */}
            <Reveal delay={0.1} direction="scale">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-orange-200 space-y-6 shadow-sm">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                  Efisiensi Belajar Nyata
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Bimbel Konvensional Offline vs Cerdix Adaptive
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-700">
                      <th className="py-3 px-4 font-bold">Aspek Pembelajaran</th>
                      <th className="py-3 px-4 font-bold text-rose-600">Bimbel Konvensional Offline</th>
                      <th className="py-3 px-4 font-bold text-white bg-orange-600 rounded-t-xl">
                        Cerdix Adaptive E-Learning (SD–SMA) ✨
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Metode Penyesuaian Soal</td>
                      <td className="py-3.5 px-4 text-slate-500">Satu modul buku sama untuk 30 siswa di kelas</td>
                      <td className="py-3.5 px-4 font-bold text-orange-900 bg-orange-50/60">
                        AdaptiMatch AI otomatis mengkalibrasi tingkat kesulitan per individu
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Waktu & Lokasi Belajar</td>
                      <td className="py-3.5 px-4 text-slate-500">Jadwal kaku, habis waktu 1-2 jam di jalanan macet</td>
                      <td className="py-3.5 px-4 font-bold text-orange-900 bg-orange-50/60">
                        100% Fleksibel kapan saja & di mana saja via HP/Laptop
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Format Penjelasan Konsep</td>
                      <td className="py-3.5 px-4 text-slate-500">Ceramah 90 menit, siswa cepat bosan & ngantuk</td>
                      <td className="py-3.5 px-4 font-bold text-orange-900 bg-orange-50/60">
                        Animasi interaktif Dapur Belajar 3-7 menit padat visual
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Biaya Pendidikan</td>
                      <td className="py-3.5 px-4 text-slate-500">Rp 10.000.000 – Rp 25.000.000 per tahun</td>
                      <td className="py-3.5 px-4 font-bold text-orange-900 bg-orange-50/60">
                        Mulai Rp 99.000/bln (Hemat hingga 85% biaya)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Transparansi Orang Tua</td>
                      <td className="py-3.5 px-4 text-slate-500">Laporan cetak baru diterima di akhir semester</td>
                      <td className="py-3.5 px-4 font-bold text-orange-900 bg-orange-50/60">
                        Laporan Progres Mingguan real-time ke WhatsApp orang tua
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: TESTIMONIALS (SD, SMP, SMA, ORANG TUA - REPLACES KISAH BIMA) */}
        {/* ========================================================================= */}
        <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Testimoni & Kisah Sukses Nyata
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Terbukti Membantu Siswa SD Hingga SMA Berprestasi
              </h2>
              <p className="text-sm text-slate-600">
                Dengarkan pengalaman langsung dari para siswa dan orang tua yang telah bertransformasi bersama ekosistem pembelajaran adaptif Cerdix.
              </p>

              {/* Category Filter Chips with Animated Active Background */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  { id: 'all', label: 'Semua Cerita (6)' },
                  { id: 'sd', label: '🎒 Siswa & Ortu SD' },
                  { id: 'smp', label: '📘 Siswa SMP' },
                  { id: 'sma', label: '🎓 Siswa SMA & SNBT' },
                  { id: 'ortu', label: '👨‍👩‍👧 Suara Orang Tua' }
                ].map((tf) => {
                  const isActive = testimonialFilter === tf.id;
                  return (
                    <button
                      key={tf.id}
                      onClick={() => setTestimonialFilter(tf.id as any)}
                      className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="testimonialFilterBg"
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                          className="absolute inset-0 bg-orange-600 rounded-xl shadow-sm"
                        />
                      )}
                      <span className="relative z-10">{tf.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Testimonials Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredTestimonials.map((t, idx) => (
                  <motion.div
                    layout
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -8 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs relative group"
                  >
                    <div className="space-y-4">
                      {/* Header: Avatar, Name, School */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 shrink-0 group-hover:scale-105 transition-transform">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover rounded-[14px]"
                          />
                        </div>
                        <div className="overflow-hidden">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-sm text-slate-900 truncate">{t.name}</h4>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Terverifikasi" />
                          </div>
                          <span className="text-[11px] text-slate-500 block truncate">{t.roleOrSchool}</span>
                          <span className="text-[10px] font-bold text-orange-600 block mt-0.5">
                            {t.gradeBadge}
                          </span>
                        </div>
                      </div>

                      {/* Star Rating in 10% Yellow */}
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-mono font-bold text-amber-600 ml-1.5">5.0</span>
                      </div>

                      {/* Quote */}
                      <p className="text-xs text-slate-700 leading-relaxed italic">
                        "{t.quote}"
                      </p>

                      {/* Achievement Pill in contrast yellow/orange */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold">
                        <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{t.achievementBadge}</span>
                      </div>

                      {/* Before vs After Improvement Stats */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                          {t.improvementStats.label}:
                        </span>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-rose-500 line-through font-mono">
                            {t.improvementStats.before}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-emerald-600 font-bold font-mono text-sm">
                            {t.improvementStats.after} ✨
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Favorite Feature Tag in Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Fitur Favorit:</span>
                      <span className="font-bold text-orange-600 truncate max-w-[170px]">
                        {t.favoriteFeature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Inspiring Bottom Callout */}
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-orange-50 border-2 border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Ingin Meraih Prestasi Serupa Seperti Bima, Caca, dan Radit?
                  </h3>
                  <p className="text-xs text-slate-600">
                    Mulai dengan uji coba gratis 7 hari tanpa biaya, rasakan bedanya pemahaman konsep dengan metode adaptif.
                  </p>
                </div>

                {/* Contrast Yellow Button */}
                <button
                  onClick={() => handleOpenTrialWithPlan('Cerdix SD Ceria & Juara', 'sd')}
                  className="btn-shimmer px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shrink-0 shadow-md transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Mulai Uji Coba Gratis 7 Hari Sekarang
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: FEATURES / PRODUCT INFORMATION */}
        {/* ========================================================================= */}
        <section id="features" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <SectionAmbientBackdrop variant="warm" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Fitur & Inovasi Teknologi
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                4 Pilar Utama Ekosistem Belajar Cerdix
              </h2>
              <p className="text-sm text-slate-600">
                Mencakup kebutuhan belajar siswa dari tingkat SD, SMP, hingga persiapan seleksi masuk perguruan tinggi.
              </p>
            </Reveal>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCT_FEATURES.map((feat, fIdx) => {
                const isSelected = activeFeatureTab === feat.id;
                return (
                  <Reveal key={feat.id} delay={fIdx * 0.08}>
                    <div
                      className={`h-full p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                        isSelected
                          ? 'bg-white border-orange-500 shadow-md ring-1 ring-orange-500'
                          : 'bg-white/95 border-slate-200 hover:border-orange-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-200 font-bold">
                            {feat.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-orange-600">
                            {feat.metrics.value}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-slate-900">{feat.name}</h3>
                        <p className="text-xs text-orange-600 font-semibold mb-3">{feat.tagline}</p>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>

                        <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 mb-4">
                          <span className="text-[11px] font-bold text-orange-950 block mb-1">
                            Manfaat Utama bagi Siswa:
                          </span>
                          <p className="text-xs text-slate-700">{feat.customerBenefit}</p>
                        </div>

                        <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                          {feat.detailedSpecs.map((spec, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setActiveFeatureTab(feat.id);
                            setActiveDemoTab(feat.id as any);
                            const el = document.getElementById('demos');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition-colors group"
                        >
                          <span>Coba Simulator {feat.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE DEMOS / LIVE LAB SECTION (SD - SMA) */}
        {/* ========================================================================= */}
        <section id="demos" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Live Simulator (SD, SMP, & SMA)
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Coba Langsung Teknologi Cerdix
              </h2>
              <p className="text-sm text-slate-600">
                Uji coba simulasi kuis adaptif, video animasi konsep, dan simulasi skor ujian secara langsung di bawah ini.
              </p>
            </Reveal>

            {/* Demo Tabs (Animated Spring Pill) */}
            <Reveal delay={0.08}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: 'adaptimatch', label: '1. Simulator AdaptiMatch AI (SD–SMA)', icon: BrainCircuit },
                  { id: 'dapur-belajar', label: '2. Video Animasi Dapur Belajar', icon: Clapperboard },
                  { id: 'live-tutor', label: '3. Live Tutor Studio', icon: Video },
                  { id: 'smart-tryout', label: '4. Kalkulator IRT Tryout', icon: Award }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeDemoTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDemoTab(tab.id as any)}
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="demoTabBg"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 bg-orange-600 rounded-2xl shadow-md"
                        />
                      )}
                      <Icon className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Active Demo Render with Smooth Transition */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemoTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeDemoTab === 'adaptimatch' && <AdaptiMatchDemo />}
                  {activeDemoTab === 'dapur-belajar' && <DapurBelajarDemo />}
                  {activeDemoTab === 'live-tutor' && <LiveTutorDemo />}
                  {activeDemoTab === 'smart-tryout' && <SmartTryoutDemo />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PRICING / PACKAGES (WITH SD - SMA FILTER) */}
        {/* ========================================================================= */}
        <section id="pricing" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <SectionAmbientBackdrop variant="soft" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <Reveal className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Paket Langganan & Biaya
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Paket Belajar Terbaik untuk Jenjang SD, SMP, & SMA
              </h2>
              <p className="text-sm text-slate-600">
                Pilih paket sesuai tingkatan kelas putra-putri Anda. Tersedia akses gratis 7 hari untuk semua paket.
              </p>

              {/* Grade Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {[
                  { id: 'all', label: 'Semua Paket' },
                  { id: 'sd', label: '🎒 SD (Kelas 1–6)' },
                  { id: 'smp', label: '📘 SMP (Kelas 7–9)' },
                  { id: 'sma', label: '🎓 SMA & SNBT' }
                ].map((gf) => {
                  const isActive = pricingGradeFilter === gf.id;
                  return (
                    <button
                      key={gf.id}
                      onClick={() => setPricingGradeFilter(gf.id as any)}
                      className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="pricingFilterBg"
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                          className="absolute inset-0 bg-orange-600 rounded-xl shadow-sm"
                        />
                      )}
                      <span className="relative z-10">{gf.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Billing Toggle (Tahunan Diskon 50% vs Bulanan) */}
              <div className="pt-2 flex items-center justify-center gap-3 text-xs">
                <span className={billingPeriod === 'monthly' ? 'text-slate-900 font-bold' : 'text-slate-500'}>
                  Bayar Bulanan
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'annual' ? 'monthly' : 'annual')}
                  className="w-12 h-6 rounded-full bg-orange-600 p-0.5 transition-colors relative"
                  aria-label="Toggle billing period"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                      billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={billingPeriod === 'annual' ? 'text-slate-900 font-bold' : 'text-slate-500'}>
                  Bayar Tahunan <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black">Hemat 50%</span>
                </span>
              </div>
            </Reveal>

            {/* Pricing Cards Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <AnimatePresence mode="popLayout">
                {filteredPricing.map((pkg, pIdx) => {
                  const displayPrice = billingPeriod === 'annual'
                    ? Math.round(pkg.annualDiscountPrice / 12)
                    : pkg.monthlyPrice;

                  return (
                    <motion.div
                      layout
                      key={pkg.id}
                      initial={{ opacity: 0, y: 14, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: pkg.popular ? 1.03 : 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.28, delay: pIdx * 0.05 }}
                      className={`p-6 rounded-3xl border-2 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                        pkg.popular
                          ? 'bg-orange-50/90 border-orange-400 shadow-xl relative z-10'
                          : 'bg-white border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-md'
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md whitespace-nowrap">
                          🔥 Best Seller SNBT 2026
                        </div>
                      )}

                      <div>
                        <h3 className="font-black text-lg text-slate-900">{pkg.name}</h3>
                        <span className="text-xs text-slate-500 block mt-0.5">{pkg.targetAudience}</span>

                        {/* Price Section */}
                        <div className="my-5">
                          <span className="text-xs line-through text-slate-400 block">
                            Rp {pkg.originalPrice.toLocaleString('id-ID')}
                          </span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black text-orange-600 font-mono">
                              Rp {displayPrice.toLocaleString('id-ID')}
                            </span>
                            <span className="text-xs text-slate-500">/bulan</span>
                          </div>
                          {billingPeriod === 'annual' && (
                            <span className="text-[11px] text-emerald-700 font-bold block mt-1">
                              Ditagih Rp {pkg.annualDiscountPrice.toLocaleString('id-ID')}/tahun
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 mb-5 leading-relaxed">{pkg.description}</p>

                        <div className="space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-4">
                          <span className="text-[11px] font-bold text-slate-800 block mb-1">Fitur Termasuk:</span>
                          {pkg.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 10% Yellow Contrast Button */}
                      <div className="pt-6 mt-6 border-t border-slate-200">
                        <button
                          onClick={() => handleOpenTrialWithPlan(pkg.name, pkg.gradeCategory === 'all' ? 'sma' : pkg.gradeCategory)}
                          className="btn-shimmer w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-sm transition-transform hover:scale-105 active:scale-95"
                        >
                          Coba Gratis {pkg.name}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FAQ */}
        {/* ========================================================================= */}
        <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <Reveal className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Pusat Bantuan & FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-sm text-slate-600">
                Temukan informasi seputar kurikulum SD–SMA, metode AdaptiMatch AI, hingga ketentuan jaminan nilai.
              </p>
            </Reveal>

            {/* Search and Category Filter */}
            <Reveal delay={0.06} className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan (contoh: SD, kurikulum, IRT, garansi)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-10 pr-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: 'all', label: 'Semua Kategori' },
                  { id: 'program', label: 'Program SD–SMA' },
                  { id: 'metode', label: 'Metode AdaptiMatch AI' },
                  { id: 'biaya', label: 'Biaya & Garansi' },
                  { id: 'teknis', label: 'Teknis & Dashboard Ortu' }
                ].map((cat) => {
                  const isActive = faqCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setFaqCategory(cat.id)}
                      className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="faqFilterBg"
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                          className="absolute inset-0 bg-orange-600 rounded-xl shadow-xs"
                        />
                      )}
                      <span className="relative z-10">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Accordion list with Smooth Framer Motion Expand */}
            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isExpanded = expandedFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl bg-slate-50 border overflow-hidden transition-colors ${
                        isExpanded ? 'border-orange-300 shadow-xs' : 'border-slate-200 hover:border-orange-200'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-orange-600 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-5 pt-2 text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-xs text-slate-500">
                  Tidak ada pertanyaan yang sesuai dengan kata kunci "{faqSearch}".
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: CONTACT & FREE CONSULTATION / CTA (SD - SMA) */}
        {/* ========================================================================= */}
        <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal direction="scale">
              <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white shadow-2xl">
                {/* Ambient Drifting Light Shapes */}
                <div className="animate-float-drift absolute -top-16 -right-16 w-72 h-72 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />
                <div className="animate-float-drift-reverse absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-white/15 blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Info & Key Message */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> Konsultasi Pendidikan Bebas Biaya (SD–SMA)
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-black leading-tight">
                      Konsultasi Rencana Belajar dengan Senior Education Advisor
                    </h2>

                    <p className="text-sm sm:text-base text-orange-50 leading-relaxed max-w-xl">
                      Bingung memilih paket belajar yang pas untuk anak di SD, SMP, atau persiapan tembus SNBT?
                      Tim spesialis kurikulum kami siap melakukan pemetaan bakat akademik dan menyusun roadmap belajar personal tanpa biaya.
                    </p>

                    <div className="space-y-3 pt-2 text-xs sm:text-sm text-orange-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span>WhatsApp Hotline 24 Jam: <strong>+62 812-9900-CERDIX</strong></span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <span>Email Resmi Dukungan: <strong>konsultasi@cerdix.id</strong></span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <span>Kantor Pusat: Menara Cerdix Lt. 18, Jl. TB Simatupang No. 88, Jakarta Selatan</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Form: Clean White Card with 10% Yellow Submit */}
                  <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-xl border border-orange-100">
                  {contactSuccess ? (
                    <div className="text-center py-8 space-y-3">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">Permintaan Konsultasi Diterima!</h4>
                      <p className="text-xs text-slate-600">
                        Senior Education Advisor Cerdix akan menghubungi WhatsApp <strong>{contactWa}</strong> dalam waktu 15 menit ke depan.
                      </p>
                      <button
                        onClick={() => setContactSuccess(false)}
                        className="mt-3 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                      >
                        Kirim Form Baru
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
                          Formulir Konsultasi Gratis
                        </span>
                        <h3 className="text-lg font-black text-slate-900">Jadwalkan Sesi Konseling</h3>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Nama Siswa / Orang Tua:
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Contoh: Ibu Ratna / Bima Pratama"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Nomor WhatsApp Aktif:
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactWa}
                          onChange={(e) => setContactWa(e.target.value)}
                          placeholder="Contoh: 08123456789"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Jenjang Pendidikan:
                        </label>
                        <select
                          value={contactGrade}
                          onChange={(e) => setContactGrade(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-orange-500 font-medium"
                        >
                          <option>SD (Kelas 1–6)</option>
                          <option>SMP (Kelas 7–9)</option>
                          <option>SMA (Kelas 10–12)</option>
                          <option>Alumni / Gap Year SNBT 2026</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Kebutuhan / Target Belajar:
                        </label>
                        <textarea
                          rows={2}
                          value={contactNote}
                          onChange={(e) => setContactNote(e.target.value)}
                          placeholder="Contoh: Ingin meningkatkan nilai matematika SD atau lolos SNBT ITB..."
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 resize-none"
                        />
                      </div>

                      {/* 10% Yellow Contrast Submit Button */}
                      <button
                        type="submit"
                        className="btn-shimmer w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md shadow-amber-400/30 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                      >
                        <Sparkles className="w-4 h-4 fill-slate-950" />
                        <span>Kirim Permintaan Konsultasi Belajar</span>
                      </button>

                      <p className="text-[10px] text-slate-400 text-center">
                        Bebas biaya • Tanpa paksaan berlangganan • Data dijamin aman
                      </p>
                    </form>
                  )}
                </div>
              </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
        onOpenCopywriting={() => setIsCopywritingOpen(true)}
        onOpenTeam={() => setIsTeamOpen(true)}
        onOpenTrial={() => handleOpenTrialWithPlan('Cerdix SD Ceria & Juara', 'sd')}
      />

      {/* Deliverable Modals */}
      <OnlineCatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        onSelectPackage={(pkg) => handleOpenTrialWithPlan(pkg, 'sd')}
      />

      <CopywritingPortfolioModal
        isOpen={isCopywritingOpen}
        onClose={() => setIsCopywritingOpen(false)}
      />

      <TeamProjectModal
        isOpen={isTeamOpen}
        onClose={() => setIsTeamOpen(false)}
      />

      <FreeTrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        selectedPlan={selectedPlanForTrial}
        selectedGrade={selectedGradeForTrial}
      />
    </div>
  );
}

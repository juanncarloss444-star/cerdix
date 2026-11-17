export interface ProductFeature {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  iconName: string;
  color: string;
  gradient: string;
  description: string;
  detailedSpecs: string[];
  customerBenefit: string;
  metrics: { label: string; value: string };
  demoPreview: string;
}

export interface PricingPlan {
  id: string;
  gradeCategory: 'sd' | 'smp' | 'sma' | 'all';
  name: string;
  targetAudience: string;
  popular?: boolean;
  monthlyPrice: number;
  originalPrice: number;
  period: string;
  annualDiscountPrice: number;
  description: string;
  features: string[];
  colorTheme: string;
}

export interface FAQItem {
  id: string;
  category: 'program' | 'metode' | 'biaya' | 'teknis';
  question: string;
  answer: string;
}

export interface CopywritingItem {
  type: 'Brand Awareness (High Profile)' | 'Hard-Working Response (Action)' | 'Direct Marketing (Email/WA)';
  title: string;
  channel: string;
  target: string;
  headline: string;
  opening: string;
  bodyCopy: string;
  cta: string;
  rationalExplanation: string;
}

export interface TeamMember {
  id: string;
  name: string;
  nim: string;
  role: string;
  tasks: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  gradeCategory: 'sd' | 'smp' | 'sma' | 'ortu';
  gradeBadge: string;
  roleOrSchool: string;
  avatar: string;
  quote: string;
  achievementBadge: string;
  improvementStats: { label: string; before: string; after: string };
  favoriteFeature: string;
  rating: number;
}

export interface GradeCurriculum {
  id: 'sd' | 'smp' | 'sma';
  name: string;
  label: string;
  badgeColor: string;
  ageRange: string;
  summary: string;
  coreSubjects: string[];
  flagshipFeature: string;
}

export const GRADE_CURRICULA: GradeCurriculum[] = [
  {
    id: "sd",
    name: "Sekolah Dasar (SD / MI)",
    label: "Jenjang SD (Kelas 1–6)",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    ageRange: "Usia 6–12 Tahun",
    summary: "Membangun fondasi logika berhitung ceria, literasi membaca terarah, dan pemahaman sains alam tanpa rasa takut pada angka.",
    coreSubjects: [
      "Matematika Ceria & Logika Bilangan",
      "Ilmu Pengetahuan Alam & Sosial (IPAS)",
      "Bahasa Indonesia & Literasi Membaca",
      "English for Young Learners",
      "Persiapan Asesmen Nasional (ANBK SD)"
    ],
    flagshipFeature: "Video Dapur Belajar ramah anak dengan karakter animasi interaktif dan kuis gamifikasi seru."
  },
  {
    id: "smp",
    name: "Sekolah Menengah Pertama (SMP / MTs)",
    label: "Jenjang SMP (Kelas 7–9)",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    ageRange: "Usia 12–15 Tahun",
    summary: "Transisi konsep abstrak tingkat menengah, pemecahan masalah kontekstual, penguasaan rumus logika, dan seleksi masuk SMA favorit.",
    coreSubjects: [
      "Matematika (Aljabar, Geometri, Statistika)",
      "Ilmu Pengetahuan Alam (Fisika, Biologi, Kimia Terpadu)",
      "Ilmu Pengetahuan Sosial (IPS Terpadu)",
      "Bahasa Indonesia & Bahasa Inggris Komunikatif",
      "Persiapan Asesmen Bakat Minat & Ujian Sekolah"
    ],
    flagshipFeature: "AdaptiMatch AI yang membedah kebingungan rumus aljabar secara visual langkah-demi-langkah."
  },
  {
    id: "sma",
    name: "Sekolah Menengah Atas (SMA / SMK / MA)",
    label: "Jenjang SMA (Kelas 10–12 & SNBT)",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    ageRange: "Usia 15–18 Tahun",
    summary: "Spesialisasi materi Kurikulum Merdeka (MIPA & IPS), pengawalan nilai raport SNBP, serta bimbingan intensif tembus seleksi PTN (SNBT UTBK).",
    coreSubjects: [
      "Matematika Tingkat Lanjut & Kalkulus",
      "Fisika, Kimia, & Biologi Molekuler",
      "Ekonomi, Geografi, Sosiologi, & Sejarah",
      "Penalaran Matematika & Literasi SNBT",
      "Simulasi Ujian UTBK Berbobot IRT Resmi"
    ],
    flagshipFeature: "Smart Tryout IRT Nasional dengan rasionalisasi peluang lolos PTN impian (UI, ITB, UGM) secara ilmiah."
  }
];

export const EDUCORE_BRAND = {
  name: "Cerdix",
  companyName: "PT Cerdix Nusantara Digital",
  slogan: "Bikin Pinter, Anti Mager!",
  brandMeaning: "Gabungan dari Cerdas dan Digital (X), mencerminkan komitmen untuk menciptakan generasi pelajar yang pintar, cepat paham, dan anti-mager melalui teknologi pendidikan modern.",
  keyMessage: "Bikin Pinter, Anti Mager! Pahami konsep dasarnya, taklukkan semua ujian dengan mudah bersama Cerdix!",
  gradeCoverage: "Jenjang Lengkap SD – SMP – SMA Sederajat",
  vision: "Menjadi ekosistem pendidikan teknologi adaptif terdepan di Indonesia yang membuka akses pemahaman konsep materi terbaik dari tingkat SD hingga persiapan perguruan tinggi tanpa batasan geografis dan finansial.",
  mission: [
    "Menyederhanakan materi pelajaran rumit menjadi konsep visual interaktif yang menyenangkan untuk siswa SD, SMP, hingga SMA.",
    "Menggunakan kecerdasan buatan (AI) adaptif agar setiap anak belajar sesuai ritme dan tingkat kemampuan unik masing-masing.",
    "Menghadirkan tutor terbaik tingkat nasional dengan biaya yang ramah dan terjangkau bagi seluruh keluarga Indonesia.",
    "Membimbing siswa meraih peringkat kelas, sekolah impian, dan PTN favorit dengan sistem pembelajaran terpadu."
  ],
  usp: "Integrasi Sistem Pembelajaran Adaptif berbasis AI dengan Kurikulum Nasional Terupdate untuk jenjang SD hingga SMA, memberikan peta jalan belajar (learning path) paling personal dan memangkas waktu belajar tak terarah hingga 60%.",
  stats: [
    { label: "Siswa Aktif SD–SMA", value: "250.000+", note: "di 38 provinsi Indonesia" },
    { label: "Lolos PTN & Sekolah Impian", value: "94.8%", note: "UI, ITB, UGM & SMA Unggulan" },
    { label: "Video Animasi Konsep", value: "18.000+", note: "Mencakup SD, SMP, hingga SMA" },
    { label: "Tutor & Mentor Ahli", value: "1.200+", note: "Lulusan kampus top nasional" },
  ]
};

export const CUSTOMER_PERSONAS = [
  {
    id: "sma-bima",
    gradeType: "SMA (Kelas 12)",
    name: "Bima Arya",
    age: 17,
    grade: "Kelas 12 SMA Negeri di Kota Depok (Penyangga Jakarta)",
    targetGoal: "Lolos SNBT 2026 Jurusan Teknik Informatika / Kedokteran PTN Favorit",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    traits: [
      "Digital native, sangat aktif di smartphone & media sosial",
      "Menyukai konten visual ringkas, tidak suka membaca buku teks tebal yang monoton",
      "Berambisi tinggi menembus PTN favorit negeri",
      "Mudah lelah jika harus les offline dengan perjalanan 1-2 jam macet sepulang sekolah"
    ],
    painPoints: [
      "Sering terjebak hafalan rumus cepat tanpa paham konsep dasar di sekolah.",
      "Waktu habis di jalan saat les bimbingan konvensional offline.",
      "Materi tryout di luar sering kali tidak sesuai bobot resmi IRT BPPP Kemendikbud."
    ],
    educoreSolution: [
      "AdaptiMatch AI memetakan bab materi SMA yang belum Bima kuasai.",
      "Dapur Belajar memberi video animasi 5 menit yang meruntuhkan rumus rumit jadi visual jernih.",
      "Smart Tryout memberi laporan skor IRT instan lengkap dengan rekomendasi perbaikan."
    ]
  },
  {
    id: "smp-radit",
    gradeType: "SMP (Kelas 8)",
    name: "Raditya Pratama",
    age: 14,
    grade: "Kelas 8 SMP Negeri di Surabaya",
    targetGoal: "Raih Peringkat 3 Besar Kelas & Masuk SMA Favorit Jalur Prestasi",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    traits: [
      "Gemari gadget dan video kreatif, mudah teralihkan jika materi belajar membosankan",
      "Kerap bingung dengan transisi matematika aljabar dan rumus fisika di SMP",
      "Butuh teman belajar yang suportif dan tidak menghakimi"
    ],
    painPoints: [
      "Sering kesulitan mengerjakan PR matematika dan IPA di rumah.",
      "Guru di sekolah menjelaskan terlalu cepat karena keterbatasan jam pelajaran.",
      "Rasa percaya diri turun ketika nilai ulangan harian menurun."
    ],
    educoreSolution: [
      "Video konsep Dapur Belajar SMP menyajikan animasi analogi kehidupan sehari-hari.",
      "Live Tutor malam hari memfasilitasi tanya jawab PR secara interaktif.",
      "Latihan adaptif AI memberi soal dari level mudah hingga Radit benar-benar paham."
    ]
  },
  {
    id: "sd-caca",
    gradeType: "SD (Kelas 4)",
    name: "Nadia 'Caca' Putri",
    age: 9,
    grade: "Kelas 4 Sekolah Dasar di Bandung",
    targetGoal: "Senang Belajar Berhitung, Mahir Membaca & Juara Kelas SD",
    profileImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    traits: [
      "Sangat aktif, punya rasa ingin tahu tinggi terhadap hal-hal baru di sekitar",
      "Belajar optimal melalui warna-warni animasi, cerita bergambar, dan suara ramah",
      "Didampingi oleh Ibunda (Ibu Maya) dalam menggunakan gadget untuk edukasi"
    ],
    painPoints: [
      "Cepat bosan membaca lembar kerja buku teks hitam-putih sekolah.",
      "Takut pada pelajaran matematika karena merasa angka itu sulit.",
      "Ibu kesulitan menjelaskan cara berhitung kurikulum baru yang berbeda dengan zaman dulu."
    ],
    educoreSolution: [
      "Dapur Belajar SD menghadirkan animasi karakter dongeng bertema sains dan matematika ceria.",
      "Games kuis edukatif berbasis AI yang memberikan reward stiker digital saat berhasil menjawab.",
      "Dashboard orang tua mempermudah Ibu Maya memantau perkembangan belajar Caca."
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-bima",
    name: "Bima Arya",
    gradeCategory: "sma",
    gradeBadge: "Alumni SMA • Lolos SNBT 2026",
    roleOrSchool: "Siswa SMA Negeri di Depok → STEI-R ITB",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    quote: "Dulu tiap pulang les offline jam 9 malam badan capek banget di jalanan macet. Pas kenal Cerdix, fitur AdaptiMatch AI langsung nunjukin titik lemahku di Penalaran Matematika. Video Dapur Belajar 5 menit bikin rumus aljabar yang tadinya abstrak jadi masuk akal banget. Alhamdulillah sekarang lolos ITB impian!",
    achievementBadge: "Lolos Pilihan 1 STEI Rekayasa ITB",
    improvementStats: { label: "Skor Tryout SNBT", before: "518", after: "742" },
    favoriteFeature: "AdaptiMatch AI & Smart Tryout IRT",
    rating: 5
  },
  {
    id: "testi-caca",
    name: "Ibu Maya & Caca (9 Tahun)",
    gradeCategory: "sd",
    gradeBadge: "Siswa SD Kelas 4 & Orang Tua",
    roleOrSchool: "SD Swasta Favorit di Bandung",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    quote: "Caca dulu sering nangis kalau ada PR matematika karena merasa angkanya menyeramkan. Sejak belajar pakai Dapur Belajar SD, animasinya seru seperti menonton kartun dongeng. Kuisnya gamifikasi jadi Caca antusias mengumpulkan bintang. Saya juga tenang karena ada laporan otomatis tiap minggu ke WhatsApp saya.",
    achievementBadge: "Nilai Matematika SD Naik Drastis",
    improvementStats: { label: "Nilai Ulangan IPAS & MTK", before: "65", after: "96" },
    favoriteFeature: "Dapur Belajar Animasi SD & Parent Dashboard",
    rating: 5
  },
  {
    id: "testi-radit",
    name: "Raditya Pratama",
    gradeCategory: "smp",
    gradeBadge: "Siswa SMP Kelas 8",
    roleOrSchool: "SMP Negeri di Surabaya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    quote: "Transisi ke rumus fisika dan aljabar di SMP sempat bikin aku kewalahan dan nilaiku anjlok ke peringkat belasan. Untung ada sesi Live Tutor malam hari di Cerdix. Kakak tutornya ramah, bisa tanya mic langsung tanpa malu, dan trik hitung cepatnya kepakai banget pas ulangan semester!",
    achievementBadge: "Raih Peringkat 2 Paralel Kelas",
    improvementStats: { label: "Peringkat Kelas SMP", before: "Ke-18", after: "Juara 2" },
    favoriteFeature: "Live Tutor Live-Stream Studio",
    rating: 5
  },
  {
    id: "testi-alika",
    name: "Alika Putri",
    gradeCategory: "sma",
    gradeBadge: "Siswa SMA Kelas 12",
    roleOrSchool: "SMA Negeri di Jakarta Selatan → FK UI",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    quote: "Smart Tryout IRT di Cerdix akurasinya 99% mirip sama layar dan sistem skoring UTBK BPPP yang sesungguhnya. Radar diagnostiknya bikin aku tahu persis subtes mana yang harus dipush setiap minggunya tanpa buang-buang waktu.",
    achievementBadge: "Lolos Fakultas Kedokteran UI",
    improvementStats: { label: "Skor IRT Kemampuan Skolastik", before: "565", after: "788" },
    favoriteFeature: "Smart Tryout IRT Berstandar BPPP",
    rating: 5
  },
  {
    id: "testi-hendra",
    name: "Pak Hendra Wijaya",
    gradeCategory: "ortu",
    gradeBadge: "Orang Tua Siswa (SD & SMA)",
    roleOrSchool: "Wali Murid Siswa Kelas 5 SD & Kelas 11 SMA di Tangerang",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    quote: "Sebagai orang tua yang bekerja, mengantar anak les offline di sore hari yang macet sangat menguras tenaga dan waktu. Dengan Cerdix, kedua anak saya bisa belajar nyaman di rumah dengan pengajar terbaik. Efisiensi biaya keluarga kami juga mencapai 75% lebih hemat dibanding bimbel konvensional.",
    achievementBadge: "Hemat 75% Biaya Bimbingan Belajar",
    improvementStats: { label: "Efisiensi Belajar Anak", before: "Lelah di Jalan", after: "Fokus & Berprestasi" },
    favoriteFeature: "Laporan WhatsApp Ortu & Multi-Device",
    rating: 5
  },
  {
    id: "testi-farel",
    name: "Farel Zulkarnain",
    gradeCategory: "smp",
    gradeBadge: "Alumni SMP Kelas 9",
    roleOrSchool: "SMP di Yogyakarta → Lolos SMA Taruna Nusantara",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    quote: "Persiapan tes akademik masuk SMA unggulan sangat terbantu oleh bank soal HOTS Cerdix. Tutornya menjelaskan konsep dasarnya sampai ke akarnya, jadi ketemu soal model apapun tidak gampang bingung.",
    achievementBadge: "Lolos Seleksi Masuk SMA Taruna Nusantara",
    improvementStats: { label: "Rata-rata Nilai Asesmen", before: "76.0", after: "95.5" },
    favoriteFeature: "Bank Soal HOTS & Live Tutor",
    rating: 5
  }
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "adaptimatch",
    name: "AdaptiMatch AI",
    tagline: "Latihan Soal Cerdas Menyesuaikan Kemampuanmu (SD–SMA)",
    badge: "AI Powered",
    iconName: "BrainCircuit",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    description: "Sistem latihan soal mutakhir yang secara otomatis mendeteksi tingkat pemahaman siswa di setiap jenjang (SD, SMP, maupun SMA). Jika siswa menjawab salah, AI tidak hanya memberi pembahasan, tetapi juga menyajikan soal penguat konsep secara realtime.",
    detailedSpecs: [
      "Algoritma Dynamic Item Difficulty Calibration untuk SD hingga SMA",
      "Pemetaan Diagnostic Mastery Radar per mata pelajaran & bab",
      "Rekomendasi kilat video konsep yang wajib ditonton ulang",
      "Bank soal terlengkap dengan 120.000+ variasi soal Kurikulum Merdeka"
    ],
    customerBenefit: "Waktu belajar jadi 3x lebih hemat karena siswa hanya fokus memperbaiki materi yang belum dikuasai, bukan mengerjakan soal yang sudah dimengerti berulang kali.",
    metrics: { label: "Efisiensi Belajar", value: "+65% Lebih Cepat Paham" },
    demoPreview: "Interactive adaptive question engine with live diagnostic radar"
  },
  {
    id: "dapur-belajar",
    name: "Dapur Belajar",
    tagline: "18.000+ Video Animasi Konsep SD, SMP, & SMA",
    badge: "Visual Learning",
    iconName: "Clapperboard",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    description: "Bank video pembelajaran dengan animasi visual 2D/3D interaktif berdurasi 3-7 menit untuk jenjang SD, SMP, dan SMA. Menjelaskan 'mengapa' dan 'bagaimana' sebuah rumus lahir, sehingga siswa memahami akar konsep materi tanpa perlu menghafal secara buta.",
    detailedSpecs: [
      "18.000+ video animasi HD Kurikulum Merdeka & Kurikulum Nasional",
      "Disertai Cheatsheet Rangkuman Rumus & Peta Konsep Infografis",
      "Fitur Quick Bookmark, Kecepatan Putar (0.75x hingga 2x), dan Mode Hemat Kuota",
      "Kuis interaktif di tengah video untuk menguji retensi pemahaman"
    ],
    customerBenefit: "Materi pelajaran dari pecahan SD, aljabar SMP, hingga kalkulus SMA dapat dicerna dengan mudah bahkan oleh siswa pemula.",
    metrics: { label: "Retensi Ingatan", value: "88% Ingat Konsep Jangka Panjang" },
    demoPreview: "High definition concept visualizer with interactive timeline bookmarks"
  },
  {
    id: "live-tutor",
    name: "Live Tutor Live-Stream",
    tagline: "Kelas Interaktif Real-Time Bersama Master Teacher SD–SMA",
    badge: "Interactive Class",
    iconName: "Video",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    description: "Sesi live streaming dua arah berkecepatan tinggi dengan tutor-tutor terbaik Indonesia untuk semua tingkatan. Siswa dapat berdiskusi langsung, bertanya lewat mikrofon atau chat, mengikuti polling kuis cepat, dan mendapatkan bimbingan tips trik pengerjaan soal.",
    detailedSpecs: [
      "Jadwal fleksibel sore dan malam hari disesuaikan ritme SD, SMP, dan SMA",
      "Sistem Angkat Tangan (Raise Hand) & Diskusi Mic Langsung",
      "Rekaman kelas (replay) otomatis tersimpan seumur hidup langganan",
      "Kelas intensif bedah soal PR dan persiapan ujian sekolah"
    ],
    customerBenefit: "Merasakan suasana bimbingan belajar kelas premium langsung dari kenyamanan kamar tanpa harus bermacet-macetan.",
    metrics: { label: "Kepuasan Sesi", value: "4.92 / 5.0 Bintang Pengajar" },
    demoPreview: "Simulated live room with chat stream and interactive audience poll"
  },
  {
    id: "smart-tryout",
    name: "Smart Tryout IRT & ANBK",
    tagline: "Simulasi Ujian Akurat SD (ANBK), SMP, & SMA (SNBT)",
    badge: "Official Standard",
    iconName: "Award",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    description: "Simulasi ujian komprehensif: ANBK untuk SD, Asesmen Sekolah untuk SMP, dan sistem penilaian Item Response Theory (IRT) resmi SNBT untuk SMA. Memberikan analisis kelemahan materi secara instan.",
    detailedSpecs: [
      "Penilaian IRT resmi SNBT untuk SMA & standar Asesmen Nasional untuk SD/SMP",
      "Peringkat Nasional (Leaderboard) realtime setelah tryout selesai",
      "Prediksi Peluang Kelolosan Sekolah Favorit & Jurusan PTN",
      "Analisis waktu pengerjaan per nomor untuk melatih time management"
    ],
    customerBenefit: "Membangun mental juara dan kepercayaan diri tinggi sebelum hari-H ujian sekolah maupun seleksi PTN nasional.",
    metrics: { label: "Akurasi Prediksi", value: "96.4% Relevan dengan Skor Asli" },
    demoPreview: "IRT scoring dashboard with probability calculator for top universities"
  }
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: "sd-ceria",
    gradeCategory: "sd",
    name: "Cerdix SD Ceria & Juara",
    targetAudience: "Siswa Kelas 1 s.d. 6 SD / MI",
    monthlyPrice: 99000,
    originalPrice: 199000,
    period: "bulan",
    annualDiscountPrice: 599000,
    description: "Fondasi emas matematika dasar, sains IPAS, dan literasi membaca ceria Kurikulum Merdeka SD.",
    colorTheme: "from-emerald-500 to-teal-600",
    features: [
      "Akses penuh 3.500+ Video Animasi Dapur Belajar SD",
      "AdaptiMatch AI Latihan Soal & Kuis Gamifikasi Anak",
      "Modul Persiapan Asesmen Nasional (ANBK SD)",
      "Bimbingan PR Matematika & IPAS Interaktif",
      "Dashboard Pemantauan Progres Khusus Orang Tua",
      "Sertifikat Digital Apresiasi Belajar Tiap Bab"
    ]
  },
  {
    id: "smp-reguler",
    gradeCategory: "smp",
    name: "Cerdix SMP Juara",
    targetAudience: "Siswa Kelas 7, 8, dan 9 SMP / MTs",
    monthlyPrice: 149000,
    originalPrice: 299000,
    period: "bulan",
    annualDiscountPrice: 899000,
    description: "Pendamping setia raih ranking 1 di kelas SMP dan persiapan seleksi masuk SMA unggulan favorit.",
    colorTheme: "from-cyan-500 to-blue-600",
    features: [
      "Akses penuh 5.500+ Video Dapur Belajar SMP (IPA, MTK, IPS)",
      "AdaptiMatch AI Latihan Soal Harian Kurikulum Merdeka",
      "Tryout Asesmen Sekolah & Ujian Akhir Semester",
      "Rangkuman Infografis & Cheatsheet Rumus Cepat",
      "2x Sesi Live Tutor mingguan bersama Master Teacher",
      "Forum Tanya PR Komunitas Terpandu Tutor"
    ]
  },
  {
    id: "sma-reguler",
    gradeCategory: "sma",
    name: "Cerdix SMA Pintar & Mandiri",
    targetAudience: "Siswa Kelas 10, 11, dan 12 SMA / SMK / MA",
    monthlyPrice: 189000,
    originalPrice: 389000,
    period: "bulan",
    annualDiscountPrice: 1199000,
    description: "Kuasai materi mendalam MIPA & IPS, jaga konsistensi raport SNBP, dan taklukkan ujian sekolah SMA.",
    colorTheme: "from-indigo-500 to-purple-600",
    features: [
      "9.000+ Video Konsep Dapur Belajar SMA Lengkap",
      "AdaptiMatch AI dengan deteksi kelemahan spesifik bab",
      "Simulasi Ujian Semester & Penilaian Standar Nasional",
      "Bedah Soal HOTS Ujian Tengah & Akhir Semester",
      "Konsultasi Panduan Nilai Raport untuk Seleksi SNBP",
      "Akses Replay Video Pembelajaran Kapan Saja"
    ]
  },
  {
    id: "snbt-intensif",
    gradeCategory: "sma",
    name: "Intensif Pejuang SNBT 2026",
    targetAudience: "Siswa Kelas 12 SMA & Gap Year Pejuang PTN",
    popular: true,
    monthlyPrice: 299000,
    originalPrice: 599000,
    period: "bulan",
    annualDiscountPrice: 1499000,
    description: "Paket paling direkomendasikan untuk menembus PTN impian (UI, ITB, UGM) dengan bimbingan total.",
    colorTheme: "from-amber-500 to-rose-600",
    features: [
      "Semua akses materi SMA + Modul Khusus SNBT TPS & Literasi",
      "25x Smart Tryout IRT Nasional dengan perangkingan realtime",
      "Simulasi Sistem UTBK persis layar ujian resmi BPPP",
      "Analisis Rasionalisasi Peluang Masuk PTN Pilihan 1 & 2",
      "4x Sesi Live Tutor mingguan bersama Master Teacher alumni PTN top",
      "Garansi Uang Kembali jika nilai tryout tidak meningkat!"
    ]
  },
  {
    id: "ultimate-vip",
    gradeCategory: "all",
    name: "Cerdix Ultimate 1-on-1 VIP (SD–SMA)",
    targetAudience: "Siswa SD, SMP, atau SMA yang Butuh Mentor Privat",
    monthlyPrice: 499000,
    originalPrice: 999000,
    period: "bulan",
    annualDiscountPrice: 2899000,
    description: "Pengalaman belajar ultra-personal dengan Kakak Mentor privat yang membimbing setiap langkahmu.",
    colorTheme: "from-purple-600 to-pink-600",
    features: [
      "Seluruh fitur paket reguler & intensif sesuai jenjang siswa",
      "Dedicated 1-on-1 Personal Mentor (Kakak Asuh Lulusan PTN)",
      "Jadwal Konsultasi Tanya PR & Materi Privat via Video Call",
      "Penyusunan Jadwal Belajar Harian Khusus (Custom Study Path)",
      "Laporan Progres Belajar Mingguan langsung ke WhatsApp Orang Tua",
      "Akses Bebas Tanya PR 24/7 Tanpa Batasan Jumlah Soal"
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-0",
    category: "program",
    question: "Apakah Cerdix mencakup semua jenjang dari SD sampai SMA?",
    answer: "Ya, Cerdix menyediakan materi pembelajaran terintegrasi lengkap dari jenjang Sekolah Dasar (SD/MI kelas 1–6), Sekolah Menengah Pertama (SMP/MTs kelas 7–9), hingga Sekolah Menengah Atas (SMA/SMK/MA kelas 10–12 dan persiapan SNBT UTBK)."
  },
  {
    id: "faq-1",
    category: "program",
    question: "Apa perbedaan Cerdix dengan bimbingan belajar konvensional?",
    answer: "Cerdix tidak membebani siswa dengan hafalan rumus buta atau jadwal kelas kaku yang melelahkan di jalan. Dengan sistem AdaptiMatch AI, siswa SD hingga SMA hanya mempelajari materi yang belum dikuasai secara presisi. Ditambah ribuan video konsep animasi Dapur Belajar, waktu belajar menjadi 60% lebih hemat dan efisien."
  },
  {
    id: "faq-2",
    category: "program",
    question: "Apakah materi di Cerdix sudah sesuai Kurikulum Merdeka?",
    answer: "Ya, seluruh materi di Cerdix terus diperbarui mengikuti Kurikulum Merdeka serta Kurikulum Nasional terkini dari Kemendikbudristek untuk SD (Fase A, B, C), SMP (Fase D), dan SMA (Fase E & F), termasuk materi seleksi masuk PTN (SNBT dan Mandiri)."
  },
  {
    id: "faq-3",
    category: "metode",
    question: "Bagaimana cara kerja AdaptiMatch AI untuk siswa SD, SMP, dan SMA?",
    answer: "Saat siswa mengerjakan latihan, AdaptiMatch AI mengukur kecepatan dan ketepatan respons. Untuk siswa SD, AI menyajikan penguatan logika visual dengan analogi cerita. Untuk SMP dan SMA, sistem memetakan pemahaman konsep rumus dan secara dinamis menaikkan atau menurunkan tingkat kesulitan soal secara adaptif."
  },
  {
    id: "faq-4",
    category: "metode",
    question: "Bagaimana sistem penilaian IRT di Smart Tryout Cerdix?",
    answer: "Metode IRT (Item Response Theory) tidak sekadar menghitung jumlah benar x poin. Soal yang dijawab benar oleh sedikit siswa akan mendapatkan bobot nilai yang lebih tinggi, persis dengan sistem resmi seleksi SNBT. Siswa SMA akan menerima skor berskala 200–800 dengan breakdown kelemahan per subtes."
  },
  {
    id: "faq-5",
    category: "biaya",
    question: "Apakah ada garansi jika hasil belajar tidak meningkat?",
    answer: "Khusus untuk paket tahunan, Cerdix memberikan Garansi Kepuasan & Peningkatan Nilai. Jika siswa telah menyelesaikan minimal 80% roadmap belajar namun skor rapor atau tryout tidak menunjukkan kenaikan, kami memberikan garansi perpanjangan gratis atau skema refund sesuai ketentuan."
  },
  {
    id: "faq-6",
    category: "biaya",
    question: "Metode pembayaran apa saja yang didukung oleh Cerdix?",
    answer: "Kami mendukung berbagai metode pembayaran instan dan aman: Transfer Virtual Account (BCA, Mandiri, BRI, BNI), Dompet Digital (GoPay, OVO, ShopeePay, DANA), QRIS, kartu kredit/debit, hingga minimarket (Indomaret dan Alfamart)."
  },
  {
    id: "faq-7",
    category: "teknis",
    question: "Apakah satu akun Cerdix bisa diakses di beberapa perangkat?",
    answer: "Siswa dapat login menggunakan akun yang sama di smartphone (Android & iOS), tablet, maupun laptop/komputer melalui website. Sistem sinkronisasi otomatis akan menyimpan progres belajar, riwayat tontonan, dan catatan soal terakhir Anda."
  },
  {
    id: "faq-8",
    category: "teknis",
    question: "Apakah ada fitur khusus untuk orang tua siswa SD dan SMP?",
    answer: "Tentu ada! Cerdix menyediakan fitur 'Parent Guardian Dashboard' dan Laporan Mingguan WhatsApp otomatis, sehingga orang tua dapat memantau waktu belajar, nilai latihan soal, serta topik yang sedang dipelajari anak tanpa rasa khawatir."
  }
];

export const ACADEMIC_COPYWRITING: CopywritingItem[] = [
  {
    type: "Brand Awareness (High Profile)",
    title: "Kampanye 'Bikin Pinter, Anti Mager dari SD Hingga Kuliah Impian'",
    channel: "Billboard Digital Sudirman & YouTube Masthead Video",
    target: "Siswa SD, SMP, SMA & Orang Tua di Seluruh Indonesia",
    headline: "Capek Belajar Keras Tiap Malam Tapi Nilai Masih Segitu Aja?",
    opening: "Setiap hari jutaan pelajar dari jenjang SD hingga SMA berjuang sampai larut malam, mengorbankan waktu istirahat dan masa muda demi meraih prestasi.",
    bodyCopy: "Tapi faktanya, kunci keberhasilan bukanlah seberapa larut kamu begadang, melainkan seberapa dalam kamu memahami konsep intinya. PT Cerdix Nusantara Digital mempersembahkan Cerdix: platform e-learning adaptif untuk jenjang SD sampai SMA dengan tagline 'Bikin Pinter, Anti Mager'. AdaptiMatch AI memetakan jalan belajarmu secara personal. Tanpa macet di jalan, tanpa hafalan buta, pahami konsep dengan ribuan animasi interaktif Dapur Belajar.",
    cta: "Bikin Pinter, Anti Mager Hari Ini – Coba Gratis 7 Hari di cerdix.id!",
    rationalExplanation: "Tujuan: Membangun awareness bahwa belajar efektif tanpa rasa malas (anti-mager) dan tanpa hafalan buta adalah kunci prestasi dari jenjang SD hingga SMA. Tone: Menggugah, akrab dengan gaya remaja (Bikin Pinter, Anti Mager), dan memposisikan Cerdix sebagai solusi belajar modern."
  },
  {
    type: "Hard-Working Response (Action)",
    title: "Promo Flash Sale 'Back-to-School & Bedol Desa SNBT'",
    channel: "Instagram & TikTok Sponsored Ads + Push In-App Promo",
    target: "Pelajar SD, SMP, SMA & Pejuang SNBT (Persona: Caca, Radit, Bima)",
    headline: "Tingkatkan Nilai Rapor & Tembus Sekolah/PTN Impian dengan Diskon 50%!",
    opening: "Jangan tunggu nilai ujian anjlok baru kelabakan mencari tempat les!",
    bodyCopy: "Dapatkan Paket Belajar Cerdix (SD, SMP, atau SMA) dengan DISKON 50% HANYA MINGGU INI! Nikmati puluhan ribu video konsep animasi, latihan soal adaptif AI, dan kelas Live Tutor interaktif bersama pengajar terbaik nasional. Kuota terbatas hanya untuk 500 pendaftar pertama!",
    cta: "KLAIM DISKON 50% SEKARANG SEBELUM PERIODE BERAKHIR!",
    rationalExplanation: "Tujuan: Menstimulasi aksi pendaftaran langsung (direct response conversion) dengan memanfaatkan urgensi harga diskon dan pembatasan kuota."
  },
  {
    type: "Direct Marketing (Email/WA)",
    title: "Pesan Edukasi Khusus Orang Tua Siswa SD–SMA",
    channel: "WhatsApp Official Broadcast & Email Newsletter Tersegmentasi",
    target: "Orang Tua Siswa SD, SMP, dan SMA (Pengambil Keputusan Finansial)",
    headline: "Bantu Putra-Putri Ayah & Bunda Berprestasi Tanpa Beban Lembur & Macet",
    opening: "Yth. Ayah & Bunda, melihat anak kelelahan belajar hingga larut malam setelah seharian di sekolah tentu mencemaskan bagi kita semua.",
    bodyCopy: "Di PT Cerdix Nusantara Digital, kami mendampingi putra-putri Ayah & Bunda dari jenjang SD hingga SMA untuk memahami konsep pelajaran dengan gembira, bikin pinter dan anti mager dari rumah. Anda tidak perlu repot mengantar-jemput les di tengah kemacetan. Kami juga menyediakan fitur Laporan Progres Belajar Mingguan yang dikirim langsung ke WhatsApp Ayah & Bunda, sehingga perkembangan akademik anak dapat terpantau transparan.",
    cta: "Jadwalkan Konsultasi Pendidikan Gratis dengan Konselor Cerdix (Balas 'INFO CERDIX')",
    rationalExplanation: "Tujuan: Membangun kepercayaan orang tua (reassurance) dengan mengedepankan keamanan anak di rumah, efisiensi biaya, dan transparansi laporan langsung ke WhatsApp."
  }
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Juann Carlos (Ketua Tim)",
    nim: "2023101001",
    role: "Project Manager & Creative Lead",
    tasks: ["Mengorkestrasi seluruh perancangan kampanye", "Menyusun Product & Brand Profile Cerdix (SD-SMA)", "Finalisasi konsep integrasi web & presentasi"]
  },
  {
    id: "2",
    name: "Anggota 2",
    nim: "2023101002",
    role: "UI/UX & Web Developer",
    tasks: ["Perancangan arsitektur antarmuka modern jenjang SD–SMA", "Desain UI 60-30-10 & optimasi performa website ringan", "Pengembangan simulator adaptif responsive"]
  },
  {
    id: "3",
    name: "Anggota 3",
    nim: "2023101003",
    role: "Senior Copywriter & Content Strategist",
    tasks: ["Penyusunan copywriting website (SD, SMP, SMA, SNBT)", "Pembuatan materi Advertising & Direct Marketing", "Perumusan Tone of Voice ramah & inspiratif"]
  },
  {
    id: "4",
    name: "Anggota 4",
    nim: "2023101004",
    role: "Product & Market Researcher",
    tasks: ["Riset perbandingan kurikulum SD–SMA (Kurikulum Merdeka)", "Perumusan 3 persona: Caca (SD), Radit (SMP), Bima (SMA)", "Penyusunan Online Product Catalogue specifications"]
  },
  {
    id: "5",
    name: "Anggota 5",
    nim: "2023101005",
    role: "Marketing & Media Planner",
    tasks: ["Penyusunan strategi kanal promosi untuk siswa & orang tua", "Perhitungan skema paket harga SD, SMP, SMA, SNBT", "Persiapan materi defense presentasi dosen"]
  }
];

import React, { useState } from 'react';
import { X, Users, Award, CheckCircle2, Edit3, Save, Copy, Check, FileCheck, Layers, Sparkles } from 'lucide-react';
import { INITIAL_TEAM_MEMBERS, EDUCORE_BRAND, TeamMember } from '../../data/educoreData';

interface TeamProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamProjectModal: React.FC<TeamProjectModalProps> = ({
  isOpen,
  onClose
}) => {
  const [members, setMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleMemberChange = (id: string, field: 'name' | 'nim' | 'role', val: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: val } : m))
    );
  };

  const handleCopyContribution = () => {
    let report = `GROUP CONTRIBUTION STATEMENT & PROJECT DELIVERABLES\n`;
    report += `Perusahaan: ${EDUCORE_BRAND.companyName} (Cerdix)\n`;
    report += `Tema: Nomor 4 (E-Learning Platform)\n\n`;
    report += `DAFTAR ANGGOTA TIM & PEMBAGIAN TUGAS:\n`;
    members.forEach((m, idx) => {
      report += `${idx + 1}. ${m.name} (NIM: ${m.nim})\n   Peran: ${m.role}\n   Tugas: ${m.tasks.join(', ')}\n\n`;
    });
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border-2 border-orange-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800">
        {/* Top bar (Orange 30% banner) */}
        <div className="flex items-center justify-between px-6 py-4 bg-orange-600 text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20 text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-sm block">Lembar Tim & Bukti Kontribusi Proyek</span>
              <span className="text-[11px] text-orange-100">Poin 5 Submission Requirements • Kelompok E-Learning (Cerdix)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-xs font-bold text-white transition-colors"
            >
              {isEditing ? <Save className="w-3.5 h-3.5 text-amber-300" /> : <Edit3 className="w-3.5 h-3.5 text-amber-300" />}
              {isEditing ? 'Selesai Edit' : 'Edit Nama / NIM'}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-orange-700/80 hover:bg-orange-800 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-50">
          {/* Brief header info */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Kelompok 4 (5 Anggota Mahasiswa)
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Mata Kuliah: Komunikasi Pemasaran & Kreatif
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-900">
              Marketing & Creative Communication Team — PT Cerdix Nusantara Digital
            </h3>
            <p className="text-xs text-slate-600">
              Dokumen resmi pertanggungjawaban peran dan kontribusi seluruh anggota kelompok untuk presentasi dan penilaian dosen.
            </p>
          </div>

          {/* Members list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members.map((member, idx) => (
              <div
                key={member.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs hover:border-orange-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 font-black text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {isEditing ? (
                      <div className="space-y-1.5">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)}
                          placeholder="Nama Mahasiswa"
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs text-slate-900 font-bold"
                        />
                        <input
                          type="text"
                          value={member.nim}
                          onChange={(e) => handleMemberChange(member.id, 'nim', e.target.value)}
                          placeholder="NIM"
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs text-slate-900 font-mono"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => handleMemberChange(member.id, 'role', e.target.value)}
                          placeholder="Role / Peran"
                          className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs text-orange-600 font-semibold"
                        />
                      </div>
                    ) : (
                      <div>
                        <h4 className="font-black text-sm text-slate-900 truncate">{member.name}</h4>
                        <span className="text-xs text-slate-500 font-mono block">NIM: {member.nim}</span>
                        <span className="text-xs font-bold text-orange-600 block mt-0.5">{member.role}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 block mb-1">Tanggung Jawab Spesifik:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {member.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Checklist Deliverables */}
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-2">
            <span className="font-bold text-sm block flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-orange-600" />
              Kelengkapan Tugas yang Telah Terintegrasi Penuh:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>Poin 1: Product & Brand Profile Lengkap (Cerdix)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>Poin 2: Website & 6 Bagian Wajib (SD–SMA)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>Poin 3: Digital Product Catalogue 5 Halaman PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span>Poin 4: 3 Materi Iklan & Naskah Copywriting Lengkap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal bottom bar */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500">
            *Dapat diedit langsung sebelum presentasi atau diekspor ke naskah makalah.
          </div>

          <div className="flex items-center gap-2">
            {/* Contrast Yellow Copy Button */}
            <button
              onClick={handleCopyContribution}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Lembar Pertanggungjawaban'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

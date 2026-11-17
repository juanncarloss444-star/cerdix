import React, { useState } from 'react';
import { Video, Hand, MessageSquare, Users, Send, CheckCircle2, Award, Flame, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: string;
  role: 'student' | 'tutor';
  text: string;
  time: string;
}

export const LiveTutorDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'Kak Randy (Master Tutor ITB)', role: 'tutor', text: 'Halo pejuang prestasi SD, SMP & SMA! Hari ini kita bedah tips penalaran logika paling sering keluar di ujian ya.', time: '19:30' },
    { id: '2', sender: 'Caca (Kelas 5 SD)', role: 'student', text: 'Kak, cara cepat pecahan campuran kemarin gampang banget dipahami!', time: '19:31' },
    { id: '3', sender: 'Bima (Siswa SMA)', role: 'student', text: 'Kak, boleh bedah trik eliminasi cepat soal UTBK SNBT?', time: '19:32' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);
  const [pollVotes, setPollVotes] = useState({ A: 42, B: 128, C: 26, D: 18 });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'Kamu (Siswa Cerdix)',
      role: 'student',
      text: chatInput,
      time: '19:33'
    };
    setMessages((prev) => [...prev, newMsg]);
    setChatInput('');

    // Simulated tutor response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'Kak Randy (Master Tutor ITB)',
          role: 'tutor',
          text: `Pertanyaan keren banget! Perhatikan papan tulis interaktif di layar utama ya.`,
          time: '19:33'
        }
      ]);
    }, 1000);
  };

  const handleVote = (option: 'A' | 'B' | 'C' | 'D', index: number) => {
    if (selectedPoll !== null) return;
    setSelectedPoll(index);
    setPollVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-orange-200/90 p-5 md:p-8 shadow-xl relative overflow-hidden text-slate-800">
      {/* Background warm tint */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm md:text-base">Studio Live Tutor Interaktif</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 text-[11px] font-bold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                ON AIR • 284 Siswa Hadir
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Bimbingan Langsung Master Teacher Lulusan Kampus Top Dunia</p>
          </div>
        </div>

        {/* Raise Hand Toggle in contrast yellow/slate */}
        <button
          onClick={() => setIsHandRaised(!isHandRaised)}
          className={`px-3.5 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition-all shadow-sm ${
            isHandRaised
              ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
          }`}
        >
          <Hand className="w-3.5 h-3.5" />
          <span>{isHandRaised ? '✋ Tangan Terangkat (Tutor Menotice!)' : '✋ Angkat Tangan untuk Bertanya'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Tutor Video Feed & Real-time Poll */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl bg-slate-950 overflow-hidden aspect-video border-2 border-slate-900 shadow-md flex items-center justify-center text-center p-4">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-0.5 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xl">
                  👨‍🏫
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Live Stream Master Teacher
                </span>
                <h4 className="text-sm sm:text-base font-black text-white">
                  Kak Randy S.T. (Alumni Teknik ITB)
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                  "Kunci utama: identifikasi kata kunci soal sebelum menulis persamaan!"
                </p>
              </div>
            </div>

            <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              1080p 60fps Rendah Latensi
            </div>
          </div>

          {/* Real-time Interactive In-Class Poll */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                Live Quick Poll: Jawaban Paling Tepat?
              </span>
              <span className="text-[11px] font-bold text-orange-600">Total: 214 Suara</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(['A', 'B', 'C', 'D'] as const).map((opt, idx) => {
                const votes = pollVotes[opt];
                const isSelected = selectedPoll === idx;
                return (
                  <button
                    key={opt}
                    onClick={() => handleVote(opt, idx)}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                        : 'bg-white hover:bg-orange-50/50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span>Opsi {opt}</span>
                    <span className="font-mono text-[11px] opacity-80">{votes} suara</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Chat Room */}
        <div className="lg:col-span-5 flex flex-col h-[340px] bg-slate-50 rounded-2xl border border-slate-200 p-3.5">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-orange-600" />
              Live Q&A Room
            </span>
            <span className="text-[11px] text-slate-500">Moderasi Otomatis</span>
          </div>

          {/* Messages scroll */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-2.5 rounded-xl ${
                  m.role === 'tutor'
                    ? 'bg-orange-50 border border-orange-200 text-slate-900'
                    : 'bg-white border border-slate-200 text-slate-800 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-black text-[11px] ${m.role === 'tutor' ? 'text-orange-700' : 'text-slate-900'}`}>
                    {m.sender}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{m.time}</span>
                </div>
                <p className="leading-snug">{m.text}</p>
              </div>
            ))}
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="mt-2 pt-2 border-t border-slate-200 flex gap-2">
            <input
              type="text"
              placeholder="Ketik pertanyaan untuk Kak Tutor..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
            />
            {/* Contrast Yellow Button */}
            <button
              type="submit"
              className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

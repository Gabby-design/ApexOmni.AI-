import React, { useState } from 'react';
import { playTone, playSendSound, playReceiveSound } from '../utils/audio';

export default function FloatingChat({ onOpenLeadModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  const toggleChat = () => {
    playTone(500, 'sine', 0.05, 0.08);
    setIsOpen(!isOpen);
  };

  const handleReply = (userText) => {
    playSendSound();
    const updated = [
      ...chatLog,
      { sender: 'user', text: userText }
    ];
    setChatLog(updated);

    setTimeout(() => {
      playReceiveSound();
      setChatLog([
        ...updated,
        {
          sender: 'ai',
          text: "Our 14-day free pilot deploys a trained bot to your channels. If it doesn't book at least 5 appointments during the 14 days, you pay $0."
        }
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Mini Live Chat Popover Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-2xl overflow-hidden flex flex-col transition-all">
          <div className="p-3.5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                AO
              </div>
              <div>
                <div className="text-xs font-bold text-white">ApexOmni Instant Assistant</div>
                <div className="text-[10px] text-emerald-400 font-mono">Live Demo Assistant</div>
              </div>
            </div>
            <button onClick={toggleChat} className="text-slate-400 hover:text-white p-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs max-h-64 overflow-y-auto chat-scroll">
            <div className="p-3 rounded-xl rounded-tl-sm bg-slate-800 text-slate-200 border border-white/5">
              Hi! This is our live website reception widget. Would you like to check out available pilot dates for your business?
            </div>

            {chatLog.map((msg, i) => (
              <div 
                key={i} 
                className={
                  msg.sender === 'user' 
                    ? 'p-2.5 rounded-xl rounded-tr-sm bg-emerald-600 text-white text-right font-medium text-[11px] ml-auto max-w-[85%]' 
                    : 'p-3 rounded-xl rounded-tl-sm bg-slate-800 text-slate-200 border border-white/5 space-y-1.5'
                }
              >
                <p>{msg.text}</p>
                {msg.sender === 'ai' && (
                  <button 
                    onClick={() => onOpenLeadModal('Floating Assistant Pilot Claim')} 
                    className="mt-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-obsidian-900 font-bold text-[10px]"
                  >
                    Claim 14-Day Pilot Now
                  </button>
                )}
              </div>
            ))}

            <div className="space-y-1.5 pt-1">
              <button 
                onClick={() => handleReply('Yes, tell me how the 14-day trial works')} 
                className="w-full text-left p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-[11px] transition-all"
              >
                "How does the 14-day free pilot work?"
              </button>
              <button 
                onClick={() => onOpenLeadModal('Floating Widget CTA')} 
                className="w-full text-left p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] transition-all"
              >
                "I want to deploy this for my clinic"
              </button>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById('simulator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center block p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold transition-all"
              >
                Try All 4 Channels in Simulator
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        onClick={toggleChat} 
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 border border-emerald-500/50 hover:border-emerald-400 shadow-glow-emerald transition-all transform hover:scale-105 focus:outline-none"
        aria-label="Test our live AI bot"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-white tracking-wide">Test our Live Bot</span>
        <svg className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

    </div>
  );
}

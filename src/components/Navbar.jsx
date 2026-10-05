import React, { useState } from 'react';
import { playTone } from '../utils/audio';

export default function Navbar({ onOpenLeadModal, isSoundMuted, onToggleSound }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-obsidian/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Uptime Status */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-violet-600 p-[1px] shadow-lg shadow-emerald-500/10">
              <div className="w-full h-full bg-obsidian-900 rounded-[11px] flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                ApexOmni<span className="text-emerald-400 font-normal">.AI</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">High-Ticket Receptionists</span>
            </div>
          </a>

          {/* System Uptime Badge */}
          <div className="hidden md:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>99.9% Uptime</span>
          </div>
        </div>

        {/* Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
          <a href="#channels" className="hover:text-white transition-colors">Channels</a>
          <a href="#simulator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <span>Live Simulator</span>
            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-violet-600/30 text-violet-300 border border-violet-500/30">Interactive</span>
          </a>
          <a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
        </nav>

        {/* Header CTA & Sound Toggle & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button 
            onClick={onToggleSound} 
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-[10px] font-mono text-emerald-400 transition-colors focus:outline-none"
            title="Toggle UI Audio Effects"
          >
            {!isSoundMuted ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span className="hidden sm:inline">Sound: ON</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <span className="text-slate-500 hidden sm:inline">MUTED</span>
              </>
            )}
          </button>

          {/* Glowing Pilot CTA */}
          <button 
            onClick={() => onOpenLeadModal('Navigation CTA - 14-Day Free Pilot')} 
            className="relative p-[1px] rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <div className="absolute inset-0 btn-gradient-glow opacity-85 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative px-4 sm:px-5 py-2.5 rounded-[11px] bg-obsidian-900 transition-all duration-300 group-hover:bg-opacity-80 flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Claim 14-Day Free Pilot</span>
              <svg className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu" 
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-obsidian-900/95 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3 font-medium text-slate-200">
            <a href="#channels" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Channels</a>
            <a href="#simulator" onClick={handleNavClick} className="hover:text-emerald-400 py-1 flex items-center justify-between">
              <span>Live Simulator</span>
              <span className="text-xs px-2 py-0.5 rounded bg-violet-600/30 text-violet-300 border border-violet-500/30">Interactive</span>
            </a>
            <a href="#roi-calculator" onClick={handleNavClick} className="hover:text-emerald-400 py-1">ROI Calculator</a>
            <a href="#comparison" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Problem vs Solution</a>
            <a href="#case-studies" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Case Studies</a>
            <a href="#process" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Implementation</a>
            <a href="#pricing" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Pricing</a>
            <a href="#guarantee" onClick={handleNavClick} className="hover:text-emerald-400 py-1">Guarantee</a>
            <a href="#faq" onClick={handleNavClick} className="hover:text-emerald-400 py-1">FAQ</a>
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>99.9% Uptime Verified</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

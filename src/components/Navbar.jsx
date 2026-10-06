import React, { useState } from 'react';

export default function Navbar({ onOpenLeadModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#070C14]/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#hero" className="flex items-center gap-2 group focus:outline-none">
            {/* Isometric Layers Icon */}
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              ApexOmni<span className="text-emerald-400">.AI</span>
            </span>
          </a>
        </div>

        {/* Center Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-normal text-slate-400">
          <a href="#channels" className="hover:text-white transition-colors">Channels</a>
          <a href="#simulator" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>Simulator</span>
            <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-[#1E1B4B]/80 text-[#818CF8] border border-[#4338CA]/30">Interactive</span>
          </a>
          <a href="#roi-calculator" className="hover:text-white transition-colors">ROI</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Cases</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onOpenLeadModal('Navigation CTA - Claim Free Pilot')} 
            className="px-4 py-2 rounded-xl border border-sky-500/40 hover:border-sky-400/80 bg-[#070D18]/90 hover:bg-[#0C1524] text-white font-normal text-xs transition-all shadow-[0_0_14px_rgba(14,165,233,0.22)] hover:shadow-[0_0_20px_rgba(14,165,233,0.38)] flex items-center gap-1.5 group"
          >
            <span>Claim Free Pilot &rarr;</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu" 
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#070C14]/95 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3 font-medium text-slate-200">
            <a href="#channels" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Channels</a>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1 flex items-center justify-between">
              <span>Simulator</span>
              <span className="text-xs px-2 py-0.5 rounded bg-violet-600/30 text-violet-300 border border-violet-500/30">Interactive</span>
            </a>
            <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">ROI</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Cases</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Pricing</a>
            <a href="#guarantee" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">Guarantee</a>
          </div>
        </div>
      )}
    </header>
  );
}

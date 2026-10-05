import React, { useState } from 'react';
import { playTone } from '../utils/audio';

export default function Pricing({ onOpenLeadModal }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    const nextState = !isAnnual;
    setIsAnnual(nextState);
    playTone(nextState ? 750 : 500, 'sine', 0.06, 0.08);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <span>Value-Anchored Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Predictable Packages. Guaranteed ROI.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            One single extra booked dental implant, medspa package, or remodeling project pays for months of ApexOmni AI service.
          </p>

          {/* Billing Period Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button 
              onClick={toggleBilling} 
              className="relative w-14 h-7 rounded-full bg-slate-800 p-1 border border-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle annual billing discount"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-emerald-400 transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}
              ></div>
            </button>
            <span className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Annual</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Package 1: Single-Channel Launch */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">Entry Level</span>
                <h3 className="text-2xl font-bold text-white mt-1">Single-Channel Launch</h3>
                <p className="text-xs text-slate-400 mt-2">
                  Best for boutique clinics testing automated receptionist capabilities on their primary inquiry channel.
                </p>
              </div>

              {/* Price Box */}
              <div className="border-y border-white/5 py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {isAnnual ? '$79' : '$99'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/month</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  + $299 setup
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Website Widget <strong>OR</strong> WhatsApp Business Bot</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Up to 500 active conversations / month</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Instant email &amp; Google Sheets lead dispatch</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Standard business knowledge base</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-500">
                  <svg className="w-4 h-4 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Multi-channel Instagram &amp; TikTok sync</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onOpenLeadModal('Pricing - Single Channel Plan')} 
              className="w-full py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-white font-bold text-xs tracking-wide transition-all border border-slate-700"
            >
              Claim 14-Day Free Pilot
            </button>
          </div>

          {/* Package 2: Omnichannel Growth (FEATURED) */}
          <div className="glass-panel-elevated p-8 rounded-3xl border-2 border-emerald-500/80 shadow-glow-emerald flex flex-col justify-between space-y-8 relative">
            
            {/* Featured Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-obsidian-950 font-bold text-[11px] uppercase tracking-wider shadow-md">
              Most Popular / Highest ROI
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider">High-Ticket Standard</span>
                <h3 className="text-2xl font-bold text-white mt-1">Omnichannel Growth</h3>
                <p className="text-xs text-slate-300 mt-2">
                  Complete capture suite across all 3 primary customer channels for busy clinics and contractors.
                </p>
              </div>

              {/* Price Box */}
              <div className="border-y border-white/10 py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {isAnnual ? '$199' : '$249'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/month</span>
                </div>
                <div className="text-xs text-emerald-400/90 mt-1 font-mono">
                  + $599 setup
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Complete 3-Channel Suite:</strong> Website + WhatsApp + Instagram DMs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Direct 2-Way Google Calendar / Calendly synchronization</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Automated WhatsApp/SMS appointment reminder sequences</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Lead qualification filter &amp; anti-spam guardrails</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Monthly prompt tuning and continuous AI optimization</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onOpenLeadModal('Pricing - Omnichannel Growth Plan')} 
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-900 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Claim 14-Day Free Pilot
            </button>
          </div>

          {/* Package 3: Enterprise Scale */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-violet-400 tracking-wider">Multi-Location</span>
                <h3 className="text-2xl font-bold text-white mt-1">Enterprise Scale</h3>
                <p className="text-xs text-slate-400 mt-2">
                  For high-volume multi-practitioner clinics, dental networks, and contractors requiring bespoke CRM workflows.
                </p>
              </div>

              {/* Price Box */}
              <div className="border-y border-white/5 py-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {isAnnual ? '$359' : '$449'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/month</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  + $999 setup
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>All 4 Channels:</strong> Website + WhatsApp + Instagram DMs + TikTok Inquiries</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Multi-practitioner / multi-chair calendar routing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Webhook &amp; CRM integrations (Zapier, Make, HubSpot, GoHighLevel)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>VIP 1-hour response SLA &amp; dedicated integration engineer</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Custom deposit payment gate (Stripe / Square)</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onOpenLeadModal('Pricing - Enterprise Scale Plan')} 
              className="w-full py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-white font-bold text-xs tracking-wide transition-all border border-slate-700"
            >
              Claim 14-Day Free Pilot
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function Hero({ onOpenLeadModal }) {
  return (
    <section id="hero" className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Hero Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
            
            {/* Social Proof Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400">
              <svg className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>Verified Results</span>
            </div>

            {/* Main Value Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.12]">
              Turn Every DM,<br />
              Comment, and Midnight<br />
              Website Visit Into a<br />
              <span className="text-[#10B981]">
                Confirmed, Paid<br />
                Appointment.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
              Stop losing leads to delayed replies. We deploy trained AI receptionists inside your{' '}
              <span className="text-[#10B981] font-medium">Website</span>,{' '}
              <span className="text-[#10B981] font-medium">WhatsApp</span>,{' '}
              <span className="text-[#10B981] font-medium">Instagram</span>, and{' '}
              <span className="text-[#10B981] font-medium">TikTok</span> to qualify prospects and book slots in under 20 seconds.
            </p>

            {/* Dual Call-to-Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onOpenLeadModal('Hero Primary - Deploy Bot')} 
                className="px-8 py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#070C14] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Deploy Your 14-Day Free Bot &rarr;</span>
              </button>

              <a 
                href="#simulator" 
                className="px-7 py-4 rounded-xl bg-[#0B131E]/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Interactive Simulator &darr;</span>
              </a>
            </div>

            {/* Mini Trust Checklist Note */}
            <div className="flex flex-wrap items-center gap-7 pt-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>Zero Setup Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>Live in 48-72 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>No Credit Card</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Live Booking Teaser Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full max-w-md relative">
              {/* Diffused ambient background glows */}
              <div className="absolute -top-24 -right-16 w-[450px] h-[450px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute top-1/3 -right-8 w-80 h-80 bg-teal-500/15 rounded-full blur-[90px] pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-16 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative bg-[#0B1320]/85 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.7)] space-y-4">
                
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981] animate-pulse"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Live Booking Activity</h4>
                      <p className="text-[11px] text-slate-400">Omnichannel automated sync</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    ONLINE
                  </span>
                </div>

                {/* 3 Activity Items */}
                <div className="space-y-3.5 text-xs">
                  {/* WhatsApp */}
                  <div className="p-4 rounded-2xl bg-[#09101B] border border-emerald-500/25 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </div>
                        <span className="font-semibold text-white">WhatsApp Business</span>
                        <span className="text-[11px] text-slate-500">(12s ago)</span>
                      </div>
                      <span className="text-[10px] text-[#10B981] bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-semibold border border-emerald-500/20">$4,750 Potential Value</span>
                    </div>
                    <p className="text-slate-300 text-xs pl-8">Dental implants consultation booked for <strong className="text-white">Saturday 2:30 PM</strong></p>
                  </div>

                  {/* Instagram */}
                  <div className="p-4 rounded-2xl bg-[#09101B] border border-violet-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-violet-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </div>
                        <span className="font-semibold text-white">Instagram Direct</span>
                        <span className="text-[11px] text-slate-500">(1m ago)</span>
                      </div>
                      <span className="text-[10px] text-[#A78BFA] bg-violet-500/10 px-2 py-0.5 rounded font-mono font-semibold border border-violet-500/20">Synced to Calendar</span>
                    </div>
                    <p className="text-slate-300 text-xs pl-8">Medspa Laser Facial inquiry qualified &amp; deposited <strong className="text-white">$150</strong></p>
                  </div>

                  {/* Website AI Concierge */}
                  <div className="p-4 rounded-2xl bg-[#09101B] border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                        </div>
                        <span className="font-semibold text-white">Website AI Concierge</span>
                        <span className="text-[11px] text-slate-500">(3m ago)</span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded font-mono border border-slate-700/60">Zero Human Labor</span>
                    </div>
                    <p className="text-slate-300 text-xs pl-8">Midnight visitor inquiry responded in <strong className="text-white">1.8 seconds</strong></p>
                  </div>
                </div>

              </div>

              {/* Sub-Card Trigger Link */}
              <div className="text-center pt-4">
                <a href="#simulator" className="text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  <span>Try It Yourself In The Live Simulator Below</span>
                  <span>&darr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

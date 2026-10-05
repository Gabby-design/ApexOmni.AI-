import React from 'react';

export default function Hero({ onOpenLeadModal }) {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Social Proof Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border-slate-700/60 shadow-inner text-xs sm:text-sm text-slate-300">
              <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="font-semibold text-emerald-400">Verified Results</span>
              <span className="text-slate-500">|</span>
              <span>Trusted by 65+ Clinics &amp; Local Service Businesses across UK, US &amp; Canada</span>
            </div>

            {/* Main Value Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Turn Every DM, Comment, and Midnight Website Visit Into a{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                Confirmed, Paid Appointment.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Stop losing <strong className="text-white font-semibold">$3,000+ every week</strong> to delayed replies and missed calls. We deploy trained AI receptionists natively inside your <span className="text-emerald-400 font-medium">Website</span>, <span className="text-emerald-400 font-medium">WhatsApp Business</span>, <span className="text-emerald-400 font-medium">Instagram DMs</span>, and <span className="text-emerald-400 font-medium">TikTok</span> to qualify prospects and book slots into your calendar in under 20 seconds.
            </p>

            {/* Dual Call-to-Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => onOpenLeadModal('Hero Primary - Deploy Bot')} 
                className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-900 font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
              >
                <span>Deploy Your 14-Day Free Bot</span>
                <svg className="w-5 h-5 text-obsidian-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <a 
                href="#simulator" 
                className="px-7 py-4 rounded-xl glass-panel hover:bg-slate-800/80 text-white font-semibold text-base border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Interactive Simulator</span>
                <svg className="w-4 h-4 text-emerald-400 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
            </div>

            {/* Mini Trust Note */}
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Zero Setup Fee During Pilot</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Live in 48-72 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>No Credit Card Required</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Live Booking Teaser Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative glass-panel-elevated p-6 rounded-2xl border border-white/10 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Live Booking Activity</h4>
                      <p className="text-xs text-slate-400">Omnichannel automated sync</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">ONLINE</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/20 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="font-semibold text-white">WhatsApp Business</span>
                        <span>12s ago</span>
                      </div>
                      <p className="text-slate-300 mt-0.5">Dental Implants consultation booked for <strong>Saturday 2:30 PM</strong></p>
                      <span className="inline-block mt-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono font-semibold">$4,200 Potential Value</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-violet-500/20 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="font-semibold text-white">Instagram Direct</span>
                        <span>1m ago</span>
                      </div>
                      <p className="text-slate-300 mt-0.5">Medspa Laser Facial inquiry qualified &amp; deposited <strong>$150</strong></p>
                      <span className="inline-block mt-1 text-[10px] text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded font-mono font-semibold">Synced to Calendly</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="font-semibold text-white">Website AI Concierge</span>
                        <span>3m ago</span>
                      </div>
                      <p className="text-slate-300 mt-0.5">Midnight visitor inquiry responded in <strong>1.8 seconds</strong></p>
                      <span className="inline-block mt-1 text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded font-mono">Zero Human Labor</span>
                    </div>
                  </div>
                </div>

                <a href="#simulator" className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 text-xs font-semibold text-center block transition-colors">
                  Try It Yourself In The Live Simulator Below &darr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

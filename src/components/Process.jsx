import React from 'react';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 uppercase tracking-widest">
            <span>White-Glove Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live and Booking in 3 Frictionless Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We handle 100% of the prompt engineering, API verification, guardrail testing, and calendar synchronization. Zero tech headaches for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          
          {/* Step 1 Card */}
          <div className="glass-panel-elevated p-8 rounded-2xl relative border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold font-mono text-slate-700 group-hover:text-emerald-500/40 transition-colors">01</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">20-Minute Knowledge Sync</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We ingest your menu of services, pricing tiers, FAQs, and booking rules via our streamlined intake questionnaire.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
              Deliverable: Locked Clinic Knowledge Base
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="glass-panel-elevated p-8 rounded-2xl relative border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold font-mono text-slate-700 group-hover:text-emerald-500/40 transition-colors">02</span>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">One-Click Channel Hookup</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We securely link your official WhatsApp, Instagram, TikTok, and calendar with zero tech headaches or complicated setups.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
              Deliverable: Multi-Channel Cloud Bridge
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="glass-panel-elevated p-8 rounded-2xl relative border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold font-mono text-slate-700 group-hover:text-emerald-500/40 transition-colors">03</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Autopilot Bookings</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your AI goes live, begins booking appointments immediately, and you watch your calendar fill up with qualified clients.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
              Deliverable: Hands-Free Calendar Influx
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

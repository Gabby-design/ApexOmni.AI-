import React from 'react';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-20 md:py-24 relative border-t border-white/[0.06] bg-obsidian-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel-elevated border-2 border-emerald-500/40 shadow-glow-emerald overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            
            {/* Shield Graphic Badge */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-emerald-500/10 border-2 border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>

            {/* Guarantee Copy */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
                The Double-Protected Guarantee
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                5 Qualified Appointment Bookings in 14 Days, or You Pay $0.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                "We give you a full 14-day live pilot. If the AI doesn't generate at least <strong>5 qualified appointment bookings</strong> into your calendar during your trial, you pay $0. No setup fees, no retainers, and no hard feelings."
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Zero Financial Exposure
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Keep All Booked Revenue
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  No Long-Term Contracts
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-obsidian-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            <span>Direct Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Costly Old Way vs. The ApexOmni AI Standard
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Examine the operational reality of traditional receptionist setups compared to our synchronized omnichannel AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Red Card: The Costly Old Way */}
          <div className="p-8 rounded-3xl bg-slate-950/70 border border-rose-500/25 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-rose-400 tracking-wider">Status Quo</span>
                  <h3 className="text-xl font-bold text-white mt-1">The Costly Old Way</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <div>
                    <strong className="text-white">Inquiries sit unanswered after 5:00 PM and all weekend:</strong> High-ticket prospects browse during evenings and Sundays when front desks are closed.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <div>
                    <strong className="text-white">Prospects bounce to competitors within 8 minutes of waiting:</strong> 78% of local clients buy from the practice that replies first. Delayed responses kill conversion.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <div>
                    <strong className="text-white">Front desk staff drowns in repetitive FAQs instead of attending to in-person guests:</strong> Staff spends 4+ hours daily answering "how much is consultation" instead of attending to clinic visitors.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <div>
                    <strong className="text-white">High no-show rates due to absent follow-up reminders:</strong> Inadequate or absent follow-up sequences lead to empty treatment chairs and wasted clinical hours.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/20 text-xs text-rose-400 font-mono">
              Estimated Monthly Cost: $3,200+ in lost leads &amp; desk overhead
            </div>
          </div>

          {/* Emerald Card: The ApexOmni AI Standard */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-glow-emerald relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider">AI Automated Standard</span>
                  <h3 className="text-xl font-bold text-white mt-1">The ApexOmni AI Standard</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white">Lightning-fast replies in seconds across all 4 channels, 24/7/365:</strong> Your AI handles Website, WhatsApp, IG, and TikTok simultaneously with zero wait time.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white">Direct two-way calendar sync with smart conflict resolution:</strong> Spots are verified with Google Calendar, Calendly, or your clinic CRM in real-time.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white">Automatic 24-hour and 2-hour WhatsApp/SMS confirmation sequences slashing no-shows by 60%:</strong> Slashes clinic no-shows through personalized pre-appointment reminders.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="text-white">Full conversation transcripts instantly emailed to the business owner:</strong> Real-time alerts, lead value tagging, and 1-click human takeover anytime.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-400 font-mono">
              <span>Client Retention: +38% Verified Increase</span>
              <span>100% Turnkey Setup</span>
            </div>
          </div>

        </div>

        {/* Real 11:42 PM Chat Transcript Expandable Verification */}
        <div className="max-w-5xl mx-auto mt-8">
          <details className="glass-panel p-5 rounded-2xl border border-white/10 group cursor-pointer">
            <summary className="flex items-center justify-between text-xs font-mono text-slate-300 list-none font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Audit Sample: Unedited 11:42 PM WhatsApp Patient Intake (19 Seconds Total Booking Time)</span>
              </span>
              <span className="text-emerald-400 group-open:rotate-180 transition-transform">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs font-mono text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl">
              <p><span className="text-slate-500">[11:42:01 PM]</span> <strong className="text-white">Patient:</strong> Hi, my tooth cracked tonight. Do you have any emergency appointments tomorrow morning?</p>
              <p><span className="text-slate-500">[11:42:03 PM]</span> <strong className="text-emerald-400">Apex AI:</strong> We can help! Dr. Vance has an emergency evaluation slot open at 9:30 AM tomorrow. What is your full name and phone number to hold this chair?</p>
              <p><span className="text-slate-500">[11:42:12 PM]</span> <strong className="text-white">Patient:</strong> Marcus Sterling, 555-839-2041</p>
              <p><span className="text-slate-500">[11:42:15 PM]</span> <strong className="text-emerald-400">Apex AI:</strong> Marcus, your 9:30 AM emergency slot is held. Calendar invite and parking instructions sent to your WhatsApp. See you tomorrow at Apex Suite 4B.</p>
              <p className="text-[11px] text-emerald-400 pt-2 border-t border-slate-800">Outcome: $1,450 root canal + crown treatment completed next morning. Zero competitor leakage.</p>
            </div>
          </details>
        </div>

      </div>
    </section>
  );
}

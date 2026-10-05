import React from 'react';

export default function Channels() {
  return (
    <section id="channels" className="py-20 relative border-t border-white/[0.06] bg-obsidian-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <span>Omnichannel Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Four Channels. One Synchronized Receptionist.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Meet your high-value prospects wherever they reach out. Seamlessly routed to one central calendar without double-booking or missed messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Channel 1: WhatsApp */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">WhatsApp Business</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct Cloud API automation. Delivers 98% open rates with personalized 2-way consultation booking, treatment guidance, and 24h reminders.
              </p>
              <a 
                href="https://wa.me/18005550199?text=Hi%20ApexOmni,%20I%20want%20to%20test%20the%20AI%20receptionist%20for%20my%20business" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 w-full py-2 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Test Live on WhatsApp</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-emerald-400 flex items-center justify-between">
              <span>Open Rate: 98%</span>
              <span>2-Way Sync</span>
            </div>
          </div>

          {/* Channel 2: Instagram */}
          <div className="glass-panel p-6 rounded-2xl border border-pink-500/30 space-y-4 hover:border-pink-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Instagram DMs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Converts story replies, post comments, and ad clicks into immediate booked calendar slots while your prospects are scrolling.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-pink-400 flex items-center justify-between">
              <span>Conversion: 3.4x</span>
              <span>Meta Certified</span>
            </div>
          </div>

          {/* Channel 3: TikTok */}
          <div className="glass-panel p-6 rounded-2xl border border-[#25F4EE]/30 space-y-4 hover:border-[#25F4EE] transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#25F4EE]/20 text-[#25F4EE] flex items-center justify-center border border-[#25F4EE]/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">TikTok Inquiries</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Captures viral video inquiries in real-time. Instantly qualifies prospective clients and filters tire-kickers with smart questionnaires.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-[#25F4EE] flex items-center justify-between">
              <span>Response: &lt; 2s</span>
              <span>Lead Filter</span>
            </div>
          </div>

          {/* Channel 4: Website Widget */}
          <div className="glass-panel p-6 rounded-2xl border border-violet-500/30 space-y-4 hover:border-violet-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Website Live Widget</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engages midnight visitors who browse high-ticket services after work hours. Answers FAQs and books slots directly into your diary.
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-violet-400 flex items-center justify-between">
              <span>After-Hours: 45%</span>
              <span>Instant Booking</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

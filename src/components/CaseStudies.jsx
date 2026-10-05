import React from 'react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <span>Verified Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Top Clinics &amp; Contractors Scale Bookings
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real outcomes from aesthetic practices, dental centers, and home contractors using ApexOmni AI receptionists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Case Study 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Cosmetic Dentistry
                </span>
                <span className="text-xs text-slate-400 font-mono">London &amp; Surrey</span>
              </div>
              <h3 className="text-lg font-bold text-white">Harley Cosmetic Dental Studio</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Our front desk was leaving at 6:00 PM, but 55% of our high-ticket porcelain veneer inquiries arrived between 8:00 PM and midnight. ApexOmni AI now books their consultations instantly on WhatsApp."
              </p>
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Captured After-Hours Consults:</span>
                  <span className="font-mono text-emerald-400 font-bold">+42 / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Added Revenue (60 Days):</span>
                  <span className="font-mono text-white font-bold">$118,500</span>
                </div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Channels: WhatsApp Business + Web Widget
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                  Medical Spa
                </span>
                <span className="text-xs text-slate-400 font-mono">Scottsdale &amp; Miami</span>
              </div>
              <h3 className="text-lg font-bold text-white">Aura MedSpa &amp; Laser Clinic</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                "We run thousands of dollars in Instagram ads every month. Previously, leads commented 'price?' and waited hours. ApexOmni AI immediately messages them on IG and locks their consultation deposit."
              </p>
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Consultation Deposit Capture:</span>
                  <span className="font-mono text-emerald-400 font-bold">22% &rarr; 64%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">No-Show Rate Reduction:</span>
                  <span className="font-mono text-white font-bold">-62% via SMS</span>
                </div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Channels: Instagram Direct + WhatsApp
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  High-Ticket Contractor
                </span>
                <span className="text-xs text-slate-400 font-mono">Dallas-Fort Worth</span>
              </div>
              <h3 className="text-lg font-bold text-white">ProTier Roofing &amp; Restoration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                "During hail storm season, emergency calls and TikTok comments exploded. We couldn't hire front desk staff fast enough. ApexOmni handles 100% of quote intake and routes qualified appointments directly to estimators."
              </p>
              <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Response Speed:</span>
                  <span className="font-mono text-emerald-400 font-bold">&lt; 2.2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Captured Storm Quotes:</span>
                  <span className="font-mono text-white font-bold">148 in 30 days</span>
                </div>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Channels: TikTok + WhatsApp + Web
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

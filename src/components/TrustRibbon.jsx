import React from 'react';

export default function TrustRibbon() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        
        <div className="flex items-center gap-3.5 p-4 rounded-xl glass-panel">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">&lt; 3-Second</div>
            <div className="text-xs text-slate-400">Average Response Time</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl glass-panel">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">24/7 Calendar Sync</div>
            <div className="text-xs text-slate-400">Google, Calendly, Outlook</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl glass-panel">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">Official API Certified</div>
            <div className="text-xs text-slate-400">Meta &amp; TikTok Cloud Approved</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl glass-panel">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">+38% Show-Up Rate</div>
            <div className="text-xs text-slate-400">Auto SMS &amp; WhatsApp Sequences</div>
          </div>
        </div>

      </div>
    </div>
  );
}

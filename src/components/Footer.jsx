import React from 'react';

export default function Footer({ onOpenLeadModal, onOpenLegalModal }) {
  return (
    <footer className="border-t border-white/[0.08] bg-obsidian-950 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </div>
              <span className="text-xl font-extrabold text-white">ApexOmni<span className="text-emerald-400">.AI</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              High-ticket AI receptionist infrastructure. Installing 24/7 calendar booking bots across Website, WhatsApp, Instagram, and TikTok for premier clinics and local contractors.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All 4 Channel Bridges Operating Normally</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-semibold text-slate-300 tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#channels" className="hover:text-white transition-colors">Supported Channels</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Interactive Simulator</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing &amp; Retainers</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">Double-Protected Guarantee</a></li>
            </ul>
          </div>

          {/* Channels & Integrations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-semibold text-slate-300 tracking-wider">Integrations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="text-slate-300">WhatsApp Business Cloud</span></li>
              <li><span className="text-slate-300">Meta Instagram Graph</span></li>
              <li><span className="text-slate-300">TikTok Business Messenger</span></li>
              <li><span className="text-slate-300">Google Calendar &amp; Calendly</span></li>
              <li><span className="text-slate-300">GoHighLevel &amp; HubSpot CRM</span></li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-semibold text-slate-300 tracking-wider">Compliance &amp; Trust</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#faq" className="hover:text-white transition-colors">Meta Compliance</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">TikTok API Documentation</a></li>
              <li><button onClick={() => onOpenLegalModal('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onOpenLegalModal('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onOpenLeadModal('Footer Support')} className="text-emerald-400 hover:underline">Contact Support</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 ApexOmni AI Ltd. All rights reserved. High-ticket receptionist automation.
          </div>
          <div className="flex items-center gap-6">
            <span>Obsidian Dark Mode Architecture</span>
            <span>Zero-Latency Webhook Routing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

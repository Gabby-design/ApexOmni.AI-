import React, { useState, useEffect } from 'react';
import { playTone } from '../utils/audio';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [tab, setTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleTabSwitch = (newTab) => {
    playTone(520, 'sine', 0.05, 0.08);
    setTab(newTab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/85 backdrop-blur-md">
      <div 
        className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative text-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/80 transition-colors" 
          aria-label="Close legal modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Legal Tabs Header */}
        <div className="pr-8 mb-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleTabSwitch('privacy')} 
              className={`text-lg font-bold pb-1 focus:outline-none transition-colors ${
                tab === 'privacy' 
                  ? 'text-white border-b-2 border-emerald-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleTabSwitch('terms')} 
              className={`text-lg font-bold pb-1 focus:outline-none transition-colors ${
                tab === 'terms' 
                  ? 'text-white border-b-2 border-emerald-400' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Terms of Service
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Effective Date: October 2026 | ApexOmni AI Enterprise Data Standards
          </p>
        </div>

        {/* Scrollable Legal Body */}
        <div className="overflow-y-auto chat-scroll pr-2 space-y-5 text-xs text-slate-300 leading-relaxed flex-1">
          {tab === 'privacy' ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">1. Architectural Data Commitment</h4>
                <p>
                  ApexOmni AI ("we", "us", or "our") installs and manages conversational AI receptionist software for clinics, medspas, and high-ticket service businesses. We act strictly as a B2B Data Processor regarding prospective customer and patient booking inquiries.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">2. Information Collection &amp; Ingestion</h4>
                <p>
                  We process inquiry data submitted through authorized channel webhooks: prospect contact details (name, phone number, email address), desired service or treatment, requested consultation time slots, and communication logs. We do not solicit nor intentionally store sensitive personal health data or payment card numbers through conversation transcripts.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">3. Zero Model Training on Client Data</h4>
                <p>
                  Client inquiry conversations, appointment details, and patient booking requests are processed via isolated enterprise API endpoints. Your customer data is never sold, leased, or utilized to train general public large language models (LLMs).
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">4. Official Platform API Compliance</h4>
                <p>
                  All message routing functions strictly through certified developer APIs: Meta Graph API (WhatsApp Business &amp; Instagram DM) and TikTok Business Messaging API. All transmissions utilize TLS 1.3 encryption in transit and AES-256 encryption at rest.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">5. Clinical &amp; Legal Disclaimers</h4>
                <p>
                  ApexOmni AI systems provide automated receptionist triage, schedule booking, and operational FAQs. They do not dispense clinical medical advice, diagnose medical conditions, or establish physician-patient relationships.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">6. Contact &amp; Data Rights</h4>
                <p>
                  For data access requests, deletion, or privacy queries, contact our compliance officer at <span className="text-emerald-400 font-mono">compliance@apexomniai.com</span>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">1. Acceptance of Terms</h4>
                <p>
                  By accessing ApexOmni AI or engaging our deployment pilots, you agree to these Terms of Service. These terms govern the provision of automated multi-channel receptionist integrations.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">2. 14-Day Free Pilot &amp; 5-Booking Guarantee</h4>
                <p>
                  Eligible businesses receive a 14-day zero-cost trial. Under our Double-Protected Guarantee, if your configured AI receptionist does not book at least 5 verified consultation or quote appointments within 14 calendar days of live channel bridge activation, you owe $0 and may terminate without penalty. This guarantee requires maintaining the AI bot connected to active business traffic channels.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">3. Client Responsibilities</h4>
                <p>
                  Clients are responsible for providing accurate treatment/service pricing ranges, business hours, and operational policies during the initial knowledge sync. Clients must maintain active, good-standing credentials with Meta and connected calendar providers.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">4. Service Availability &amp; SLAs</h4>
                <p>
                  We maintain a 99.9% uptime target for webhook infrastructure and automated message dispatch. Routine maintenance windows are scheduled during low-traffic overnight hours with advance notice.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">5. Limitation of Liability</h4>
                <p>
                  In no event shall ApexOmni AI Ltd be liable for indirect, incidental, or consequential damages resulting from third-party API platform outages (Meta, TikTok, Google) or customer misrepresentations during chat triage.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-slate-500">ApexOmni AI Ltd | Legal Compliance</span>
          <button 
            onClick={onClose} 
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
}

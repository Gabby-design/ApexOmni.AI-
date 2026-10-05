import React, { useState, useEffect } from 'react';
import { playTone, playConfirmSound } from '../utils/audio';

// Production Form Endpoint Configuration:
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''; 
const WEBHOOK_ENDPOINT_URL = import.meta.env.VITE_WEBHOOK_ENDPOINT_URL || '';


export default function LeadModal({ isOpen, onClose, sourceContext = 'General', roiTarget = null }) {
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'cal'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    industry: 'Aesthetic Clinic',
    primaryChannel: 'WhatsApp Business',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage('');
      setActiveTab('form');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTabChange = (tab) => {
    playTone(600, 'sine', 0.04, 0.08);
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `ApexOmni AI Pilot Application: ${formData.businessName} (${formData.industry})`,
      from_name: 'ApexOmni AI Ingestion Gate',
      business_name: formData.businessName,
      industry: formData.industry,
      priority_channel: formData.primaryChannel,
      work_email: formData.email,
      mobile_phone: formData.phone,
      lead_source: sourceContext,
      estimated_monthly_recovery: roiTarget || 'N/A',
      submitted_at: new Date().toISOString()
    };

    try {
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.length > 5) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || 'Submission failed');
        }
      } else if (WEBHOOK_ENDPOINT_URL && WEBHOOK_ENDPOINT_URL.startsWith('http')) {
        await fetch(WEBHOOK_ENDPOINT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        // Local/Demo Mode Fallback
        await new Promise(resolve => setTimeout(resolve, 600));
        console.info('ApexOmni Lead Ingestion [Demo Mode - To deliver to inbox, add WEB3FORMS_ACCESS_KEY]:', payload);
      }

      playConfirmSound();
      setIsSuccess(true);
      setFormData({
        businessName: '',
        industry: 'Aesthetic Clinic',
        primaryChannel: 'WhatsApp Business',
        email: '',
        phone: ''
      });
    } catch (err) {
      console.error('Lead submission failure:', err);
      setErrorMessage('Transmission error. Please check your network or message our WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalEmbed = () => {
    playTone(700, 'sine', 0.05, 0.1);
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('modal', {
        calLink: 'apexomniai/audit',
        config: { layout: 'month_view' }
      });
    } else {
      window.open('https://cal.com', '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-900/85 backdrop-blur-md">
      <div 
        className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl relative text-slate-200 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/80 transition-colors" 
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Modal Mode Switcher Tabs */}
        {!isSuccess && (
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900/80 border border-white/5 mb-5 text-xs font-semibold">
            <button 
              onClick={() => handleTabChange('form')} 
              className={`flex-1 py-2 rounded-lg transition-all font-bold ${activeTab === 'form' ? 'bg-emerald-500 text-obsidian-900' : 'text-slate-400 hover:text-white'}`}
            >
              Quick Pilot Claim
            </button>
            <button 
              onClick={() => handleTabChange('cal')} 
              className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'cal' ? 'bg-violet-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Schedule Live Audit
            </button>
          </div>
        )}

        {/* Success View */}
        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Pilot Request Confirmed</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you! Your business profile has been assigned to our senior integration engineer. We will message your phone shortly with your tailored setup credentials.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => { setIsSuccess(false); setActiveTab('cal'); }} 
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Also Book Calendar Time</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
              <button 
                onClick={onClose} 
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
              >
                Return to Page
              </button>
            </div>
          </div>
        ) : activeTab === 'form' ? (
          /* Tab 1: Form Content */
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold tracking-wide uppercase">
                  Double-Protected 14-Day Pilot
                </span>
                {roiTarget && (
                  <span className="text-[10px] font-mono font-bold text-emerald-300 bg-slate-800 px-2 py-0.5 rounded border border-emerald-500/30">
                    {roiTarget}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-1.5">Claim Your Free AI Receptionist</h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero setup fees, zero credit card, and guaranteed 5 bookings during your 14-day pilot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label htmlFor="businessName" className="block font-semibold text-slate-300 mb-1">Clinic / Business Name *</label>
                <input 
                  type="text" 
                  id="businessName" 
                  required 
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g. Apex Aesthetic &amp; Dental Care" 
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-xs" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="industry" className="block font-semibold text-slate-300 mb-1">Industry Sector *</label>
                  <select 
                    id="industry" 
                    required 
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-white text-xs bg-slate-900"
                  >
                    <option value="Aesthetic Clinic">Aesthetic Clinic</option>
                    <option value="Dental Center">Dental Center</option>
                    <option value="Medspa">Medical Spa</option>
                    <option value="High-Ticket Contractor">High-Ticket Contractor</option>
                    <option value="Other High-Ticket">Other High-Ticket Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="primaryChannel" className="block font-semibold text-slate-300 mb-1">Priority Channel *</label>
                  <select 
                    id="primaryChannel" 
                    required 
                    value={formData.primaryChannel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-white text-xs bg-slate-900"
                  >
                    <option value="WhatsApp Business">WhatsApp Business</option>
                    <option value="Instagram DMs">Instagram DMs</option>
                    <option value="Website Widget">Website Widget</option>
                    <option value="TikTok Inquiries">TikTok Inquiries</option>
                    <option value="All 4 Omnichannel">All 4 Channels (Full Suite)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block font-semibold text-slate-300 mb-1">Work Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="director@apexclinic.com" 
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-xs" 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold text-slate-300 mb-1">Direct Mobile / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 234-5678" 
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-xs" 
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-[11px] text-red-300">
                  {errorMessage}
                </div>
              )}

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Our integration engineer will contact you via WhatsApp within 4 hours with your custom prototype credentials.</span>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-obsidian-900 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Securing Pilot Allocation...' : 'Deploy My 14-Day Free Pilot'}</span>
                {isSubmitting && (
                  <svg className="animate-spin h-4 w-4 text-obsidian-900" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Tab 2: Calendar Booking Content */
          <div className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-mono font-bold tracking-wide uppercase">
                20-Minute Technical Discovery
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1.5">Book Live Architecture Audit</h3>
              <p className="text-xs text-slate-300 mt-1">
                Pick a time directly with our senior integration lead to inspect your current booking channels and review custom prompt safeguards.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-panel space-y-4 border border-violet-500/30 text-center">
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Instant Calendar Scheduler</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
                  Automated Google Calendar &amp; Outlook sync. Guaranteed zero double-booking.
                </p>
              </div>

              <button 
                onClick={handleCalEmbed} 
                className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Open Cal.com Scheduling Window</span>
                <svg className="w-4 h-4 text-violet-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>

              <a 
                href="https://cal.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[11px] text-slate-400 hover:text-violet-300 underline block"
              >
                Open in standalone window
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

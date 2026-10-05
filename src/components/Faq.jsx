import React from 'react';

const FAQS = [
  {
    q: 'Will our Instagram or TikTok accounts get restricted?',
    a: (
      <>
        <p><strong>No.</strong> Our integrations operate 100% via official Meta Cloud and TikTok Business APIs.</p>
        <p className="mt-2">We strictly avoid unapproved scrapers or unauthorized browser automation tools. Your business profiles and ad accounts remain fully compliant and secure.</p>
      </>
    )
  },
  {
    q: 'Can the AI hallucinate or invent fake prices?',
    a: (
      <>
        <p><strong>No.</strong> Our systems are locked with strict system prompt boundaries and will never quote unapproved figures.</p>
        <p className="mt-2">The AI is constrained to cite only the approved price ranges, service packages, and booking rules that you validate during your 20-minute onboarding sync.</p>
      </>
    )
  },
  {
    q: 'What happens when an inquiry is too complex?',
    a: (
      <>
        <p>The AI instantly flags the chat as <strong>"Human Intervention Needed"</strong> and alerts your team via WhatsApp/SMS with the full chat transcript.</p>
        <p className="mt-2">Your front desk or clinical coordinator can step in with a single click, read the full history, and take over the chat seamlessly.</p>
      </>
    )
  },
  {
    q: 'How long does setup take?',
    a: (
      <p>From the moment you complete our 15-minute onboarding form, your system is live within <strong>48 to 72 hours</strong>.</p>
    )
  },
  {
    q: 'Which calendars and booking systems do you support?',
    a: (
      <p>We sync natively with Google Calendar, Calendly, Microsoft Outlook, Acuity Scheduling, Fresha, Jane App, Dentrix, GoHighLevel, ServiceTitan, and Jobber via official API connections and webhooks.</p>
    )
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 uppercase tracking-widest">
            <span>Direct Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300">
            Everything high-ticket clinic directors and contractors ask before enabling our AI receptionists.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details 
              key={index}
              name="faq" 
              className="group glass-panel rounded-2xl border border-white/10 p-5 open:bg-slate-900/90 transition-all cursor-pointer"
            >
              <summary className="flex items-center justify-between text-base font-bold text-white list-none select-none">
                <span>{faq.q}</span>
                <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-open:rotate-180 group-open:text-emerald-400 transition-transform shrink-0 ml-4">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-white/5 text-sm text-slate-300 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

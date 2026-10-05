import React, { useState, useRef, useEffect } from 'react';
import { playTone, playSendSound, playReceiveSound, playConfirmSound } from '../utils/audio';

const CHANNEL_CONFIGS = {
  whatsapp: {
    key: 'whatsapp',
    title: 'Apex Clinic AI',
    subtitle: 'Official Business • Online',
    avatarText: 'AO',
    screenBg: '#0B141A',
    headerBg: '#1F2C34',
    userBubbleBg: '#005C4B',
    aiBubbleBg: '#202C33',
    placeholder: 'WhatsApp message...',
    greeting: 'Welcome to Apex Aesthetic & Dental Studio. I am your 24/7 patient booking concierge. How can I assist your schedule today?',
    activeColor: 'emerald',
    borderColor: 'border-emerald-500/50',
    shadowGlow: 'shadow-glow-emerald',
    badgeColor: 'bg-emerald-400'
  },
  instagram: {
    key: 'instagram',
    title: 'apexomni.clinic',
    subtitle: 'Active now • Verified',
    avatarText: 'IG',
    screenBg: '#000000',
    headerBg: '#121212',
    userBubbleBg: '#3797F0',
    aiBubbleBg: '#262626',
    placeholder: 'Message...',
    greeting: 'Hey there! Thanks for visiting our Instagram. Looking to book an aesthetic or dental consultation? I can lock your slot in right now.',
    activeColor: 'pink',
    borderColor: 'border-pink-500/50',
    shadowGlow: '',
    badgeColor: 'bg-pink-400'
  },
  tiktok: {
    key: 'tiktok',
    title: 'apexomni_reception',
    subtitle: 'Official Account • 24/7 Bot',
    avatarText: 'TT',
    screenBg: '#121212',
    headerBg: '#181818',
    userBubbleBg: '#FE2C55',
    aiBubbleBg: '#2F2F2F',
    placeholder: 'Send TikTok inquiry...',
    greeting: 'Hey! Saw our latest transformation video? Ask me anything about treatments, pricing, or available consult times.',
    activeColor: 'cyan',
    borderColor: 'border-[#25F4EE]/50',
    shadowGlow: '',
    badgeColor: 'bg-[#25F4EE]'
  },
  webwidget: {
    key: 'webwidget',
    title: 'Apex Patient Concierge',
    subtitle: 'Typical reply: 3 seconds',
    avatarText: 'WB',
    screenBg: '#0F172A',
    headerBg: '#1E293B',
    userBubbleBg: '#6366F1',
    aiBubbleBg: '#1E293B',
    placeholder: 'Type your question...',
    greeting: 'Good day! Welcome to ApexOmni Clinic Concierge. We are live 24/7 to answer pricing questions and book appointment slots.',
    activeColor: 'violet',
    borderColor: 'border-violet-500/50',
    shadowGlow: '',
    badgeColor: 'bg-violet-400'
  }
};

const PROMPT_ANSWERS = {
  1: {
    user: "Hey, how much is your full smile makeover?",
    ai: "Our complete smile makeover packages start with an initial 3D digital scan & specialist assessment. Most customized treatment plans range from $2,800 to $5,500 with zero-interest financing. Would you like to reserve a 30-min VIP consultation to view your personalized 3D preview?",
    askContact: "To hold your consultation slot, could you confirm your full name and best mobile number?"
  },
  2: {
    user: "Can I book a consultation for this Saturday?",
    ai: "Yes! Our senior clinicians have 3 priority consultation openings remaining for this Saturday. Every booking includes a complimentary 3D scan and tailored treatment roadmap.",
    askContact: "What is your full name and phone number so I can secure your appointment file?"
  },
  3: {
    user: "Do you offer flexible payment plans?",
    ai: "Absolutely. We provide 0% APR financing through 6, 12, or 24-month installments with instant soft-credit pre-approval that does not affect your credit score.",
    askContact: "To reserve an assessment slot to review your customized financing plan, what is your full name and contact number?"
  }
};

export default function Simulator() {
  const [channel, setChannel] = useState('whatsapp');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState('pills'); // 'pills' | 'contact' | 'slots' | 'done'
  const [customText, setCustomText] = useState('');
  const [notification, setNotification] = useState(null);
  const chatScrollRef = useRef(null);

  const cfg = CHANNEL_CONFIGS[channel];

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, step]);

  const switchChannel = (key) => {
    if (key === channel) return;
    playTone(700, 'sine', 0.05, 0.08);
    setChannel(key);
    setMessages([]);
    setIsTyping(false);
    setStep('pills');
    setNotification(null);
  };

  const handleReset = () => {
    playTone(500, 'sine', 0.05, 0.06);
    setMessages([]);
    setIsTyping(false);
    setStep('pills');
    setNotification(null);
  };

  const handlePromptClick = (index) => {
    if (isTyping) return;
    playSendSound();
    const data = PROMPT_ANSWERS[index];

    // User message
    const newMsgs = [
      ...messages,
      { sender: 'user', text: data.user, time: 'Just now' }
    ];
    setMessages(newMsgs);
    setStep('waiting');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      playReceiveSound();
      setMessages([
        ...newMsgs,
        {
          sender: 'ai',
          text: data.ai,
          askContact: data.askContact,
          time: 'Just now'
        }
      ]);
      setStep('contact');
    }, 600);
  };

  const handleContactSubmit = (name, phone) => {
    playSendSound();
    const newMsgs = [
      ...messages,
      { sender: 'user', text: `${name} • ${phone}`, time: 'Just now' }
    ];
    setMessages(newMsgs);
    setStep('waiting');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      playReceiveSound();
      setMessages([
        ...newMsgs,
        {
          sender: 'ai',
          text: `Thank you, ${name.split(' ')[0]}! I checked our live calendar. Our senior specialist has 3 priority consultation openings for this Saturday:`,
          askContact: "Which time slot works best for you?",
          time: 'Just now'
        }
      ]);
      setStep('slots');
    }, 550);
  };

  const handleSlotSelect = (slotTime) => {
    playSendSound();
    const newMsgs = [
      ...messages,
      { sender: 'user', text: `Let's lock in Saturday, ${slotTime}`, time: 'Just now' }
    ];
    setMessages(newMsgs);
    setStep('waiting');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      playConfirmSound();
      setMessages([
        ...newMsgs,
        {
          sender: 'ai',
          text: `Appointment locked for Saturday at ${slotTime}! Calendar invitation, pre-appointment intake, and clinic directions have been dispatched to your phone.`,
          time: 'Just now',
          isConfirmation: true
        }
      ]);
      setStep('done');

      // Trigger Push Notification Banner
      setNotification({
        title: 'Booking Confirmed!',
        body: `Saturday ${slotTime} • Dr. Vance • Calendar synced.`
      });

      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }, 600);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customText.trim() || isTyping) return;
    const text = customText.trim();
    setCustomText('');
    playSendSound();

    const newMsgs = [
      ...messages,
      { sender: 'user', text: text, time: 'Just now' }
    ];
    setMessages(newMsgs);
    setIsTyping(true);
    setStep('waiting');

    setTimeout(() => {
      setIsTyping(false);
      playReceiveSound();
      setMessages([
        ...newMsgs,
        {
          sender: 'ai',
          text: `Thanks for asking! Our specialized team handles all inquiries regarding "${text}". We can get you scheduled for an expert consultation to discuss details.`,
          askContact: "To reserve your consult slot, what is your full name and best mobile number?",
          time: 'Just now'
        }
      ]);
      setStep('contact');
    }, 650);
  };

  return (
    <section id="simulator" className="py-20 md:py-28 relative border-t border-white/[0.06] bg-obsidian-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 uppercase tracking-widest">
            <span>Hands-On Interactive Prototype</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Test The AI Receptionist Right Now.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Switch channels, click prospect inquiries, and experience how ApexOmni AI qualifies clients and locks verified calendar appointments in real-time.
          </p>
        </div>

        {/* Simulator Interface Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Channel Switcher Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Deployment Channel:
              </h3>
              <button 
                onClick={handleReset} 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-[10px] font-mono text-emerald-400 transition-colors"
                title="Reset Simulation"
              >
                <span>Reset Chat</span>
              </button>
            </div>

            {/* WhatsApp Tab */}
            <button 
              onClick={() => switchChannel('whatsapp')}
              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border ${
                channel === 'whatsapp' 
                  ? 'bg-slate-900/80 border-emerald-500/50 shadow-glow-emerald' 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">WhatsApp Business</div>
                  <div className="text-xs text-slate-400">98% Open Rate Channel</div>
                </div>
              </div>
              {channel === 'whatsapp' && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
            </button>

            {/* Instagram DM Tab */}
            <button 
              onClick={() => switchChannel('instagram')}
              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border ${
                channel === 'instagram' 
                  ? 'bg-slate-900/80 border-pink-500/50' 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-violet-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Instagram Direct</div>
                  <div className="text-xs text-slate-400">Story &amp; Ad Lead Capture</div>
                </div>
              </div>
              {channel === 'instagram' && <span className="w-2 h-2 rounded-full bg-pink-400"></span>}
            </button>

            {/* TikTok Chat Tab */}
            <button 
              onClick={() => switchChannel('tiktok')}
              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border ${
                channel === 'tiktok' 
                  ? 'bg-slate-900/80 border-[#25F4EE]/50' 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#25F4EE] flex items-center justify-center border border-[#25F4EE]/30">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">TikTok Inquiries</div>
                  <div className="text-xs text-slate-400">Viral Lead Qualification</div>
                </div>
              </div>
              {channel === 'tiktok' && <span className="w-2 h-2 rounded-full bg-[#25F4EE]"></span>}
            </button>

            {/* Web Widget Tab */}
            <button 
              onClick={() => switchChannel('webwidget')}
              className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border ${
                channel === 'webwidget' 
                  ? 'bg-slate-900/80 border-violet-500/50' 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Website Live Widget</div>
                  <div className="text-xs text-slate-400">Midnight Visitor Booking</div>
                </div>
              </div>
              {channel === 'webwidget' && <span className="w-2 h-2 rounded-full bg-violet-400"></span>}
            </button>

            {/* Channel Capability Specs */}
            <div className="p-4 rounded-xl glass-panel space-y-2 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Direct Sync Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Encrypted &amp; Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Average Response:</span>
                <span className="text-white font-mono font-semibold">1.8s SLA</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Human Takeover:</span>
                <span className="text-slate-300">1-Click Staff Alert</span>
              </div>
            </div>

          </div>

          {/* Smartphone Mockup Container */}
          <div className="lg:col-span-8 flex justify-center">
            
            <div className="relative w-full max-w-[390px] h-[705px] rounded-[50px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-700/80 ring-1 ring-white/10 flex flex-col">
              
              <div 
                className="relative w-full h-full rounded-[38px] overflow-hidden flex flex-col text-slate-200 border border-slate-800 transition-colors duration-300"
                style={{ backgroundColor: cfg.screenBg }}
              >
                
                {/* Status Bar */}
                <div className="w-full pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-400 select-none z-20">
                  <span>9:41</span>
                  <div className="w-24 h-5 rounded-full bg-black flex items-center justify-end px-2 gap-1 border border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.5-.63C9.36 20.73 10.64 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></svg>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line></svg>
                  </div>
                </div>

                {/* Floating Push Notification Banner */}
                {notification && (
                  <div className="absolute top-11 left-3 right-3 z-30 transition-all duration-500 rounded-2xl bg-slate-900/95 border border-emerald-500/50 shadow-2xl p-3 backdrop-blur-xl flex items-start gap-2.5 animate-fadeIn">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/30">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div className="flex-1 text-[11px] leading-snug">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span className="font-bold text-emerald-400">{cfg.title}</span>
                        <span>Now</span>
                      </div>
                      <div className="text-white font-semibold mt-0.5">{notification.title}</div>
                      <p className="text-slate-300 text-[10px] mt-0.5">{notification.body}</p>
                    </div>
                  </div>
                )}

                {/* Dynamic Channel Header */}
                <div 
                  className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between z-10 transition-colors"
                  style={{ backgroundColor: cfg.headerBg }}
                >
                  <div className="flex items-center gap-2.5">
                    <button className="text-slate-400 hover:text-white" aria-label="Go back">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <div className="relative w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-bold text-xs text-emerald-400 overflow-hidden">
                      <span>{cfg.avatarText}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white tracking-tight">{cfg.title}</span>
                        <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L9.19 4.53 5.48 4.79 4.02 8.24 1.34 10.87 2.68 14.39 1.97 18.09 5.34 19.68 7.42 22.79 11.13 22.25 13.9 24.32 16.67 22.25 20.38 22.79 22.46 19.68 25.83 18.09 25.12 14.39 26.46 10.87 23.78 8.24 22.32 4.79 18.61 4.53 15.8 2H12z" transform="scale(0.8) translate(2, 2)"></path>
                        </svg>
                      </div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{cfg.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <button aria-label="Audio call" className="hover:text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </button>
                    <button aria-label="Channel details" className="hover:text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                  </div>
                </div>

                {/* Chat Messages Screen */}
                <div ref={chatScrollRef} className="flex-1 p-3.5 space-y-3 overflow-y-auto chat-scroll text-xs">
                  
                  {/* Notice */}
                  <div className="text-center my-1">
                    <span className="inline-block px-3 py-1 rounded bg-black/40 text-[10px] text-slate-400 border border-white/5 font-mono">
                      End-to-end encrypted • 24/7 AI Concierge Ready
                    </span>
                  </div>

                  {/* Initial AI Greeting Message */}
                  <div className="flex items-start gap-2 max-w-[85%]">
                    <div 
                      className="p-3 rounded-2xl rounded-tl-sm text-slate-100 border border-white/5 shadow-sm space-y-1.5 transition-colors"
                      style={{ backgroundColor: cfg.aiBubbleBg }}
                    >
                      <p>{cfg.greeting}</p>
                      <div className="text-[9px] text-slate-400 text-right font-mono">9:41 AM</div>
                    </div>
                  </div>

                  {/* Dynamic Messages */}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end ml-auto' : 'items-start gap-2'} max-w-[85%]`}>
                      {m.sender === 'user' ? (
                        <div 
                          className="p-2.5 px-3 rounded-2xl rounded-tr-sm text-white text-xs shadow-sm space-y-1 transition-colors"
                          style={{ backgroundColor: cfg.userBubbleBg }}
                        >
                          <p>{m.text}</p>
                          <div className="text-[9px] text-white/70 text-right font-mono">{m.time} &bull; ✓✓</div>
                        </div>
                      ) : (
                        <div 
                          className="p-3 rounded-2xl rounded-tl-sm text-slate-100 border border-white/5 shadow-sm space-y-2 transition-colors"
                          style={{ backgroundColor: cfg.aiBubbleBg }}
                        >
                          <p>{m.text}</p>
                          {m.askContact && (
                            <p className="font-semibold text-emerald-300">{m.askContact}</p>
                          )}
                          <div className="text-[9px] text-slate-400 text-right font-mono">{m.time}</div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator Bubble */}
                  {isTyping && (
                    <div 
                      className="flex items-center gap-1.5 p-3 rounded-2xl rounded-tl-sm text-slate-300 border border-white/5 w-20 shadow-sm transition-colors"
                      style={{ backgroundColor: cfg.aiBubbleBg }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 typing-dot"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 typing-dot"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 typing-dot"></div>
                    </div>
                  )}

                </div>

                {/* Bottom Interactive Action Drawer */}
                <div className="p-3 bg-[#111B21] border-t border-white/5 space-y-2.5 z-10">
                  
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium px-0.5">
                    <span>Click a real prospect inquiry to test:</span>
                    <button onClick={handleReset} className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                      <span>Reset Demo</span>
                    </button>
                  </div>

                  {/* 3 Clickable Prompt Pills */}
                  {step === 'pills' && (
                    <div className="grid grid-cols-1 gap-1.5">
                      <button 
                        onClick={() => handlePromptClick(1)} 
                        className="text-left px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-emerald-500/15 border border-slate-700 hover:border-emerald-500/40 text-[11px] text-slate-200 transition-all flex items-center justify-between group"
                      >
                        <span>"Hey, how much is your full smile makeover?"</span>
                        <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>

                      <button 
                        onClick={() => handlePromptClick(2)} 
                        className="text-left px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-emerald-500/15 border border-slate-700 hover:border-emerald-500/40 text-[11px] text-slate-200 transition-all flex items-center justify-between group"
                      >
                        <span>"Can I book a consultation for this Saturday?"</span>
                        <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>

                      <button 
                        onClick={() => handlePromptClick(3)} 
                        className="text-left px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-emerald-500/15 border border-slate-700 hover:border-emerald-500/40 text-[11px] text-slate-200 transition-all flex items-center justify-between group"
                      >
                        <span>"Do you offer flexible payment plans?"</span>
                        <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>
                    </div>
                  )}

                  {/* Quick Contact Autofill Container */}
                  {step === 'contact' && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] text-emerald-400 font-semibold block">Prospect verification step:</span>
                      <button 
                        onClick={() => handleContactSubmit('Sarah Jenkins', '+1 (555) 234-8901')} 
                        className="w-full text-left px-3 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] transition-all flex items-center justify-between"
                      >
                        <span>Quick Fill: Sarah Jenkins &bull; (555) 234-8901</span>
                        <span className="font-bold text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">Submit &rarr;</span>
                      </button>
                    </div>
                  )}

                  {/* Slot Picker Container */}
                  {step === 'slots' && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] text-emerald-400 font-semibold block">Select appointment slot:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button 
                          onClick={() => handleSlotSelect('11:00 AM')} 
                          className="py-1.5 px-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-obsidian-900 border border-emerald-500/40 font-mono text-[11px] font-bold transition-all text-center"
                        >
                          11:00 AM
                        </button>
                        <button 
                          onClick={() => handleSlotSelect('2:30 PM')} 
                          className="py-1.5 px-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-obsidian-900 border border-emerald-500/40 font-mono text-[11px] font-bold transition-all text-center"
                        >
                          2:30 PM
                        </button>
                        <button 
                          onClick={() => handleSlotSelect('4:00 PM')} 
                          className="py-1.5 px-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-obsidian-900 border border-emerald-500/40 font-mono text-[11px] font-bold transition-all text-center"
                        >
                          4:00 PM
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Custom Text Input Bar */}
                  <form onSubmit={handleCustomSubmit} className="flex items-center gap-2 pt-1">
                    <input 
                      type="text" 
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder={cfg.placeholder}
                      className="flex-1 bg-slate-900/90 rounded-full px-3 py-1.5 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                    />
                    <button 
                      type="submit" 
                      className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-obsidian-900 flex items-center justify-center shrink-0 transition-colors" 
                      aria-label="Send message"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                  </form>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

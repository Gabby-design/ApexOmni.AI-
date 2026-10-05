import React, { useState } from 'react';
import { playTone } from '../utils/audio';

export default function RoiCalculator({ onOpenLeadModalWithRoi }) {
  const [inquiries, setInquiries] = useState(80);
  const [avgValue, setAvgValue] = useState(250);

  const setPreset = (inq, val) => {
    playTone(650, 'sine', 0.05, 0.08);
    setInquiries(inq);
    setAvgValue(val);
  };

  // Mathematical Model
  const afterHoursLeads = Math.round(inquiries * 0.45);
  const recoveredAppointments = Math.max(1, Math.round(afterHoursLeads * 0.35));
  const monthlyRecovered = recoveredAppointments * avgValue;
  const annualRecovered = monthlyRecovered * 12;
  const roiMultiple = (monthlyRecovered / 249).toFixed(1);

  // Dynamic Slider Track Percentages
  const inqPct = ((inquiries - 20) / (500 - 20)) * 100;
  const valPct = ((avgValue - 50) / (2000 - 50)) * 100;

  return (
    <section id="roi-calculator" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            <span>Conversion Weapon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Untapped Monthly Revenue
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            High-ticket inquiries that arrive after 5:00 PM or over the weekend choose whichever provider answers first. See how much you are leaving on the table.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          {/* Presets */}
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Select High-Ticket Service Benchmark:
            </span>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setPreset(60, 450)} 
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                Aesthetic Injectables (60 msgs @ $450)
              </button>
              <button 
                onClick={() => setPreset(80, 1200)} 
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                Dental Implants &amp; Veneers (80 msgs @ $1,200)
              </button>
              <button 
                onClick={() => setPreset(100, 350)} 
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                Medspa Studio (100 msgs @ $350)
              </button>
              <button 
                onClick={() => setPreset(45, 1800)} 
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 hover:border-emerald-500/50 transition-colors"
              >
                Roofing &amp; HVAC (45 msgs @ $1,800)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Inquiries */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sliderInquiries" className="text-sm font-semibold text-slate-200">
                    Estimated inquiries/messages per month:
                  </label>
                  <span className="font-mono text-lg font-bold text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
                    {inquiries} msgs
                  </span>
                </div>
                <input 
                  type="range" 
                  id="sliderInquiries" 
                  min="20" 
                  max="500" 
                  step="5" 
                  value={inquiries} 
                  onChange={(e) => setInquiries(parseInt(e.target.value, 10))}
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${inqPct}%, #1E293B ${inqPct}%, #1E293B 100%)`
                  }}
                  className="w-full cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>20 msgs/mo</span>
                  <span>250 msgs/mo</span>
                  <span>500 msgs/mo</span>
                </div>
              </div>

              {/* Slider 2: Average Booking Value */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sliderValue" className="text-sm font-semibold text-slate-200">
                    Average customer or booking value ($):
                  </label>
                  <span className="font-mono text-lg font-bold text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
                    ${avgValue.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  id="sliderValue" 
                  min="50" 
                  max="2000" 
                  step="25" 
                  value={avgValue} 
                  onChange={(e) => setAvgValue(parseInt(e.target.value, 10))}
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${valPct}%, #1E293B ${valPct}%, #1E293B 100%)`
                  }}
                  className="w-full cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$50</span>
                  <span>$1,000</span>
                  <span>$2,000+</span>
                </div>
              </div>

              {/* Logic Breakdown Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Estimated missed inquiries after hours (~45%):</span>
                  <span className="font-mono text-slate-200 font-semibold">{afterHoursLeads} leads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Instant 3-second reply booking capture rate:</span>
                  <span className="font-mono text-emerald-400 font-semibold">35% conversion</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated recovered paid appointments per month:</span>
                  <span className="font-mono text-slate-200 font-semibold">{recoveredAppointments} bookings</span>
                </div>
              </div>

            </div>

            {/* Dynamic Results Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-obsidian-900 to-obsidian-950 border border-emerald-500/30 shadow-glow-emerald space-y-6 text-center">
                
                <div>
                  <div className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold mb-1">
                    Projected Recovered Revenue per Month
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">
                    ${monthlyRecovered.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Annual potential: <span className="text-slate-300 font-semibold">${annualRecovered.toLocaleString()}</span>/year
                  </div>
                </div>

                <div className="py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                  <span className="font-bold">{roiMultiple}x Projected ROI</span> on our standard $249/mo Omnichannel plan.
                </div>

                <button 
                  onClick={() => onOpenLeadModalWithRoi(monthlyRecovered, annualRecovered)} 
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-900 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Book Bot to Recover This</span>
                  <svg className="w-4 h-4 text-obsidian-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </button>

                <p className="text-[11px] text-slate-500 leading-tight">
                  Covered by our 5-booking minimum trial guarantee or you pay $0.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

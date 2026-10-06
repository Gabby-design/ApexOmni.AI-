import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustRibbon from './components/TrustRibbon';
import Channels from './components/Channels';
import Simulator from './components/Simulator';
import RoiCalculator from './components/RoiCalculator';
import Comparison from './components/Comparison';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import LegalModal from './components/LegalModal';
import FloatingChat from './components/FloatingChat';
import { getMuteState, setMuteState, playTone } from './utils/audio';

export default function App() {
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  const [leadModalState, setLeadModalState] = useState({
    isOpen: false,
    sourceContext: 'General CTA',
    roiTarget: null
  });
  const [legalModalState, setLegalModalState] = useState({
    isOpen: false,
    initialTab: 'privacy'
  });

  // High-performance interactive mouse spotlight (zero reflow during scroll)
  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const card = e.target.closest && e.target.closest('.glass-panel, .glass-panel-elevated');
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleToggleSound = () => {
    const nextState = !isSoundMuted;
    setIsSoundMuted(nextState);
    setMuteState(nextState);
    if (!nextState) {
      playTone(600, 'sine', 0.08, 0.1);
    }
  };

  const handleOpenLeadModal = (sourceContext = 'General CTA') => {
    playTone(550, 'sine', 0.05, 0.08);
    setLeadModalState({
      isOpen: true,
      sourceContext,
      roiTarget: null
    });
  };

  const handleOpenLeadModalWithRoi = (monthly, annual) => {
    playTone(550, 'sine', 0.05, 0.08);
    setLeadModalState({
      isOpen: true,
      sourceContext: `ROI Calculator Recovery: $${monthly.toLocaleString()}/mo`,
      roiTarget: `Target Recovery: $${monthly.toLocaleString()}/mo ($${annual.toLocaleString()}/yr)`
    });
  };

  const handleCloseLeadModal = () => {
    setLeadModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleOpenLegalModal = (tab = 'privacy') => {
    playTone(520, 'sine', 0.05, 0.08);
    setLegalModalState({
      isOpen: true,
      initialTab: tab
    });
  };

  const handleCloseLegalModal = () => {
    setLegalModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-[#06090F] text-slate-200 antialiased min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* GPU Accelerated Fixed Background Mesh */}
      <div className="bg-mesh-glow" aria-hidden="true" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onOpenLeadModal={handleOpenLeadModal} 
          isSoundMuted={isSoundMuted} 
          onToggleSound={handleToggleSound} 
        />

      <main className="flex-1">
        <Hero onOpenLeadModal={handleOpenLeadModal} />
        <TrustRibbon />
        <Channels />
        <Simulator onOpenLeadModal={handleOpenLeadModal} />
        <RoiCalculator onOpenLeadModalWithRoi={handleOpenLeadModalWithRoi} />
        <Comparison />
        <CaseStudies />
        <Process />
        <Pricing onOpenLeadModal={handleOpenLeadModal} />
        <Guarantee />
        <Faq />
      </main>

      <Footer 
        onOpenLeadModal={handleOpenLeadModal} 
        onOpenLegalModal={handleOpenLegalModal} 
      />

      <LeadModal 
        isOpen={leadModalState.isOpen} 
        onClose={handleCloseLeadModal}
        sourceContext={leadModalState.sourceContext}
        roiTarget={leadModalState.roiTarget}
      />

      <LegalModal 
        isOpen={legalModalState.isOpen}
        onClose={handleCloseLegalModal}
        initialTab={legalModalState.initialTab}
      />

      <FloatingChat onOpenLeadModal={handleOpenLeadModal} />
      </div>
    </div>
  );
}

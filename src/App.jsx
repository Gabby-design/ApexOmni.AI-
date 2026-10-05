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

  // Interactive mouse spotlight effect on glass panels
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-panel');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="bg-obsidian text-slate-200 antialiased min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar 
        onOpenLeadModal={handleOpenLeadModal} 
        isSoundMuted={isSoundMuted} 
        onToggleSound={handleToggleSound} 
      />

      <main className="flex-1">
        <Hero onOpenLeadModal={handleOpenLeadModal} />
        <TrustRibbon />
        <Channels />
        <Simulator />
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
  );
}

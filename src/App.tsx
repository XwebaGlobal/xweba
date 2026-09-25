/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioTeam } from './components/StudioTeam';
import { ServicesBento } from './components/ServicesBento';
import { WorkShowcase } from './components/WorkShowcase';
import { GeoAuditor } from './components/GeoAuditor';
import { ScopeCalculator } from './components/ScopeCalculator';
import { PerformanceBenchmark } from './components/PerformanceBenchmark';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CommandPalette } from './components/CommandPalette';
import { ServiceItem } from './types';

function AppContent() {
  const { isDark } = useTheme();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [consultationPreload, setConsultationPreload] = useState<{
    serviceName?: string;
    estimatedCost?: string;
    timeline?: string;
    modules?: string[];
    domain?: string;
  }>({});

  // Global Keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenConsultation = (initial?: typeof consultationPreload) => {
    if (initial) {
      setConsultationPreload(initial);
    } else {
      setConsultationPreload({});
    }
    setIsConsultationOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('scope-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToGeoAudit = () => {
    const el = document.getElementById('geo-audit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromBento = (service: ServiceItem) => {
    handleOpenConsultation({
      serviceName: service.title,
      estimatedCost: 'Custom quote based on scope',
      timeline: '3–5 weeks'
    });
  };

  const handleRemediateGeoDomain = (domain: string) => {
    handleOpenConsultation({
      serviceName: 'Generative Engine Optimization (GEO) Remediation',
      domain: domain,
      estimatedCost: '$2,400 - $4,800',
      timeline: '3 weeks'
    });
  };

  const handlePreloadFromEstimator = (data: {
    serviceName: string;
    estimatedCost: string;
    timeline: string;
    modules: string[];
  }) => {
    handleOpenConsultation(data);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans selection:bg-[#FF5E14] selection:text-white ${
      isDark
        ? 'bg-[#071520] text-[#ededed]'
        : 'bg-[#f8fafc] text-[#0f172a]'
    }`}>
      {/* 3-Zone Top Bar Navigation with Hostinger Partner Banner & Theme Switcher */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="w-full">
        {/* Authentic Hero with Team Portrait & Brand Narrative (Full Width) */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToEstimator={handleScrollToEstimator}
          onScrollToGeoAudit={handleScrollToGeoAudit}
        />

        {/* Studio Culture & Craftsmanship: Strategy · Design · Growth (Full Width) */}
        <StudioTeam onOpenConsultation={() => handleOpenConsultation()} />

        {/* Capabilities Deck with Interactive Detail Inspector (Full Width 4-Col) */}
        <ServicesBento onSelectService={handleSelectServiceFromBento} />

        {/* Selected Work & Case Studies with Interactive Modal (Full Width) */}
        <WorkShowcase onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive GEO & AI Citability Diagnostic Simulator (Full Width) */}
        <GeoAuditor onRemediate={handleRemediateGeoDomain} />

        {/* Interactive Scope & Investment Calculator (Full Width) */}
        <ScopeCalculator onPreloadBrief={handlePreloadFromEstimator} />

        {/* Interactive Speed & Pipeline Loss Simulator (Full Width) */}
        <PerformanceBenchmark onOpenConsultation={() => handleOpenConsultation()} />

        {/* Clear 4-Week Delivery Methodology & FAQs (Full Width) */}
        <ProcessTimeline />
      </main>

      {/* Quiet, Unboxed Footer (Full Width) */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation / Discovery Brief Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={consultationPreload}
      />

      {/* Quick Navigator / Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

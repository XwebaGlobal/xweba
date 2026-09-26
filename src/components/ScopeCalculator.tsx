import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ScopeCalculatorProps {
  onPreloadBrief: (data: {
    serviceName: string;
    estimatedCost: string;
    timeline: string;
    modules: string[];
  }) => void;
}

export const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ onPreloadBrief }) => {
  const [projectType, setProjectType] = useState<'marketing' | 'ecommerce' | 'saas' | 'ai-geo'>('marketing');
  const [pageCount, setPageCount] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'geo-optimization',
    'edge-performance'
  ]);
  const { isDark } = useTheme();

  const projectTypes = [
    { id: 'marketing', name: 'High-Converting Web Architecture', basePrice: 2800, baseWeeks: 3 },
    { id: 'ecommerce', name: 'Luxury / High-SKU E-Commerce', basePrice: 4800, baseWeeks: 5 },
    { id: 'saas', name: 'SaaS / AI Web Application UI', basePrice: 5600, baseWeeks: 6 },
    { id: 'ai-geo', name: 'GEO & Entity Citability Engine', basePrice: 2400, baseWeeks: 3 }
  ];

  const addonsList = [
    { id: 'geo-optimization', name: 'Generative Engine Optimization (GEO)', cost: 1200, weeks: 1 },
    { id: 'edge-performance', name: 'Hostinger Edge CDN & Sub-800ms TTFB', cost: 600, weeks: 0 },
    { id: 'cms-integration', name: 'Headless CMS & Custom Workflows', cost: 1400, weeks: 1 },
    { id: 'brand-identity', name: 'Tactile Brand Identity & Design Tokens', cost: 1800, weeks: 1 },
    { id: 'analytics-cro', name: 'Conversion Rate Tracking & Heatmaps', cost: 800, weeks: 0 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentProject = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  // Pricing calculations
  const perPageFee = projectType === 'ecommerce' ? 180 : 120;
  const pagesCost = (pageCount - 1) * perPageFee;
  const addonsCost = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return sum + (addon ? addon.cost : 0);
  }, 0);

  const totalCost = currentProject.basePrice + pagesCost + addonsCost;
  const totalWeeks =
    currentProject.baseWeeks +
    (pageCount > 10 ? 1 : 0) +
    selectedAddons.reduce((sum, id) => {
      const addon = addonsList.find((a) => a.id === id);
      return sum + (addon ? addon.weeks : 0);
    }, 0);

  const handleTransferToConsultation = () => {
    onPreloadBrief({
      serviceName: `${currentProject.name} (${pageCount} Views)`,
      estimatedCost: `$${totalCost.toLocaleString()}`,
      timeline: `${totalWeeks} weeks`,
      modules: selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.name || id)
    });
  };

  return (
    <section id="scope-calculator" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-white'
    }`}>
      {/* Ambient color blend */}
      <div className={`absolute top-1/3 left-1/3 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />
      <div className={`absolute bottom-0 right-10 -z-10 h-80 w-80 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-semibold">
              Transparent Pricing & Scope Estimator
            </span>
            <h2 className={`mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Calculate your architecture investment in real time.
            </h2>
          </div>

          <p className={`text-sm max-w-md transition-colors ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            We believe in upfront, deterministic budgets. No hidden scope creep, no opaque change requests. Everything is scoped before the first line of code is written.
          </p>
        </div>

        {/* Interactive Calculator Shell (Expands Full Width) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-start">
          
          {/* Left Column: Scope Inputs (8 cols) */}
          <div className={`lg:col-span-8 rounded-3xl border p-6 sm:p-10 space-y-8 transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/80 shadow-xl' : 'border-slate-200 bg-slate-50/70 shadow-md'
          }`}>
            
            {/* 1. Project Type Selector */}
            <div>
              <label className={`block text-xs font-mono uppercase tracking-wider mb-4 ${
                isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
              }`}>
                Step 1: Select Primary Core System
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      projectType === type.id
                        ? isDark
                          ? 'border-[#009fe3] bg-[#0c2438] text-white shadow-sm ring-1 ring-[#009fe3]'
                          : 'border-[#009fe3] bg-cyan-50/70 text-slate-900 shadow-sm ring-1 ring-[#009fe3]'
                        : isDark
                          ? 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-white'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <div className="font-display font-bold text-sm">{type.name}</div>
                    <div className="mt-2 flex items-center justify-between text-xs font-mono">
                      <span className={projectType === type.id ? 'text-[#009fe3] font-semibold' : 'text-neutral-400'}>
                        From ${type.basePrice.toLocaleString()}
                      </span>
                      <span className="text-neutral-400">
                        {type.baseWeeks} Weeks
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Page & View Density Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className={`text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
                }`}>
                  Step 2: Number of Bespoke Views / Funnel Pages
                </label>
                <span className="font-mono text-sm font-bold text-[#FF5E14]">
                  {pageCount} Views
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
              />

              <div className="mt-2 flex justify-between text-[11px] font-mono text-neutral-400">
                <span>1 (Minimalist Landing)</span>
                <span>10 (Full Enterprise)</span>
                <span>25+ (Multi-Region / Portal)</span>
              </div>
            </div>

            {/* 3. Capability Modules & Addons */}
            <div>
              <label className={`block text-xs font-mono uppercase tracking-wider mb-4 ${
                isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
              }`}>
                Step 3: Engineering Addons & AI Enhancements
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start justify-between rounded-xl border p-3.5 text-left transition-all ${
                        isChecked
                          ? isDark
                            ? 'border-neutral-700 bg-neutral-900 text-white'
                            : 'border-cyan-300 bg-cyan-50/50 text-slate-900 shadow-xs'
                          : isDark
                            ? 'border-neutral-850 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="text-xs font-semibold">{addon.name}</div>
                        <div className="text-[11px] font-mono text-[#009fe3] mt-1">
                          +${addon.cost.toLocaleString()}
                        </div>
                      </div>

                      <div
                        className={`h-5 w-5 shrink-0 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#FF5E14] text-white' : isDark ? 'border border-neutral-700 bg-neutral-800' : 'border border-slate-300 bg-slate-100'
                        }`}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price & Timeline Summary (4 cols) */}
          <div className={`lg:col-span-4 rounded-3xl border p-6 sm:p-8 flex flex-col justify-between sticky top-24 transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'
          }`}>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Scope Summary
              </span>

              <h3 className={`mt-2 font-display text-2xl font-bold transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Estimated Investment
              </h3>

              {/* Big Price Tag */}
              <div className={`mt-6 border-b pb-6 ${
                isDark ? 'border-neutral-800' : 'border-slate-200'
              }`}>
                <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>Turnkey Fixed Budget:</div>
                <div className={`mt-1 font-mono text-4xl sm:text-5xl font-bold flex items-baseline gap-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="text-[#FF5E14]">${totalCost.toLocaleString()}</span>
                  <span className={`text-xs font-normal ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>USD</span>
                </div>
                <div className="mt-2 text-xs font-mono text-[#009fe3]">
                  Sprint Duration: ~{totalWeeks} Weeks to Launch
                </div>
              </div>

              {/* Itemized breakdown */}
              <div className={`mt-6 space-y-2.5 text-xs transition-colors ${
                isDark ? 'text-neutral-300' : 'text-slate-600'
              }`}>
                <div className="flex justify-between">
                  <span>Base Architecture:</span>
                  <span className="font-mono">${currentProject.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>{pageCount} Views Layout:</span>
                  <span className="font-mono">${pagesCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Addons ({selectedAddons.length}):</span>
                  <span className="font-mono">${addonsCost.toLocaleString()}</span>
                </div>
                <div className={`flex justify-between pt-2 border-t ${
                  isDark ? 'border-neutral-800' : 'border-slate-200'
                } text-emerald-500 font-semibold`}>
                  <a
                    href="https://www.hostinger.com?REFERRALCODE=1JOHN0542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 transition-colors"
                    title="Hostinger Cloud Setup - Referral Discount"
                  >
                    <span>Hostinger Cloud Setup:</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-500">Partner</span>
                  </a>
                  <span>INCLUDED ($0)</span>
                </div>
              </div>

              <div className={`mt-6 rounded-xl border p-3 text-[11px] leading-relaxed transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-900/60 text-neutral-400' : 'border-slate-200 bg-slate-50 text-slate-600'
              }`}>
                Includes complete code ownership, full intellectual property transfer, and a 30-day post-launch warranty period.
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={handleTransferToConsultation}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#e0520f] active:scale-98"
              >
                <span>Lock in Estimate & Book Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

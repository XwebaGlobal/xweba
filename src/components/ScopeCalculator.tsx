import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, Layers, Shield } from 'lucide-react';

interface ScopeCalculatorProps {
  onPreloadBrief: (briefData: {
    serviceName: string;
    estimatedCost: string;
    timeline: string;
    modules: string[];
  }) => void;
}

interface CoreOption {
  id: string;
  name: string;
  basePrice: number;
  baseWeeks: number;
  description: string;
  deliverables: string[];
}

const CORE_OPTIONS: CoreOption[] = [
  {
    id: 'web-platform',
    name: 'High-Performance Web Platform',
    basePrice: 3800,
    baseWeeks: 4,
    description: 'Custom edge-rendered React / Next.js architecture with bespoke UI and mobile performance engineering.',
    deliverables: ['Custom component library', 'Sub-800ms TTFB optimization', 'Responsive layout system', 'Core Web Vitals certification']
  },
  {
    id: 'geo-growth',
    name: 'Generative Engine Optimization (GEO)',
    basePrice: 2400,
    baseWeeks: 3,
    description: 'Semantic entity graph structuring and AI citability layer for ChatGPT, Perplexity, Gemini, and Google.',
    deliverables: ['JSON-LD entity triples', 'Information Gain content audit', 'AI answer engine indexation', 'Monthly citation tracking']
  },
  {
    id: 'brand-system',
    name: 'Visual Identity & Design System',
    basePrice: 2800,
    baseWeeks: 3,
    description: 'Comprehensive brand identity, typography rules, color science, and scalable Figma component architecture.',
    deliverables: ['Bespoke logomark & logotype', 'Typographic hierarchy specs', 'Figma production tokens', 'Design guidelines document']
  },
  {
    id: 'flagship-bundle',
    name: 'Full Digital Flagship (Platform + GEO + Brand)',
    basePrice: 7600,
    baseWeeks: 6,
    description: 'The complete end-to-end digital transformation. Brand identity, bespoke web engineering, and deep GEO layer.',
    deliverables: ['Complete brand visual identity', 'Headless Next.js platform', 'Deep GEO & entity graph', 'Conversion funnel engineering']
  }
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
  extraWeeks: number;
  description: string;
}

const ADDONS: AddonOption[] = [
  {
    id: 'headless-cms',
    name: 'Headless CMS Integration',
    price: 950,
    extraWeeks: 1,
    description: 'Empower your marketing team to edit content seamlessly with Sanity or Strapi.'
  },
  {
    id: 'ai-rag-tool',
    name: 'Embedded AI Assistant / Vector Tool',
    price: 1600,
    extraWeeks: 1,
    description: 'Domain-specific semantic search or interactive AI assistant for site visitors.'
  },
  {
    id: 'interactive-funnel',
    name: 'Interactive Calculators & Lead Funnels',
    price: 850,
    extraWeeks: 0.5,
    description: 'Custom calculators, quote estimators, and multi-step inquiry forms.'
  },
  {
    id: 'multilingual',
    name: 'Multilingual Localization Layer',
    price: 750,
    extraWeeks: 0.5,
    description: 'Full internationalization (i18n) setup for regional or global audiences.'
  }
];

export const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ onPreloadBrief }) => {
  const [selectedCoreId, setSelectedCoreId] = useState<string>('web-platform');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['headless-cms']);
  const [velocity, setVelocity] = useState<'standard' | 'accelerated'>('standard');
  const [tier, setTier] = useState<'startup' | 'growth' | 'enterprise'>('growth');

  const selectedCore = CORE_OPTIONS.find((c) => c.id === selectedCoreId) || CORE_OPTIONS[0];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedTotals = useMemo(() => {
    let base = selectedCore.basePrice;
    let weeks = selectedCore.baseWeeks;

    // Addons
    selectedAddons.forEach((id) => {
      const addon = ADDONS.find((a) => a.id === id);
      if (addon) {
        base += addon.price;
        weeks += addon.extraWeeks;
      }
    });

    // Tier factor
    const tierMultiplier = tier === 'startup' ? 0.85 : tier === 'growth' ? 1.0 : 1.35;
    base = Math.round(base * tierMultiplier);

    // Velocity factor
    if (velocity === 'accelerated') {
      base = Math.round(base * 1.25);
      weeks = Math.max(2, Math.round(weeks * 0.65));
    }

    return {
      priceEstimate: `$${base.toLocaleString()}`,
      weeks: `${Math.round(weeks)} weeks`,
      rawPrice: base
    };
  }, [selectedCore, selectedAddons, tier, velocity]);

  const handleApplyScope = () => {
    const addonNames = selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name || id);
    onPreloadBrief({
      serviceName: `${selectedCore.name} (${tier.toUpperCase()})`,
      estimatedCost: calculatedTotals.priceEstimate,
      timeline: calculatedTotals.weeks,
      modules: addonNames
    });
  };

  return (
    <section id="scope-calculator" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#0c0d0e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            <span>Transparent Pricing Engine</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#ff3b00]">Zero Hidden Markups</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Interactive Project Scope & Investment Estimator.
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Eliminate agency guesswork. Configure your required technical architecture, select your operational stage, and receive an instant, realistic turnaround and investment baseline.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Core Objective */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                01. Core Architecture Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CORE_OPTIONS.map((opt) => {
                  const isSelected = selectedCoreId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedCoreId(opt.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-[#ff3b00] bg-neutral-900/90 shadow-md ring-1 ring-[#ff3b00]'
                          : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700 hover:bg-neutral-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-sm text-white">
                          {opt.name}
                        </span>
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-[#ff3b00]" />
                        )}
                      </div>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Operational Stage / Scope */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                02. Organization Scale
              </label>
              <div className="flex items-center gap-2 p-1.5 rounded-xl border border-neutral-800 bg-neutral-950">
                {(['startup', 'growth', 'enterprise'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg capitalize transition-colors ${
                      tier === t
                        ? 'bg-neutral-800 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {t === 'startup' ? 'Startup / Seed' : t === 'growth' ? 'Growth / Series A-B' : 'Enterprise / Scale'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Capabilities & Modules */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                03. Add-on Capabilities & Integrations
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                        isChecked
                          ? 'border-neutral-600 bg-neutral-900/80 text-white'
                          : 'border-neutral-850 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                            isChecked
                              ? 'border-[#ff3b00] bg-[#ff3b00] text-white'
                              : 'border-neutral-700 bg-neutral-900'
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white">{addon.name}</div>
                          <div className="text-[11px] text-neutral-400">{addon.description}</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-neutral-300 tabular-nums">
                        +${addon.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Sprint Velocity */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                04. Delivery Velocity
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVelocity('standard')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    velocity === 'standard'
                      ? 'border-white/30 bg-neutral-900 text-white'
                      : 'border-neutral-800 bg-neutral-950/50 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-semibold text-white">Standard Cadence</div>
                  <div className="mt-1 text-[11px] text-neutral-400">Consistent weekly sprints and async reviews.</div>
                </button>
                <button
                  type="button"
                  onClick={() => setVelocity('accelerated')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    velocity === 'accelerated'
                      ? 'border-[#ff3b00] bg-neutral-900 text-white'
                      : 'border-neutral-800 bg-neutral-950/50 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-semibold text-white flex items-center justify-between">
                    <span>Priority Sprint (+25%)</span>
                    <Sparkles className="h-3 w-3 text-[#ff3b00]" />
                  </div>
                  <div className="mt-1 text-[11px] text-neutral-400">Dedicated multi-engineer squad with fast-tracked launch.</div>
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Estimated Scope Investment
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <Shield className="h-3.5 w-3.5" /> Fixed-price guarantee
                </span>
              </div>

              {/* Dynamic Price Display */}
              <div className="py-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white tabular-nums">
                    {calculatedTotals.priceEstimate}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">USD</span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs text-neutral-300">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3.5 w-3.5 text-neutral-400" />
                    Target Timeline: <strong className="text-white ml-1">{calculatedTotals.weeks}</strong>
                  </span>
                  <span aria-hidden="true" className="text-neutral-700">·</span>
                  <span className="text-neutral-400">Staged milestone billing</span>
                </div>
              </div>

              {/* Included Deliverables preview */}
              <div className="border-t border-neutral-800 pt-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Confirmed Deliverables
                </div>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {selectedCore.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-[#ff3b00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {selectedAddons.map((id) => {
                    const addon = ADDONS.find((a) => a.id === id);
                    return addon ? (
                      <li key={id} className="flex items-start gap-2 text-white">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{addon.name}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={handleApplyScope}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff3b00] py-3.5 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e03400] active:scale-98"
                >
                  <span>Lock in Scope & Book Strategy Brief</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-2.5 text-center text-[11px] text-neutral-400">
                  Non-binding estimate. Refined during our direct 30-min discovery session.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

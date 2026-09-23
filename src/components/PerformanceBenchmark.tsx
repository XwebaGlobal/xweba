import React, { useState, useMemo } from 'react';
import { Gauge, TrendingUp, AlertTriangle, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface PerformanceBenchmarkProps {
  onOpenConsultation: () => void;
}

export const PerformanceBenchmark: React.FC<PerformanceBenchmarkProps> = ({ onOpenConsultation }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(15000);
  const [dealValue, setDealValue] = useState<number>(2500);

  const stats = useMemo(() => {
    // Google research: Every 1s delay in mobile load decreases conversions by ~20%
    const legacyConversionRate = 0.012; // 1.2%
    const xwebaConversionRate = 0.034; // 3.4%

    const legacyInquiries = Math.round(monthlyVisitors * legacyConversionRate);
    const xwebaInquiries = Math.round(monthlyVisitors * xwebaConversionRate);

    const lostInquiries = xwebaInquiries - legacyInquiries;
    const estimatedLostRevenue = lostInquiries * (dealValue * 0.25); // assuming 25% close rate on inquiries

    return {
      legacyInquiries,
      xwebaInquiries,
      lostInquiries,
      estimatedLostRevenue: Math.round(estimatedLostRevenue)
    };
  }, [monthlyVisitors, dealValue]);

  return (
    <section id="performance" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#090a0b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            <span>The Cost of Latency</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#ff3b00]">Quantitative Business Impact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Slow architectures silently destroy qualified pipeline.
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Every 100 milliseconds of latency degrades user attention and triggers immediate mobile abandonment. See how replacing monolithic bloated CMS templates with edge-rendered Next.js directly increases revenue.
          </p>
        </div>

        {/* Interactive Comparison & Calculator */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls & Impact Simulator (Left) */}
          <div className="lg:col-span-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Interactive Pipeline Loss Simulator
              </h3>

              {/* Slider 1: Traffic */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Estimated Monthly Visitors</span>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">
                    {monthlyVisitors.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff3b00]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>2,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Contract/Order Value */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Average Deal / Customer Lifetime Value</span>
                  <span className="font-mono text-sm font-bold text-white tabular-nums">
                    ${dealValue.toLocaleString()} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff3b00]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Calculated Results */}
              <div className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Estimated Monthly Pipeline Opportunity
                    </div>
                    <div className="mt-1 font-display text-3xl sm:text-4xl font-bold text-emerald-400 tabular-nums">
                      +${stats.estimatedLostRevenue.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Additional Inquiries
                    </div>
                    <div className="mt-1 font-display text-2xl font-bold text-white tabular-nums">
                      +{stats.lostInquiries} <span className="text-xs text-neutral-400 font-mono">leads/mo</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3">
                  Based on a conservative lift from 1.2% to 3.4% conversion through sub-second page delivery and simplified inquiry architecture.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 px-4 text-xs font-semibold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-98"
              >
                <span>Recover Lost Pipeline With XwebA</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Architecture Comparison Cards (Right) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Legacy Approach */}
            <div className="rounded-2xl border border-rose-500/20 bg-neutral-950 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Legacy WordPress / Builders</span>
                </div>
                <h4 className="mt-2 font-display text-lg font-bold text-white">
                  Sluggish Digital Brochure
                </h4>
                
                <div className="mt-6 space-y-4 text-xs text-neutral-400">
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Page Load Time</span>
                    <strong className="text-base font-mono text-rose-400">4.2s – 6.8s</strong>
                  </div>
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Mobile Bounce Rate</span>
                    <strong className="text-base font-mono text-rose-400">54.2%</strong>
                  </div>
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Lighthouse Performance</span>
                    <strong className="text-base font-mono text-rose-400">32 / 100</strong>
                  </div>
                  <div>
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">AI Search Citability</span>
                    <strong className="text-base font-mono text-rose-400">0% (Unstructured)</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[11px] text-neutral-500 font-mono">
                Over-reliant on bloated plugins, unoptimized databases, and slow shared hosting.
              </div>
            </div>

            {/* XwebA Engineered Approach */}
            <div className="rounded-2xl border border-emerald-500/30 bg-neutral-950 p-6 flex flex-col justify-between ring-1 ring-emerald-500/20">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                  <Zap className="h-4 w-4" />
                  <span>XwebA Edge Platform</span>
                </div>
                <h4 className="mt-2 font-display text-lg font-bold text-white">
                  High-Conversion Engine
                </h4>
                
                <div className="mt-6 space-y-4 text-xs text-neutral-300">
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Page Load Time</span>
                    <strong className="text-base font-mono text-emerald-400">&lt; 0.5s</strong>
                  </div>
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Mobile Bounce Rate</span>
                    <strong className="text-base font-mono text-emerald-400">18.4%</strong>
                  </div>
                  <div className="border-b border-neutral-850 pb-3">
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">Lighthouse Performance</span>
                    <strong className="text-base font-mono text-emerald-400">99 / 100</strong>
                  </div>
                  <div>
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">AI Search Citability</span>
                    <strong className="text-base font-mono text-emerald-400">96% (Native Triples)</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[11px] text-neutral-400 font-mono">
                Pure TypeScript, statically compiled assets, distributed edge caching, and zero bloat.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

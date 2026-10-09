import React, { useState } from 'react';
import { Zap, AlertCircle, ArrowUpRight, CheckCircle2, TrendingDown, DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface PerformanceBenchmarkProps {
  onOpenConsultation: () => void;
}

export const PerformanceBenchmark: React.FC<PerformanceBenchmarkProps> = ({ onOpenConsultation }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(25000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(150);
  const { isDark } = useTheme();

  // Amazon/Google research: every 100ms delay costs ~1% conversions; 3s+ delay costs 7% bounce rate
  // Let's calculate pipeline revenue preserved with XwebA's sub-second edge hosting vs slow 3.5s WordPress baseline
  const baselineBounceRate = 0.42; // 42% on slow 3.5s
  const xwebABounceRate = 0.18; // 18% on 600ms edge
  const conversionRate = 0.024; // 2.4% baseline

  const retainedTrafficMonthly = Math.round(monthlyVisitors * (baselineBounceRate - xwebABounceRate));
  const recoveredSalesMonthly = Math.round(retainedTrafficMonthly * conversionRate);
  const recoveredRevenueMonthly = Math.round(recoveredSalesMonthly * avgOrderValue);
  const recoveredRevenueAnnual = recoveredRevenueMonthly * 12;

  return (
    <section id="performance" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-[#f8fafc]'
    }`}>
      {/* Ambient color blend */}
      <div className={`absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />
      <div className={`absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#009fe3] font-semibold">
              Latency & Pipeline Simulator
            </span>
            <h2 className={`mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Slow load times are quietly draining your customer acquisition budget.
            </h2>
          </div>

          <p className={`text-sm max-w-md transition-colors ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            Google research proves that pages taking over 3 seconds to load lose 40%+ of mobile buyers before the hero graphic even renders.
          </p>
        </div>

        {/* Interactive Comparison & ROI Calculator (Expands Full Width) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-start">
          
          {/* Left: Input Controls & Sliders (6 cols) */}
          <div className={`lg:col-span-6 rounded-3xl border p-6 sm:p-10 space-y-8 transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/80 shadow-xl' : 'border-slate-200 bg-white shadow-md'
          }`}>
            <h3 className={`font-display text-xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Simulate Your Revenue Leak
            </h3>

            {/* Monthly Traffic Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
                }`}>
                  Monthly Unique Visitors
                </label>
                <span className="font-mono text-sm font-bold text-[#009fe3]">
                  {monthlyVisitors.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#009fe3]"
              />
            </div>

            {/* Average Order Value or Deal Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
                }`}>
                  Average Order Value / Lead Value ($)
                </label>
                <span className="font-mono text-sm font-bold text-[#FF5E14]">
                  ${avgOrderValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
              />
            </div>

            {/* Benchmark Comparison Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className={`rounded-2xl border p-4 transition-colors ${
                isDark ? 'border-rose-900/40 bg-rose-950/20' : 'border-rose-200 bg-rose-50/60'
              }`}>
                <div className="text-[11px] font-mono text-rose-500 uppercase font-semibold">Standard WP / Wix Site</div>
                <div className="mt-1 font-mono text-xl font-bold text-rose-500">3.8s TTFB</div>
                <div className="mt-1 text-[11px] text-neutral-400">42% average mobile abandonment</div>
              </div>

              <div className={`rounded-2xl border p-4 transition-colors ${
                isDark ? 'border-cyan-900/40 bg-cyan-950/20' : 'border-cyan-200 bg-cyan-50/60'
              }`}>
                <div className="text-[11px] font-mono text-[#009fe3] uppercase font-semibold">XwebA Edge Platform</div>
                <div className="mt-1 font-mono text-xl font-bold text-[#009fe3]">480ms TTFB</div>
                <a
                  href="https://www.hostinger.com?REFERRALCODE=1JOHN0542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-[11px] text-neutral-400 hover:text-cyan-400 hover:underline flex items-center gap-1 transition-colors"
                  title="Hostinger Partner Edge Infrastructure"
                >
                  <span>Hostinger Global Edge CDN</span>
                  <span className="text-[10px] text-emerald-400 font-mono">20% off</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Recoverable Pipeline Metric Readout (6 cols) */}
          <div className={`lg:col-span-6 rounded-3xl border p-6 sm:p-10 flex flex-col justify-between transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'
          }`}>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-semibold">
                Annual Recaptured Pipeline Opportunity
              </span>

              <div className="mt-4 font-mono text-4xl sm:text-6xl font-bold text-white tracking-tight">
                <span className="text-emerald-400">+${recoveredRevenueAnnual.toLocaleString()}</span>
                <span className="text-xs font-normal text-neutral-400 block sm:inline sm:ml-2">/ year</span>
              </div>

              <p className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-300' : 'text-slate-600'
              }`}>
                By dropping your Time-to-First-Byte (TTFB) from 3.8s to sub-600ms, your business prevents <strong>{retainedTrafficMonthly.toLocaleString()} bounced mobile visitors</strong> every month.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className={`rounded-xl p-4 border transition-colors ${
                  isDark ? 'border-neutral-800 bg-neutral-900/50' : 'border-slate-200 bg-slate-50'
                }`}>
                  <div className="text-[11px] font-mono text-neutral-400">Monthly Recaptured Revenue</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-white">
                    +${recoveredRevenueMonthly.toLocaleString()}
                  </div>
                </div>

                <div className={`rounded-xl p-4 border transition-colors ${
                  isDark ? 'border-neutral-800 bg-neutral-900/50' : 'border-slate-200 bg-slate-50'
                }`}>
                  <div className="text-[11px] font-mono text-neutral-400">Recovered Conversions</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-[#009fe3]">
                    +{recoveredSalesMonthly} customers
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:bg-[#e0520f]"
              >
                <span>Audit My Current Site Speed & Bounce Rate</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

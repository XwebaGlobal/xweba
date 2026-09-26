import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Zap, Clock, ShieldCheck, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { useTheme } from '../context/ThemeContext';

interface WorkShowcaseProps {
  onOpenConsultation: () => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', label: 'All Architectures' },
    { id: 'fintech', label: 'Fintech & Payments' },
    { id: 'luxury', label: 'Luxury Commerce' },
    { id: 'ai', label: 'AI Platform' }
  ];

  const filteredStudies =
    selectedCategory === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => {
          const searchCorpus = `${s.category} ${s.categoryLabel || ''} ${s.industry || ''}`.toLowerCase();
          return searchCorpus.includes(selectedCategory.toLowerCase());
        });

  return (
    <section id="work" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-white'
    }`}>
      {/* Dynamic ambient color blend */}
      <div className={`absolute top-1/3 left-10 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />
      <div className={`absolute bottom-10 right-10 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-semibold">
              Proof & Verified Outcomes
            </span>
            <h2 className={`mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Measured in pipeline conversion, citation volume & latency reduction.
            </h2>
          </div>

          {/* Segmented Filter Control */}
          <div className={`inline-flex items-center rounded-xl p-1 border transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-900/90 text-neutral-300' : 'border-slate-300 bg-slate-100 text-slate-700'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? isDark
                      ? 'bg-neutral-800 text-white shadow-xs'
                      : 'bg-white text-slate-900 shadow-xs font-semibold'
                    : isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Case Study Grid (Spans Full Width gracefully) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveStudy(study)}
              className={`group flex flex-col justify-between overflow-hidden rounded-3xl border cursor-pointer transition-all duration-300 ${
                isDark
                  ? 'border-neutral-800 bg-neutral-950/80 hover:border-cyan-500/50 hover:shadow-2xl'
                  : 'border-slate-200 bg-white hover:border-[#009fe3] shadow-md hover:shadow-xl'
              }`}
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Top category label */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                      {study.category}
                    </span>
                  </div>

                  {/* Primary Outcome Metric Highlight */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {study.metric}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Content description */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className={`font-display text-xl font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {study.client}
                    </h3>
                    <span className="font-mono text-xs text-neutral-400">
                      {study.timeline}
                    </span>
                  </div>

                  <p className={`mt-2 font-medium text-sm transition-colors ${
                    isDark ? 'text-neutral-300' : 'text-slate-700'
                  }`}>
                    {study.title}
                  </p>

                  <p className={`mt-2 text-xs leading-relaxed transition-colors ${
                    isDark ? 'text-neutral-400' : 'text-slate-600'
                  }`}>
                    {study.summary}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.stack.map((t, i) => (
                      <span
                        key={i}
                        className={`rounded px-2 py-0.5 text-[10px] font-mono transition-colors ${
                          isDark ? 'bg-neutral-900 text-neutral-300 border border-neutral-800' : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer button */}
              <div className={`p-6 sm:p-7 pt-0 border-t mt-4 flex items-center justify-between transition-colors ${
                isDark ? 'border-neutral-900' : 'border-slate-100'
              }`}>
                <span className={`text-xs font-mono transition-colors ${
                  isDark ? 'text-neutral-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'
                }`}>
                  Read Architecture Case Study
                </span>
                <span className="h-8 w-8 rounded-full bg-[#FF5E14]/15 text-[#FF5E14] flex items-center justify-center group-hover:bg-[#FF5E14] group-hover:text-white transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl transition-colors ${
            isDark ? 'border-neutral-800 bg-[#071520] text-neutral-200' : 'border-slate-200 bg-white text-slate-800'
          }`}>
            <button
              onClick={() => setActiveStudy(null)}
              className={`absolute top-6 right-6 p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#009fe3] font-semibold">
              <span>{activeStudy.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activeStudy.client}</span>
            </div>

            <h3 className={`mt-2 font-display text-2xl sm:text-3xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {activeStudy.title}
            </h3>

            <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
              <img
                src={activeStudy.imageUrl}
                alt={activeStudy.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className={`rounded-xl p-3 border transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="text-[11px] font-mono text-neutral-400">Primary Impact</div>
                <div className="mt-1 font-mono text-xl font-bold text-[#FF5E14]">
                  {activeStudy.metric}
                </div>
                <div className="text-[10px] text-neutral-400">{activeStudy.metricLabel}</div>
              </div>

              <div className={`rounded-xl p-3 border transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="text-[11px] font-mono text-neutral-400">TTFB Delivery</div>
                <div className="mt-1 font-mono text-xl font-bold text-[#009fe3]">240ms</div>
                <div className="text-[10px] text-neutral-400">Global Edge Cache</div>
              </div>

              <div className={`rounded-xl p-3 border transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="text-[11px] font-mono text-neutral-400">Timeline</div>
                <div className={`mt-1 font-mono text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeStudy.timeline}</div>
                <div className="text-[10px] text-neutral-400">Production Sprint</div>
              </div>

              <div className={`rounded-xl p-3 border transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className="text-[11px] font-mono text-neutral-400">Code Architecture</div>
                <div className="mt-1 font-mono text-xl font-bold text-emerald-400">100/100</div>
                <div className="text-[10px] text-neutral-400">Core Web Vitals</div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase text-[#009fe3] font-semibold">The Challenge</h4>
                <p className={`mt-1 transition-colors ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>{activeStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-[#FF5E14] font-semibold">The Engineered Solution</h4>
                <p className={`mt-1 transition-colors ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>{activeStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-emerald-400 font-semibold">Measurable Results</h4>
                <p className={`mt-1 transition-colors ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>{activeStudy.results}</p>
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark ? 'border-neutral-800' : 'border-slate-200'
            }`}>
              <div className="text-xs font-mono text-neutral-400">
                Interested in similar outcomes for your brand?
              </div>

              <button
                onClick={() => {
                  setActiveStudy(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] px-6 py-3 text-xs font-semibold text-white hover:bg-[#e0520f] transition-all"
              >
                <span>Request Custom Blueprint</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

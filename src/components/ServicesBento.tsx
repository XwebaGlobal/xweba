import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, X, Sparkles, Cpu, Layers, TrendingUp } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServicesBentoProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const { isDark } = useTheme();

  return (
    <section id="capabilities" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-[#f8fafc]'
    }`}>
      {/* Dynamic ambient color blend */}
      <div className={`absolute top-1/4 right-10 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />
      <div className={`absolute bottom-10 left-10 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#009fe3] font-semibold">
              Capabilities Architecture
            </span>
            <h2 className={`mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineered for conversion velocity, visual pedigree & AI citability.
            </h2>
          </div>

          <p className={`text-sm max-w-md transition-colors ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            Every deliverable adheres to our strict engineering standards: zero telemetry bloat, deterministic latency budgets, and structured semantic entity triples.
          </p>
        </div>

        {/* Full-width 4-column Bento Deck */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-8">
          {SERVICES.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                  isDark
                    ? 'border-neutral-800/90 bg-neutral-950/80 hover:border-cyan-500/50 hover:bg-neutral-900/60 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-[#009fe3] hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top metadata kicker */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-neutral-400">
                      0{idx + 1}
                    </span>

                    {service.badge && (
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                        idx === 0
                          ? 'bg-[#009fe3]/15 text-[#009fe3] border border-[#009fe3]/30'
                          : 'bg-[#FF5E14]/15 text-[#FF5E14] border border-[#FF5E14]/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className={`mt-5 font-display text-xl font-bold tracking-tight transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                    isDark ? 'text-neutral-300' : 'text-slate-600'
                  }`}>
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className={`mt-6 space-y-2 text-xs border-t pt-5 transition-colors ${
                    isDark ? 'border-neutral-850 text-neutral-300' : 'border-slate-100 text-slate-700'
                  }`}>
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className={`mt-8 pt-5 border-t flex items-center justify-between gap-3 ${
                  isDark ? 'border-neutral-850' : 'border-slate-100'
                }`}>
                  <button
                    onClick={() => setActiveModalService(service)}
                    className={`text-xs font-mono transition-colors flex items-center gap-1 ${
                      isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <span>Inspect Specs</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF5E14] text-white shadow-sm transition-all hover:bg-[#e0520f] active:scale-95"
                    aria-label={`Initiate ${service.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Inspector Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-10 shadow-2xl transition-colors ${
            isDark ? 'border-neutral-800 bg-[#071520] text-neutral-200' : 'border-slate-200 bg-white text-slate-800'
          }`}>
            <button
              onClick={() => setActiveModalService(null)}
              className={`absolute top-6 right-6 p-2 rounded-lg transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-wider text-[#009fe3] font-semibold">
              Capability Specification
            </span>
            <h3 className={`mt-2 font-display text-2xl sm:text-3xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {activeModalService.title}
            </h3>
            
            <p className={`mt-4 text-sm leading-relaxed transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-600'
            }`}>
              {activeModalService.fullDesc || activeModalService.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] mb-3 font-semibold">
                Included Deliverables & Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {(activeModalService.features || activeModalService.deliverables || []).map((feat: string, i: number) => (
                  <div key={i} className={`flex items-start gap-2 rounded-xl p-3 border transition-colors ${
                    isDark ? 'border-neutral-800 bg-neutral-950/70 text-neutral-300' : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}>
                    <CheckCircle2 className="h-4 w-4 text-[#009fe3] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark ? 'border-neutral-800' : 'border-slate-200'
            }`}>
              <div className="text-xs font-mono text-neutral-400">
                Turnaround: 3–5 Weeks · Zero Lock-In Codebase
              </div>

              <button
                onClick={() => {
                  const service = activeModalService;
                  setActiveModalService(null);
                  onSelectService(service);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] px-6 py-3 text-xs font-semibold text-white hover:bg-[#e0520f] transition-all"
              >
                <span>Select for Discovery Brief</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

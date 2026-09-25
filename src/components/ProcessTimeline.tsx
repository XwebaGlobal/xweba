import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronDown, Clock, ShieldCheck, Zap } from 'lucide-react';
import { METHODOLOGY_STEPS, FAQS } from '../data/content';
import { useTheme } from '../context/ThemeContext';

export const ProcessTimeline: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { isDark } = useTheme();

  return (
    <section id="process" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-white'
    }`}>
      {/* Ambient color blend */}
      <div className={`absolute top-1/3 right-10 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#009fe3] font-semibold">
              Engineering Delivery Cadence
            </span>
            <h2 className={`mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              From architectural blueprint to production launch in 4 focused weeks.
            </h2>
          </div>

          <p className={`text-sm max-w-md transition-colors ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            We run high-velocity, asynchronous development sprints. You receive live staging previews each Friday with explicit deliverables and zero hand-waving.
          </p>
        </div>

        {/* 4-Week Sprint Step Grid (Expands Full Width across 4 columns) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-8">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div
              key={step.phase}
              className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                isDark
                  ? 'border-neutral-800 bg-neutral-950/80 hover:border-cyan-500/40 shadow-xl'
                  : 'border-slate-200 bg-slate-50/70 hover:border-[#009fe3] shadow-md hover:shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF5E14]">
                    {step.phase}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {step.duration}
                  </span>
                </div>

                <h3 className={`mt-4 font-display text-xl font-bold transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>

                <p className={`mt-2 text-xs sm:text-sm leading-relaxed transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-slate-600'
                }`}>
                  {step.description}
                </p>

                <div className={`mt-6 space-y-2 text-xs border-t pt-4 transition-colors ${
                  isDark ? 'border-neutral-850 text-neutral-300' : 'border-slate-200 text-slate-700'
                }`}>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t text-[11px] font-mono transition-colors ${
                isDark ? 'border-neutral-850 text-neutral-500' : 'border-slate-200 text-slate-400'
              }`}>
                Milestone: Staging Sign-Off
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion Grid (Expands Full Width across 2 columns) */}
        <div className="mt-20 pt-16 border-t border-neutral-800">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-semibold">
              Transparent Details
            </span>
            <h3 className={`mt-2 font-display text-2xl sm:text-3xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Frequently asked architectural questions.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-6">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isDark
                      ? 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                      : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#009fe3] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={`px-5 sm:px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 transition-colors ${
                      isDark ? 'border-neutral-850 text-neutral-300' : 'border-slate-200 text-slate-600'
                    }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PROCESS_STEPS, AGENCY_STATS, FAQS } from '../data/content';
import { CheckCircle2, ChevronDown } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="process" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#0c0d0e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            <span>Execution Protocol</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#ff3b00]">The 4–6 Week Sprint</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Rigorous engineering. Zero endless redesign cycles.
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            We structure our engagements into clear, accountable sprints. You review functional software and production Figma tokens, not vague moodboards.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
                  <span className="font-mono text-xs font-bold text-[#ff3b00]">
                    {step.number}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-white leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Stats */}
        <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-950 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-850">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="font-display text-3xl sm:text-5xl font-bold text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-semibold text-neutral-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-[11px] text-neutral-500 font-mono">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Transparent Answers
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-neutral-200"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-900 pt-3">
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

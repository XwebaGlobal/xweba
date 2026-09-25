import React, { useState } from 'react';
import { Search, Bot, AlertTriangle, CheckCircle, ArrowRight, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface GeoAuditorProps {
  onRemediate: (domain: string) => void;
}

export const GeoAuditor: React.FC<GeoAuditorProps> = ({ onRemediate }) => {
  const [domain, setDomain] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [activeTab, setActiveTab] = useState<'chatgpt' | 'perplexity'>('chatgpt');
  const { isDark } = useTheme();

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setIsAuditing(true);
    setHasResult(false);

    setTimeout(() => {
      setIsAuditing(false);
      setHasResult(true);
    }, 1200);
  };

  const cleanDomain = domain ? domain.replace(/https?:\/\//, '').replace(/\/$/, '') : 'yourcompany.com';

  return (
    <section id="geo-audit" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-slate-50/70'
    }`}>
      {/* Ambient color blend */}
      <div className={`absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/12' : 'bg-[#009fe3]/08'
      }`} />
      <div className={`absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#009fe3] mb-2 font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Diagnostic</span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
              <span className="text-[#FF5E14]">Generative Engine Optimization</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Can ChatGPT & Perplexity cite your brand when buyers ask for solutions?
            </h2>
          </div>

          <p className={`text-sm max-w-md transition-colors ${
            isDark ? 'text-neutral-400' : 'text-slate-600'
          }`}>
            Traditional SEO only ranks you on Google. GEO (Generative Engine Optimization) ensures large language models extract and recommend your brand in AI search answers.
          </p>
        </div>

        {/* Auditor Interactive Shell (Expands Full Width) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Domain Input & Diagnostic Summary */}
          <div className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/90 shadow-xl' : 'border-slate-200 bg-white shadow-md'
          }`}>
            <h3 className={`font-display text-xl font-bold transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Simulate AI Citability
            </h3>
            <p className={`mt-2 text-xs sm:text-sm leading-relaxed transition-colors ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}>
              Test how modern retrieval-augmented generation (RAG) pipelines parse your website's entity triples and Schema markup.
            </p>

            <form onSubmit={handleRunAudit} className="mt-6 space-y-3">
              <label htmlFor="geo-domain-input" className={`block text-xs font-mono ${
                isDark ? 'text-neutral-300' : 'text-slate-700 font-semibold'
              }`}>
                Enter Your Web Domain:
              </label>

              <div className="relative">
                <input
                  id="geo-domain-input"
                  type="text"
                  placeholder="e.g. acme-payments.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-[#009fe3] ${
                    isDark
                      ? 'border-neutral-700 bg-neutral-900 text-white placeholder-neutral-500'
                      : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isAuditing || !domain.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#e0520f] disabled:opacity-50 active:scale-98"
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Analyzing AI Vector Knowledge Graph...</span>
                  </>
                ) : (
                  <>
                    <Bot className="h-4 w-4" />
                    <span>Run AI Citability Diagnostic</span>
                  </>
                )}
              </button>
            </form>

            <div className={`mt-6 border-t pt-5 space-y-3 text-xs transition-colors ${
              isDark ? 'border-neutral-800/80 text-neutral-400' : 'border-slate-100 text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#009fe3]" />
                <span>JSON-LD & RDFa Entity Graph Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#009fe3]" />
                <span>Information Gain & Citation Probability Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#009fe3]" />
                <span>LLM Retrieval-Augmented Generation (RAG) Index</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Output Simulation Terminal */}
          <div className={`lg:col-span-7 rounded-3xl border overflow-hidden transition-colors ${
            isDark ? 'border-neutral-800 bg-neutral-950/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'
          }`}>
            
            {/* Terminal Top Window Bar */}
            <div className={`flex items-center justify-between border-b px-6 py-4 transition-colors ${
              isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-slate-100'
            }`}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-400">
                  ai-query-simulator.sh
                </span>
              </div>

              {/* Model Switcher Tabs */}
              <div className={`inline-flex rounded-lg p-0.5 border text-xs font-mono transition-colors ${
                isDark ? 'border-neutral-800 bg-neutral-900 text-neutral-400' : 'border-slate-300 bg-white text-slate-600'
              }`}>
                <button
                  type="button"
                  onClick={() => setActiveTab('chatgpt')}
                  className={`rounded px-2.5 py-1 transition-all ${
                    activeTab === 'chatgpt'
                      ? isDark ? 'bg-neutral-800 text-white' : 'bg-slate-200 text-slate-900 font-semibold'
                      : ''
                  }`}
                >
                  ChatGPT 4o
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('perplexity')}
                  className={`rounded px-2.5 py-1 transition-all ${
                    activeTab === 'perplexity'
                      ? isDark ? 'bg-neutral-800 text-white' : 'bg-slate-200 text-slate-900 font-semibold'
                      : ''
                  }`}
                >
                  Perplexity Pro
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className={`p-6 sm:p-8 min-h-[380px] flex flex-col justify-between transition-colors ${
              isDark ? 'bg-neutral-950/60' : 'bg-slate-50/40'
            }`}>
              <div>
                <div className={`font-mono text-xs flex items-center gap-2 transition-colors ${
                  isDark ? 'text-neutral-400' : 'text-slate-500'
                }`}>
                  <span className="text-[#009fe3]">prompt:</span>
                  <span className={isDark ? 'text-neutral-300' : 'text-slate-800'}>
                    "What are the best digital platforms and providers in Kenya & East Africa?"
                  </span>
                </div>

                {hasResult ? (
                  <div className="mt-6 space-y-4 animate-in fade-in duration-300">
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-500 flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Diagnostic Finding for {cleanDomain}:</strong>
                        <p className="mt-1 opacity-90">
                          Domain has low entity co-occurrence and missing JSON-LD Organization schema. AI synthesizers are skipping your domain and citing competitors with higher information gain.
                        </p>
                      </div>
                    </div>

                    <div className={`rounded-xl border p-4 text-xs font-mono space-y-2 transition-colors ${
                      isDark ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300' : 'border-slate-200 bg-white text-slate-800'
                    }`}>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-wider">
                        Synthetic Model Output:
                      </div>
                      <p className="leading-relaxed">
                        "Top providers include Enterprise A and Platform B, recognized for high uptime and verified multi-channel APIs. <span className="underline decoration-wavy decoration-rose-500 text-rose-500 font-semibold">[{cleanDomain} was omitted due to unindexed entity triples and schema ambiguity]</span>."
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                      <div className={`rounded-xl p-3 border transition-colors ${
                        isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-slate-200 bg-white'
                      }`}>
                        <div className="text-neutral-400 text-[10px]">Citation Index</div>
                        <div className="mt-1 font-bold text-rose-500 text-lg">24%</div>
                      </div>
                      <div className={`rounded-xl p-3 border transition-colors ${
                        isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-slate-200 bg-white'
                      }`}>
                        <div className="text-neutral-400 text-[10px]">Entity Density</div>
                        <div className="mt-1 font-bold text-amber-500 text-lg">Low</div>
                      </div>
                      <div className={`rounded-xl p-3 border transition-colors ${
                        isDark ? 'border-neutral-800 bg-neutral-900/40' : 'border-slate-200 bg-white'
                      }`}>
                        <div className="text-neutral-400 text-[10px]">GEO Readiness</div>
                        <div className="mt-1 font-bold text-[#FF5E14] text-lg">Needs Fix</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-12 flex flex-col items-center justify-center text-center p-8">
                    <Bot className="h-10 w-10 text-[#009fe3]/50 animate-pulse" />
                    <span className={`mt-3 font-display text-sm font-semibold transition-colors ${
                      isDark ? 'text-neutral-300' : 'text-slate-700'
                    }`}>
                      Enter your domain on the left to simulate AI Citability.
                    </span>
                    <p className={`mt-1 text-xs max-w-sm transition-colors ${
                      isDark ? 'text-neutral-500' : 'text-slate-500'
                    }`}>
                      We'll parse your domain's structured data against ChatGPT 4o and Perplexity knowledge retrieval models.
                    </p>
                  </div>
                )}
              </div>

              {hasResult && (
                <div className={`mt-6 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
                  isDark ? 'border-neutral-850' : 'border-slate-200'
                }`}>
                  <span className="text-xs font-mono text-neutral-400">
                    XwebA GEO Remediation Package: Turn your domain into an AI source.
                  </span>
                  <button
                    onClick={() => onRemediate(cleanDomain)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF5E14] px-4 py-2 text-xs font-semibold text-white hover:bg-[#e0520f] transition-all whitespace-nowrap"
                  >
                    <span>Fix AI Citability</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

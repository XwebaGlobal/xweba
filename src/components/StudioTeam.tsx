import React from 'react';
import { DESIGNER_IMAGE, COLLABORATION_IMAGE } from '../data/content';
import { HostingerBadge } from './BrandLogos';
import { Sparkles, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface StudioTeamProps {
  onOpenConsultation: () => void;
}

export const StudioTeam: React.FC<StudioTeamProps> = ({ onOpenConsultation }) => {
  const { isDark } = useTheme();

  return (
    <section id="studio-team" className={`relative w-full py-20 lg:py-28 border-b transition-colors ${
      isDark ? 'border-neutral-800 bg-[#071520]' : 'border-slate-200 bg-slate-50/60'
    }`}>
      {/* Ambient gradient color blend */}
      <div className={`absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/10' : 'bg-[#009fe3]/06'
      }`} />
      <div className={`absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/10' : 'bg-[#FF5E14]/06'
      }`} />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-12 transition-colors ${
          isDark ? 'border-neutral-800' : 'border-slate-200'
        }`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#009fe3] mb-3 font-semibold">
              <span>Studio Philosophy & Culture</span>
              <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
              <span className="text-[#FF5E14]">Strategy · Design · Growth</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Human craftsmanship behind every machine-optimized platform.
            </h2>
            <p className={`mt-4 text-base leading-relaxed transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-600'
            }`}>
              We are a collective of product designers, full-stack engineers, and AI search researchers working directly from our Nairobi studio. No outsourcing, no generic templates.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className={`p-3 rounded-2xl border flex items-center gap-3 transition-colors ${
              isDark
                ? 'border-cyan-900/60 bg-[#0a1e30] shadow-sm'
                : 'border-slate-200 bg-white shadow-md'
            }`}>
              <HostingerBadge />
              <div className="text-left text-xs">
                <div className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Certified Cloud Architecture</div>
                <a
                  href="https://www.hostinger.com?REFERRALCODE=1JOHN0542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#009fe3] hover:underline flex items-center gap-1 font-mono"
                  title="Claim 20% Hostinger Client Discount"
                >
                  <span>20% client discount on edge hosting</span>
                  <ArrowRight className="h-3 w-3 inline transition-transform hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Feature Visual Cards with Uploaded Images (Expanded Full Width) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 items-stretch">
          
          {/* Card 1: UI/UX & Brand Design Studio */}
          <div className={`rounded-3xl border p-6 sm:p-10 flex flex-col justify-between group transition-all duration-300 ${
            isDark
              ? 'border-neutral-800 bg-neutral-950/80 hover:border-cyan-500/50 shadow-xl'
              : 'border-slate-200 bg-white hover:border-[#009fe3] shadow-md hover:shadow-xl'
          }`}>
            <div>
              {/* Image Frame */}
              <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border ${
                isDark ? 'border-neutral-800 bg-neutral-900' : 'border-slate-100 bg-slate-100'
              }`}>
                <img
                  src={DESIGNER_IMAGE}
                  alt="XwebA designer creating bespoke visual systems in Nairobi studio"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30">
                  Design Studio · UI/UX & Visual Identity
                </div>
              </div>

              {/* Text */}
              <div className="mt-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#009fe3] font-semibold">
                  <Palette className="h-3.5 w-3.5" />
                  <span>Design That Gets Remembered</span>
                </div>
                <h3 className={`mt-2 font-display text-2xl font-bold transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Tactile, high-legibility visual systems with zero template clutter.
                </h3>
                <p className={`mt-3 text-sm leading-relaxed transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-slate-600'
                }`}>
                  Every button, curve, and typography pairing is custom designed for your brand. We avoid AI-generated generic slop in favor of human intentionality, refined color harmony, and memorable tactile web interactions.
                </p>
              </div>

              <div className={`mt-6 space-y-2.5 text-xs border-t pt-5 transition-colors ${
                isDark ? 'border-neutral-900 text-neutral-300' : 'border-slate-100 text-slate-700'
              }`}>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3]" />
                  <span>Design tokens mapped to production code</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#009fe3]" />
                  <span>Mobile-first touch targets & responsive breakpoints</span>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-5 border-t ${isDark ? 'border-neutral-850' : 'border-slate-100'}`}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                  isDark ? 'text-white hover:text-cyan-400' : 'text-slate-900 hover:text-[#009fe3]'
                }`}
              >
                <span>Discuss Design & Brand Strategy</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Strategy & AI Engineering Studio */}
          <div className={`rounded-3xl border p-6 sm:p-10 flex flex-col justify-between group transition-all duration-300 ${
            isDark
              ? 'border-neutral-800 bg-neutral-950/80 hover:border-orange-500/50 shadow-xl'
              : 'border-slate-200 bg-white hover:border-[#FF5E14] shadow-md hover:shadow-xl'
          }`}>
            <div>
              {/* Image Frame */}
              <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border ${
                isDark ? 'border-neutral-800 bg-neutral-900' : 'border-slate-100 bg-slate-100'
              }`}>
                <img
                  src={COLLABORATION_IMAGE}
                  alt="XwebA strategists collaborating on Generative Engine Optimization in studio"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-[#FF5E14] bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-orange-500/30">
                  Engineering Lab · GEO & AI Marketing
                </div>
              </div>

              {/* Text */}
              <div className="mt-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF5E14] font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Authority For Artificial Intelligence</span>
                </div>
                <h3 className={`mt-2 font-display text-2xl font-bold transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Positioning your business to be quoted and recommended by LLMs.
                </h3>
                <p className={`mt-3 text-sm leading-relaxed transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-slate-600'
                }`}>
                  We reverse-engineer how ChatGPT, Perplexity, and Gemini ingest web documents. By generating structured JSON-LD entity triples and high Information Gain content, your brand becomes the authoritative answer for buyers.
                </p>
              </div>

              <div className={`mt-6 space-y-2.5 text-xs border-t pt-5 transition-colors ${
                isDark ? 'border-neutral-900 text-neutral-300' : 'border-slate-100 text-slate-700'
              }`}>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E14]" />
                  <span>Direct citation tracking across major AI models</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E14]" />
                  <span>Sub-second edge delivery certified with Hostinger Cloud</span>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-5 border-t ${isDark ? 'border-neutral-850' : 'border-slate-100'}`}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className={`inline-flex items-center gap-2 text-xs font-semibold transition-colors ${
                  isDark ? 'text-white hover:text-[#FF5E14]' : 'text-slate-900 hover:text-[#FF5E14]'
                }`}
              >
                <span>Request Generative AI Audit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars: Strategy. Design. Growth. (Full Width Triad) */}
        <div className={`mt-14 rounded-3xl border p-8 sm:p-12 transition-all ${
          isDark
            ? 'border-neutral-800 bg-neutral-950/90 shadow-xl'
            : 'border-slate-200 bg-white shadow-md'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800 dark:divide-neutral-800/80 light:divide-slate-200">
            
            {/* Pillar 1: Strategy */}
            <div className="pt-6 md:pt-0 md:pr-8">
              <span className="font-mono text-xs font-bold text-[#009fe3]">01. STRATEGY</span>
              <h4 className={`mt-2 font-display text-xl font-bold transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Entity Architecture & Market Discovery
              </h4>
              <p className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-400' : 'text-slate-600'
              }`}>
                We analyze your competitors’ knowledge graph blindspots to identify high-intent buyer queries where your brand can establish immediate categorical authority.
              </p>
            </div>

            {/* Pillar 2: Design */}
            <div className="pt-6 md:pt-0 md:px-8">
              <span className="font-mono text-xs font-bold text-[#FF5E14]">02. DESIGN</span>
              <h4 className={`mt-2 font-display text-xl font-bold transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Bespoke Systems & Conversion Psychology
              </h4>
              <p className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-400' : 'text-slate-600'
              }`}>
                Zero off-the-shelf theme drag. We engineer fluid, accessible design languages tailored to communicate trust, prestige, and effortless user momentum.
              </p>
            </div>

            {/* Pillar 3: Growth */}
            <div className="pt-6 md:pt-0 md:pl-8">
              <span className="font-mono text-xs font-bold text-emerald-500">03. GROWTH</span>
              <h4 className={`mt-2 font-display text-xl font-bold transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                GEO Citations & Edge Speed Optimization
              </h4>
              <p className={`mt-3 text-xs sm:text-sm leading-relaxed transition-colors ${
                isDark ? 'text-neutral-400' : 'text-slate-600'
              }`}>
                Deploying on distributed edge networks with verified 99+ Core Web Vitals to turn passive traffic into qualified, inbound enterprise conversations.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

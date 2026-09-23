import React from 'react';
import { DESIGNER_IMAGE, COLLABORATION_IMAGE } from '../data/content';
import { HostingerBadge } from './BrandLogos';
import { Sparkles, Palette, Zap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface StudioTeamProps {
  onOpenConsultation: () => void;
}

export const StudioTeam: React.FC<StudioTeamProps> = ({ onOpenConsultation }) => {
  return (
    <section id="studio-team" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#071520]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#009fe3] mb-3">
              <span>Studio Philosophy & Culture</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#FF5E14]">Strategy · Design · Growth</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Human craftsmanship behind every machine-optimized platform.
            </h2>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              We are a collective of product designers, full-stack engineers, and AI search researchers working directly from our Nairobi studio. No outsourcing, no generic templates.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="p-3 rounded-xl border border-cyan-900/60 bg-[#0a1e30] flex items-center gap-3">
              <HostingerBadge />
              <div className="text-left text-xs">
                <div className="text-white font-medium">Certified Cloud Architecture</div>
                <div className="text-neutral-400 text-[11px]">20% client discount on edge hosting</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Feature Visual Cards with Uploaded Images */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: UI/UX & Brand Design Studio */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/40 transition-colors">
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                <img
                  src={DESIGNER_IMAGE}
                  alt="XwebA designer creating bespoke visual systems in Nairobi studio"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-500/20">
                  Design Studio · UI/UX & Visual Identity
                </div>
              </div>

              {/* Text */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#009fe3]">
                  <Palette className="h-3.5 w-3.5" />
                  <span>Design That Gets Remembered</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Tactile, high-legibility visual systems with zero template clutter.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Every button, curve, and typography pairing is custom designed for your brand. We avoid AI-generated generic slop in favor of human intentionality, refined color harmony, and memorable tactile web interactions.
                </p>
              </div>

              <div className="mt-6 space-y-2 text-xs text-neutral-300 border-t border-neutral-900 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3]" />
                  <span>Design tokens mapped to production code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009fe3]" />
                  <span>Mobile-first touch targets & responsive breakpoints</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-850">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                <span>Discuss Design & Brand Strategy</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Strategy & AI Engineering Studio */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 sm:p-8 flex flex-col justify-between group hover:border-orange-500/40 transition-colors">
            <div>
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                <img
                  src={COLLABORATION_IMAGE}
                  alt="XwebA strategists collaborating on Generative Engine Optimization in studio"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono text-[#FF5E14] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-orange-500/20">
                  Engineering Lab · GEO & AI Marketing
                </div>
              </div>

              {/* Text */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF5E14]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Authority For Artificial Intelligence</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  Positioning your business to be quoted and recommended by LLMs.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  We reverse-engineer how ChatGPT, Perplexity, and Gemini ingest web documents. By generating structured JSON-LD entity triples and high Information Gain content, your brand becomes the authoritative answer for buyers.
                </p>
              </div>

              <div className="mt-6 space-y-2 text-xs text-neutral-300 border-t border-neutral-900 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5E14]" />
                  <span>Direct citation tracking across major AI models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5E14]" />
                  <span>Sub-second edge delivery certified with Hostinger Cloud</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-850">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#FF5E14] transition-colors"
              >
                <span>Request Generative AI Audit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars: Strategy. Design. Growth. */}
        <div className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-950 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-850">
            
            {/* Pillar 1: Strategy */}
            <div className="pt-6 md:pt-0 md:pr-6">
              <span className="font-mono text-xs font-bold text-[#009fe3]">01. STRATEGY</span>
              <h4 className="mt-2 font-display text-lg font-bold text-white">
                Entity Architecture & Market Discovery
              </h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                We analyze your competitors’ knowledge graph blindspots to identify high-intent buyer queries where your brand can establish immediate categorical authority.
              </p>
            </div>

            {/* Pillar 2: Design */}
            <div className="pt-6 md:pt-0 md:px-6">
              <span className="font-mono text-xs font-bold text-[#FF5E14]">02. DESIGN</span>
              <h4 className="mt-2 font-display text-lg font-bold text-white">
                Bespoke Systems & Conversion Psychology
              </h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Zero off-the-shelf theme drag. We engineer fluid, accessible design languages tailored to communicate trust, prestige, and effortless user momentum.
              </p>
            </div>

            {/* Pillar 3: Growth */}
            <div className="pt-6 md:pt-0 md:pl-6">
              <span className="font-mono text-xs font-bold text-emerald-400">03. GROWTH</span>
              <h4 className="mt-2 font-display text-lg font-bold text-white">
                GEO Citations & Edge Speed Optimization
              </h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Deploying on distributed edge networks with verified 99+ Core Web Vitals to turn passive traffic into qualified, inbound enterprise conversations.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

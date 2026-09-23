import React, { useState } from 'react';
import { ArrowRight, Bot, PhoneCall, Sparkles, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { TEAM_HERO_IMAGE } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
  onScrollToGeoAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
  onScrollToGeoAudit
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b border-neutral-800/80 bg-gradient-to-b from-[#071520] via-[#091b29] to-[#071520]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#009fe3]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -z-10 h-80 w-80 rounded-full bg-[#FF5E14]/8 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top quiet editorial kicker (Unboxed metadata, NO PILLS) */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-mono mb-6">
          <span className="text-[#009fe3] font-semibold">XwebA Digital Growth</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Nairobi, Kenya</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Global Delivery</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-[#FF5E14]">AI-First Indexing</span>
        </div>

        {/* 2-Column Split Hero Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Brand Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Building Brands for Humans. Engineering Authority for AI in Kenya & Globally.
            </h1>
            
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              XwebA is a full-service digital growth agency based in Nairobi. We design websites that convert, build brands that get remembered, and optimise your business to be cited by AI tools like ChatGPT, Gemini, and Perplexity — not just ranked on Google.
            </p>

            {/* CTAs matching the original site with modernized minimalist styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToGeoAudit}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition-all hover:bg-[#e0520f] active:scale-98 whitespace-nowrap"
              >
                <Bot className="h-4 w-4" />
                <span>Get AI See Your Website</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/70 px-6 py-3.5 text-sm font-medium text-neutral-200 transition-colors hover:border-[#009fe3] hover:text-white whitespace-nowrap"
              >
                <PhoneCall className="h-4 w-4 text-[#009fe3]" />
                <span>Book a Discovery Call</span>
              </button>
            </div>

            {/* Quiet editorial trust indicators */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400 font-normal">
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-[#009fe3]" />
                <span>Sub-800ms Edge TTFB</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5E14]" />
                <span>Generative AI (GEO) Citations</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Hostinger Certified Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic XwebA Team Portrait */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-900/40 bg-neutral-950 shadow-2xl group">
              {!imageError ? (
                <img
                  src={TEAM_HERO_IMAGE}
                  alt="XwebA full team in Nairobi, Kenya wearing branded shirts"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover aspect-[4/3] sm:aspect-[16/10] brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-102"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-br from-[#071624] to-[#0e273d] p-8 text-center">
                  <span className="font-display text-2xl font-semibold text-neutral-200">
                    The XwebA Engineering & Design Team
                  </span>
                  <p className="mt-2 text-xs text-neutral-400 max-w-sm">
                    Based in Nairobi, Kenya, deploying high-conversion web platforms and generative search architecture worldwide.
                  </p>
                </div>
              )}

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071520] via-transparent to-transparent opacity-80" />

              {/* Bottom card details */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-cyan-500/30 px-3.5 py-1.5 rounded-lg text-white font-mono text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>The XwebA Squad · Nairobi Studio</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300 font-mono text-[11px]">
                  <MapPin className="h-3 w-3 text-[#FF5E14]" />
                  <span>Nextgen Mall, Nairobi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

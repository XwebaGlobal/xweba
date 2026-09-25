import React, { useState } from 'react';
import { ArrowRight, Bot, PhoneCall, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';
import { useTheme } from '../context/ThemeContext';

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
  const { isDark } = useTheme();

  return (
    <section className={`relative w-full overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b transition-colors ${
      isDark
        ? 'border-neutral-800/80 bg-gradient-to-b from-[#071520] via-[#091e30] to-[#071520]'
        : 'border-slate-200/80 bg-gradient-to-b from-[#f8fafc] via-[#f0f7ff] to-[#f8fafc]'
    }`}>
      {/* Dynamic Color Blend Mesh Accents */}
      <div className={`absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#009fe3]/15' : 'bg-[#009fe3]/10'
      }`} />
      <div className={`absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#FF5E14]/12' : 'bg-[#FF5E14]/10'
      }`} />
      <div className={`absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full blur-3xl pointer-events-none transition-opacity ${
        isDark ? 'bg-[#673de6]/10' : 'bg-[#673de6]/06'
      }`} />

      {/* Full-width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top quiet editorial kicker (Unboxed metadata) */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-mono mb-6">
          <span className="text-[#009fe3] font-bold">XwebA Digital Growth</span>
          <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
          <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Nairobi, Kenya</span>
          <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
          <span className={isDark ? 'text-neutral-400' : 'text-slate-600'}>Global Delivery</span>
          <span aria-hidden="true" className={isDark ? 'text-neutral-600' : 'text-slate-300'}>·</span>
          <span className="text-[#FF5E14] font-semibold">AI-First Indexing</span>
        </div>

        {/* 2-Column Split Hero Layout spanning full screen width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Messaging */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] [text-wrap:balance] transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Building Brands for Humans. Engineering Authority for AI in Kenya & Globally.
            </h1>
            
            <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-2xl transition-colors ${
              isDark ? 'text-neutral-300' : 'text-slate-600'
            }`}>
              XwebA is a full-service digital growth agency based in Nairobi. We design websites that convert, build brands that get remembered, and optimise your business to be cited by AI tools like ChatGPT, Gemini, and Perplexity — not just ranked on Google.
            </p>

            {/* CTAs with modern color blending & hover feedback */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToGeoAudit}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5E14] px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-orange-950/30 transition-all hover:bg-[#e0520f] active:scale-98 whitespace-nowrap"
              >
                <Bot className="h-4 w-4" />
                <span>Get AI See Your Website</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenConsultation}
                className={`group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 sm:px-7 sm:py-4 text-sm font-medium transition-all whitespace-nowrap ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900/70 text-neutral-200 hover:border-[#009fe3] hover:text-white'
                    : 'border-slate-300 bg-white text-slate-800 shadow-xs hover:border-[#009fe3] hover:text-[#009fe3]'
                }`}
              >
                <PhoneCall className="h-4 w-4 text-[#009fe3]" />
                <span>Book a Discovery Call</span>
              </button>
            </div>

            {/* Quiet editorial trust indicators */}
            <div className={`pt-6 border-t flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-medium transition-colors ${
              isDark ? 'border-neutral-800/80 text-neutral-400' : 'border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-[#009fe3]" />
                <span>Sub-800ms Edge TTFB</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5E14]" />
                <span>Generative AI (GEO) Citations</span>
              </div>
              <a
                href="https://www.hostinger.com?REFERRALCODE=1JOHN0542"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors hover:underline underline-offset-4 ${
                  isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
                title="Hostinger Certified Partner - 20% Off"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>Hostinger Certified Partner</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Displayed As Is */}
          <div className="lg:col-span-6">
            <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 group ${
              isDark
                ? 'border-cyan-500/30 bg-neutral-950 shadow-[0_0_50px_rgba(0,159,227,0.18)]'
                : 'border-slate-200/80 bg-white shadow-2xl hover:shadow-cyan-500/10'
            }`}>
              {!imageError ? (
                <img
                  src={HERO_IMAGE}
                  alt="XwebA Team Member working at studio wearing branded company t-shirt"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover aspect-[3/2] sm:aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.01]"
                />
              ) : (
                <div className={`flex aspect-[16/10] w-full flex-col items-center justify-center p-8 text-center ${
                  isDark
                    ? 'bg-gradient-to-br from-[#071624] to-[#0e273d] text-white'
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800'
                }`}>
                  <span className="font-display text-2xl font-semibold">
                    XwebA Digital Growth
                  </span>
                  <p className="mt-2 text-xs text-neutral-400 max-w-sm">
                    High-velocity web platforms and generative search architecture engineered in Nairobi for worldwide scale.
                  </p>
                </div>
              )}

              {/* Minimalist floating status indicators */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 text-xs pointer-events-none">
                <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-lg text-white font-mono text-[11px] shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>XwebA Studio · Nairobi</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-neutral-200 font-mono text-[11px] shadow-lg">
                  <span className="text-[#FF5E14] font-semibold">100%</span>
                  <span>In-House Team</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

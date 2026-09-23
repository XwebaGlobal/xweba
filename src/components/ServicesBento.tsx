import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ArrowRight, Check, Code, Globe, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesBentoProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-engineering':
        return <Code className="h-5 w-5 text-[#ff3b00]" />;
      case 'geo-optimization':
        return <Sparkles className="h-5 w-5 text-[#ff3b00]" />;
      case 'brand-identity':
        return <Globe className="h-5 w-5 text-[#ff3b00]" />;
      case 'cro-funnels':
        return <TrendingUp className="h-5 w-5 text-[#ff3b00]" />;
      case 'ai-integrations':
        return <Cpu className="h-5 w-5 text-[#ff3b00]" />;
      default:
        return <Code className="h-5 w-5 text-[#ff3b00]" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#0c0d0e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            <span>Capabilities & Engineering Practice</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#ff3b00]">Zero Template Policy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Architecture built for speed, conversion, and machine intelligence.
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            We operate across five integrated practices to replace sluggish, generic templates with high-converting digital platforms engineered to dominate competitive search landscapes.
          </p>
        </div>

        {/* Interactive Capability Deck */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector List (Left) */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    isActive
                      ? 'border-white/20 bg-neutral-900 shadow-lg ring-1 ring-white/10'
                      : 'border-neutral-850 bg-neutral-950/40 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-500 font-semibold">
                        {service.number}
                      </span>
                      <h3 className={`font-display text-base font-semibold transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    {isActive && <div className="h-1.5 w-1.5 rounded-full bg-[#ff3b00]" />}
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed pl-7">
                    {service.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Frame (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 shadow-2xl">
              
              {/* Header inside card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                    {getServiceIcon(activeService.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Capability {activeService.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="font-display text-2xl font-bold text-[#ff3b00] tabular-nums">
                    {activeService.metricHighlight}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {activeService.metricLabel}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-sm text-neutral-300 leading-relaxed font-normal">
                {activeService.description}
              </div>

              {/* Deliverables List */}
              <div className="mt-8">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Core Engineering Deliverables
                </div>
                <div className="space-y-2.5">
                  {activeService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-neutral-200">
                      <Check className="h-4 w-4 text-[#ff3b00] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags (clean unboxed text or minimal tags) */}
              <div className="mt-8 border-t border-neutral-850 pt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Associated Stack & Protocols
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {activeService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 text-xs font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-neutral-850 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(activeService)}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-98"
                >
                  <span>Inquire About {activeService.title}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                  Sprint timeline: ~3–5 weeks
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

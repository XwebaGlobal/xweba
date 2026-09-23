import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, X, Check, Quote } from 'lucide-react';

interface WorkShowcaseProps {
  onOpenConsultation: () => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'geo' | 'brand'>('all');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = CASE_STUDIES.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#0c0d0e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              <span>Client Deployments</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#ff3b00]">Verified Business Outcomes</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Work & Verified Impact.
            </h2>
            <p className="mt-4 text-base text-neutral-300 leading-relaxed">
              Every project is measured against concrete commercial KPIs: verified lead volume, edge latency, and generative AI search market share.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            {(
              [
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Platforms' },
                { id: 'geo', label: 'GEO & AI' },
                { id: 'brand', label: 'Brand Systems' }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-white text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition-all hover:border-neutral-600 hover:bg-neutral-900/40 flex flex-col justify-between"
            >
              <div>
                {/* Visual Asset Container (4:3 ratio) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                  {!imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-900 p-6 text-center text-xs text-neutral-400">
                      <span>{project.client} Showcase</span>
                    </div>
                  )}

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category unboxed tag */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.industry}</span>
                  </div>

                  <h3 className="mt-2 font-display text-lg font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Quantified Metrics Footer */}
              <div className="mt-6 border-t border-neutral-850 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl font-bold text-[#ff3b00] tabular-nums">
                    {project.metrics[0].value}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {project.metrics[0].label}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-white group-hover:translate-x-0.5 transition-transform">
                  <span>View Case</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-700 bg-[#0e0f11] p-6 sm:p-10 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Unboxed Header Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <span>{activeModalProject.client}</span>
              <span aria-hidden="true">·</span>
              <span>{activeModalProject.industry}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#ff3b00]">{activeModalProject.categoryLabel}</span>
            </div>

            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
              {activeModalProject.title}
            </h3>

            {/* Image banner inside modal */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Metrics Triad */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-neutral-800 py-6">
              {activeModalProject.metrics.map((metric, idx) => (
                <div key={idx} className="text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#ff3b00] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-white mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Architectural Solution */}
            <div className="mt-8 space-y-6 text-sm text-neutral-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  The Problem & Legacy Constraint
                </h4>
                <p className="leading-relaxed">
                  {activeModalProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  The XwebA Architectural Solution
                </h4>
                <p className="leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Client Testimonial Quote */}
            {activeModalProject.testimonial && (
              <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
                <Quote className="h-5 w-5 text-[#ff3b00] mb-2" />
                <p className="text-sm italic text-neutral-200 leading-relaxed font-sans">
                  "{activeModalProject.testimonial.quote}"
                </p>
                <div className="mt-4 text-xs font-mono text-neutral-400">
                  <strong className="text-white font-medium">{activeModalProject.testimonial.author}</strong> — {activeModalProject.testimonial.role}, {activeModalProject.testimonial.company}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Deployed Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-mono text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenConsultation();
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff3b00] px-6 py-3 text-xs font-semibold text-white hover:bg-[#e03400] transition-colors"
              >
                <span>Request Similar Architecture for Your Brand</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

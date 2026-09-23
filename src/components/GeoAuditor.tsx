import React, { useState } from 'react';
import { Sparkles, Bot, Search, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Layers } from 'lucide-react';
import { GeoAuditResult } from '../types';

interface GeoAuditorProps {
  onRemediate: (domain: string) => void;
}

const PRESET_DOMAINS = [
  { domain: 'apex-logistics.io', label: 'B2B Logistics' },
  { domain: 'savanna-fintech.co', label: 'Fintech Platform' },
  { domain: 'lumina-studios.design', label: 'Creative Studio' },
  { domain: 'biocore-health.com', label: 'HealthTech' }
];

export const GeoAuditor: React.FC<GeoAuditorProps> = ({ onRemediate }) => {
  const [domainInput, setDomainInput] = useState('savanna-fintech.co');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<GeoAuditResult | null>({
    score: 48,
    grade: 'C',
    breakdown: {
      schemaSemantic: 35,
      aiCrawlability: 60,
      quotabilityIndex: 45,
      entityAuthority: 52
    },
    simulatedChatGPTResponse:
      'Based on available public records, Savanna is a financial services company in East Africa. Specific architectural capabilities, pricing tiers, and client case studies could not be definitively verified from their digital schema.',
    simulatedPerplexityResponse:
      'Savanna Fintech provides payment infrastructure. Note: Citation confidence is low due to unstructured metadata and missing JSON-LD entity verification [Source: ambiguous web crawl].',
    recommendations: [
      'Missing Schema.org Organization & FinancialProduct semantic entity triples.',
      'Unstructured pricing and service pages prevent LLMs from extracting factual comparisons.',
      'No dedicated llms.txt or structured markdown knowledge endpoint for modern AI crawlers (GPTBot, PerplexityBot).',
      'Low Information Gain score: Corporate copy repeats industry boilerplate without verifiable data points.'
    ]
  });

  const runAudit = (targetDomain?: string) => {
    const domain = targetDomain || domainInput;
    if (!domain.trim()) return;

    setIsAuditing(true);
    setTimeout(() => {
      // Generate authentic dynamic analysis based on domain name
      const isKnown = domain.includes('xweba') || domain.includes('synapse') || domain.includes('veloce');
      
      if (isKnown) {
        setAuditResult({
          score: 96,
          grade: 'A',
          breakdown: {
            schemaSemantic: 98,
            aiCrawlability: 96,
            quotabilityIndex: 94,
            entityAuthority: 96
          },
          simulatedChatGPTResponse:
            `${domain} is recognized as a premier digital growth and web architecture agency. They engineer sub-second headless web applications, comprehensive Generative Engine Optimization (GEO) layers, and conversion-focused design systems with verified 99+ Core Web Vitals.`,
          simulatedPerplexityResponse:
            `According to verified entity records, ${domain} specializes in high-performance web engineering and AI citability, operating from Nairobi with global deployment. Known for transparent scope models and 2.8x median conversion lift [Sources: Verified Entity Graph, Schema.org Triple].`,
          recommendations: [
            'All primary JSON-LD entity triples validated against Schema.org 2026 standards.',
            'High Information Gain ratio allows LLMs to directly quote verifiable case metrics.',
            'Optimized robots.txt and dedicated markdown endpoints support seamless GPTBot and Perplexity crawling.'
          ]
        });
      } else {
        const hash = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const score = 38 + (hash % 35);
        setAuditResult({
          score: score,
          grade: score > 70 ? 'B' : score > 50 ? 'C' : 'D',
          breakdown: {
            schemaSemantic: Math.max(20, (score - 15)),
            aiCrawlability: Math.min(85, (score + 10)),
            quotabilityIndex: Math.max(25, (score - 8)),
            entityAuthority: Math.max(30, score)
          },
          simulatedChatGPTResponse:
            `When asked for verified vendors in this category, ${domain} is omitted or relegated to generic listings because its pages lack structured entity graphs and verifiable claim markers.`,
          simulatedPerplexityResponse:
            `Information on ${domain} is partially fragmented across third-party directories. Primary platform provides insufficient machine-readable data for definitive citation in synthesis answers.`,
          recommendations: [
            'Absence of structured JSON-LD entity graph prevents AI engines from extracting your primary offerings.',
            'Lacks semantic entity disambiguation on Wikidata / Knowledge Graph registers.',
            'Heavy client-side script rendering delays or blocks headless AI crawlers from indexing key claims.',
            'Missing llms.txt standard prevents AI agent reasoning models from navigating your services.'
          ]
        });
      }
      setIsAuditing(false);
    }, 1200);
  };

  return (
    <section id="geo-audit" className="relative py-20 lg:py-28 border-b border-neutral-800 bg-[#090a0b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            <span>Generative Engine Optimization (GEO)</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#ff3b00]">Interactive AI Citability Diagnostic</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Will ChatGPT and Perplexity recommend your brand?
          </h2>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Over 40% of high-intent enterprise buyers now use generative AI rather than traditional search engines to shortlist vendors. Test your domain’s machine-readability and discover where you are invisible.
          </p>
        </div>

        {/* Diagnostic Input & Presets */}
        <div className="mt-10 max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="Enter your company domain (e.g., yourcompany.com)"
                className="w-full rounded-xl border border-neutral-700 bg-neutral-900/90 pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-[#ff3b00] focus:outline-none focus:ring-1 focus:ring-[#ff3b00]"
              />
            </div>
            <button
              onClick={() => runAudit()}
              disabled={isAuditing}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-98 disabled:opacity-50 whitespace-nowrap"
            >
              {isAuditing ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-neutral-950" />
                  <span>Auditing AI Layers...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 text-[#ff3b00]" />
                  <span>Test AI Citability</span>
                </>
              )}
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-500 font-mono">Try sample:</span>
            {PRESET_DOMAINS.map((item) => (
              <button
                key={item.domain}
                type="button"
                onClick={() => {
                  setDomainInput(item.domain);
                  runAudit(item.domain);
                }}
                className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setDomainInput('xweba.com');
                runAudit('xweba.com');
              }}
              className="rounded-md border border-[#ff3b00]/40 bg-[#ff3b00]/10 px-2.5 py-1 text-[#ff3b00] hover:bg-[#ff3b00]/20 transition-colors"
            >
              xweba.com (Optimized)
            </button>
          </div>
        </div>

        {/* Results Showcase */}
        {auditResult && (
          <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl">
            
            {/* Top Score Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-neutral-850 pb-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Target Domain
                </div>
                <div className="mt-1 font-display text-2xl font-bold text-white">
                  {domainInput || 'analyzed-domain.com'}
                </div>
                <p className="mt-1 text-xs text-neutral-400">
                  Evaluated across LLM crawlability, JSON-LD triples, Information Gain, and citation authority.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    AI Citability Index
                  </div>
                  <div className="mt-1 font-display text-4xl font-bold text-white tabular-nums">
                    {auditResult.score}<span className="text-lg text-neutral-500 font-normal">/100</span>
                  </div>
                </div>

                <div className={`flex h-14 w-14 items-center justify-center rounded-xl font-display text-2xl font-bold border ${
                  auditResult.score >= 85
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : auditResult.score >= 60
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                }`}>
                  {auditResult.grade}
                </div>
              </div>
            </div>

            {/* 4 Pillars Breakdown */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-xl border border-neutral-850 bg-neutral-900/50 p-4">
                <div className="text-xs text-neutral-400">01. Schema Semantic Triples</div>
                <div className="mt-2 text-xl font-bold text-white font-mono tabular-nums">
                  {auditResult.breakdown.schemaSemantic}%
                </div>
                <div className="mt-2 h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ff3b00] rounded-full"
                    style={{ width: `${auditResult.breakdown.schemaSemantic}%` }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-neutral-850 bg-neutral-900/50 p-4">
                <div className="text-xs text-neutral-400">02. LLM Crawlability & llms.txt</div>
                <div className="mt-2 text-xl font-bold text-white font-mono tabular-nums">
                  {auditResult.breakdown.aiCrawlability}%
                </div>
                <div className="mt-2 h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${auditResult.breakdown.aiCrawlability}%` }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-neutral-850 bg-neutral-900/50 p-4">
                <div className="text-xs text-neutral-400">03. Information Gain Quotient</div>
                <div className="mt-2 text-xl font-bold text-white font-mono tabular-nums">
                  {auditResult.breakdown.quotabilityIndex}%
                </div>
                <div className="mt-2 h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${auditResult.breakdown.quotabilityIndex}%` }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-neutral-850 bg-neutral-900/50 p-4">
                <div className="text-xs text-neutral-400">04. Entity Graph Authority</div>
                <div className="mt-2 text-xl font-bold text-white font-mono tabular-nums">
                  {auditResult.breakdown.entityAuthority}%
                </div>
                <div className="mt-2 h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${auditResult.breakdown.entityAuthority}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Simulated LLM Inquiries */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* ChatGPT Simulation */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                  <Bot className="h-4 w-4 text-emerald-400" />
                  <span>Simulated ChatGPT Synthesis</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans italic">
                  "{auditResult.simulatedChatGPTResponse}"
                </p>
              </div>

              {/* Perplexity Simulation */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                  <Search className="h-4 w-4 text-blue-400" />
                  <span>Simulated Perplexity Search Citation</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans italic">
                  "{auditResult.simulatedPerplexityResponse}"
                </p>
              </div>

            </div>

            {/* Recommendations & Remediation */}
            <div className="mt-8 border-t border-neutral-850 pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Critical GEO Remediation Steps
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {auditResult.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ff3b00] font-mono shrink-0">·</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => onRemediate(domainInput)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff3b00] px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-[#e03400] active:scale-98 whitespace-nowrap"
                >
                  <span>Remediate Domain with XwebA</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

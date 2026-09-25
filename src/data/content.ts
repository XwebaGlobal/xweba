import { ServiceItem, CaseStudy } from '../types';
import heroWomanImg from '../assets/images/woman_working_hero_1790379454171.jpg';

export const HERO_IMAGE = heroWomanImg;
export const TEAM_HERO_IMAGE = '/src/assets/images/team_xweba_hero_1790172978907.jpg';
export const DESIGNER_IMAGE = '/src/assets/images/designer_xweba_studio_1790172994004.jpg';
export const COLLABORATION_IMAGE = '/src/assets/images/collaboration_xweba_pair_1790173003872.jpg';

export const HOSTINGER_REFERRAL_URL = 'https://www.hostinger.com?REFERRALCODE=1JOHN0542';

export const HOSTINGER_OFFER = {
  headline: 'Official Hostinger Partner',
  discount: 'Get 20% off high-performance cloud hosting',
  link: HOSTINGER_REFERRAL_URL,
  referralUrl: HOSTINGER_REFERRAL_URL,
  badgeText: 'HOSTINGER Partner'
};

export interface ExtendedServiceItem extends ServiceItem {
  shortDesc: string;
  fullDesc: string;
  features: string[];
  badge?: string;
}

export const SERVICES: ExtendedServiceItem[] = [
  {
    id: 'web-engineering',
    number: '01',
    title: 'High-Performance Web Engineering',
    tagline: 'Sub-second edge architecture engineered for conversions',
    shortDesc: 'Bespoke React platforms engineered for 99+ Core Web Vitals and zero template lag.',
    fullDesc: 'We develop bespoke web platforms using modern headless architectures, React, Next.js, and static edge delivery. Every page is tailored for sub-800ms global TTFB, ultra-responsive tactile micro-interactions, and conversion discipline.',
    description: 'We develop bespoke web platforms using modern headless architectures, React, Next.js, and static edge delivery. Every page is tailored for 98+ Core Web Vitals, ultra-responsive tactile micro-interactions, and conversion discipline.',
    deliverables: [
      'Custom React / Next.js web application architecture',
      'Sub-800ms global Time-To-First-Byte (TTFB)',
      'Responsive design across mobile, tablet, and widescreen desktop',
      'Accessible WCAG AA compliant code standards'
    ],
    features: [
      'Custom React / Next.js web application architecture',
      'Sub-800ms global Time-To-First-Byte (TTFB)',
      'Responsive design across mobile, tablet, and widescreen desktop',
      'Accessible WCAG AA compliant code standards'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel / Cloudflare Edge'],
    metricHighlight: '< 0.6s',
    metricLabel: 'Average page load speed',
    badge: 'Popular'
  },
  {
    id: 'geo-optimization',
    number: '02',
    title: 'Generative Engine Optimization (GEO)',
    tagline: 'Making your brand cited and recommended by AI models',
    shortDesc: 'Structure your entity knowledge graph so ChatGPT & Perplexity cite you as the authority.',
    fullDesc: 'Traditional SEO is no longer sufficient. When prospective buyers ask ChatGPT, Perplexity, Gemini, or Claude for vendor recommendations, your brand must be cited. We structure your digital entity graph, JSON-LD triples, and markdown documentation so AI systems recognize and favor you.',
    description: 'Traditional SEO is no longer sufficient. When prospective buyers ask ChatGPT, Perplexity, Gemini, or Claude for vendor recommendations, your brand must be cited.',
    deliverables: [
      'Comprehensive AI Citability Audit & Gap Analysis',
      'Deep Schema.org JSON-LD entity graph mapping',
      'LLM-friendly content restructuring & Information Gain optimization',
      'Monthly AI Engine Mention & Citation Monitoring'
    ],
    features: [
      'Comprehensive AI Citability Audit & Gap Analysis',
      'Deep Schema.org JSON-LD entity graph mapping',
      'LLM-friendly content restructuring & Information Gain optimization',
      'Monthly AI Engine Mention & Citation Monitoring'
    ],
    technologies: ['JSON-LD', 'Schema.org', 'Wikidata Entities', 'Semantic Vectors', 'Markdown APIs'],
    metricHighlight: '+240%',
    metricLabel: 'Increase in AI answer citations',
    badge: 'AI Growth'
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'Visual Identity & Brand Systems',
    tagline: 'Distinctive visual systems with editorial restraint',
    shortDesc: 'Tactile design languages, distinctive typography, and component systems.',
    fullDesc: 'We craft comprehensive visual identities that stand out in crowded digital markets. From wordmark geometry and custom typography pairings to design systems and interactive motion guidelines, we establish memorable visual authority.',
    description: 'We craft comprehensive visual identities that stand out in crowded digital markets with refined typography and visual discipline.',
    deliverables: [
      'Core brand mark, logotype, and visual emblems',
      'Typographic hierarchy and color space guidelines',
      'Figma design system and component library',
      'Motion and interaction language specifications'
    ],
    features: [
      'Core brand mark, logotype, and visual emblems',
      'Typographic hierarchy and color space guidelines',
      'Figma design system and component library',
      'Motion and interaction language specifications'
    ],
    technologies: ['Figma', 'Vector Geometry', 'Design Tokens', 'Motion Curves'],
    metricHighlight: '100%',
    metricLabel: 'Custom design language'
  },
  {
    id: 'cro-funnels',
    number: '04',
    title: 'Conversion Architecture & CRO',
    tagline: 'Transforming traffic into high-intent inbound inquiries',
    shortDesc: 'Interactive brief estimators, diagnostic tools, and frictionless customer pathways.',
    fullDesc: 'A beautiful site that fails to generate qualified business is a liability. We design logical user journeys, remove friction from value propositions, and implement high-converting interactive calculators, brief builders, and onboarding flows.',
    description: 'A beautiful site that fails to generate qualified business is a liability. We design logical user journeys and high-converting funnels.',
    deliverables: [
      'User journey mapping & friction point identification',
      'Interactive quote calculators and customized lead funnels',
      'Heatmap, click-stream, and drop-off analysis',
      'CRM integration with automated lead routing'
    ],
    features: [
      'User journey mapping & friction point identification',
      'Interactive quote calculators and customized lead funnels',
      'Heatmap, click-stream, and drop-off analysis',
      'CRM integration with automated lead routing'
    ],
    technologies: ['PostHog', 'Mixpanel', 'HubSpot', 'Interactive State Machines'],
    metricHighlight: '+164%',
    metricLabel: 'Median conversion lift'
  }
];

export const SERVICES_DATA = SERVICES;

export interface ExtendedCaseStudy extends CaseStudy {
  imageUrl: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  stack: string[];
  results: string;
}

export const CASE_STUDIES: ExtendedCaseStudy[] = [
  {
    id: 'veloce-capital',
    client: 'Veloce Capital',
    industry: 'Fintech & Venture Investment',
    category: 'web',
    categoryLabel: 'Web Platform & Portal',
    title: 'Re-engineering a multi-stage capital platform for institutional investors',
    summary: 'A bespoke edge-rendered web application with real-time portfolio telemetry, sub-second latency, and seamless investor inquiry funnels.',
    image: '/src/assets/images/work_fintech_showcase_1790172158575.jpg',
    imageUrl: '/src/assets/images/work_fintech_showcase_1790172158575.jpg',
    challenge: 'Veloce Capital operated on an outdated WordPress CMS that took over 4.8 seconds to load, suffered from frequent plugin conflicts, and failed to project institutional authority.',
    solution: 'Engineered a custom React application with server-rendered static generation, zero external analytics bloat, a secure investor document portal, and automated accreditation intake.',
    results: '+192% qualified investor inquiries, 0.42s global edge latency, and 99/100 Core Web Vitals score.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Sanity CMS'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Edge CDN', 'Headless CMS'],
    timeline: '4 Weeks',
    metric: '+192%',
    metricLabel: 'Investor Inquiries',
    metrics: [
      { value: '+192%', label: 'Qualified Inbound Inquiries', sublabel: 'Over 6 months post-launch' },
      { value: '0.42s', label: 'Global Edge TTFB', sublabel: 'Down from 4.8s on legacy site' },
      { value: '99/100', label: 'Lighthouse Performance', sublabel: 'Verified Core Web Vitals' }
    ],
    testimonial: {
      quote: 'XwebA took our institutional presence from an obsolete brochure into a razor-sharp, lightning-fast digital asset that immediately elevated our credibility with global LPs.',
      author: 'David Mwangi',
      role: 'Managing Partner',
      company: 'Veloce Capital'
    }
  },
  {
    id: 'aura-atelier',
    client: 'Aura Atelier',
    industry: 'Architecture & Spatial Design',
    category: 'brand',
    categoryLabel: 'Identity & Editorial Web',
    title: 'Minimalist brand identity and digital portfolio for a premier luxury architectural studio',
    summary: 'Restrained typography, tactile imagery showcases, and custom editorial layout showcasing multi-million dollar residential projects.',
    image: '/src/assets/images/work_luxury_brand_1790172170494.jpg',
    imageUrl: '/src/assets/images/work_luxury_brand_1790172170494.jpg',
    challenge: 'Aura needed a digital presence that matched the tactile, understated luxury of their physical buildings without relying on generic agency templates.',
    solution: 'Crafted a bespoke visual identity featuring custom typographic scale, asymmetric editorial project grids, and an interactive spatial archive with zero visual noise.',
    results: '+280% increase in high-ticket client inquiries, with contracts averaging over $120k.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages'],
    stack: ['React', 'Design Tokens', 'Tailwind CSS', 'Framer Motion'],
    timeline: '5 Weeks',
    metric: '+280%',
    metricLabel: 'High-Ticket Inquiries',
    metrics: [
      { value: '+280%', label: 'High-Ticket Inquiries', sublabel: 'Average contract >$120k' },
      { value: '4.2 min', label: 'Average Session Dwell', sublabel: '+210% over industry benchmark' },
      { value: 'Top 5', label: 'Global Design Recognition', sublabel: 'Featured in architectural press' }
    ],
    testimonial: {
      quote: 'The level of design restraint and execution quality that XwebA brought to our brand was extraordinary. They understood how to let the architecture speak.',
      author: 'Elena Kamau',
      role: 'Principal Architect',
      company: 'Aura Atelier'
    }
  },
  {
    id: 'synapse-intelligence',
    client: 'Synapse Data Systems',
    industry: 'Enterprise AI & Data Infrastructure',
    category: 'geo',
    categoryLabel: 'GEO & Platform Engineering',
    title: 'Generative Engine Optimization (GEO) & repositioning for an enterprise AI data stack',
    summary: 'Comprehensive entity restructuring and technical documentation architecture resulting in #1 AI citations across ChatGPT and Perplexity.',
    image: '/src/assets/images/work_ai_platform_1790172182690.jpg',
    imageUrl: '/src/assets/images/work_ai_platform_1790172182690.jpg',
    challenge: 'Synapse was frequently ignored by AI search engines like Perplexity and ChatGPT when buyers asked for enterprise data integration recommendations due to poor schema markup.',
    solution: 'Designed and deployed full JSON-LD semantic triples, an open markdown knowledge base, and rewritten value propositions optimized for LLM information gain extraction.',
    results: '3.8x increase in AI citations across ChatGPT, Perplexity, and Gemini, with 64% reduction in enterprise customer acquisition cost.',
    techStack: ['Schema.org', 'JSON-LD', 'Next.js', 'Algolia DocSearch', 'Markdown API'],
    stack: ['JSON-LD', 'Schema.org', 'Next.js', 'Vector Triples'],
    timeline: '4 Weeks',
    metric: '3.8x',
    metricLabel: 'AI Model Citations',
    metrics: [
      { value: '3.8x', label: 'AI Engine Citations', sublabel: 'Perplexity, ChatGPT & Gemini' },
      { value: '+145%', label: 'Enterprise Trial Signups', sublabel: 'Directly attributed to AI search' },
      { value: '64%', label: 'Reduction in CAC', sublabel: 'Lower customer acquisition cost' }
    ],
    testimonial: {
      quote: 'Generative Engine Optimization is not a buzzword—it transformed our pipeline. XwebA positioned us as the default recommendation in generative search.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Synapse Systems'
    }
  }
];

export interface MethodologyStep {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    phase: 'Sprint 01',
    duration: 'Week 1',
    title: 'Architecture & Entity Audit',
    description: 'Comprehensive analysis of current bottlenecks, competitor positioning, and knowledge graph mapping.',
    deliverables: [
      'Technical architecture audit & latency budget',
      'Entity knowledge graph & GEO citability plan',
      'Information architecture & user flow blueprint'
    ]
  },
  {
    phase: 'Sprint 02',
    duration: 'Week 2',
    title: 'Bespoke UI/UX & Design Language',
    description: 'High-fidelity design tokens, interactive prototypes, and custom typography pairings.',
    deliverables: [
      'Custom component system & design tokens',
      'Interactive Figma prototypes with real content',
      'Responsive mobile & widescreen layout sign-off'
    ]
  },
  {
    phase: 'Sprint 03',
    duration: 'Week 3',
    title: 'Edge Development & Semantic Layer',
    description: 'Production-grade React engineering, sub-second TTFB optimization, and JSON-LD schema injection.',
    deliverables: [
      'Clean TypeScript React component implementation',
      'Full Schema.org JSON-LD entity triples',
      'Edge CDN caching & asset optimization'
    ]
  },
  {
    phase: 'Sprint 04',
    duration: 'Week 4',
    title: 'Launch, Testing & AI Monitoring',
    description: 'Stress testing, Core Web Vitals certification, DNS cutover with zero downtime, and team handoff.',
    deliverables: [
      'Core Web Vitals 98+ verified testing',
      'Live DNS cutover & SSL certification',
      'Full codebase transfer & documentation handoff'
    ]
  }
];

export const PROCESS_STEPS = METHODOLOGY_STEPS;

export const AGENCY_STATS = [
  { value: '98+', label: 'Average Lighthouse Score', context: 'Across all deployed client platforms' },
  { value: '2.8x', label: 'Median Conversion Lift', context: 'Measured within 90 days of launch' },
  { value: '< 600ms', label: 'Global TTFB Latency', context: 'Server-rendered edge distribution' },
  { value: '100%', label: 'Custom Codebases', context: 'No bloated drag-and-drop page builders' }
];

export const FAQS = [
  {
    question: 'What makes XwebA different from traditional web design agencies?',
    answer: 'Traditional agencies build static digital brochures using slow page-builder templates that load in 4+ seconds and are invisible to modern AI engines. XwebA builds high-performance, edge-rendered web platforms with bespoke typography, sub-second load times, and native Generative Engine Optimization (GEO) so your brand is discovered by both humans and AI models.'
  },
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer: 'GEO is the discipline of optimizing your digital presence so that LLMs like ChatGPT, Perplexity, Google Gemini, and Claude cite, quote, and recommend your company when users ask complex buying queries. We structure your website with semantic JSON-LD entity graphs, high Information Gain content, and machine-readable data layers.'
  },
  {
    question: 'How does the Hostinger Partner discount work?',
    answer: 'As certified Hostinger Partners, all client deployments configured with XwebA enjoy 20% off cloud edge hosting tiers, enterprise SSL certificates, global CDN points of presence, and automated zero-downtime deployments.'
  },
  {
    question: 'How long does a typical project take from start to finish?',
    answer: 'Our focused sprints typically take 4 weeks for high-conversion web architectures, and 6 to 8 weeks for complex multi-region platforms. We deliver live staging previews each week with clear milestones and zero guesswork.'
  },
  {
    question: 'Where is XwebA based and do you work with international clients?',
    answer: 'XwebA was founded in Nairobi, Kenya (Nextgen Mall, Mombasa Rd), and operates a distributed studio working with ambitious clients across Kenya, North America, the UK, Europe, and the Middle East.'
  },
  {
    question: 'How can we get in touch with the XwebA engineering team?',
    answer: 'You can schedule an architecture discovery brief directly through our portal, or reach out to our team at info@xweba.com. Our primary web presence is hosted at xweba.com.'
  }
];

export const AGENCY_CONTACT = {
  domain: 'xweba.com',
  website: 'https://xweba.com',
  email: 'info@xweba.com',
  address: 'Nextgen Mall, Mombasa Rd, Nairobi, Kenya',
  hours: 'Mon - Fri, 8:00 AM - 6:00 PM EAT'
};

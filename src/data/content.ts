import { ServiceItem, CaseStudy } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_xweba_minimalist_1790172146061.jpg';
export const TEAM_HERO_IMAGE = '/src/assets/images/team_xweba_hero_1790172978907.jpg';
export const DESIGNER_IMAGE = '/src/assets/images/designer_xweba_studio_1790172994004.jpg';
export const COLLABORATION_IMAGE = '/src/assets/images/collaboration_xweba_pair_1790173003872.jpg';

export const HOSTINGER_OFFER = {
  headline: 'Official Hostinger Partner',
  discount: 'Get 20% off high-performance cloud hosting',
  link: '#hosting-offer',
  badgeText: 'HOSTINGER Partner'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-engineering',
    number: '01',
    title: 'High-Performance Web Engineering',
    tagline: 'Sub-second edge architecture engineered for conversions',
    description: 'We develop bespoke web platforms using modern headless architectures, React, Next.js, and static edge delivery. Every page is tailored for 98+ Core Web Vitals, ultra-responsive tactile micro-interactions, and conversion discipline.',
    deliverables: [
      'Custom React / Next.js web application architecture',
      'Headless CMS integration (Sanity, Strapi, or Contentful)',
      'Sub-800ms global Time-To-First-Byte (TTFB)',
      'Responsive design across mobile, tablet, and widescreen desktop',
      'Accessible WCAG AA compliant code standards'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel / Cloudflare Edge'],
    metricHighlight: '< 0.6s',
    metricLabel: 'Average page load speed'
  },
  {
    id: 'geo-optimization',
    number: '02',
    title: 'Generative Engine Optimization (GEO)',
    tagline: 'Making your brand cited and recommended by AI models',
    description: 'Traditional SEO is no longer sufficient. When prospective buyers ask ChatGPT, Perplexity, Gemini, or Claude for vendor recommendations, your brand must be cited. We structure your digital entity graph, JSON-LD triples, and markdown documentation so AI systems recognize and favor you.',
    deliverables: [
      'Comprehensive AI Citability Audit & Gap Analysis',
      'Deep Schema.org JSON-LD entity graph mapping',
      'LLM-friendly content restructuring & Information Gain optimization',
      'Vector semantic search indexing and brand knowledge graph setup',
      'Monthly AI Engine Mention & Citation Monitoring'
    ],
    technologies: ['JSON-LD', 'Schema.org', 'Wikidata Entities', 'Semantic Vectors', 'Markdown APIs'],
    metricHighlight: '+240%',
    metricLabel: 'Increase in AI answer citations'
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'Visual Identity & Brand Architecture',
    tagline: 'Distinctive visual systems with editorial restraint',
    description: 'We craft comprehensive visual identities that stand out in crowded digital markets. From wordmark geometry and custom typography pairings to design systems and interactive motion guidelines, we establish memorable visual authority.',
    deliverables: [
      'Core brand mark, logotype, and visual emblems',
      'Typographic hierarchy and color space guidelines',
      'Figma design system and component library',
      'Marketing collateral, social kits, and pitch deck templates',
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
    description: 'A beautiful site that fails to generate qualified business is a liability. We design logical user journeys, remove friction from value propositions, and implement high-converting interactive calculators, brief builders, and onboarding flows.',
    deliverables: [
      'User journey mapping & friction point identification',
      'Interactive quote calculators and customized lead funnels',
      'Heatmap, click-stream, and drop-off analysis',
      'A/B testing infrastructure and messaging iteration',
      'CRM integration with automated lead routing'
    ],
    technologies: ['PostHog', 'Mixpanel', 'HubSpot', 'Interactive State Machines'],
    metricHighlight: '+164%',
    metricLabel: 'Median conversion lift'
  },
  {
    id: 'ai-integrations',
    number: '05',
    title: 'Intelligent Web Applications',
    tagline: 'Custom AI capabilities integrated directly into your web experience',
    description: 'Integrate conversational discovery, smart catalog search, dynamic pricing calculators, and automated knowledge assistants directly into your product without bloated third-party widgets.',
    deliverables: [
      'Domain-grounded retrieval-augmented generation (RAG)',
      'Interactive product discovery tools and smart estimators',
      'Automated client intake pipelines and webhook workflows',
      'Server-side AI processing with strict data privacy'
    ],
    technologies: ['Gemini API', 'Vector Embeddings', 'Node.js', 'Express', 'Edge Functions'],
    metricHighlight: '85%',
    metricLabel: 'Reduction in qualification time'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'veloce-capital',
    client: 'Veloce Capital',
    industry: 'Fintech & Venture Investment',
    category: 'web',
    categoryLabel: 'Web Platform & Portal',
    title: 'Re-engineering a multi-stage capital platform for institutional investors',
    summary: 'A bespoke edge-rendered web application with real-time portfolio telemetry, sub-second latency, and seamless investor inquiry funnels.',
    image: '/src/assets/images/work_fintech_showcase_1790172158575.jpg',
    challenge: 'Veloce Capital operated on an outdated WordPress CMS that took over 4.8 seconds to load, suffered from frequent plugin conflicts, and failed to project the technological sophistication demanded by institutional limited partners.',
    solution: 'Engineered a custom React application with server-rendered static generation, zero external analytics bloat, a secure investor document portal, and automated accreditation intake.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Sanity CMS'],
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
    challenge: 'Aura needed a digital presence that matched the tactile, understated luxury of their physical buildings without relying on generic agency templates.',
    solution: 'Crafted a bespoke visual identity featuring custom typographic scale, asymmetric editorial project grids, and an interactive spatial archive with zero visual noise.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages'],
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
    challenge: 'Synapse was frequently ignored by AI search engines like Perplexity and ChatGPT when buyers asked for enterprise data integration recommendations due to poor schema markup and opaque corporate copy.',
    solution: 'Designed and deployed full JSON-LD semantic triples, an open markdown knowledge base, and rewritten value propositions optimized for LLM information gain extraction.',
    techStack: ['Schema.org', 'JSON-LD', 'Next.js', 'Algolia DocSearch', 'Markdown API'],
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

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Strategic Architecture & Discovery',
    duration: 'Week 1',
    description: 'We audit your current platform, conversion bottlenecks, target customer segments, and AI discoverability footprint to define the exact technical and aesthetic blueprint.'
  },
  {
    number: '02',
    title: 'High-Fidelity Prototyping & Design Systems',
    duration: 'Week 2–3',
    description: 'We construct interactive prototypes in Figma with real typography, refined color hierarchies, and tactile interaction models. No generic placeholder lorem ipsum.'
  },
  {
    number: '03',
    title: 'Edge Engineering & Semantic GEO Layer',
    duration: 'Week 4–5',
    description: 'Clean, modular TypeScript and React development with server-side rendering, sub-second performance budgets, structured JSON-LD entity graphs, and headless CMS hooks.'
  },
  {
    number: '04',
    title: 'Deployment, Conversion Hardening & Handoff',
    duration: 'Week 6',
    description: 'Comprehensive Core Web Vitals stress testing, cross-browser validation, analytics telemetry setup, team training, and global edge deployment with zero downtime.'
  }
];

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
    question: 'How long does a typical project take from start to finish?',
    answer: 'Our focused sprints typically take 4 to 8 weeks depending on the scope. A focused brand identity and high-performance landing architecture can launch in 4 weeks, while a comprehensive enterprise web platform with custom CMS and GEO optimization typically spans 6 to 8 weeks.'
  },
  {
    question: 'Where is XwebA based and do you work with international clients?',
    answer: 'XwebA was founded in Nairobi, Kenya, and operates a distributed studio working with ambitious clients across Kenya, North America, the UK, Europe, and the Middle East. All projects are conducted with seamless asynchronous communication and weekly live sprint reviews.'
  }
];

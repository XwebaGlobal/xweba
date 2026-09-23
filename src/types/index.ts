export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  metricHighlight: string;
  metricLabel: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: 'web' | 'geo' | 'brand';
  categoryLabel: string;
  title: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface GeoAuditResult {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D';
  breakdown: {
    schemaSemantic: number;
    aiCrawlability: number;
    quotabilityIndex: number;
    entityAuthority: number;
  };
  simulatedPerplexityResponse: string;
  simulatedChatGPTResponse: string;
  recommendations: string[];
}

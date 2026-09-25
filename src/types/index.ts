export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  tagline?: string;
  shortDesc?: string;
  fullDesc?: string;
  description: string;
  deliverables: string[];
  features?: string[];
  technologies?: string[];
  metricHighlight?: string;
  metricLabel?: string;
  badge?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: string;
  categoryLabel?: string;
  title: string;
  summary: string;
  image: string;
  imageUrl?: string;
  challenge: string;
  solution: string;
  results?: string;
  timeline?: string;
  metric?: string;
  metricLabel?: string;
  techStack?: string[];
  stack?: string[];
  metrics: CaseStudyMetric[];
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

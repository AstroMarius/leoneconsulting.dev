export interface Package {
  slug: string;
  title: string;
  tagline: string;
  price?: {
    display: string;
    value?: number;
    currency?: string;
  };
  
  forWhom: {
    title: string;
    bullets: string[];
  };
  
  deliverables: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      format?: string;
    }>;
  };
  
  requirements: {
    title: string;
    items: string[];
  };
  
  timeline: {
    duration: string;
    breakdown?: Array<{
      phase: string;
      days: string;
    }>;
  };
  
  process: string[];
  
  cta: {
    text: string;
    url: string;
  };
  
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  
  metadata: {
    featured: boolean;
    language: 'it' | 'en';
  };
}

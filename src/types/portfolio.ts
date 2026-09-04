export type SkillCategory = 'Web Development' | 'UX Design' | 'Game Development' | 'HTML & CSS' | 'JavaScript' | 'Developer Tools' | 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Cloud & Architecture';

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 0-100
  experience: string;
  category: SkillCategory;
  iconName: string;
  description: string;
  featured?: boolean;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Cloud & Systems' | 'AI & Analytics' | 'Dev Tools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullCaseStudy?: string;
  category: 'Full Stack' | 'Cloud & Systems' | 'AI & Analytics' | 'Dev Tools';
  tags: string[];
  metrics: ProjectMetric[];
  architectureHighlights: string[];
  challenges: string;
  solution: string;
  impact: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  benchmarkStats?: {
    throughput: string;
    p99Latency: string;
    uptime: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Contract' | 'Lead Architect';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
  recommendedFor: string;
  timeline: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  handle: string;
  iconName: string;
  colorClass: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  projectFocus: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Engagement' | 'Technical' | 'Delivery & IP' | 'Pricing';
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl?: string;
  badgeIcon: string;
  skills: string[];
}


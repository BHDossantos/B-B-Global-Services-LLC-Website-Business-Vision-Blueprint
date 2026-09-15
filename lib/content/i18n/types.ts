// Shared types for per-locale content overlays. Each overlay maps a slug to
// the translated subset of fields; anything missing falls back to English.
import type { Service } from "../services";
import type { Solution } from "../solutions";
import type { IndustryPage } from "../industries-detail";

export type ServiceOverlay = Partial<Pick<Service, "title" | "headline" | "summary">>;
export type SolutionOverlay = Partial<Pick<Solution, "title" | "summary" | "audience" | "body">>;
export type IndustryOverlay = Partial<Pick<IndustryPage, "name" | "cardDescription" | "title" | "intro">>;

// Translated versions of the shared site-content arrays. Each array, when
// present, must match the English array's length and order (it replaces the
// English one wholesale); when absent, English is used.
export type SiteOverlay = {
  lifecyclePhases?: { name: string; description: string }[];
  painPoints?: string[];
  differentiators?: string[];
  featuredSolutions?: string[];
  idealCustomers?: string[];
  faqs?: { question: string; answer: string }[];
  engagementOffers?: { name: string; tagline: string; includes: string[] }[];
};

export type CaseStudyOverlay = Partial<{
  title: string;
  industry: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
}>;

export type InsightOverlay = Partial<{
  title: string;
  excerpt: string;
  category: string;
}>;

export type ContentOverlay = {
  services: Record<string, ServiceOverlay>;
  solutions: Record<string, SolutionOverlay>;
  industries: Record<string, IndustryOverlay>;
  site?: SiteOverlay;
  caseStudies?: Record<string, CaseStudyOverlay>;
  insights?: Record<string, InsightOverlay>;
};

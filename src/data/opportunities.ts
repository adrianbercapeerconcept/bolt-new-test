import { opportunities as businessOpportunities } from './businessOpportunities';
import { opportunities as jobOpportunities } from './jobOpportunities';

export interface BaseOpportunity {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  country: string;
  sector: string;
  description: string;
  deadline: string;
  postedDate: string;
  applications: number;
  featured: boolean;
  type: 'job' | 'business';
}

export interface JobOpportunity extends BaseOpportunity {
  type: 'job';
  employmentType: string;
  experienceLevel: string;
  salaryRange?: string;
}

export interface BusinessOpportunity extends BaseOpportunity {
  type: 'business';
  opportunityType: 'Investment' | 'Partnership' | 'Sale' | 'License';
  investmentRange?: string;
  roi?: string;
  marketSize?: string;
}

export type Opportunity = JobOpportunity | BusinessOpportunity;

export const opportunities: Opportunity[] = [...jobOpportunities, ...businessOpportunities];
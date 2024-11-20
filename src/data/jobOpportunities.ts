import { JobOpportunity } from './opportunities';

export const opportunities: JobOpportunity[] = [
  {
    id: 1,
    type: 'job',
    title: "Senior Energy Policy Advisor",
    company: "AfriEnergy Solutions",
    logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=120",
    location: "Lagos",
    country: "Nigeria",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    sector: "Energy",
    description: "Leading energy policy development and stakeholder engagement across West Africa. Looking for an experienced professional to drive sustainable energy initiatives.",
    salaryRange: "$80,000 - $120,000",
    deadline: "2024-03-15",
    postedDate: "2024-02-01",
    applications: 12,
    featured: true
  },
  {
    id: 2,
    type: 'job',
    title: "AgriTech Project Manager",
    company: "FarmTech Ghana",
    logo: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=120",
    location: "Accra",
    country: "Ghana",
    employmentType: "Contract",
    experienceLevel: "Mid-Senior",
    sector: "Agriculture",
    description: "Managing innovative agricultural technology projects aimed at improving farm productivity across Ghana. Seeking an experienced project manager with AgriTech background.",
    deadline: "2024-03-30",
    postedDate: "2024-02-05",
    applications: 8,
    featured: false
  },
  {
    id: 3,
    type: 'job',
    title: "Digital Health Innovation Lead",
    company: "HealthTech Kenya",
    logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=120",
    location: "Nairobi",
    country: "Kenya",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    sector: "Healthcare",
    description: "Drive digital transformation in healthcare delivery across East Africa. Looking for an innovative leader to spearhead telemedicine initiatives.",
    salaryRange: "$70,000 - $90,000",
    deadline: "2024-03-20",
    postedDate: "2024-02-03",
    applications: 15,
    featured: true
  }
];
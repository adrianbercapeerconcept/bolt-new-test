import React from 'react';
import { useParams } from 'react-router-dom';
import { CompanyHeader } from '../components/company/CompanyHeader';
import { CompanyInfo } from '../components/company/CompanyInfo';
import { CompanySocial } from '../components/company/CompanySocial';
import { CompanyTrust } from '../components/company/CompanyTrust';
import { ReportCTA } from '../components/company/ReportCTA';
import { sampleCompanies } from '../data/sampleProfiles';

export function CompanyDetail() {
  const { id } = useParams();
  const company = sampleCompanies.find(c => c.id === Number(id));
  
  if (!company) {
    return <div>Company not found</div>;
  }

  const enrichedCompany = {
    ...company,
    subSector: 'Enterprise Software',
    revenue: '$10M - $50M',
    headquarters: `${company.country}`,
    address: '123 Tech Drive, Victoria Island, Lagos',
    website: 'https://example.com',
    linkedin: 'https://linkedin.com/company/example',
    twitter: 'https://twitter.com/example',
    countries: [company.country],
    socialPosts: [
      {
        platform: 'linkedin',
        content: 'Excited to announce our new partnership with...',
        date: '2024-02-20'
      },
      {
        platform: 'twitter',
        content: 'Join us at the African Tech Summit next week...',
        date: '2024-02-18'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompanyHeader company={enrichedCompany} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CompanyInfo company={enrichedCompany} />
            <CompanySocial company={enrichedCompany} />
          </div>
          
          <div className="space-y-8">
            <CompanyTrust company={enrichedCompany} />
            <ReportCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
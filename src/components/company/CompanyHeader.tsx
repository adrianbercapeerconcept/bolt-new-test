import React from 'react';
import { Building, MapPin, Globe, BadgeCheck } from 'lucide-react';

interface CompanyHeaderProps {
  company: any;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-start space-x-6">
          <img
            src={company.logo}
            alt={company.name}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
              {company.verified && (
                <BadgeCheck className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <p className="mt-2 text-lg text-gray-600">{company.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                {company.sector}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {company.headquarters}
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
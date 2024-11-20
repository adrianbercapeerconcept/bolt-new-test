import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building, Star, Users, ArrowUpRight, BadgeCheck, DollarSign, Briefcase, Handshake } from 'lucide-react';
import type { Opportunity } from '../data/opportunities';

interface OpportunityListProps {
  opportunities: Opportunity[];
}

export function OpportunityList({ opportunities }: OpportunityListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Latest Opportunities</h2>
        <Link
          to="/opportunities"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {opportunities.map((opportunity) => (
          <Link
            key={opportunity.id}
            to={`/opportunities/${opportunity.id}`}
            className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={opportunity.logo}
                  alt={opportunity.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {opportunity.title}
                        </h3>
                        {opportunity.type === 'job' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {opportunity.employmentType}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            <Handshake className="w-3 h-3 mr-1" />
                            {opportunity.opportunityType}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <Building className="w-4 h-4 mr-1" />
                        {opportunity.company}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {opportunity.location}, {opportunity.country}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {opportunity.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {opportunity.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                      {opportunity.type === 'job' ? (
                        opportunity.salaryRange && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <DollarSign className="w-3 h-3 mr-1" />
                            {opportunity.salaryRange}
                          </span>
                        )
                      ) : (
                        opportunity.investmentRange && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <DollarSign className="w-3 h-3 mr-1" />
                            {opportunity.investmentRange}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {opportunity.applications} interested
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
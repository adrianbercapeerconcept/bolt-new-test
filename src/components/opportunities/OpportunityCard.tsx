import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, Handshake, MapPin, Send, Share2, Star, Bookmark } from 'lucide-react';
import { Opportunity } from '../../data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Link
      to={`/opportunities/${opportunity.id}`}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
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
            </div>

            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {opportunity.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {opportunity.featured && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle bookmark
                  }} 
                  className="p-2 text-gray-400 hover:text-blue-600"
                >
                  <Bookmark />
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle share
                  }} 
                  className="p-2 text-gray-400 hover:text-blue-600"
                >
                  <Share2 />
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle apply
                  }} 
                  className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Send className="w-4 h-4 mr-1" />
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Building, MapPin, Calendar, DollarSign, Users, Star, Briefcase, Handshake, Share2, Bookmark } from 'lucide-react';
import { opportunities } from '../data/opportunities';
import { ApplyOpportunityModal } from '../components/ApplyOpportunityModal';

export function OpportunityDetail() {
  const { id } = useParams();
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  const opportunity = opportunities.find(o => o.id === Number(id));

  if (!opportunity) {
    return <div>Opportunity not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-start space-x-6">
            <img
              src={opportunity.logo}
              alt={opportunity.company}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{opportunity.title}</h1>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center text-gray-500">
                      <Building className="w-5 h-5 mr-1" />
                      {opportunity.company}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-5 h-5 mr-1" />
                      {opportunity.location}, {opportunity.country}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {opportunity.type === 'job' ? (
                  <>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Employment Type</div>
                        <div className="font-medium">{opportunity.employmentType}</div>
                      </div>
                    </div>
                    {opportunity.salaryRange && (
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Salary Range</div>
                          <div className="font-medium">{opportunity.salaryRange}</div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center">
                      <Handshake className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Opportunity Type</div>
                        <div className="font-medium">{opportunity.opportunityType}</div>
                      </div>
                    </div>
                    {opportunity.investmentRange && (
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Investment Range</div>
                          <div className="font-medium">{opportunity.investmentRange}</div>
                        </div>
                      </div>
                    )}
                    {opportunity.roi && (
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Expected ROI</div>
                          <div className="font-medium">{opportunity.roi}</div>
                        </div>
                      </div>
                    )}
                  </>
                )}
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Application Deadline</div>
                    <div className="font-medium">{new Date(opportunity.deadline).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Applications</div>
                    <div className="font-medium">{opportunity.applications} applicants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
            <div className="prose max-w-none text-gray-600">
              {opportunity.description}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowApplyModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {opportunity.type === 'job' ? 'Apply Now' : 'Express Interest'}
            </button>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <ApplyOpportunityModal
          isOpen={showApplyModal}
          onClose={() => setShowApplyModal(false)}
          opportunity={opportunity}
        />
      )}
    </div>
  );
}
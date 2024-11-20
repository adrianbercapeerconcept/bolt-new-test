import React, { useState } from 'react';
import { X, Upload, AlertCircle, Briefcase, Handshake, Building, MapPin, Calendar, DollarSign, FileText } from 'lucide-react';

interface PostOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OpportunityType = 'job' | 'business';

const sectors = [
  'Agriculture',
  'Energy',
  'Finance',
  'Healthcare',
  'Manufacturing',
  'Technology',
  'Telecommunications',
  'Transportation'
].sort();

const businessTypes = [
  'Investment',
  'Partnership',
  'Sale',
  'License'
].sort();

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship'
].sort();

export function PostOpportunityModal({ isOpen, onClose }: PostOpportunityModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [opportunityType, setOpportunityType] = useState<OpportunityType>('job');

  const [jobFormData, setJobFormData] = useState({
    title: '',
    company: '',
    logo: null as File | null,
    sector: '',
    location: '',
    country: '',
    employmentType: '',
    experienceLevel: '',
    salaryRange: '',
    description: '',
    requirements: '',
    deadline: '',
    contactEmail: '',
    contactPhone: '',
    websiteUrl: ''
  });

  const [businessFormData, setBusinessFormData] = useState({
    title: '',
    company: '',
    logo: null as File | null,
    sector: '',
    location: '',
    country: '',
    opportunityType: '',
    investmentRange: '',
    roi: '',
    marketSize: '',
    description: '',
    requirements: '',
    deadline: '',
    documents: [] as File[],
    contactEmail: '',
    contactPhone: '',
    websiteUrl: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      // Submit logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      onClose();
    } catch (err) {
      setError('Failed to post opportunity');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Post New Opportunity</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setOpportunityType('job')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                  opportunityType === 'job'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Job Opportunity</span>
              </button>
              <button
                onClick={() => setOpportunityType('business')}
                className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
                  opportunityType === 'business'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Handshake className="w-5 h-5" />
                <span>Business Opportunity</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  required
                  value={opportunityType === 'job' ? jobFormData.title : businessFormData.title}
                  onChange={(e) => {
                    if (opportunityType === 'job') {
                      setJobFormData({ ...jobFormData, title: e.target.value });
                    } else {
                      setBusinessFormData({ ...businessFormData, title: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder={opportunityType === 'job' ? 'e.g., Senior Project Manager' : 'e.g., Investment Opportunity in Solar Farm'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  required
                  value={opportunityType === 'job' ? jobFormData.company : businessFormData.company}
                  onChange={(e) => {
                    if (opportunityType === 'job') {
                      setJobFormData({ ...jobFormData, company: e.target.value });
                    } else {
                      setBusinessFormData({ ...businessFormData, company: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Type-specific Fields */}
            {opportunityType === 'job' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                    <select
                      required
                      value={jobFormData.employmentType}
                      onChange={(e) => setJobFormData({ ...jobFormData, employmentType: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select type</option>
                      {employmentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                    <input
                      type="text"
                      value={jobFormData.salaryRange}
                      onChange={(e) => setJobFormData({ ...jobFormData, salaryRange: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., $50,000 - $70,000"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Opportunity Type</label>
                    <select
                      required
                      value={businessFormData.opportunityType}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, opportunityType: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select type</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Investment Range</label>
                    <input
                      type="text"
                      value={businessFormData.investmentRange}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, investmentRange: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., $100,000 - $500,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expected ROI</label>
                    <input
                      type="text"
                      value={businessFormData.roi}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, roi: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 15-20% annually"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Market Size</label>
                    <input
                      type="text"
                      value={businessFormData.marketSize}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, marketSize: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., $1B"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Supporting Documents</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload documents</span>
                          <input
                            type="file"
                            multiple
                            onChange={(e) => {
                              const files = Array.from(e.target.files || []);
                              setBusinessFormData({ ...businessFormData, documents: files });
                            }}
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC up to 10MB each</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Common Fields Continued */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                rows={4}
                value={opportunityType === 'job' ? jobFormData.description : businessFormData.description}
                onChange={(e) => {
                  if (opportunityType === 'job') {
                    setJobFormData({ ...jobFormData, description: e.target.value });
                  } else {
                    setBusinessFormData({ ...businessFormData, description: e.target.value });
                  }
                }}
                className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? 'Posting...' : 'Post Opportunity'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
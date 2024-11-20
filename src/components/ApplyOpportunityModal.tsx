import React, { useState } from 'react';
import { X, Upload, AlertCircle, Send, FileText, DollarSign, Briefcase, Handshake } from 'lucide-react';

interface BaseOpportunity {
  id: number;
  title: string;
  company: string;
  logo: string;
  type: 'job' | 'business';
}

interface ApplyOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: BaseOpportunity;
}

export function ApplyOpportunityModal({ isOpen, onClose, opportunity }: ApplyOpportunityModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [jobFormData, setJobFormData] = useState({
    coverLetter: '',
    resume: null as File | null,
    portfolio: '',
    availability: '',
    salaryExpectation: '',
    references: [] as { name: string; position: string; contact: string }[]
  });

  const [businessFormData, setBusinessFormData] = useState({
    proposal: '',
    businessPlan: null as File | null,
    financials: null as File | null,
    investmentAmount: '',
    timeline: '',
    additionalDocuments: [] as File[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      // Submit application logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      onClose();
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={opportunity.logo}
                alt={opportunity.company}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{opportunity.title}</h2>
                <p className="text-sm text-gray-600">{opportunity.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className={`p-2 mb-6 text-center text-sm text-white rounded-lg ${
            opportunity.type === 'job' ? 'bg-blue-600' : 'bg-green-600'
          }`}>
            {opportunity.type === 'job' ? (
              <div className="flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Job Application
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Handshake className="w-4 h-4 mr-1" />
                Business Opportunity Expression of Interest
              </div>
            )}
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {opportunity.type === 'job' ? (
              // Job Application Form
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Resume/CV
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setJobFormData({ ...jobFormData, resume: e.target.files?.[0] || null })}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    value={jobFormData.coverLetter}
                    onChange={(e) => setJobFormData({ ...jobFormData, coverLetter: e.target.value })}
                    rows={6}
                    className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Explain why you're a great fit for this role..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      value={jobFormData.portfolio}
                      onChange={(e) => setJobFormData({ ...jobFormData, portfolio: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Earliest Start Date
                    </label>
                    <input
                      type="date"
                      value={jobFormData.availability}
                      onChange={(e) => setJobFormData({ ...jobFormData, availability: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expected Salary
                    </label>
                    <input
                      type="text"
                      value={jobFormData.salaryExpectation}
                      onChange={(e) => setJobFormData({ ...jobFormData, salaryExpectation: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., $50,000 - $70,000"
                    />
                  </div>
                </div>
              </>
            ) : (
              // Business Opportunity Form
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Business Proposal
                  </label>
                  <textarea
                    value={businessFormData.proposal}
                    onChange={(e) => setBusinessFormData({ ...businessFormData, proposal: e.target.value })}
                    rows={6}
                    className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your interest and how you can contribute to this opportunity..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Business Plan
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                          <span>Upload business plan</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setBusinessFormData({ ...businessFormData, businessPlan: e.target.files?.[0] || null })}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Proposed Investment
                    </label>
                    <input
                      type="text"
                      value={businessFormData.investmentAmount}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, investmentAmount: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., $100,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Implementation Timeline
                    </label>
                    <input
                      type="text"
                      value={businessFormData.timeline}
                      onChange={(e) => setBusinessFormData({ ...businessFormData, timeline: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 6 months"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Financial Documents
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                          <span>Upload financial documents</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.xls,.xlsx"
                            onChange={(e) => setBusinessFormData({ ...businessFormData, financials: e.target.files?.[0] || null })}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

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
                className={`flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${
                  opportunity.type === 'job'
                    ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                    : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                }`}
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? 'Submitting...' : opportunity.type === 'job' ? 'Submit Application' : 'Submit Proposal'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
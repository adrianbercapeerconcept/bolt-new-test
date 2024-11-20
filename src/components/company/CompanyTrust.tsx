import React from 'react';
import { Shield, Star } from 'lucide-react';

interface CompanyTrustProps {
  company: any;
}

export function CompanyTrust({ company }: CompanyTrustProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Trust Score</h2>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50">
            <div className="text-3xl font-bold text-blue-600">{company.trustScore}</div>
          </div>
          
          <div className="mt-4 flex items-center justify-center">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">Excellent</span>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Verification Status</span>
              <span className="text-sm font-medium text-green-600">Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Star, Award, FileCheck } from 'lucide-react';
import { useTrust } from '../contexts/TrustContext';

export function TrustMetrics() {
  const { metrics } = useTrust();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
        <Star className="w-5 h-5 text-yellow-400" />
        <div>
          <div className="text-2xl font-bold text-gray-900">{metrics.overall}</div>
          <div className="text-sm text-gray-500">Trust Score</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
        <Award className="w-5 h-5 text-blue-500" />
        <div>
          <div className="text-2xl font-bold text-gray-900">{metrics.endorsements}</div>
          <div className="text-sm text-gray-500">Endorsements</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
        <FileCheck className="w-5 h-5 text-green-500" />
        <div>
          <div className="text-2xl font-bold text-gray-900">2/4</div>
          <div className="text-sm text-gray-500">Verifications</div>
        </div>
      </div>
    </div>
  );
}
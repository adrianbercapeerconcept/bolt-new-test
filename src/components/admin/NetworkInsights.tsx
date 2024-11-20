import React from 'react';
import { Globe, Building, Users } from 'lucide-react';

const insights = {
  topCountries: ['Nigeria', 'Kenya', 'South Africa'],
  topSectors: ['Technology', 'Energy', 'Finance'],
  userGrowth: '+25% this quarter'
};

export function NetworkInsights() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Network Insights</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Top Countries</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {insights.topCountries.join(', ')}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Top Sectors</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {insights.topSectors.join(', ')}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">User Growth</span>
            </div>
            <div className="text-sm font-medium text-green-600">
              {insights.userGrowth}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
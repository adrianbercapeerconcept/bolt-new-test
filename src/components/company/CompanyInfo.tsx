import React from 'react';
import { Building, Users, Globe, MapPin, DollarSign } from 'lucide-react';

interface CompanyInfoProps {
  company: any;
}

export function CompanyInfo({ company }: CompanyInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">Sector</label>
              <div className="mt-1 flex items-center">
                <Building className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-900">{company.sector}</span>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">Sub-sector</label>
              <div className="mt-1 flex items-center">
                <Building className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-900">{company.subSector}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">Annual Revenue</label>
              <div className="mt-1 flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-900">{company.revenue}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">Employee Size</label>
              <div className="mt-1 flex items-center">
                <Users className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-900">{company.employeeSize} employees</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Countries of Operation</label>
            <div className="mt-1 flex items-center">
              <Globe className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-900">{company.countries.join(', ')}</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Address</label>
            <div className="mt-1 flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-900">{company.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
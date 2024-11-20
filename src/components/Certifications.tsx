import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: 'Jan 2023',
    verified: true,
  },
  {
    id: 2,
    name: 'Google Cloud Professional Architect',
    issuer: 'Google Cloud',
    date: 'Mar 2022',
    verified: true,
  },
];

export function Certifications() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <h3 className="text-sm font-medium text-gray-900">{cert.name}</h3>
                {cert.verified && (
                  <BadgeCheck className="w-4 h-4 text-blue-500 ml-1" />
                )}
              </div>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Briefcase } from 'lucide-react';

const workHistory = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'TechForward Inc.',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Leading the development of cloud-native applications and mentoring junior developers.',
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'InnovateLab',
    location: 'New York, NY',
    period: '2018 - 2021',
    description: 'Developed scalable microservices and implemented CI/CD pipelines.',
  },
];

export function WorkExperience() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h2>
      <div className="space-y-6">
        {workHistory.map((work) => (
          <div key={work.id} className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{work.role}</h3>
              <div className="text-gray-600">{work.company}</div>
              <div className="text-sm text-gray-500">{work.period}</div>
              <div className="mt-2 text-gray-600">{work.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
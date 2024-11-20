import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2016 - 2018',
    location: 'Stanford, CA',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'MIT',
    period: '2012 - 2016',
    location: 'Cambridge, MA',
  },
];

export function Education() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
              <div className="text-gray-600">{edu.institution}</div>
              <div className="text-sm text-gray-500">{edu.period}</div>
              <div className="text-sm text-gray-500">{edu.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
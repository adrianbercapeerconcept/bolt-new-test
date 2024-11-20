import React from 'react';

const skills = [
  'Cloud Architecture',
  'System Design',
  'React',
  'Node.js',
  'TypeScript',
  'AWS',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Team Leadership',
];

export function Skills() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
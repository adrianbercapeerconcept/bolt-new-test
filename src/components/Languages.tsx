import React from 'react';

export function Languages() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Languages</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">English</span>
          <span className="text-sm text-gray-500">Native</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Spanish</span>
          <span className="text-sm text-gray-500">Professional</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Mandarin</span>
          <span className="text-sm text-gray-500">Conversational</span>
        </div>
      </div>
    </div>
  );
}
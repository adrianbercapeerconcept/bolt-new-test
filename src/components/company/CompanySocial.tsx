import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface CompanySocialProps {
  company: any;
}

export function CompanySocial({ company }: CompanySocialProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Social Media</h2>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
            <a
              href={company.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Twitter className="w-5 h-5 mr-2" />
              X Profile
            </a>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Posts</h3>
            <div className="space-y-4">
              {company.socialPosts.map((post: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    {post.platform === 'linkedin' ? (
                      <Linkedin className="w-4 h-4 text-blue-600 mr-2" />
                    ) : (
                      <Twitter className="w-4 h-4 text-blue-400 mr-2" />
                    )}
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
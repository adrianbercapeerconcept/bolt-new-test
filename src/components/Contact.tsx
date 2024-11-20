import React from 'react';
import { Mail, Phone, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Contact() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Mail className="w-5 h-5 mr-2" />
          {user?.email}
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-5 h-5 mr-2" />
          +234 801 234 5678
        </div>
        <div className="flex items-center text-gray-600">
          <Globe className="w-5 h-5 mr-2" />
          portfolio.dev
        </div>
        <div className="pt-3 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Social Media</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <Twitter className="w-5 h-5 mr-2" />
              X Profile
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
              <Facebook className="w-5 h-5 mr-2" />
              Facebook Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
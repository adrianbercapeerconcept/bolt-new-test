import React from 'react';
import { MainNav } from '../../components/MainNav';
import { Mail, Phone, Globe, Download } from 'lucide-react';

export function Media() {
  return (
    <div className="bg-gray-50">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Media Enquiries</h1>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our media relations team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Contact</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:press@trustworks.africa" className="text-gray-900 hover:text-blue-600">
                    press@trustworks.africa
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+234-123-456-7890" className="text-gray-900 hover:text-blue-600">
                    +234 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <a href="https://trustworks.africa" className="text-gray-900 hover:text-blue-600">
                    trustworks.africa
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Press Kit</h3>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Download className="w-5 h-5 mr-2" />
                Download Press Kit
              </button>
            </div>
          </div>

          {/* Recent Coverage */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Coverage</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Financial Times</p>
                <h3 className="text-lg font-medium text-gray-900">
                  TrustWorks: Building Africa's Professional Trust Network
                </h3>
                <p className="text-gray-600 mt-2">
                  An in-depth look at how TrustWorks is revolutionizing business networking in Africa...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
                  Read More →
                </a>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">TechCabal</p>
                <h3 className="text-lg font-medium text-gray-900">
                  How TrustWorks is Solving Africa's Business Trust Challenge
                </h3>
                <p className="text-gray-600 mt-2">
                  A feature on TrustWorks' innovative approach to building trusted business relationships...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
                  Read More →
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Africa Business Report</p>
                <h3 className="text-lg font-medium text-gray-900">
                  TrustWorks Raises $10M to Expand Across Africa
                </h3>
                <p className="text-gray-600 mt-2">
                  Coverage of TrustWorks' latest funding round and expansion plans...
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { MainNav } from '../components/MainNav';
import { Shield, Network, Globe, TrendingUp, Users, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">About TrustWorks.Africa</h1>
          <p className="mt-4 text-xl text-gray-600">Building Africa's Trust Network</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            In the dynamic world of African business, trust is everything. Yet finding reliable partners, 
            verifying credentials, and building trusted relationships across the continent remains one of 
            the biggest challenges facing businesses and professionals. TrustWorks.Africa was born from 
            this challenge, created by leaders who have spent decades navigating African markets and 
            understanding the critical role of trusted connections in business success.
          </p>
        </div>

        {/* The Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge We're Solving</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8">
              Every day, countless opportunities in Africa go unrealized because businesses can't find 
              trusted local partners. Traditional networking platforms fall short in the African context, 
              where relationships and trust carry unique weight. Cold outreach rarely succeeds, while the 
              most successful partnerships almost always come through trusted introductions and recommendations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">The consequences are significant:</h3>
            <ul className="space-y-4">
              {[
                'Businesses struggle to enter new markets despite clear opportunities',
                'Professionals miss out on partnerships that could transform their careers',
                'Companies waste resources on failed partnerships and lengthy due diligence',
                'African expertise remains hidden and underutilized',
                'Cross-border collaboration is stifled by trust barriers'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust-Based Connections</h3>
              <p className="text-gray-600">
                Every member's trust score reflects their verified credentials, recommendations, and 
                network quality.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Network className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Healing Network</h3>
              <p className="text-gray-600">
                Our platform continuously validates and updates trust relationships, ensuring network 
                quality improves over time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Globe className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Context</h3>
              <p className="text-gray-600">
                Deep understanding of African markets and business practices informs every feature.
              </p>
            </div>
          </div>
        </div>

        {/* Vision for Africa */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision for Africa</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8">
              We envision an Africa where trusted business relationships can be built efficiently across 
              borders, enabling the continent's tremendous potential for growth and innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">By 2025, we aim to:</h3>
                <ul className="space-y-4">
                  {[
                    'Connect over 100,000 verified professionals',
                    'Cover all 54 African countries',
                    'Facilitate thousands of trusted partnerships',
                    'Reduce partnership formation time by 70%',
                    'Become Africa's most trusted business network'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Goals:</h3>
                <ul className="space-y-4">
                  {[
                    'Enable faster, more confident business decisions',
                    'Reduce the cost of finding reliable partners',
                    'Unlock cross-border opportunities',
                    'Showcase African expertise to the world',
                    'Foster a more connected business environment'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Users className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
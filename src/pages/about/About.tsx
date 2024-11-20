import React from 'react';
import { MainNav } from '../../components/MainNav';
import { Shield, Network, Globe, TrendingUp, Users, CheckCircle, Target, Lightbulb, Award } from 'lucide-react';

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
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Target className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building Africa's most trusted business network. We connect verified professionals and 
                businesses across Africa through a self-healing trust network that makes finding reliable 
                partners simpler, faster, and more secure.
              </p>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <div className="mb-16">
          <div className="flex items-start space-x-4 mb-8">
            <div className="flex-shrink-0">
              <Lightbulb className="w-12 h-12 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-8">
                In Africa's diverse markets, finding trusted business partners is the number one challenge 
                cited by businesses and professionals. Traditional networks fall short, cold outreach rarely 
                works, and successful partnerships almost always come through trusted introductions. This 
                leads to missed opportunities, costly mistakes, and untapped potential across the continent.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
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
          <p className="text-lg text-gray-600 mb-8">
            TrustWorks.Africa revolutionizes professional networking in Africa through:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust-Based Verification</h3>
              <p className="text-gray-600">
                Comprehensive verification of credentials and experience
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Network className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Healing Network</h3>
              <p className="text-gray-600">
                Continuously validates and updates trust relationships
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Focus</h3>
              <p className="text-gray-600">
                Emphasis on quality connections over quantity
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <Globe className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Context</h3>
              <p className="text-gray-600">
                Deep understanding of African business contexts
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Dr. Fola Yahaya</h3>
              <p className="text-blue-600 font-medium">Co-founder & CEO</p>
              <p className="mt-4 text-gray-600">
                Serial entrepreneur and former McKinsey consultant with 20+ years of experience 
                building successful ventures across West Africa.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Lai Yahaya</h3>
              <p className="text-blue-600 font-medium">Co-founder & Strategy Director</p>
              <p className="mt-4 text-gray-600">
                Policy expert and strategic advisor to governments and international organizations, 
                specializing in African infrastructure development and reform.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">William Wallace</h3>
              <p className="text-blue-600 font-medium">Board Member</p>
              <p className="mt-4 text-gray-600">
                Veteran Financial Times journalist and Africa specialist, bringing deep expertise 
                in African business and international investment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">Patrick Smith</h3>
              <p className="text-blue-600 font-medium">Board Member</p>
              <p className="mt-4 text-gray-600">
                Editor of Africa Confidential with three decades of experience analyzing African 
                markets and business dynamics.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Vision</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8">
              We're building a future where trusted business relationships can be established 
              efficiently across Africa's 54 countries. By 2025, we aim to connect 100,000+ 
              verified professionals, enabling businesses to find reliable partners with 
              confidence and speed.
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

            <div className="mt-8 text-center">
              <p className="text-xl text-gray-900 font-medium">
                Join us in transforming how business gets done in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
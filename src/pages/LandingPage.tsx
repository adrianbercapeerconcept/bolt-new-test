import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Users, Award, ArrowRight, CheckCircle, Globe, Shield, TrendingUp, Target, Lightbulb, BadgeCheck, Building } from 'lucide-react';
import { MainNav } from '../components/MainNav';
import { PricingPlans } from '../components/PricingPlans';

const stats = [
  { label: 'Active Professionals', value: '12,000+' },
  { label: 'Countries Covered', value: '54' },
  { label: 'Business Opportunities', value: '2,500+' },
  { label: 'Successful Connections', value: '45,000+' }
];

const features = [
  {
    title: 'Trust-Based Network',
    description: 'Connect with verified professionals and businesses across Africa',
    icon: Shield
  },
  {
    title: 'Cross-Border Opportunities',
    description: 'Access business opportunities across all 54 African countries',
    icon: Globe
  },
  {
    title: 'Verified Credentials',
    description: 'Multi-level verification system ensures authentic connections',
    icon: CheckCircle
  },
  {
    title: 'Industry Insights',
    description: 'Stay informed with market trends and industry analysis',
    icon: TrendingUp
  }
];

const industries = [
  {
    name: 'Technology',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920'
  },
  {
    name: 'Renewable Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920'
  },
  {
    name: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920'
  },
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920'
  }
];

const testimonials = [
  {
    author: 'Dr. Amara Okafor',
    role: 'Energy Policy Advisor',
    company: 'AfriEnergy Solutions',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=facearea&facepad=2&w=256&h=256',
    quote: 'TrustWorks has transformed how we build partnerships across Africa. The verification system gives us confidence in every connection we make.'
  },
  {
    author: 'Kwame Mensah',
    role: 'AgriTech Innovator',
    company: 'FarmTech Ghana',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?fit=facearea&facepad=2&w=256&h=256',
    quote: 'Finding trusted partners used to be our biggest challenge. Now, we can confidently expand across borders thanks to TrustWorks.'
  }
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Africa's Professional Trust Network
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Connect with verified professionals, find reliable partners, and unlock opportunities across Africa's fastest-growing markets.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-12 relative lg:mt-0 lg:col-span-6">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920"
                  alt="African business professionals collaborating"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose TrustWorks?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We're building Africa's most trusted business network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-50 rounded-xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
            <p className="mt-4 text-xl text-gray-600">
              Connect with professionals across Africa's key growth sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="relative rounded-xl overflow-hidden group">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-6">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Leaders Across Africa</h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from professionals who've found success through our network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <BadgeCheck className="w-5 h-5 text-blue-500 ml-1" />
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Building className="w-4 h-4 mr-1" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingPlans />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join Africa's Fastest Growing Professional Network
          </h2>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Admin Login Link */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/admin/login" className="text-sm text-gray-500 hover:text-gray-700">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
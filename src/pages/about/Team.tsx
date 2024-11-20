import React from 'react';
import { MainNav } from '../../components/MainNav';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const executives = [
  {
    name: 'Dr. Fola Yahaya',
    role: 'Co-founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256',
    bio: 'A visionary entrepreneur with over two decades of experience transforming African businesses. Former McKinsey consultant and founder of multiple successful ventures across West Africa.',
    linkedin: '#',
    twitter: '#',
    email: 'fola@trustworks.africa'
  },
  {
    name: 'Lai Yahaya',
    role: 'Co-founder & Strategy Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256',
    bio: 'Distinguished policy expert and strategic advisor to governments and international organizations, with over 15 years of experience in infrastructure development and public sector reform across Africa.',
    linkedin: '#',
    twitter: '#',
    email: 'lai@trustworks.africa'
  }
];

const boardMembers = [
  {
    name: 'William Wallace',
    role: 'Board Member',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256',
    bio: 'Veteran journalist and Africa specialist at the Financial Times, bringing crucial insight to building trusted bridges between global and African business communities.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Patrick Smith',
    role: 'Board Member',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=facearea&facepad=2&w=256&h=256',
    bio: 'Editor of Africa Confidential and renowned expert on African politics and business, with over three decades of experience analyzing African markets and power structures.',
    linkedin: '#',
    twitter: '#'
  }
];

export function Team() {
  return (
    <div className="bg-gray-50">
      <MainNav />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
          <p className="mt-4 text-xl text-gray-600">
            Meet the leaders building Africa's most trusted business network
          </p>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {executives.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <div className="flex space-x-4 mt-4">
                        <a href={member.linkedin} className="text-gray-400 hover:text-blue-600">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.twitter} className="text-gray-400 hover:text-blue-400">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-gray-600">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board Members */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Board Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <div className="flex space-x-4 mt-4">
                        <a href={member.linkedin} className="text-gray-400 hover:text-blue-600">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.twitter} className="text-gray-400 hover:text-blue-400">
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Building, MapPin, Globe, BadgeCheck, Star, Users, MessageSquare, UserPlus, ThumbsUp, Quote } from 'lucide-react';
import { sampleProfiles } from '../data/sampleProfiles';
import { ConnectModal } from '../components/ConnectModal';
import { MessageModal } from '../components/MessageModal';

const recommendations = [
  {
    id: 1,
    author: {
      name: "Ibrahim Toure",
      role: "Logistics Innovation Head",
      company: "TransMali",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256"
    },
    text: "I had the pleasure of working with them on several renewable energy projects across West Africa. Their expertise in policy development and stakeholder management is exceptional. They consistently deliver results while maintaining the highest professional standards.",
    relationship: "Worked together on project",
    date: "2 months ago"
  },
  {
    id: 2,
    author: {
      name: "Amina Hassan",
      role: "Digital Health Strategist",
      company: "eHealth Kenya",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?fit=facearea&facepad=2&w=256&h=256"
    },
    text: "A true visionary in their field. Their deep understanding of African markets and ability to navigate complex regulatory environments has been instrumental in driving sustainable energy initiatives forward. I highly recommend them for any strategic energy policy role.",
    relationship: "Professional colleague",
    date: "3 months ago"
  },
  {
    id: 3,
    author: {
      name: "Youssef Mansour",
      role: "Infrastructure Development Head",
      company: "BuildEgypt",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=facearea&facepad=2&w=256&h=256"
    },
    text: "An exceptional professional with a unique combination of technical expertise and strategic thinking. Their contributions to renewable energy policy have set new standards in the industry. It's always a pleasure collaborating with them.",
    relationship: "Mentor",
    date: "6 months ago"
  }
];

export function ProfessionalDetail() {
  const { id } = useParams();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const professional = sampleProfiles.find(p => p.id === Number(id));

  if (!professional) {
    return <div>Professional not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="relative h-48 rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={professional.avatar}
              alt={professional.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="pt-20 pb-6 px-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
                {professional.verified && (
                  <BadgeCheck className="w-6 h-6 text-blue-500" />
                )}
              </div>
              <p className="text-gray-600">{professional.role}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {professional.company}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {professional.location}, {professional.country}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowMessageModal(true)}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                <MessageSquare className="w-4 h-4 inline-block mr-1" />
                Message
              </button>
              <button
                onClick={() => setShowConnectModal(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <UserPlus className="w-4 h-4 inline-block mr-1" />
                Connect
              </button>
            </div>
          </div>

          {/* Trust Score and Stats */}
          <div className="mt-6 grid grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <div>
                  <div className="text-xl font-bold">{professional.trustScore}</div>
                  <div className="text-sm text-gray-500">Trust Score</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <div>
                  <div className="text-xl font-bold">120+</div>
                  <div className="text-sm text-gray-500">Connections</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-2" />
                <div>
                  <div className="text-xl font-bold">{professional.sector}</div>
                  <div className="text-sm text-gray-500">Industry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {professional.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recommendations</h2>
          <div className="flex items-center text-sm text-gray-500">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {recommendations.length} recommendations
          </div>
        </div>
        <div className="space-y-6">
          {recommendations.map((recommendation) => (
            <div key={recommendation.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-start space-x-4">
                <img
                  src={recommendation.author.avatar}
                  alt={recommendation.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {recommendation.author.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {recommendation.author.role} at {recommendation.author.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">{recommendation.date}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Quote className="w-4 h-4 mr-1" />
                    {recommendation.relationship}
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {recommendation.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showConnectModal && (
        <ConnectModal
          isOpen={showConnectModal}
          onClose={() => setShowConnectModal(false)}
          profile={professional}
        />
      )}
      {showMessageModal && (
        <MessageModal
          isOpen={showMessageModal}
          onClose={() => setShowMessageModal(false)}
          profile={professional}
        />
      )}
    </div>
  );
}
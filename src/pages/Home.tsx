import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTrust } from '../contexts/TrustContext';
import { ThumbsUp, MessageSquare, Share2, BadgeCheck, Building, MapPin, Plus, Star, Users, Briefcase, Calendar, Globe } from 'lucide-react';
import { NetworkStats } from '../components/NetworkStats';
import { QuickActions } from '../components/QuickActions';
import { OpportunityList } from '../components/OpportunityList';
import { PostOpportunityModal } from '../components/PostOpportunityModal';
import { ContentStream } from '../components/ContentStream';
import { opportunities } from '../data/opportunities';

const recentMembers = [
  {
    id: 1,
    name: 'Amara Okafor',
    role: 'Energy Policy Advisor',
    company: 'AfriEnergy Solutions',
    location: 'Lagos',
    country: 'Nigeria',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=facearea&facepad=2&w=256&h=256',
    industry: 'Energy',
    joinedAt: '2h ago'
  },
  {
    id: 2,
    name: 'Kwame Mensah',
    role: 'AgriTech Innovator',
    company: 'FarmTech Ghana',
    location: 'Accra',
    country: 'Ghana',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?fit=facearea&facepad=2&w=256&h=256',
    industry: 'Agriculture',
    joinedAt: '4h ago'
  },
  {
    id: 3,
    name: 'Zainab El-Amin',
    role: 'Solar Energy Expert',
    company: 'SolarTech Morocco',
    location: 'Casablanca',
    country: 'Morocco',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?fit=facearea&facepad=2&w=256&h=256',
    industry: 'Energy',
    joinedAt: '6h ago'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Africa Tech Summit 2024',
    date: '2024-05-15',
    time: '09:00 AM',
    location: 'Kigali, Rwanda',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 2,
    title: 'African Green Energy Forum',
    date: '2024-06-20',
    time: '10:00 AM',
    location: 'Cairo, Egypt',
    attendees: 300,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1920'
  }
];

const recommendedGroups = [
  {
    id: 1,
    name: 'African Pharma Innovation',
    members: 1250,
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 2,
    title: 'Africa Crypto & Blockchain',
    members: 3400,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1920'
  }
];

export function Home() {
  const { metrics } = useTrust();
  const [showPostModal, setShowPostModal] = useState(false);

  const stats = {
    totalConnections: metrics.networkSize,
    pendingRequests: 5,
    newThisWeek: 5,
    trustScore: metrics.overall
  };

  // Show top 3 business opportunities first, then other opportunities
  const sortedOpportunities = [...opportunities].sort((a, b) => {
    if (a.type === 'business' && b.type !== 'business') return -1;
    if (a.type !== 'business' && b.type === 'business') return 1;
    return 0;
  }).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <button
          onClick={() => setShowPostModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Post Opportunity
        </button>
      </div>

      <NetworkStats stats={stats} />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ContentStream />
          <OpportunityList opportunities={sortedOpportunities} />
        </div>

        <div className="space-y-8">
          {/* Recent Members */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Members</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {recentMembers.map((member) => (
                  <Link
                    key={member.id}
                    to={`/professionals/${member.id}`}
                    className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {member.name}
                        </h3>
                        <BadgeCheck className="w-4 h-4 text-blue-500 ml-1" />
                      </div>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Building className="w-3 h-3 mr-1" />
                        {member.company}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {member.location}, {member.country}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/discovery"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View All Members
                </Link>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Link
                    key={event.id}
                    to="/events"
                    className="block hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h3 className="text-white font-medium text-center px-4">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-1 px-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/events"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>

          {/* Recommended Groups */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recommended Groups</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {recommendedGroups.map((group) => (
                  <Link
                    key={group.id}
                    to="/groups"
                    className="block hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="relative h-24 rounded-lg overflow-hidden mb-2">
                      <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h3 className="text-white font-medium text-center px-4">
                          {group.name}
                        </h3>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {group.members} members
                        </span>
                        <span className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {group.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/groups"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View All Groups
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPostModal && (
        <PostOpportunityModal
          isOpen={showPostModal}
          onClose={() => setShowPostModal(false)}
        />
      )}
    </div>
  );
}
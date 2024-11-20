import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, Users, MapPin, Building, MessageSquare } from 'lucide-react';
import { CreateGroupModal } from '../components/groups/CreateGroupModal';

interface Group {
  id: number;
  name: string;
  description: string;
  sector: string;
  country: string;
  members: number;
  posts: number;
  image: string;
  isJoined: boolean;
}

const sampleGroups: Group[] = [
  {
    id: 1,
    name: "African Pharma Innovation",
    description: "Connecting pharmaceutical professionals across Africa to discuss innovation, regulation, and market access.",
    sector: "Healthcare",
    country: "Pan-African",
    members: 1250,
    posts: 324,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1920",
    isJoined: true
  },
  {
    id: 2,
    name: "Oil & Gas Africa",
    description: "Forum for energy professionals to discuss industry trends, opportunities, and sustainability in African oil and gas.",
    sector: "Energy",
    country: "Nigeria",
    members: 2100,
    posts: 567,
    image: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=1920",
    isJoined: false
  },
  {
    id: 3,
    name: "Africa Crypto & Blockchain",
    description: "Exploring cryptocurrency and blockchain technology adoption and innovation in African markets.",
    sector: "Technology",
    country: "Pan-African",
    members: 3400,
    posts: 892,
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1920",
    isJoined: true
  },
  {
    id: 4,
    name: "AgriTech Innovation Hub",
    description: "Connecting agricultural technology innovators and farmers across Africa.",
    sector: "Agriculture",
    country: "Kenya",
    members: 1800,
    posts: 445,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920",
    isJoined: false
  },
  {
    id: 5,
    name: "African FinTech Leaders",
    description: "Discussion forum for financial technology innovation and digital banking in Africa.",
    sector: "Finance",
    country: "South Africa",
    members: 2800,
    posts: 678,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1920",
    isJoined: true
  },
  {
    id: 6,
    name: "Renewable Energy Africa",
    description: "Connecting professionals working on sustainable energy solutions across Africa.",
    sector: "Energy",
    country: "Morocco",
    members: 1600,
    posts: 289,
    image: "https://images.unsplash.com/photo-1509390836518-c3b785134897?auto=format&fit=crop&q=80&w=1920",
    isJoined: false
  }
];

const sectors = Array.from(new Set(sampleGroups.map(group => group.sector))).sort();
const countries = Array.from(new Set(sampleGroups.map(group => group.country))).sort();

export function Groups() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredGroups = sampleGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = !selectedSector || group.sector === selectedSector;
    const matchesCountry = !selectedCountry || group.country === selectedCountry;
    
    return matchesSearch && matchesSector && matchesCountry;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Groups</h1>
          <p className="mt-1 text-sm text-gray-500">
            Join thematic groups to connect with professionals in your field
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Group
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Sectors</option>
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
            >
              <Filter className="w-5 h-5" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <Link
            key={group.id}
            to={`/groups/${group.id}`}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 w-full relative">
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">{group.name}</h3>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="flex items-center text-sm text-white">
                    <Users className="w-4 h-4 mr-1" />
                    {group.members.toLocaleString()} members
                  </span>
                  <span className="flex items-center text-sm text-white">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {group.posts} posts
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {group.sector}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {group.country}
                </span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {group.description}
              </p>
              <button
                className={`mt-4 w-full px-4 py-2 rounded-lg text-sm font-medium ${
                  group.isJoined
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  // Handle join/leave
                }}
              >
                {group.isJoined ? 'Joined' : 'Join Group'}
              </button>
            </div>
          </Link>
        ))}
      </div>

      {showCreateModal && (
        <CreateGroupModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
}
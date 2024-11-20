import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, UserPlus, MessageSquare, Users, Building, Star, BadgeCheck, LayoutGrid, Network as NetworkIcon, Tag, MapPin } from 'lucide-react';
import { NetworkGraph } from '../components/NetworkGraph';
import { sampleProfiles } from '../data/sampleProfiles';
import { InviteModal } from '../components/InviteModal';

interface Connection {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  avatar: string;
  trustScore: number;
  verified: boolean;
  sector: string;
  expertise: string[];
  mutualConnections: number;
  status: 'connected' | 'pending';
}

export function Network() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'graph'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  
  const connections = sampleProfiles.map(profile => ({
    ...profile,
    mutualConnections: Math.floor(Math.random() * 30) + 5,
    status: 'connected' as const
  }));

  const invitesRemaining = 3;
  const maxInvites = 5;

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === 'all' || connection.sector === selectedSector;
    const matchesTag = selectedTag === 'all' || connection.expertise.some(tag => 
      tag.toLowerCase().includes(selectedTag.toLowerCase())
    );
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'pending' && connection.status === 'pending') ||
                         (selectedFilter === 'connected' && connection.status === 'connected');
    const matchesCountry = selectedCountry === 'all' || connection.country === selectedCountry;
    
    return matchesSearch && matchesSector && matchesTag && matchesFilter && matchesCountry;
  });

  const sectors = Array.from(new Set(connections.map(c => c.sector))).sort();
  const tags = Array.from(new Set(connections.flatMap(c => c.expertise))).sort();
  const countries = Array.from(new Set(connections.map(c => c.country))).sort();

  const stats = {
    totalConnections: connections.length,
    pendingRequests: connections.filter(c => c.status === 'pending').length,
    newThisWeek: 5,
    trustScore: 85
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Network</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your professional connections and grow your network
          </p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Invite ({invitesRemaining}/{maxInvites})
        </button>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Connections</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalConnections}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingRequests}</p>
            </div>
            <UserPlus className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">New This Week</p>
              <p className="text-2xl font-bold text-gray-900">{stats.newThisWeek}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Trust Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.trustScore}</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search connections..."
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
            <option value="all">All Sectors</option>
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Expertise</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <div className="inline-flex rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-l-lg ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('graph')}
                className={`px-4 py-2 rounded-r-lg ${
                  viewMode === 'graph'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <NetworkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Connections</option>
                <option value="pending">Pending Requests</option>
                <option value="connected">Connected</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* View Content */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConnections.map((connection) => (
            <Link
              key={connection.id}
              to={`/professionals/${connection.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={connection.avatar}
                    alt={connection.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {connection.name}
                      </h3>
                      {connection.verified && (
                        <BadgeCheck className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{connection.role}</p>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Building className="w-4 h-4 mr-1" />
                      {connection.company}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {connection.location}, {connection.country}
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{connection.trustScore}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {connection.mutualConnections} mutual
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <NetworkGraph connections={filteredConnections} />
      )}

      {showInviteModal && (
        <InviteModal
          isOpen={showInviteModal}
          onClose={() => setShowInviteModal(false)}
          invitesRemaining={invitesRemaining}
          maxInvites={maxInvites}
        />
      )}
    </div>
  );
}
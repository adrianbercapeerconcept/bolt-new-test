import React, { useState } from 'react';
import { Building, MapPin, Globe, Edit2, BadgeCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTrust } from '../contexts/TrustContext';
import { TrustMetrics } from './TrustMetrics';
import { ProfileEdit } from './ProfileEdit';

export function ProfileHeader() {
  const { user } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="relative h-48 rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="absolute -bottom-16 left-8">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="pt-20 pb-6 px-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                <BadgeCheck className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-gray-600">Energy Infrastructure Specialist</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  AfriEnergy Solutions
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Lagos, Nigeria
                </span>
                <span className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  portfolio.dev
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowEditProfile(true)}
              className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              <Edit2 className="w-4 h-4 inline-block mr-1" />
              Edit Profile
            </button>
          </div>
          <TrustMetrics />
        </div>
      </div>
      
      {showEditProfile && <ProfileEdit onClose={() => setShowEditProfile(false)} />}
    </>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Briefcase } from 'lucide-react';
import { PostOpportunityModal } from './PostOpportunityModal';

export function QuickActions() {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Link
          to="/send-invitation"
          className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <UserPlus className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-600">
            Send Invitation
          </span>
        </Link>
        <button
          onClick={() => setShowPostModal(true)}
          className="flex items-center justify-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
        >
          <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
          <span className="text-sm font-medium text-orange-600">
            Post Opportunity
          </span>
        </button>
      </div>

      {showPostModal && (
        <PostOpportunityModal
          isOpen={showPostModal}
          onClose={() => setShowPostModal(false)}
        />
      )}
    </>
  );
}
import React from 'react';
import { ProfileHeader } from '../components/ProfileHeader';
import { WorkExperience } from '../components/WorkExperience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Certifications } from '../components/Certifications';
import { Languages } from '../components/Languages';

export function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-20">
      <ProfileHeader />
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600">
              Experienced software engineer with a passion for building scalable cloud solutions
              and mentoring teams. Specialized in distributed systems and microservices architecture.
              Strong advocate for clean code and best practices.
            </p>
          </div>

          <WorkExperience />
          <Education />
        </div>

        <div className="col-span-1 space-y-6">
          <Contact />
          <Skills />
          <Certifications />
          <Languages />
        </div>
      </div>
    </div>
  );
}
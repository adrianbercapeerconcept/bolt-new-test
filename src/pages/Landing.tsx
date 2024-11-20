import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { MainNav } from '../components/MainNav';

export function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      {/* Rest of the Landing page content remains the same */}
    </div>
  );
}
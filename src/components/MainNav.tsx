import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function MainNav() {
  const location = useLocation();
  const isPublicRoute = ['/', '/login', '/signup'].includes(location.pathname);

  if (!isPublicRoute) return null;

  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              TrustWorks
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link 
                to="/#pricing" 
                className="text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    window.location.href = '/#pricing';
                  } else {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/login" 
              className={`text-gray-600 hover:text-gray-900 ${
                location.pathname === '/login' ? 'text-blue-600' : ''
              }`}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
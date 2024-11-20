import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { VerticalNav } from './VerticalNav';
import { Navigation } from './Navigation';
import { FloatingMessages } from './FloatingMessages';
import { NotificationsDropdown } from './NotificationsDropdown';
import { AIAssistant } from './AIAssistant';
import { Home, Network, Users, Briefcase, Building, Calendar, UsersRound, Bell } from 'lucide-react';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const hasUnreadNotifications = true;

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Network, label: 'Network', path: '/network' },
    { icon: Users, label: 'People', path: '/discovery' },
    { icon: Building, label: 'Companies', path: '/companies' },
    { icon: Briefcase, label: 'Opportunities', path: '/opportunities' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: UsersRound, label: 'Groups', path: '/groups' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        hasUnreadNotifications={hasUnreadNotifications}
      />
      <div className="flex pt-16">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <VerticalNav items={navItems} />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Navigation items={navItems} />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 lg:p-8">
          <Outlet />
        </main>

        {/* Floating Messages */}
        <FloatingMessages />

        {/* AI Assistant */}
        <AIAssistant />

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="fixed top-16 right-4 z-50">
            <NotificationsDropdown onClose={() => setShowNotifications(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
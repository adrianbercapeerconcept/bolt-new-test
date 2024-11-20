import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, User, Settings, Award, CreditCard, LogOut, 
  ShoppingCart, Menu, Moon, Sun 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTrust } from '../contexts/TrustContext';
import { useTheme } from '../contexts/ThemeContext';
import { CartDropdown } from './CartDropdown';

interface HeaderProps {
  onMenuToggle: () => void;
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
  hasUnreadNotifications: boolean;
}

export function Header({ onMenuToggle, showNotifications, setShowNotifications, hasUnreadNotifications }: HeaderProps) {
  const { user, logout } = useAuth();
  const { metrics } = useTrust();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const profileMenuItems = [
    { icon: User, label: 'My Profile', path: '/profile' },
    { icon: Award, label: 'Verification Level', path: '/verification' },
    { icon: Settings, label: 'Account & Billing', path: '/account' },
    { icon: CreditCard, label: 'Pricing & Features', path: '/pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2 lg:ml-0">
            TrustWorks
          </Link>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                1
              </span>
            </button>
            {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
          </div>

          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative"
          >
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            {hasUnreadNotifications && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-2"
            >
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                alt={user?.name}
                className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                  <div className="mt-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Verification Level</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(metrics.verificationStatus.id + metrics.verificationStatus.linkedin + metrics.verificationStatus.documents + metrics.verificationStatus.video) * 25}%` }}
                      />
                    </div>
                  </div>
                </div>
                {profileMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Link>
                  );
                })}
                <button
                  onClick={toggleDarkMode}
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-2">
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
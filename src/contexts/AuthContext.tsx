import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  uid: string;
  email: string | null;
  name: string | null;
  avatar: string | null;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  createAccount: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const isAdmin = user?.isAdmin || false;

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate Google sign in
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        uid: 'google-user-id',
        email: 'google@example.com',
        name: 'Google User',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      });
      navigate('/home');
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      // Simulate email sign in
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        uid: 'email-user-id',
        email: email,
        name: 'Email User',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      });
      navigate('/home');
    } catch (err) {
      setError('Failed to sign in with email');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const adminLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Check admin credentials
      if (email === 'admin@trustworks.africa' && password === 'admin123') {
        setUser({
          uid: 'admin-user-id',
          email: email,
          name: 'Admin User',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          isAdmin: true
        });
        navigate('/admin');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid admin credentials');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      // Simulate account creation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        uid: 'new-user-id',
        email: email,
        name: 'New User',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      });
      navigate('/home');
    } catch (err) {
      setError('Failed to create account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulate logout
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
      navigate('/login');
    } catch (err) {
      setError('Failed to log out');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    error,
    signInWithGoogle,
    signInWithEmail,
    adminLogin,
    createAccount,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
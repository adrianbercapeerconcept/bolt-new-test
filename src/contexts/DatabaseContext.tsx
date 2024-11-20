import React, { createContext, useContext } from 'react';
import * as db from '../services/database';
import { useAuth } from './AuthContext';

interface DatabaseContextType {
  getUserProfile: typeof db.getUserProfile;
  updateUserProfile: typeof db.updateUserProfile;
  getConnections: typeof db.getConnections;
  addConnection: typeof db.addConnection;
  getMessages: typeof db.getMessages;
  sendMessage: typeof db.sendMessage;
  getTrustScore: typeof db.getTrustScore;
  updateTrustScore: typeof db.updateTrustScore;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  const value = {
    getUserProfile: db.getUserProfile,
    updateUserProfile: db.updateUserProfile,
    getConnections: db.getConnections,
    addConnection: db.addConnection,
    getMessages: db.getMessages,
    sendMessage: db.sendMessage,
    getTrustScore: db.getTrustScore,
    updateTrustScore: db.updateTrustScore,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}
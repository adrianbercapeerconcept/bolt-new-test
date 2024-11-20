import React, { createContext, useContext, useState } from 'react';

interface TrustMetrics {
  overall: number;
  networkSize: number;
  endorsements: number;
  verificationStatus: {
    id: boolean;
    linkedin: boolean;
    documents: boolean;
    video: boolean;
  };
}

interface TrustContextType {
  metrics: TrustMetrics;
  updateMetrics: (newMetrics: Partial<TrustMetrics>) => void;
}

const TrustContext = createContext<TrustContextType | undefined>(undefined);

export function TrustProvider({ children }: { children: React.ReactNode }) {
  const [metrics, setMetrics] = useState<TrustMetrics>({
    overall: 85,
    networkSize: 142,
    endorsements: 27,
    verificationStatus: {
      id: true,
      linkedin: true,
      documents: false,
      video: false,
    },
  });

  const updateMetrics = (newMetrics: Partial<TrustMetrics>) => {
    setMetrics(prev => ({ ...prev, ...newMetrics }));
  };

  return (
    <TrustContext.Provider value={{ metrics, updateMetrics }}>
      {children}
    </TrustContext.Provider>
  );
}

export function useTrust() {
  const context = useContext(TrustContext);
  if (context === undefined) {
    throw new Error('useTrust must be used within a TrustProvider');
  }
  return context;
}
import React from 'react';
import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { TrustProvider } from './contexts/TrustContext';
import { DatabaseProvider } from './contexts/DatabaseContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <TrustProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </TrustProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
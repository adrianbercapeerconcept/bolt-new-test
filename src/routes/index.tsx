import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home } from '../pages/Home';
import { Network } from '../pages/Network';
import { Discovery } from '../pages/Discovery';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/auth/Login';
import { SignUp } from '../pages/auth/SignUp';
import { EmailVerification } from '../pages/auth/EmailVerification';
import { ProfileCompletion } from '../pages/onboarding/ProfileCompletion';
import { NetworkInitialization } from '../pages/onboarding/NetworkInitialization';
import { LandingPage } from '../pages/LandingPage';
import { Opportunities } from '../pages/Opportunities';
import { OpportunityDetail } from '../pages/OpportunityDetail';
import { VerifyIdentity } from '../pages/verification/VerifyIdentity';
import { AccountBilling } from '../pages/account/AccountBilling';
import { CompanyDirectory } from '../pages/CompanyDirectory';
import { CompanyDetail } from '../pages/CompanyDetail';
import { ReportServices } from '../pages/ReportServices';
import { Checkout } from '../pages/Checkout';
import { Layout } from '../components/Layout';
import { SendInvitation } from '../pages/SendInvitation';
import { ProfessionalDetail } from '../pages/ProfessionalDetail';
import { Events } from '../pages/Events';
import { Groups } from '../pages/Groups';
import { GroupDetail } from '../pages/GroupDetail';
import { AdminLogin } from '../pages/admin/AdminLogin';
import { AdminLayout } from '../pages/admin/AdminLayout';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AdminPeople } from '../pages/admin/AdminPeople';
import { AdminCompanies } from '../pages/admin/AdminCompanies';
import { AdminOpportunities } from '../pages/admin/AdminOpportunities';
import { AdminEvents } from '../pages/admin/AdminEvents';
import { AdminStats } from '../pages/admin/AdminStats';
import { AdminGroups } from '../pages/admin/AdminGroups';

export function AppRoutes() {
  const { user, isAdmin } = useAuth();

  // Public routes accessible without authentication
  const publicRoutes = (
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </>
  );

  // Admin routes
  const adminRoutes = (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="people" element={<AdminPeople />} />
      <Route path="companies" element={<AdminCompanies />} />
      <Route path="opportunities" element={<AdminOpportunities />} />
      <Route path="events" element={<AdminEvents />} />
      <Route path="groups" element={<AdminGroups />} />
      <Route path="stats" element={<AdminStats />} />
    </Route>
  );

  // Onboarding routes
  const onboardingRoutes = (
    <>
      <Route path="/onboarding/profile" element={<ProfileCompletion />} />
      <Route path="/onboarding/network" element={<NetworkInitialization />} />
    </>
  );

  // Protected routes that require authentication
  const protectedRoutes = (
    <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/network" element={<Network />} />
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/opportunities/:id" element={<OpportunityDetail />} />
      <Route path="/companies" element={<CompanyDirectory />} />
      <Route path="/companies/:id" element={<CompanyDetail />} />
      <Route path="/professionals/:id" element={<ProfessionalDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/verification" element={<VerifyIdentity />} />
      <Route path="/account" element={<AccountBilling />} />
      <Route path="/reports" element={<ReportServices />} />
      <Route path="/reports/:companyId" element={<ReportServices />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/send-invitation" element={<SendInvitation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/groups/:id" element={<GroupDetail />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>
  );

  return (
    <Routes>
      {publicRoutes}
      {user ? (
        <>
          {isAdmin && adminRoutes}
          {onboardingRoutes}
          {protectedRoutes}
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}
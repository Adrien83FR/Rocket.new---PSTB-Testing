// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Dashboard from './pages/Dashboard';
import DocumentSelection from './pages/Verification/DocumentSelection';
import BusinessInformation from './pages/Business/Information';
import BusinessPersonalInformation from './pages/Business/PersonalInformation';
import BusinessAccountSetupLanding from './pages/business-account-setup-landing';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verification/document-selection" element={<DocumentSelection />} />
        <Route path="/business/information" element={<BusinessInformation />} />
        <Route path="/business/personal-information" element={<BusinessPersonalInformation />} />
        <Route path="/business-account-setup-landing" element={<BusinessAccountSetupLanding />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
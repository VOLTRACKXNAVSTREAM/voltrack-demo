// File: /Users/sujeevgyawali/Desktop/voltrack-client/src/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';

// Authentication Components
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import ResetPassword from './Components/Authentication/ResetPassword';

// Protected Route Component
import AuthRoute from './Components/Authentication/AuthRoute';

// Main App Components
import Homepage from './App';
import Dashboard from './Components/Dashboard/Dashboard';
import ContentPage from './Components/ContentPage/ContentPage';

function AppRoutes() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route element={<AuthRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/content" element={<ContentPage />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default AppRoutes;
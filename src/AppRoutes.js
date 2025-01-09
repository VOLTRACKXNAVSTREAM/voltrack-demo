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
import ContentPage from './Components/ContentPage/ContentPage';

// Dashboard Components
import Overview from './Components/DashBoardComponent/Overview/Overview';
import Analysis from './Components/DashBoardComponent/Analysis/Analysis';
import Chart from './Components/DashBoardComponent/Charts/Chart';
import Data from './Components/DashBoardComponent/Data/Data';
import Transaction from './Components/DashBoardComponent/Transaction/Transaction';
import Utility from './Components/DashBoardComponent/Utility/Utility';
import Setting from './Components/DashBoardComponent/Setting/Setting';
import Update from './Components/DashBoardComponent/Update/Update';
import Contact from './Components/DashBoardComponent/Contact/Contact';
import AboutUs from './Components/DashBoardComponent/AboutUs/AboutUs';
import PremiumPlans from './Components/DashBoardComponent/PremiumPlans/PremiumPlans';

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
            <Route path="/" element={<Homepage />}>
              <Route path="dashboard/*" element={<ContentPage />}>
                <Route index element={<Overview />} />
                <Route path="analysis" element={<Analysis />} />
                <Route path="chart" element={<Chart />} />
                <Route path="data" element={<Data />} />
                <Route path="transaction" element={<Transaction />} />
                <Route path="utility" element={<Utility />} />
                <Route path="setting" element={<Setting />} />
                <Route path="premium-plans" element={<PremiumPlans />} />
                <Route path="updates" element={<Update />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<AboutUs />} />
              </Route>
            </Route>
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default AppRoutes;
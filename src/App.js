// File: /Users/sujeevgyawali/Desktop/voltrack-client/src/App.js
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/NavBar/Navbar";
import useFetchDeviceData from './Hooks/useFetchDeviceData';

function Homepage() {
  const userId = "Navstream";
  const [dashboardActive, setDashboardActive] = useState(true);
  const [selectedOverview, setSelectedOverview] = useState(0);
  const deviceId = 'voltrack20241019';

  // Get authentication state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Call the custom hook
  useFetchDeviceData(deviceId);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setDashboardActive(false);
    }
  }, []);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full min-h-screen flex bg-neutral-100 dark:bg-black dark:text-slate-200 border-5 border-solid border-gray-300 dark:border-gray-700">
      {dashboardActive && (
        <div className="fixed left-0 top-0 h-full z-20">
          <Dashboard />
        </div>
      )}
      
      <div className={`flex flex-col flex-1 ${dashboardActive ? 'ml-[16vw]' : ''}`}>
        <div className="fixed top-0 z-10"
          style={{ width: dashboardActive ? 'calc(100vw - 16vw)' : '100vw' }}>
          <Navbar
            userId={userId}
            dashboardActive={dashboardActive}
            setDashboardActive={setDashboardActive}
            selectedOverview={selectedOverview}
            setSelectedOverview={setSelectedOverview}
          />
        </div>

        <div className="flex-1 mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
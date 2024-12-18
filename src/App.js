import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";
import ContentPage from "./Components/ContentPage/ContentPage";
import Navbar from "./Components/NavBar/Navbar";
import { Navigate } from "react-router-dom";
import useFetchDeviceData from './Hooks/useFetchDeviceData';

function App() {
  const [userId, setUserId] = useState("Navstream");
  const [dashboardActive, setDashboardActive] = useState(true);
  const [selectedOverview, setSelectedOverview] = useState(0);
  const deviceId = 'voltrack20241019'; // Replace with your device ID or fetch it dynamically

    // Call the custom hook
  useFetchDeviceData(deviceId);

  const tokenHash = localStorage.getItem("authToken");


  // if (tokenHash !== null){
  return (
    <div className="w-full min-h-screen flex bg-[rgba(252,252,252,255)] dark:bg-[#121212] dark:text-slate-200 border-5 border-solid border-gray-300 dark:border-gray-700">
      {/* Adjusting for Dashboard when active */}
      {dashboardActive && (
        <div className="fixed left-0 top-0 h-full z-20">
          <Dashboard />
        </div>
      )}
      
      <div className={`flex flex-col flex-1 ${dashboardActive ? 'ml-[16vw]' : ''}`}>
        {/* Navbar stays fixed at the top */}
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

        {/* The content page scrolls, with space for the Navbar */}
        <div className="flex-1 mt-16 overflow-y-scroll no-scrollbar">
          <ContentPage userId={userId} selectedOverview={selectedOverview} />
        </div>
      </div>
    </div>
  );
// }
}

export default App;

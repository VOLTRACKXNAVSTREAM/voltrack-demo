import React, { useState, useEffect } from "react";
import CellStatBar from "./CellStatBar";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import CircularProgress from '@mui/material/CircularProgress';

function CellStats({ data }) {
  const [loading, setLoading] = useState(true); // State for loading
  const cellVoltages = data["cellVoltage(mV)"] || {}; // Default to empty object
  const cellBalanceStatus = data.CellBalanceStatus || {}; // Default to empty object

  useEffect(() => {
    // Check if data and the relevant keys exist
    if (data && Object.keys(data).length > 0 && Object.keys(cellVoltages).length > 0) {
      setLoading(false); // Set loading to false once data is available
    } else {
      setLoading(true); // Set loading to true when data is not available
    }
  }, [data, cellVoltages]);

  const renderCellStats = () => {
    return Object.entries(cellVoltages).map(([cell, voltage], index) => {
      const balanceStatus = cellBalanceStatus[index + 1]; // Match balance status by cell number
      const formattedVoltage = voltage
        ? `${(voltage / 1000).toFixed(3)} V` // Convert mV to V and format
        : "N/A"; // Handle null or undefined voltage

      return (
        <CellStatBar
          key={cell}
          icon={<FaBatteryThreeQuarters color="#fff" />}
          content={cell || "Unknown Cell"} // Fallback for missing cell name
          voltage={formattedVoltage}
          status={balanceStatus !== undefined ? balanceStatus : "N/A"} // Handle missing status
          bgIcon={"bg-blue-400"} // Customize as needed
        />
      );
    });
  };

  return (
    <div className="px-3 flex flex-1 flex-col lg:w-full h-96 border border-gray-300 dark:border-gray-700 md:w-full sm:w-full gap-2 bg-white dark:bg-[#0d0e0f] rounded-xl p-2">
      <div className="text-gray-800 dark:text-blue-400 font-semibold p-2 border-b dark:border-gray-600">
        Cell Statistics
      </div>
      {loading ? (
        <div className="flex items-center ml-2">
          <span className="mr-2">Fetching Data</span>
          <CircularProgress size={14} className="mr-2" /> {/* Activity Indicator */}
        </div>
      ) : (
        <div className="px-2 alert h-[90%] overflow-hidden shadow-md rounded-xl overflow-y-scroll no-scrollbar">
          {Object.keys(cellVoltages).length > 0 ? renderCellStats() : <p>No data available</p>}
        </div>
      )}
    </div>
  );
}

export default CellStats;

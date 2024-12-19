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

      return (
        <CellStatBar
          key={cell}
          icon={<FaBatteryThreeQuarters color="#fff" />}
          content={cell || "Unknown Cell"} // Fallback for missing cell name
          voltage={voltage ? voltage : "N/A"} // Handle missing voltage
          status={balanceStatus !== undefined ? balanceStatus : "N/A"} // Handle missing status
          bgIcon={"bg-blue-400"} // Customize as needed
        />
      );
    });
  };

  return (
    <div className="px-2 py-4 flex flex-1 flex-col lg:w-full h-96 dark:border-gray-700 md:w-full sm:w-full gap-2 bg-white dark:bg-opacity-10 rounded-xl">
      <div className="px-2 py-2 flex items-center justify-between border-b dark:border-gray-600">
      <div className="text-gray-800 dark:text-blue-400 font-semibold">
        Cell Statistics
      </div>
      <div className="font-semibold ml-2">Voltage</div>
        <div className="font-semibold mr-2">Balanced</div>
      </div>
      {loading ? (
        <div className="flex items-center ml-2">
          <span className="mr-2">Fetching Data</span>
          <CircularProgress size={14} className="mr-2" /> {/* Activity Indicator */}
        </div>
      ) : (
        <div className="px-2 pb-3 alert h-[90%] overflow-hidden rounded-xl overflow-y-scroll no-scrollbar">
          {Object.keys(cellVoltages).length > 0 ? renderCellStats() : <p>No data available</p>}
        </div>
      )}
    </div>
  );
}

export default CellStats;

import React, { useState, useEffect } from "react";
import IndicatorBar from "./IndicatorBar";
import { CiWarning } from "react-icons/ci";
import CircularProgress from '@mui/material/CircularProgress';

function Indicators({ data }) {
  const [loading, setLoading] = useState(true); // State for loading
  const error = data.ErrorCode || {}; // Default to empty object
  const warning = data.Warning || {}; // Default to empty object
  const status = data.Status || {}; // Default to empty object
  const protection = data.Protection || {}; // Default to empty object

  useEffect(() => {
      // Check if data and the relevant keys exist
      if (data && Object.keys(data).length > 0 && Object.keys(error).length > 0 && Object.keys(warning).length > 0 && Object.keys(status).length > 0 && Object.keys(protection).length > 0) {
        setLoading(false); // Set loading to false once data is available
      } else {
        setLoading(true); // Set loading to true when data is not available
      }
    }, [data, ]);

  const mapData = (dataObj, type) => {
    if (!dataObj || Object.keys(dataObj).length === 0) {
      return <p>No {type} available</p>;
    }

    return Object.entries(dataObj).map(([key, value]) => {
      const formattedValue = value !== null && value !== undefined ? value : "N/A"; // Handle null values
      return (
        <IndicatorBar
          key={key}
          icon={<CiWarning color="#000" />}
          content={key || "Unknown"} // Fallback for missing keys
          value={formattedValue}
        />
      );
    });
  };

  return (
    <div className="px-1 py-4 flex h-96 flex-col lg:w-full dark:border-gray-700 md:w-full sm:w-full shadow-sm gap-2 bg-white dark:bg-opacity-10 rounded-xl p-2">
      <div className="text-gray-800 dark:text-blue-400 font-semibold p-2 border-b dark:border-gray-600">
        Alerts & Warnings
      </div>
      {loading ? (
        <div className="flex items-center ml-2">
          <span className="mr-2">Fetching Data</span>
          <CircularProgress size={14} className="mr-2" /> {/* Activity Indicator */}
        </div>
      ) : (
        <div className="px-2 alert h-[90%] overflow-hidden rounded-xl overflow-y-scroll no-scrollbar text-bg-black">
          {/* Map Charging, Discharging, and Heater Status */}
          {mapData(data.Status, "Status")}

          {/* Map Warnings */}
          {mapData(data.Warning, "Warnings")}

          {/* Map Errors */}
          {mapData(data.ErrorCode, "Errors")}

          {/* Map Protections */}
          {mapData(data.Protection, "Protections")}
        </div>
      )}
    </div>
  );
}

export default Indicators;

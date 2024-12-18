import React, { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress'; // Import the Activity Indicator

function MainPageCards({ icon, graph, lGraph, title, value, unit, graphContainerClass }) {
  const [dataValue, setDataValue] = React.useState(null);
  const [unitName, setUnitName] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true); // Track loading state

  useEffect(() => {
    // Check if the value is valid (not null, undefined, or NaN)
    if (value !== null && value !== undefined && !isNaN(value)) {
      setDataValue(value === 0 ? 0 : Math.abs(value)); // Handle 0 explicitly
      setUnitName(unit);
      setIsLoading(false); // Set loading to false once data is valid
    } else {
      setDataValue("Fetching Data");
      setUnitName("");
      setIsLoading(true); // Set loading to true when data is not available
    }
  }, [value, unit]);

  return (
    <div className="bg-white dark:bg-[#0d0e0f] border border-gray-300 dark:border-gray-700 w-full h-full flex flex-col p-5 rounded-xl">
      {/* Upper div contains progress bar and icon */}
      <div className="flex items-center justify-between h-auto border-b-2 dark:border-gray-600 pb-2">
        <div className="text-blue-600 dark:text-blue-400 font-semibold">{title}</div>
      </div>

      {/* Value Section */}
      <div className="my-2 h-auto">
        <div className="text-2xl font-semibold dark:text-slate-200">
          {isLoading ? (
            <div className="flex items-center">
              <span className="mr-2">Fetching Data</span>
              <CircularProgress size={18} className="mr-2" /> {/* Activity Indicator */}
            </div>
          ) : (
            <>
              {dataValue} {unitName}
            </>
          )}
        </div>
      </div>

      {/* Graph Section */}
      <div className={`flex-1 flex items-center justify-center ${graphContainerClass || ''}`}>
        {lGraph}
      </div>
    </div>
  );
}

export default MainPageCards;

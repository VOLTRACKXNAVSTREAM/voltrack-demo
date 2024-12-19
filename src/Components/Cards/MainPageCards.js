import React, { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress'; // Import the Activity Indicator

function MainPageCards({ icon, graph, lGraph, title, value, unit, graphContainerClass, valueColor = "text-black-600" }) {
  const [dataValue, setDataValue] = React.useState(null);
  const [unitName, setUnitName] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true); // Track loading state

  useEffect(() => {
    // Check if the value is valid (not null, undefined, or NaN)
    if (value !== null && value !== undefined && !isNaN(value)) {
      setDataValue(value === 0 ? 0 : value); // Handle 0 explicitly
      setUnitName(unit);
      setIsLoading(false); // Set loading to false once data is valid
    } else {
      setDataValue("Fetching Data");
      setUnitName("");
      setIsLoading(true); // Set loading to true when data is not available
    }
  }, [value, unit]);

  return (
    <div className="bg-white dark:bg-opacity-10 shadow-md w-full h-full flex flex-col p-3 rounded-xl">
      {/* Upper div contains progress bar and icon */}
      <div className="flex items-center justify-between h-auto border-b-2 dark:border-neutral-600 pb-2">
        <div className="text-black-600 dark:text-white-400 font-semibold">{title}</div>
      </div>

      {/* Value Section */}
      <div className="my-2 h-auto">
        <div 
        className={`text-2xl font-bold dark:text-white-400`}
        style={{ color: valueColor }}
        >
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

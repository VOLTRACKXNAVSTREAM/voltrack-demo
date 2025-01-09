import React, { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

function MainPageCards({ 
  icon, 
  graph, 
  lGraph, 
  title, 
  value, 
  unit, 
  graphContainerClass, 
  valueColor = "text-black-600", 
  device 
}) {
  const [dataValue, setDataValue] = React.useState(null);
  const [unitName, setUnitName] = React.useState(null);
  // const [previousDevice, setPreviousDevice] = React.useState(null);
  const [isFirstLoad, setIsFirstLoad] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Process value when device is consistent
      if (value !== null && value !== undefined && !isNaN(value)) {
        // Valid data received
        setDataValue(value === 0 ? 0 : value);
        setUnitName(unit);
        // Exit loading state only for first load or when data is valid
        if (isFirstLoad) {
          setIsLoading(false);
          setIsFirstLoad(false);
        }
        console.log(`[${title}] Data updated for device: ${device}`, { value });
      } else if (isFirstLoad) {
        // Keep loading state if no valid data on first load
        setDataValue("Fetching Data");
        setUnitName("");
        setIsLoading(true);
        console.log(`[${title}] Waiting for data for device: ${device}`);
      }
  }, [value, unit, device, isFirstLoad, title]);

  return (
    <div className="bg-white dark:bg-opacity-10 shadow-md w-full h-full flex flex-col p-3 rounded-xl">
      <div className="flex items-center justify-between h-auto border-b-2 dark:border-neutral-600 pb-2">
        <div className="text-black-600 dark:text-white-400 font-semibold">{title}</div>
      </div>

      <div className="my-2 h-auto">
        <div 
          className={`text-2xl font-bold dark:text-white-400`}
          style={{ color: valueColor }}
        >
          {isLoading ? (
            <div className="flex items-center">
              <span className="mr-2">Fetching Data</span>
              <CircularProgress size={18} className="mr-2" />
            </div>
          ) : (
            <>
              {dataValue} {unitName}
            </>
          )}
        </div>
      </div>

      <div className={`flex-1 flex items-center justify-center ${graphContainerClass || ''}`}>
        {lGraph}
      </div>
    </div>
  );
}

export default MainPageCards;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { safeSetSelectedDevice } from "../../Redux/Slices/deviceSlice";
import SelectData from "../../Constants/SelectData";

const Select = () => {
  const dispatch = useDispatch(); 
  
  // Initialize selected device from localStorage or first device
  const [selectedDevice, setLocalSelectedDevice] = useState(() => {
    const storedDevice = localStorage.getItem('selectedDevice');
    return storedDevice 
      ? JSON.parse(storedDevice) 
      : SelectData[0]; // Default to first device if no selection
  });

  // Handle device selection
  const handleDeviceChange = (event) => {
    const selectedId = event.target.value;
    const device = SelectData.find(item => item.id === parseInt(selectedId));
    
    if (device) {
      // Update localStorage with selected device
      const deviceToStore = {
        ...device,
        device_uid: device.device_uid || device.name // Ensure device_uid is set
      };

      localStorage.setItem('selectedDevice', JSON.stringify(deviceToStore));
      
      // Update local state
      setLocalSelectedDevice(deviceToStore);

      // Dispatch to Redux store using safe action creator
      dispatch(safeSetSelectedDevice(deviceToStore));
    }
  };

  // Effect to ensure initial device is set in localStorage and Redux
  useEffect(() => {
    if (!localStorage.getItem('selectedDevice')) {
      const initialDevice = {
        ...SelectData[0],
        device_uid: SelectData[0].device_uid || SelectData[0].name
      };
      
      localStorage.setItem('selectedDevice', JSON.stringify(initialDevice));
      dispatch(safeSetSelectedDevice(initialDevice));
    }
  }, [dispatch]);

  return (
    <li className="max-w-full flex flex-wrap items-center px-3 mb-1 mt-2 text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded-lg">
      <label 
        htmlFor="Select" 
        className="mr-2 font-medium text-sm sm:text-sm whitespace-nowrap mt-2"
      >
        Select Device:
      </label>
      <select 
        name="Select" 
        id="select" 
        value={selectedDevice.id}
        onChange={handleDeviceChange}
        className="p-1 mt-2 sm:mt-2 sm:mb-2 bg-white dark:bg-gray-900 text-black dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-xs w-full sm:w-full"
      >
        {SelectData.map(({ id, name, device_uid }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </li>
  );
};

export default Select;
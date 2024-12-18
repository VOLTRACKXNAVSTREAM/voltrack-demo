import React from "react";
import SelectData from "../../Constants/SelectData";

const Select = () => {
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
        className="p-1 mt-2 sm:mt-2 sm:mb-2 bg-white dark:bg-gray-900 text-black dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-xs w-full sm:w-full"
      >
        {SelectData.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </li>
  );
};

export default Select;

import React from 'react';
import { FaCircle } from "react-icons/fa";

function CellStatBar({ icon, content, bgIcon, voltage, status }) {
  return (
    <div className="p-2 w-full flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      {/* Icon and Content */}
      <div className="flex gap-4 items-center">
        <span className={`p-2 rounded-full text-base ${bgIcon} text-white`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {content}
        </span>
      </div>

      {/* Voltage and Status */}
      <div className="flex gap-4 items-center">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Voltage: {voltage}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Balance Status:
          </span>
          {/* Red or Green dot for status */}
          <FaCircle
            className={`text-xs ${status ? 'text-green-500' : 'text-red-500'}`}
          />
        </span>
      </div>
    </div>
  );
}

export default CellStatBar;

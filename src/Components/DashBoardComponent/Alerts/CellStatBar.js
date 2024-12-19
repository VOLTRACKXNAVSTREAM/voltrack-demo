import React from 'react';
import { FaCircle } from "react-icons/fa";

function CellStatBar({ icon, content, bgIcon, voltage, status }) {
  return (
    <div className="p-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      {/* Icon and Content */}
      <div className="flex gap-4 items-center flex-grow">
        <span className={`p-2 rounded-full text-base ${bgIcon} text-white`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {content}
        </span>
      </div>

      {/* Voltage and Status */}
      <div className="flex gap-8 items-center justify-between flex-grow">
        <span className="text-sm font-semibold min-w-[80px] text-center items-center justify-center"
          style={{ color: voltage >= 3000 ? "#1f2937" : "#ef4444" }}
        >
          {voltage > 0 ? (voltage/1000).toFixed(3) + " V" : "0 V"}
        </span>
        <span className="flex items-center gap-2 items-center justify-center">
          {/* Red or Green dot for status */}
          <FaCircle
            className={`text-m ${status ? 'text-green-500' : 'text-red-500 text-right'}`}
          />
        </span>
      </div>
    </div>
  );
}

export default CellStatBar;

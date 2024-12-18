import React from "react";

function SmallCards({icon, graph, lGraph, title, value, unit}) {
  return (
    <div className="bg-white dark:bg-[#0d0e0f] border border-gray-300 dark:border-gray-700 w-full h-full flex flex-col p-5 rounded-xl">
      {/* Upper div contains progress bar and icon */}
      <div className="flex items-center justify-between h-auto border-b-2 dark:border-gray-600 pb-2">
        <div className="text-blue-600 dark:text-blue-400 font-semibold">{title}</div>

        <div className="text-gray-700 dark:text-gray-400 text-sm">
          <span className="block">X: {title}</span>
          <span className="block">Y: Time</span>
        </div>
      </div>
      
      {/* Lower div */}
        <div className="w-full max-h-auto flex flex-1 text-2xl font-semibold dark:text-slate-200">
          {value}{unit}
        </div>
    </div>
  );
}

export default SmallCards;

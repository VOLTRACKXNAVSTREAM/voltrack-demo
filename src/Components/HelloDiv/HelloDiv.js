import React from "react";
import ReactDateRangeCalendar from "../DashBoardComponent/ReactCalendar/ReactDateRangeCalendar";

function HelloDiv({ name, button1, analysisPageSwitcher, setAnalysisPageSwitcher }) {
  return (
    <div className="m-2 py-2 h-15 dark:text-slate-200 rounded-md flex justify-between items-center snap-start">
      <div>
        <h2 className="font-bold text-2xl text-slate-600 dark:text-slate-100 font-inter"> {name} </h2>
      </div>
      
      <div className="flex gap-2 items-center">
        <div className="p-2 font-bold text-2xl hover:text-gray-500 dark:hover:text-gray-400" onClick={() => setAnalysisPageSwitcher(!analysisPageSwitcher)}>
          {button1}
        </div>
        <ReactDateRangeCalendar />
        <div className="px-5 py-2 flex justify-center items-center rounded-lg shadow-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-600  dark:hover:bg-blue-800 font-semibold text-white">
          Report
        </div>
      </div>
    </div>
  );
}

export default HelloDiv;

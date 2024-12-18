import React from "react";
import { useState, useEffect, useRef } from "react";

import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsCalendar2 } from "react-icons/bs";

function ReactDateRangeCalendar() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  const clickRef = useRef(null);
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const hideOnClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="w-60 p-2 rounded-lg outline-none border bg-white dark:bg-[#0d0e0f] hover:border-gray-400  resize-none font-semibold text-gray-600 dark:text-white flex gap-4 items-center "
        onClick={() => setOpen(!open)}
      >
        <BsCalendar2 />
        <div className="w-fit outline-none">
          {format(range[0].startDate, "dd/MM/yyyy")} -{" "}
          {format(range[0].endDate, "dd/MM/yyyy")}
        </div>
      </div>
      <div ref={clickRef} className=" absolute right-0 my-2">
        {open && (
          <DateRange
            date={new Date()}
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement dark:dark-mode-calendar z-10 border dark:border-gray-700 shadow-lg"
          />
        )}
      </div>
    </div>
  );
}

export default ReactDateRangeCalendar;

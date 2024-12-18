// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { BsCalendar2 } from "react-icons/bs";
// import { DateRangePicker} from "react-date-range";
// import {addDays} from "date-fns";
// import format from "date-fns/format";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// function ReactDateRangePicker() {
//   const [range,setRange] = useState([{
//     startDate: new Date(),
//     endDate:addDays(new Date(),7),
//     key:'selection'
//   }]);
//   const [open, setOpen] = useState(false);
 
//   useEffect(() => {
//     document.addEventListener("keydown", hideOnEscape, true);
//     document.addEventListener("click", hideOnClickOutside, true);
//   }, []);
//   const clickRef = useRef(null);
//   const hideOnEscape = (e) => {
//     if (e.key === "Escape") {
//       setOpen(false);
//     }
//   };
//   const hideOnClickOutside = (e) => {
//     if (clickRef.current && !clickRef.current.contains(e.target)) {
//       setOpen(false);
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="w-60 p-2 rounded-lg outline-none border-2 bg-white hover:border-gray-400 resize-none font-semibold text-gray-600 flex gap-4 items-center " onClick={() => setOpen(!open)}>
//       <BsCalendar2 />
//       <div
      
//         className="w-fit outline-none"
        
//       >
//          {format(range[0].startDate,'dd/MM/yyyy')} - {format(range[0].endDate,'dd/MM/yyyy')}
//         </div>
//       </div>
//       <div ref={clickRef} className=" absolute right-0 my-2">
//         {open && (
//           <DateRangePicker
//             date={new Date()}
//             onChange={item=> setRange([item.selection])}
//             editableDateInputs={true}
//             moveRangeOnFirstSelection={false}
//             ranges={range}
//             months={2}
//             direction="horizontal"
//             className="calendarElement z-10 border-2 shadow-lg"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ReactDateRangePicker;

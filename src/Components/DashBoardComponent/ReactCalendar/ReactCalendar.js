// import React from "react";
// import { useState, useEffect, useRef } from "react";

// import { Calendar } from "react-date-range";
// import format from "date-fns/format";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { BsCalendar2 } from "react-icons/bs";

// function ReactCalendar() {
//   const [calendar, setCalendar] = useState(new Date());
//   const [open, setOpen] = useState(false);
//   const handleSelect = (date) => {
//     setCalendar(format(date, "dd/MM/yyyy"));
//   };
//   useEffect(() => {
//     setCalendar(format(new Date(), "dd/MM/yyyy"));
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
//       <div
//         className="w-60 p-2 rounded-lg outline-none border-2 bg-white hover:border-gray-400 resize-none font-semibold text-gray-600 flex gap-4 items-center"
//         onClick={() => setOpen(!open)}
//       >
//         <BsCalendar2 />
//         <div className="w-fit outline-none">
//         {calendar}
//         </div>
//       </div>
      
//       <div ref={clickRef} className="absolute right-0 my-2">
//         {open && (
//           <Calendar
//             date={new Date()}
//             onChange={handleSelect}
//             className="calendarElement z-10 border-2 shadow-lg "
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ReactCalendar;

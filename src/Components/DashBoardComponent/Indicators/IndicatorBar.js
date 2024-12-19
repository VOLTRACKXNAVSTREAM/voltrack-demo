import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function IndicatorBar({icon,content, bgIcon,value}) {
  return (
    <div className="p-1 w-full flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className={`p-2 rounded-full text-base bg-slate-200 text-white`}>
                {" "}
                {icon}
              </span>
              <span className="text-sm font-medium text-black-500"> {content}</span>
            </div>
           
              <div className={`justify-end flex gap-2 p-2 items-center rounded-full ${value?"bg-red-600":"bg-green-500"}`}>

              </div>
            
          </div>
  )
}

export default IndicatorBar

import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function GraphContainer({ children,title}) {
  const [arrowBtn, setArrowBtn] = useState(false);
  return (
    
    
    
    <div className="m-2">
      <div className="p-3 bg-white dark:bg-gray-600 dark:text-white rounded-md shadow-md w-full h-full flex justify-between items-center">
        <span>{title}</span>
        <span
          onClick={() => {
            setArrowBtn(!arrowBtn);
          }}
        >
          {arrowBtn ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {!arrowBtn && (
        <div className="mt-1 p-3 bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-md  w-full h-full">
          {children}
        </div>
      )}
    </div>
    
    
   
  );
}

export default GraphContainer;

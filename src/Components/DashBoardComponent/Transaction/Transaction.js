import React, { useState } from 'react'
import HelloDiv from '../../HelloDiv/HelloDiv'
import { GoSearch } from "react-icons/go";

function Transaction() {
  const [amount, setAmount] = useState(20000)
  const [activeFilter, setActiveFilter] = useState("viewAll")

  return (
    <div className='w-full '>
      <HelloDiv name={"$ " + amount} />
      <div className='p-2 flex gap-4 text-md font-medium items-center'>
        <div className={`p-2 border-2 border-gray-300 rounded-xl ${activeFilter === 'viewAll' ? "bg-black text-white" : ""}`} onClick={() => setActiveFilter('viewAll')}>View All</div>
        <div className={`p-2 border-2 border-gray-300 rounded-xl ${activeFilter === 'completed' ? "bg-black text-white" : ""}`} onClick={() => setActiveFilter('completed')}>Completed</div>
        <div className={`p-2 border-2 border-gray-300 rounded-xl ${activeFilter === 'pending' ? "bg-black text-white" : ""}`} onClick={() => setActiveFilter('pending')}>Pending</div>
        <div className={`p-2 border-2 border-gray-300 rounded-xl ${activeFilter === 'canceled' ? "bg-black text-white" : ""}`} onClick={() => setActiveFilter('canceled')}>Canceled</div>
        
        <div className="flex gap-2 ml-auto mr-2">
          <div className="w-60 p-2 rounded-lg outline-none border-2 bg-white hover:border-gray-400 resize-none font-semibold text-lg text-gray-600 flex gap-4 items-center">
            <GoSearch /> 
            
            <input type="text" placeholder='Search ...' className="w-full outline-none" />
          </div>
          
          <div className="p-2 flex justify-center items-center rounded-lg shadow-md bg-blue-800 hover:bg-blue-100 bg-opacity-10 font-semibold text-gray-600">search</div>
        </div>
      </div>
    </div>
  )
}

export default Transaction

import React from 'react'

function Overview3() {
  return (
    <div className='w-full h-full p-5 flex flex-col  gap-5 flex-wrap'>
      {/* row 1 */}
      <div className='w-full flex gap-5'>

        {/* card 1 */}

        <div className='lg:w-1/5 md:w-full sm:w-full bg-white dark:bg-gray-900 rounded-xl '>
          <div className=' px-3 m-2 flex justify-between items-center'>
            <div className='w-36 h-11 mb-1'>
              <div className="text-xs font-[-apple-system] text-[#918ea3] "> USERS</div>
              <div className="text-2xl font-[Roboto,-apple-system,BlickMacSystemFont,sans-serif] font-medium ">2390</div>

            </div>
            <div className='w-36 h-11'>
                52%
            </div>
          </div>
          <div>
            
          </div>
        </div>


      </div>

    </div>
  )
}

export default Overview3

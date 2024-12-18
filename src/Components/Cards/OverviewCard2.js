import React from 'react'

function OverviewCard2({name, symbol, data, percentage}) {
  return (
    <div className='lg:w-1/5 h-40 min-w-[20%] flex-auto md:w-full sm:w-full p-5 flex flex-col justify-evenly bg-white dark:bg-[#0d0e0f]'>
      <div className='w-full text-sm flex justify-between'>
        <div className='h-10 text-[#939BA2] dark:text-[#A1A1A6] font-semibold leading-tight'>{name}</div>
        <div className='w-10 h-10 rounded-full bg-[#D3E2F7] dark:bg-[#3B7DDD26] text-[#3B7DDD] flex items-center justify-center'>{symbol}</div>
      </div>
      <h1 className='text-2xl mb-5 text-black dark:text-slate-200'>{data}</h1>
      <div className='text-xs'>
        <span className={`py-0.5 px-1.5 ${percentage > -1 ? "text-[#1CBB8C] bg-[#1CBB8C26]" : "text-[#DC3545] bg-[#DC354526]"}`}>
          {percentage + "%"}
        </span>
        <span className='px-2 text-sm text-[#495057BF] dark:text-[#A1A1A6BF]'>since last week</span>
      </div>
    </div>
  )
}

export default OverviewCard2;

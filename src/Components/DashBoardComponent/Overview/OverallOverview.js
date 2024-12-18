import React from 'react'
import BarGraphSimple from '../../Graph/BarGraph/BarGraphSimple'

function OverallOverview() {
  return (
    <div className='w-full min-h-screen p-5 flex flex-col gap-5'>
      <div className='w-1/2'>
        <BarGraphSimple/>
      </div>
    </div>
  )
}

export default OverallOverview

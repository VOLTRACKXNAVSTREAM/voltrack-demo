import React from 'react'
import TableRow from './TableRow'

function TableType1() {
  return (
    <div className='p-2 w-[40vw] flex gap-5 flex-wrap items-center'>
        <TableRow name={"voltage"} alert={true}/>
        <TableRow name={"current"} alert={false}/>
        <TableRow name={"temperature"} alert={true}/>
        <TableRow name={"current"} alert={false}/>
        <TableRow name={"temperature"} alert={true}/>
        <TableRow name={"voltage"} alert={true}/>
        <TableRow name={"current"} alert={false}/>
    </div>
  )
}

export default TableType1

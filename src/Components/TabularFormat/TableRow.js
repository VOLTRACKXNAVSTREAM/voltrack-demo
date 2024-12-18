import React from 'react';

function TableRow({ name, alert }) {
  return (
    <div className={`flex gap-5 items-center p-5 rounded-lg shadow-lg `}>
      {/* Name */}
      <div>{name}</div>

      {/* Indicator */}
      <div className={`rounded-full h-4 w-4 ${alert ? 'bg-red-500' : 'bg-green-500'}`}></div>
    </div>
  );
}

export default TableRow;

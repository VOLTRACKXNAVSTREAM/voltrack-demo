import React from "react";

function PlanCard() {
  return (
    <div className="w-1/4 flex flex-col justify-center  gap-5 border-t-green-600 border-t-4 border-2 border-gray-500 rounded-lg">
      <div className="p-6 flex flex-col justify-center gap-5">
        <div>
          <span className="text-white bg-green-500 rounded-full p-2">icon</span>
          <span className="text-2xl font-semibold"> Basics</span>
        </div>
        <div className="text-lg  text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti
          quo eligendi, eum quidem, laborum,
        </div>
        <div className="font-bold text-gray-700 self-center text-2xl">$14/month</div>

        <div className="py-2 px-12 font-medium text-lg border-2 self-center rounded-lg hover:border-gray-400">
          Buy Plan
        </div>
      </div>
      <div className="w-full border-t-2 p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold"> WHAT'S INCLUDED </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-2 justify-center items-center">
              <div>**</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <div>**</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <div>**</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <div>**</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <div>**</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;

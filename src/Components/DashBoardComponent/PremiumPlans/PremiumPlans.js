import React from "react";
import PlanCard from "./PlanCard";
function PremiumPlans() {
  return (
    
    <div className="bg-white p-8 h-full w-full flex flex-col gap-5 overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-end hover:scroll-my-48">
        <h1 className="text-3xl font-bold ">Plans</h1>
        <h2 className="my-4 text-gray-700">
          This workspace’s Basic Plan is set to $34 per month and will renew on
          July 9, 2024.{" "}
        </h2>
      </div>
      <div className="snap-end">
        <span className=" text-gray-500 font-semibold"> Monthly </span>
        <span className=" text-gray-500 font-semibold">Annually</span>
      </div>
      <div className="flex gap-5 snap-end">
       <PlanCard/>
       <PlanCard/>
       <PlanCard/>
       <PlanCard/>
      </div>
    </div>
    
   
   
  );
}

export default PremiumPlans;

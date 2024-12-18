import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../DashBoardComponent/Overview/Overview";
import Analysis from "../DashBoardComponent/Analysis/Analysis";
import Chart from "../DashBoardComponent/Charts/Chart";
import Data from "../DashBoardComponent/Data/Data";
import Transaction from "../DashBoardComponent/Transaction/Transaction";
import Utility from "../DashBoardComponent/Utility/Utility";
import Setting from "../DashBoardComponent/Setting/Setting";
import Update from "../DashBoardComponent/Update/Update";
import Contact from "../DashBoardComponent/Contact/Contact";
import AboutUs from "../DashBoardComponent/AboutUs/AboutUs";
import PremiumPlans from "../DashBoardComponent/PremiumPlans/PremiumPlans";
import Overview2 from "../DashBoardComponent/Overview/Overview2";


function ContentPage({userId,selectedOverview}) {
  return (
    <div className="flex-1 text-10xl mx-2 dark:bg-white-800 min-h-screen overflow-y-scroll no-scrollbar ">
      
     
      <Routes>
        {/* <Route path="/" element={<Overview userId={userId}/>}/> */}
        <Route path="/" element={<Overview userId={userId} selectedOverview={selectedOverview}/>}/>
        {/* <Route path="/analysis" element={<Analysis/>}/> */}
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/utility" element={<Utility/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/premium-plans" element={<PremiumPlans/>}/>
        <Route path="/updates" element={<Update/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>


    </div>
    
      
    
    
    
 
  );
}

export default ContentPage;

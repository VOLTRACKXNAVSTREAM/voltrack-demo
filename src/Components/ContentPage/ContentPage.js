import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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

function ContentPage({userId, selectedOverview = 0}) {
  return (
    <div className="flex-1 text-10xl mx-2 dark:bg-white-800 min-h-screen overflow-y-scroll no-scrollbar">
      <Routes>
        <Route index element={<Overview userId={userId} selectedOverview={selectedOverview}/>}/>
        <Route path="analysis" element={<Analysis userId={userId} selectedOverview={selectedOverview}/>}/>
        <Route path="chart" element={<Chart/>}/>
        <Route path="data" element={<Data/>}/>
        <Route path="transaction" element={<Transaction/>}/>
        <Route path="utility" element={<Utility/>}/>
        <Route path="setting" element={<Setting/>}/>
        <Route path="premium-plans" element={<PremiumPlans/>}/>
        <Route path="updates" element={<Update/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="*" element={<Outlet context={{ userId, selectedOverview }} />}/>
      </Routes>
    </div>
  );
}

export default ContentPage;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardData from "../../Constants/DashboardData";
import Select from "./Select";
import DashboardItem from "./DashboardItem";
import logo from "../../Images/logo-white.png";
import darklogo from "../../Images/logo-dark.png";

function Dashboard() {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  const handleSetActiveItem = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="w-[16vw] lg:w-[16vw] md:w-[16vw] sm:w-[25vw] h-full text-[#1F2937] bg-[rgba(244,246,250,255)] dark:bg-[#0c0f17] dark:text-gray-300 border-r border-gray-300 dark:border-gray-600">
      <ul className="p-2 font-sans text-sm font-semibold">
        <div className="h-18 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="block dark:hidden w-2/3 md:w-1/2"
          />
          <img
            src={darklogo}
            alt="DarkLogo"
            className="hidden dark:block w-2/3 md:w-1/2"
          />
        </div>
        <Select />
        {DashboardData.map((item, index) => (
          <DashboardItem
            item={item}
            key={index}
            isActive={
              location.pathname === item.link ||
              (item.submenu &&
                item.submenu.some(
                  (subItem) =>
                    subItem.link === location.pathname ||
                    (subItem.submenu &&
                      subItem.submenu.some(
                        (nestedItem) => nestedItem.link === location.pathname
                      ))
                ))
            }
            setActiveItem={handleSetActiveItem}
            locationPath={location.pathname}
            activeItem={activeItem}
          />
        ))}
      </ul>

      <div className="absolute bottom-0 w-full p-2 text-center text-xs font-semibold font-Inter text-gray-900 dark:text-gray-300">
        © 2024 Navstream Innovations LLP
      </div>
    </div>
  );
}

export default Dashboard;

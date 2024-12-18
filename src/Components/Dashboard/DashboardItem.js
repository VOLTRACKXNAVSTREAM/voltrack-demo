import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SubMenuItems from "./SubMenuItems";

function DashboardItem({ item, isActive, setActiveItem, locationPath }) {
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    const isSubItemActive = item.submenu?.some(
      (subItem) =>
        subItem.link === locationPath ||
        (subItem.submenu &&
          subItem.submenu.some((nestedItem) => nestedItem.link === locationPath))
    );

    if (isActive || isSubItemActive) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isActive, locationPath, item.submenu]);

  const toggleOpen = () => {
    if (isOpen) {
      setActiveItem(null);
    } else {
      setActiveItem(item.name);
    }
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={`${
        isActive
          ? "bg-[#ebeef4] dark:bg-[#1d2230] text-black dark:text-white rounded-lg "
          : "bg-transparent text-[#505259] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {item.submenu && item.submenu.length > 0 ? (
        <div
          className={`flex items-center justify-between p-2 cursor-pointer`}
          onClick={toggleOpen}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            {item.name}
          </div>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      ) : (
        <NavLink
          to={item.link}
          className={`flex items-center gap-3 p-2 cursor-pointer ${
            isActive
              ? "bg-[#ebeef4] dark:bg-[#1d2230] text-black dark:text-white rounded-lg "
              : "text-[#505259] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={() => setActiveItem(item.name)}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            {item.name}
          </div>
        </NavLink>
      )}
      {item.submenu && item.submenu.length > 0 && isOpen && (
        <ul className="pl-6">
          {item.submenu.map((subItem, index) => (
            <SubMenuItems
              key={index}
              item={subItem}
              parentDiv={item.name}
              setActiveSubMenu={setActiveItem}
              locationPath={locationPath}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default DashboardItem;

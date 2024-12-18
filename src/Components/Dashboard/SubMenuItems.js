import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SubMenuItems({ item, parentDiv, setActiveSubMenu, locationPath }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isSubItemActive =
      locationPath === item.link ||
      (item.submenu &&
        item.submenu.some((nestedItem) => nestedItem.link === locationPath));

    setIsOpen(isSubItemActive);
  }, [locationPath, item.link, item.submenu]);

  const isSubItemActive = locationPath === item.link;

  return (
    <li className={` ${isSubItemActive ? "text-[#505259] rounded-lg" : "text-black"}`}>
      {item.submenu && item.submenu.length > 0 ? (
        <div
          className="flex items-center justify-between p-2 cursor-pointer truncate"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2 truncate">
            {item.icon}
            <span className="truncate">{item.name}</span>
          </div>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      ) : (
        <NavLink
          to={item.link}
          className={`flex items-center gap-3 p-2 cursor-pointer ${
            isSubItemActive
              ? "text-black dark:text-white rounded-lg"
              : "text-[#505259] dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={() => setActiveSubMenu(parentDiv)}
        >
          <div className="flex items-center gap-2 truncate">
            {item.icon}
            <span className="truncate">{item.name}</span>
          </div>
        </NavLink>
      )}
      {item.submenu && item.submenu.length > 0 && isOpen && (
        <ul className="pl-6">
          {item.submenu.map((subItem, index) => (
            <SubMenuItems
              key={index}
              item={subItem}
              parentDiv={parentDiv}
              setActiveSubMenu={setActiveSubMenu}
              locationPath={locationPath}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SubMenuItems;

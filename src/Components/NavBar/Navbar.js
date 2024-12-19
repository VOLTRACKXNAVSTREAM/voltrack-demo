import React from 'react';
import logo from "../../Images/white_logo.svg";
import NavbarIcons from "../NavbarIcons/NavbarIcons";
import USerProfile from "../UserProfile/USerProfile";
import { MdOutlineNotes } from "react-icons/md";
import darklogo from "../../Images/dark_logo.svg";

function Navbar({ userId, dashboardActive, setDashboardActive }) {
  return (
    <div className="py-2 px-4 w-full bg-neutral-100 dark:bg-neutral-950 border-b border-slate-300 dark:border-slate-700 flex items-center justify-between">
      {/* Left Section: Logo and Hamburger */}
      <div className="flex items-center gap-4">
        {/* Hamburger Icon */}
        <div
          className="text-2xl sm:text-3xl cursor-pointer text-[#6c757d]"
          onClick={() => setDashboardActive(!dashboardActive)}
        >
          <MdOutlineNotes />
        </div>

        {/* Logo */}
        {!dashboardActive && (
           <div className="h-18 flex items-center justify-center bg-transparent" style={{ backgroundColor: "transparent" }}>
            <img
              src={logo}
              alt="Logo"
              className="block dark:hidden"
              style={{ width: "200px", backgroundColor: "transparent" }}
            />
            <img
              src={darklogo}
              alt="Dark Logo"
              className="hidden dark:block"
              style={{ width: "200px" }}
            />
          </div>
        )}
      </div>

      {/* Right Section: Icons and Profile */}
      <div className="flex items-center gap-4">
        <NavbarIcons />
        <USerProfile userId={userId} />
      </div>
    </div>
  );
}

export default Navbar;

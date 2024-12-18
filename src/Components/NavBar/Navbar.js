import React from 'react';
import logo from "../../Images/logo-white.png";
import NavbarIcons from "../NavbarIcons/NavbarIcons";
import USerProfile from "../UserProfile/USerProfile";
import { MdOutlineNotes } from "react-icons/md";
import darklogo from "../../Images/logo-dark.png";

function Navbar({ userId, dashboardActive, setDashboardActive }) {
  return (
    <div className="py-2 px-4 w-full bg-[rgba(252,252,252,255)] dark:bg-[#121212] border-b border-slate-300 dark:border-slate-700 flex items-center justify-between">
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
          <div className="w-20 sm:w-28">
            <img
              src={logo}
              alt="Logo"
              className="block dark:hidden"
            />
            <img
              src={darklogo}
              alt="Dark Logo"
              className="hidden dark:block"
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

import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { IoMdAlert } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { useState,useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function NavbarIcons() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) =>
        console.error(err)
      );
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => console.error(err));
      }
    }
  }

  return (
    <div className="icons w-full sm:w-auto flex items-center justify-around sm:justify-evenly gap-2 sm:gap-4 text-xl text-[#6c757d]">
      {/* Dark Mode Toggle */}
      {/* <div
        onClick={toggleDarkMode}
        className="relative w-8 h-4 sm:w-11 sm:h-6 flex items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 cursor-pointer"
      >
        <div
          className={`absolute inset-0 p-1 flex items-center justify-between transition-opacity duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaMoon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-between p-1 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
          <FaSun className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
        </div>
      </div> */}

      {/* Fullscreen Icon */}
      <span
        className="alert w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center hover:text-[#3b7ddd] cursor-pointer"
        onClick={handleFullScreen}
      >
        <RiFullscreenLine />
      </span>

      {/* Alert Icon */}
      {/* <span className="alert w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center hover:text-[#3b7ddd] cursor-pointer">
        <IoMdAlert />
      </span> */}

      {/* Notifications Icon */}
      {/* <span className="notification w-8 h-8 sm:w-12 sm:h-12 rounded-full flex justify-center items-center hover:text-[#3b7ddd] cursor-pointer">
        <IoMdNotifications />
      </span> */}
    </div>
  );
}

export default NavbarIcons;
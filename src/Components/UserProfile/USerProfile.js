import React from "react";
import { useState, useEffect, useRef } from "react";
import UserProfileData from "../../Constants/UserProfileData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DropDown from "../DropDown/ProifleDropDown";
import { FaCircleUser } from "react-icons/fa6";
function USerProfile({ userId }) {
  const btnRef = useRef();
  const [dropDownBtn, setDropDownBtn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setDropDownBtn(false);
      }
    };

    if (dropDownBtn) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropDownBtn]);

  return (
    <div
      className="relative flex items-center gap-2 sm:gap-4 p-2 cursor-pointer rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700"
      ref={btnRef}
      onClick={() => setDropDownBtn(!dropDownBtn)}
    >
      {/* Avatar */}
      <span className="text-2xl">
        <FaCircleUser />
      </span>

      {/* User ID */}
      <span className="hidden sm:block text-sm sm:text-base">{userId}</span>

      {/* Dropdown Arrow */}
      <span className="text-xl">
        {dropDownBtn ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </span>

      {/* Dropdown Menu */}
      {dropDownBtn && (
        <div className="absolute right-0 top-12 bg-slate-50 dark:bg-slate-800 shadow-lg rounded-md p-2 z-10">
          <DropDown submenu={UserProfileData} />
        </div>
      )}
    </div>
  );
}

export default USerProfile;

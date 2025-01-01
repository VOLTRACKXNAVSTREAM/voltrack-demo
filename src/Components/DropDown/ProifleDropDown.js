import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Slices/authSlice';

function ProfileDropDown({ submenu }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    if (item.name === "Logout") {
      // Dispatch logout action
      dispatch(logout());
      // Navigate to login page
      navigate("/login");
    } else {
      // Navigate to the item's link for other options
      navigate(item.link);
    }
  };

  return (
    <ul className="flex flex-col justify-center items-start">
      {submenu.map((item, index) => (
        <li
          key={index}
          className="flex p-2 rounded-md items-center justify-start hover:translate-x-1 transition-transform duration-150 hover:bg-slate-300 cursor-pointer"
          onClick={() => handleItemClick(item)}
        >
          <span className="flex m-1 justify-center items-center w-8 h-8 rounded-full">
            {item.icon}
          </span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default ProfileDropDown;
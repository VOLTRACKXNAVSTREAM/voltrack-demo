import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/white_logo.svg";
function SignUp() {
  return (
    <div className="bg-slate-50 min-h-full w-full flex justify-between items-center">
      <div className="h-full w-[50%] flex justify-center items-center">
        <div
          // action=""
          className="flex flex-col p-5 h-full w-full justify-center gap-5 items-center "
        >
          <div className="w-[50%]">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover rounded-lg bg-transparent"
            />
          </div>
          <div className="text-3xl font-bold">Sign up to your account</div>
          {/* CONTENT */}
          <div className="p-2 flex flex-col items-center justify-center w-[70%] h-full gap-5 ">
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Serial Number:</div>
              <input
                type="text"
                placeholder="XYZ945249"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Name:</div>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-lg w-2/5 shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-lg w-2/5 shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">E-mail</div>
              <input
                type="email"
                placeholder="sudhanshush110@gmail.com"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Phone Number: </div>
              <input
                type="tel"
                placeholder="123-456-7890"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Company: </div>
              <input
                type="text"
                placeholder="Company Name"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none "
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Designation: </div>
              <input
                type="text"
                placeholder="Designation"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="font-semibold text-slate-700">Address: </div>
              <input
                type="text"
                placeholder="Address"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
          </div>
        <div className="flex flex-col w-[70%] gap-2">
            <button className="w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-slate-50 font-semibold">
            Sign in
            </button>
            <button className="w-full p-2 rounded-lg  text-gray-500">
            By signing up, you agree to the{" "}
            <span className=" hover:cursor-pointer underline underline-offset-2 text-gray-500 hover:text-gray-800 hover:no-underline">
                <Link to="/reset-password">Terms of Service</Link>
            </span>{" "}
            and{" "}
            <span className=" hover:cursor-pointer underline underline-offset-2 text-gray-500 hover:text-gray-800 hover:no-underline">
                <Link to="/reset-password">Privacy Policy</Link>
            </span>
            .
            </button>
        </div>
        </div>
      </div>

      <div className="w-[40%] h-[70vh] bg-gradient-to-tr rounded-l-lg from-blue-300 via-blue-300 to-violet-300 flex items-center justify-end ">
        {/* cmd */}
        <div className="w-[80%] h-[60%] flex flex-col rounded-l-lg  bg-gray-800">
          {/* Menubar */}
          <div className="w-full ">
            <div className="w-[60%] m-2 p-2 flex justify-between items-center">
              {/* dots */}
              <div className="flex gap-2 h-fit">
                <div className="p-1 rounded-full bg-gray-400"></div>
                <div className="p-1 rounded-full bg-gray-400"></div>
                <div className="p-1 rounded-full bg-gray-400"></div>
              </div>
              {/* name */}
              <div className="text-white font-semibold">voltrack.in</div>
            </div>

            {/* content */}

            <div className="p-4 text-slate-100">
              <span className="signin-animation font-semibold mr-2 delay-0">
                Voltrack Login :
              </span>
              <span className="signin-animation font-light text-slate-400 delay-4000">
                www.voltrack.in/sign-in/
              </span>
              <span className="signin-animation font-light text-slate-400 delay-8000">
                for Successful login
              </span>
              <span className="block signin-animation font-light text-slate-400 mt-5 delay-10000">
                Enter your details.
              </span>
              <span className="block signin-animation font-semibold delay-18000">
                User Authorized.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

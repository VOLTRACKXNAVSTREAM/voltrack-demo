import React, { useEffect, useState, useRef } from "react";
import { BsLightningFill } from "react-icons/bs";
import HelloDiv from "../../HelloDiv/HelloDiv";

function Contact() {
  const [color, setColor] = useState("");
  const batteryColorRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (batteryColorRef.current) {
        const computedStyle = getComputedStyle(batteryColorRef.current);
        const backgroundColor =
          computedStyle.getPropertyValue("background-color");
        setColor(backgroundColor);
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full px-3 py-1 overflow-y-auto snap-y snap-mandatory no-scrollbar ">
      {/* <div className="flex h-screen flex-wrap-reverse justify-evenly items-center" style={{ backgroundColor:color }}> */}
      <HelloDiv name="Contact Us"/>
      <div
        className="m-1 w-full bg-slate-50 min-h-[60vh] rounded-[10px] flex justify-evenly  shadow-lg relative"
      >
        <form
          action=""
          method="post"
          className="w-[50%] flex flex-col gap-4 p-4"
        >
          {/* Name */}
          <div>
            <div className=" font-semibold my-2">Name</div>
            <div className=" flex flex-wrap justify-between gap-2 items-center">
              <input
                type="text"
                className="rounded-sm shadow-md p-1 outline-none text-[14px] hover:outline-blue-400 focus:outline-blue-400 resize-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="rounded-sm shadow-md p-1 outline-none text-[14px] hover:outline-blue-400 focus:outline-blue-400 resize-none"
                placeholder="Middle Name"
              />

              <input
                type="text"
                className="rounded-sm shadow-md p-1 outline-none text-[14px] hover:outline-blue-400 focus:outline-blue-400 resize-none"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex justify-between">
            <div className="w-1/2 m-1">
              {/* Email */}

              <div className=" font-semibold my-2">Email</div>
              <div>
                <input
                  type="text"
                  placeholder="abc@xyz.com"
                  className="rounded-sm shadow-md w-full p-1 m-1 outline-none text-[14px] resize-none hover:outline-blue-400 focus:outline-blue-400"
                  required
                />
              </div>
            </div>

            {/* Phone number */}
            <div className="w-1/2 m-1">
              <div className="font-semibold my-2">Phone Number</div>
              <div>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="rounded-sm shadow-md w-full p-1 m-1 outline-none text-[14px] resize-none hover:outline-blue-400 focus:outline-blue-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* row 3 */}
          <div className="flex flex-col gap-2">
            <div className=" font-semibold my-2 ">Address:</div>
            <input
              type="text"
              placeholder="Street Address"
              className="rounded-sm w-full shadow-md p-1 outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
              required
            />
            {/* <input
              type="text"
              placeholder="Street Address 2"
              className="rounded-sm w-full shadow-md p-1 outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
            />
            */}
            </div> 

          {/* row 4 */}
          <div className="flex justify-between">
            <div className="w-1/2 m-1">
              {/* city */}
              <div className="font-semibold my-2">city:</div>
              <input
                type="text"
                placeholder="city"
                className="rounded-sm w-full shadow-md p-1  outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
            {/* state */}
            <div className="w-1/2 m-1">
              <div className="font-semibold my-2 ">State:</div>
              <input
                type="text"
                placeholder="city"
                className="rounded-sm w-full shadow-md p-1 outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
          </div>
          {/* row 5 */}
          <div className="flex justify-between">
            <div className="w-1/2 m-1">
              {/* Postal Code */}
              <div className="font-semibold my-2">Postal code:</div>
              <input
                type="text"
                pattern="\d{6}"
                placeholder="zip Code"
                className="rounded-sm w-full shadow-md p-1 outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
            {/* Country */}
            <div className="w-1/2 m-1">
              <div className=" font-semibold my-2 ">Country:</div>
              <input
                type="text"
                placeholder="Country"
                className="rounded-sm w-full shadow-md p-1  outline-none text-[-14px] hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
              />
            </div>
          </div>
          {/* row 6 */}
        </form>
        <div className="w-[40%] p-5">
          <div>
            {/*Querry */}
            <div className="font-semibold my-2">
              Comments, Questions or Suggestions :
            </div>
            <textarea
              type="text"
              placeholder="Enter your message here.."
              className="rounded-sm w-full h-64 shadow-md p-1 outline-none text-left text-sm hover:outline-blue-300 focus:outline-blue-400 resize-none"
              style={{paddingTop: "10px", paddingLeft:"10px"}}
              required
            />
          </div>

          {/* row 7 */}

          <div className="my-10 w-full flex justify-between items-center">
            <input
              type="submit"
              value="submit"
              className="shadow-lg p-2 w-[40%] rounded-md bg-gray-100 hover:bg-stone-400 transition duration-150 cursor-pointer"
              style={{ border: `2px solid ${color}` }}
            />
            <input
              type="reset"
              value="reset"
              className="shadow-lg p-2 w-[40%] rounded-md bg-gray-100 hover:bg-stone-400 transition duration-150 cursor-pointer"
              style={{ border: `2px solid ${color}` }}
            />
          </div>
        </div>
        {/* <div className=" absolute right-0 translate-x-[50%] top-[50%] translate-y-[-50%] flex flex-col justify-center items-center bg-slate-50 rounded-[10px] shadow-md p-4"> */}
        {/* battery head */}
        {/* <div
            className="w-[8vh] h-[1vh] rounded-tr-md rounded-tl-md border-2 border-black"
            style={{ backgroundColor: color }}
          >
            {" "}
          </div> */}
        {/* battery body */}
        {/* <div className="w-[15vh] h-[30vh] rounded-md border-2 border-black flex flex-col justify-center items-center relative"> */}
        {/* battery charge */}
        {/* <div className="absolute flex justify-center items-center z-10">
              <BsLightningFill className="text-blue-400 text-5xl scale-pulse " />
            </div>
            <div
              className="absolute bottom-0 h-full w-full bg-black batteryColor"
              ref={batteryColorRef}
            ></div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;

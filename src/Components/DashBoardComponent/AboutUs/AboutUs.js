import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import AboutUsFooterData from "../../../Constants/AboutUsFooterData";
import logo from "../../../Images/2.svg";

// import { BsLightningFill } from "react-icons/bs";
function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col justify-evenly items-center rounded-[10px]">
      <div className="w-[70vw] bg-slate-50 min-h-[80vh] rounded-[10px] shadow-md p-4 justify-center items-center">
        <div className="w-40 h-20 translate-x-96 transition duration-300">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores
        at laudantium doloremque nesciunt dolore excepturi odio consequuntur
        obcaecati perferendis.
      </div>
      {/* <div className="w-[40vw] min-h-[80vh] flex flex-col justify-center items-center bg-slate-50 rounded-[10px] shadow-md p-4"> */}
      {/* battery head */}
      {/* <div className="w-[8vh] h-[2vh] bg-slate-100 rounded-tr-md rounded-tl-md border-2 border-black"></div> */}
      {/* battery body */}
      {/* <div className="w-[15vh] h-[30vh] rounded-md border-2 border-black flex flex-col justify-center items-center relative "> */}
      {/* battery charge */}
      {/* <div className='absolute flex justify-center items-center z-10'>
           <BsLightningFill className="text-blue-400 text-5xl scale-pulse " />
          </div> 
           <div className="absolute h-full w-full bg-black">
          </div>
        </div>
      </div>     */}

      {/* footer */}
      <div className="p-20 bg-slate-800 min-h-[25rem] w-full self-end items-center text-slate-100 ">
        <div className="w-full flex flex-wrap justify-center gap-12">
        <div className="w-80 h-20 rounded-md overflow-hidden shadow-lg">
      <img src={logo} alt="Logo" className="w-full h-full object-cover" />
    </div>
          {Object.keys(AboutUsFooterData).map((key) => (
            <div key={key} className="flex flex-col mb-4">
              <h1 className="text-xl font-bold mb-2">{key}</h1>
              <ul>
                {AboutUsFooterData[key].map((item, index) => (
                  <li key={index} className="mb-1">
                    <a
                      href={item.link}
                      className="hover:text-blue-400 hover:font-medium transition-colors duration-100"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-5 border-t-2 my-8 border-t-slate-300 flex flex-wrap justify-between items-center">
          {/* copyright  */}
          <div className="p-2 text-sm">
            Copyright © 2024 Voltrack, trading as Voltrack: A Stream of
            NavStream.
          </div>
          <div className="w-64 flex justify-between items-center text-2xl">
            <i className=" p-1 hover:cursor-pointer hover:text-xl hover:bg-gray-700 rounded-full transtion duration-100">
              <FaGithub />
            </i>
            <i className=" p-1 hover:cursor-pointer hover:text-xl hover:bg-gray-700 rounded-full transtion duration-100">
              <FaFacebook />
            </i>
            <i className=" p-1 hover:cursor-pointer hover:text-xl hover:bg-gray-700 rounded-full transtion duration-100">
              <RiInstagramFill />
            </i>
            <i className=" p-1 hover:cursor-pointer hover:text-xl hover:bg-gray-700 rounded-full transtion duration-100">
              <RiLinkedinBoxFill />
            </i>
            <i className=" p-1 hover:cursor-pointer hover:text-xl hover:bg-gray-700 rounded-full transtion duration-100">
              <BsYoutube />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

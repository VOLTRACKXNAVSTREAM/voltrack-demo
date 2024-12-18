import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Images/logo-white-log.png";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const navigateForgotPass = async(e) => {
    e.preventDefault();
    navigate("/reset-password");
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Define the valid email and password
    const validEmail = "login@voltrack.in";
    const validPassword = "Voltrack@2024";

    function updatepassword(newValue){
      validPassword = newValue;
    }

    function getVariable(){
      return validPassword;
    }
    
    // Check if the entered email and password are correct
    if (email === validEmail && password === validPassword) {
      // Create a random 256-bit (32-byte) token
      const token = Array.from({ length: 6 }, () =>
        Math.random().toString(36).substring(2)
      ).join("");
      
      // Store the token in local storage
      localStorage.setItem("authToken", token);
      
      // Redirect to the app component
      navigate("/app");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="bg-slate-50 h-full w-screen flex justify-evenly items-center">
      <div className="p-10 h-screen w-[60%] flex justify-center items-center ">
        <form
          action=""
          className="flex flex-col p-4 justify-center gap-10 items-end w-[70%]"
        >
          <div className="flex h-[30%] bg-transparent items-center justify-center w-[70%]">
            <img
              src={logo}
              alt=""
              className= " w-full object-cover rounded-lg bg-transparent justify-center"
            />
          </div>
          <div className="text-3xl w-[70%] flex font-bold items-center justify-center uppercase">
            Sign In
            </div>
          <div className="flex flex-col items-end justify-center w-full gap-10">
            <div className="flex flex-col w-[70%] gap-2">
              <div className="font-semibold text-slate-700">E-mail</div>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                onChange={e=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <div className="font-semibold text-slate-700">Password</div>
              <input
                type="password"
                placeholder="*********"
                className="rounded-lg w-full shadow-md p-2 outline-none text-[-14px] border-gray-100 hover:outline-blue-300 focus:outline-blue-400 resize-none"
                required
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-2">
              <button className="w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-slate-50 font-semibold" onClick={handleSignIn}>
                Sign in
              </button>
              <button className="w-full p-2 rounded-lg hover:cursor-pointer underline underline-offset-2 text-gray-500 hover:text-gray-800 hover:no-underline" onClick={navigateForgotPass}>
                Forgot password?
              </button>
            </div>
          </div>
        </form>
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

export default SignIn;
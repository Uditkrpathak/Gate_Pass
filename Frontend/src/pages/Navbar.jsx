import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-6 py-4  flex items-center justify-between rounded-t-xl absolute">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold text-2xl rounded-2xl shadow">
          GP
        </div>
        <h1 className="font-bold text-white text-3xl hidden md:flex">
          Gate Pass System
        </h1>
      </div>
      <button
        className="text-white flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 font-medium px-6 py-3 rounded-lg text-xl transition duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Sign In
        <span>
          <LiaLongArrowAltRightSolid className="font-medium size-6" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;

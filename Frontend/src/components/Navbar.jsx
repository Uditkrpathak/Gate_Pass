import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-3 bg-white shadow-lg rounded-t-xl">
      <div className="flex items-center gap-3">
      
        <h1 className="hidden text-2xl font-bold tracking-wide text-gray-800 md:flex lg:text-xl">
          Gate Pass System
        </h1>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-white transition-all duration-300 transform bg-[#EF7722] hover:shadow-lg hover:scale-105"
      >
        Sign In
     
      </button>
    </div>
  );
};

export default Navbar;

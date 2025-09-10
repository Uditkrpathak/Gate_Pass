import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
     
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
        Digital Gate Pass <br />
        <span className="font-extrabold">Management</span>
      </h1>

      <p className="mt-8 lg:w-[50%] text-[23px] text-white/90 leading-relaxed lg:px-0 md:w-full sm:px-10">
        Streamline your institution's gate pass process with our comprehensive
        digital solution. Efficient, secure, and user-friendly for students,
        faculty, and security personnel.
      </p>

      <div className="mt-8 flex md:gap-4 text-center gap-2">
        <button className="px-4 md:px-10 py-3 rounded-xl bg-white text-blue-600 font-medium shadow hover:scale-105 transition" onClick={() => navigate("/login")}>
          Get Started →
        </button>
        <button className="px-4 md:px-10 py-3 rounded-xl bg-[#FFFF00] text-white  font-bold shadow hover:scale-105 transition hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-[#65758B]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

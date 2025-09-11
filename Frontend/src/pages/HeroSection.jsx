// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//     const navigate = useNavigate()
//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen px-4 pt-24 text-center">
     
//       <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
//         Digital Gate Pass <br />
//         <span className="font-extrabold">Management</span>
//       </h1>

//       <p className="mt-8 lg:w-[50%] text-[23px] text-white/90 leading-relaxed lg:px-0 md:w-full sm:px-10">
//         Streamline your institution's gate pass process with our comprehensive
//         digital solution. Efficient, secure, and user-friendly for students,
//         faculty, and security personnel.
//       </p>

//       <div className="flex gap-2 mt-8 text-center md:gap-4">
//         <button className="px-4 py-3 font-medium text-blue-600 transition bg-white shadow md:px-10 rounded-xl hover:scale-105" onClick={() => navigate("/login")}>
//           Get Started →
//         </button>
//         <button className="px-4 md:px-10 py-3 rounded-xl bg-[#FFFF00] text-white  font-bold shadow hover:scale-105 transition hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-[#65758B]">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute bg-blue-500 rounded-full top-20 left-10 w-72 h-72 opacity-10 blur-3xl"></div>
        <div className="absolute bg-indigo-500 rounded-full bottom-20 right-10 w-96 h-96 opacity-10 blur-3xl"></div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-cyan-500 opacity-5 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 pt-24 text-center">
        {/* Badge */}
        <div className="px-4 py-2 mb-6 bg-white border border-white rounded-full bg-opacity-10 border-opacity-20">
          <span className="text-sm font-medium text-white text-opacity-90">
            ✨ Next-Gen Digital Solution
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Digital Gate Pass
          <br />
          <span className="font-extrabold text-blue-400">
            Management
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl px-4 mt-6 text-lg leading-relaxed text-white md:text-xl text-opacity-80">
          Streamline your institution's gate pass process with our comprehensive
          digital solution. Efficient, secure, and user-friendly for students,
          faculty, and security personnel.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
          <div className="flex items-center gap-2 text-white text-opacity-70">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm">Real-time Tracking</span>
          </div>
          <div className="flex items-center gap-2 text-white text-opacity-70">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm">Secure Access</span>
          </div>
          <div className="flex items-center gap-2 text-white text-opacity-70">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm">Easy Integration</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            className="flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 transform bg-white shadow-lg text-slate-900 rounded-2xl hover:shadow-xl hover:-translate-y-1"
            onClick={handleGetStarted}
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-white border border-white bg-opacity-10 border-opacity-20 rounded-2xl hover:bg-opacity-20 hover:-translate-y-1">
            Learn More
          </button>
        </div>

        {/* Stats section */}
        <div className="grid max-w-md grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">500+</div>
            <div className="mt-1 text-sm text-white text-opacity-60">Institutions</div>
          </div>
          <div className="text-center border-l border-r border-white border-opacity-20">
            <div className="text-2xl font-bold text-white md:text-3xl">50K+</div>
            <div className="mt-1 text-sm text-white text-opacity-60">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white md:text-3xl">99.9%</div>
            <div className="mt-1 text-sm text-white text-opacity-60">Uptime</div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute w-4 h-4 bg-blue-400 rounded-full top-1/4 left-8 bg-opacity-30"></div>
      <div className="absolute w-3 h-3 bg-indigo-400 rounded-full top-1/3 right-12 bg-opacity-30"></div>
      <div className="absolute w-2 h-2 rounded-full bottom-1/3 left-16 bg-cyan-400 bg-opacity-30"></div>
    </div>
  );
};

export default HeroSection;
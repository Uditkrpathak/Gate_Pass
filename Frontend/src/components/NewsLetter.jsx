import React from "react";
import { FaCheck } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl py-16 px-10 text-center shadow-lg w-full mx-auto">
      <h2 className="text-4xl font-semibold text-white mb-3">
        Why Choose Our System?
      </h2>
      <p className="text-white text-lg mb-14">
        Built specifically for educational institutions
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 rounded-xl p-10 hover:bg-white/20 transition transform hover:-translate-y-1">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-white">Automated Workflow</h3>
          <p className="text-white text-base mt-3">
            Intelligent routing based on working days and institutional policies
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-10 hover:bg-white/20 transition transform hover:-translate-y-1">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-white">Real-time Tracking</h3>
          <p className="text-white text-base mt-3">
            Students can monitor their application status at every step
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-10 hover:bg-white/20 transition transform hover:-translate-y-1">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-white">Secure Verification</h3>
          <p className="text-white text-base mt-3">
            Security personnel can instantly verify approved gate passes
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

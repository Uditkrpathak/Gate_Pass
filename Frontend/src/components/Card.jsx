import React from "react";
import { BiUserCheck } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { VscLock } from "react-icons/vsc";

const Card = () => {
  return (
    <div className="w-full py-4 px-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Student Portal */}
        <div
          className="rounded-2xl shadow-lg border-0 bg-white/10 backdrop-blur-md text-white 
                        hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/50 
                        transition-all duration-300"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <RiGraduationCapLine size={34} />
            </div>
            <h3 className="text-xl font-bold tracking-wide mb-3">
              Student Portal
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Apply for gate passes and track application status
            </p>
          </div>
        </div>

        {/* HOD Approval */}
        <div className="rounded-2xl shadow-lg border-0 bg-white/10 backdrop-blur-md text-white hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/50 transition-all duration-300">
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <BiUserCheck size={34} />
            </div>
            <h3 className="text-xl font-bold tracking-wide mb-3">
              HOD Approval
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Department heads can review and approve applications
            </p>
          </div>
        </div>

        {/* Warden Review */}
        <div
          className="rounded-2xl shadow-lg border-0 bg-white/10 backdrop-blur-md text-white 
                        hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/50 
                        transition-all duration-300"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <MdOutlineShield size={34} />
            </div>
            <h3 className="text-xl font-bold tracking-wide mb-3">
              Warden Review
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Hostel wardens manage accommodation-related approvals
            </p>
          </div>
        </div>

        {/* Security Verification */}
        <div
          className="rounded-2xl shadow-lg border-0 bg-white/10 backdrop-blur-md text-white 
                        hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/50 
                        transition-all duration-300"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <VscLock size={34} />
            </div>
            <h3 className="text-xl font-bold tracking-wide mb-3">
              Security Verification
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              Security personnel can verify student gate pass status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

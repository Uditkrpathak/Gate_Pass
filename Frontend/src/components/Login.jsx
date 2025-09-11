import React, { useContext, useState } from "react";
import { BiUserCheck } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { IoChevronDown } from "react-icons/io5";
import { AuthContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const roles = [
  {
    value: "Student",
    label: "Student",
    icon: <RiGraduationCapLine className="mr-2" />,
  },
  { value: "HOD", label: "HOD", icon: <BiUserCheck className="mr-2" /> },
  {
    value: "Warden",
    label: "Warden",
    icon: <MdOutlineShield className="mr-2" />,
  },
  { value: "Security", label: "Security", icon: <VscLock className="mr-2" /> },
];

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",

    role: "",
  });

  const { serveUrl } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ correct

    try {
      const response = await axios.post(`${serveUrl}/api/v1/login`, form, {
        withCredentials: true,
      });

      console.log(response);
      console.log(form);
      if (response.status === 200) {
        navigate("/"); // <-- Home page
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-lg p-8 mx-auto mt-10 mb-10 shadow-lg bg-gradient-to-r from-blue-400 to-blue-300 rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-3 rounded-full shadow-md w-28 h-28 bg-gradient-to-r from-blue-500 to-blue-400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="logo"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-3xl text-[#1f2937] font-bold mb-2">
            Gate Pass System
          </h2>
          <p className="text-[#65758B] text-xl">
            Sign in to access your dashboard
          </p>
        </div>

        <div className="flex flex-col w-full gap-5 mt-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xl text-[#1f2937]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-3 rounded-md bg-[#FFFF00] outline-none placeholder:text-[18px]"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-xl text-[#1f2937]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="p-3 rounded-md bg-[#FFFF00] outline-none placeholder:text-[18px]"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* ✅ Corrected Role Dropdown with React Icons */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-xl text-[#1f2937]">Role</label>
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="p-3 bg-[#FFFF00] rounded-md flex justify-between items-center cursor-pointer"
              >
                <span className="flex items-center text-gray-800">
                  {selectedRole ? (
                    <>
                      {selectedRole.icon}
                      {selectedRole.label}
                    </>
                  ) : (
                    "Select your role"
                  )}
                </span>
                <IoChevronDown />
              </div>

              {open && (
                <div className="absolute left-0 right-0 z-10 mt-1 bg-white rounded-lg shadow-lg top-full">
                  {roles.map((role) => (
                    <div
                      key={role.value}
                      onClick={() => {
                        setSelectedRole(role);
                        setForm((prev) => ({ ...prev, role: role.value }));

                        setOpen(false);
                      }}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {role.icon}
                      {role.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="w-full mt-7 p-3 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-md text-[#FFFFFF] font-bold text-[16px]">
          Sign In
        </button>
        <div className="mt-4">
          <p className="text-[#65758B] font-medium">
            Don't have an account ? <span onClick={() => navigate("/register")} className="underline cursor-pointer">Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

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
  { value: "Student", label: "Student", icon: <RiGraduationCapLine className="mr-2" /> },
  { value: "HOD", label: "HOD", icon: <BiUserCheck className="mr-2" /> },
  { value: "Warden", label: "Warden", icon: <MdOutlineShield className="mr-2" /> },
  { value: "Security", label: "Security", icon: <VscLock className="mr-2" /> },
];

const Register = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    rollNo: "",
    role: "",
  });

  const navigate = useNavigate();
  const { serveUrl } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${serveUrl}/api/v1/register`, form, {
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-300 to-orange-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-lg p-8 mx-auto mt-10 mb-10 bg-white shadow-xl rounded-2xl"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-3 rounded-full shadow-md w-28 h-28 bg-gradient-to-r from-orange-400 to-orange-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="logo"
              className="w-16 h-16"
            />
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800">Gate Pass System</h2>
          <p className="text-lg text-gray-600">Create your account</p>
        </div>

        {/* Success/Error Messages */}
        {error && (
          <div className="w-full p-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div className="w-full p-3 mt-4 text-green-700 bg-green-100 border border-green-400 rounded-md">
            {success}
          </div>
        )}

        {/* Input Fields */}
        <div className="flex flex-col w-full gap-5 mt-5">
          {[
            { name: "name", label: "Full Name", type: "text", placeholder: "Enter your Name" },
            { name: "email", label: "Email", type: "email", placeholder: "Enter your Email" },
            { name: "password", label: "Password", type: "password", placeholder: "Enter your Password" },
            { name: "rollNo", label: "Roll No", type: "text", placeholder: "Enter your Roll No" },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-2">
              <label className="text-lg font-medium text-gray-800">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="p-3 rounded-md border border-gray-300 bg-orange-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none placeholder:text-[16px]"
                value={form[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {/* Role Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-800">Role</label>
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between p-3 border border-gray-300 rounded-md cursor-pointer bg-orange-50 focus:ring-2 focus:ring-orange-400"
              >
                <span className="flex items-center text-gray-700">
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-7 p-3 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-300 rounded-md text-white font-bold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>

        {/* Login Redirect */}
        <div className="mt-4">
          <p className="font-medium text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-orange-600 underline cursor-pointer hover:text-orange-700"
            >
              Please Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

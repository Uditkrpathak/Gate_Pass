import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    formDate: "",
    toDate: "",
    reason: "",
    workingDays: "no", // Default value
    location: "",
    fatherContactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const token = Cookies.get('token');
    console.log(token);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting application...");

    // Basic validation for dates
    if (new Date(formData.toDate) < new Date(formData.formDate)) {
      toast.error("'To Date' cannot be before 'From Date'.", { id: toastId });
      return;
    }

    try {
      // Ensure you have a proxy set up in your vite.config.js or use the full URL
      const res = await axios.post("/api/gate/apply", formData, {
        headers: {
          Authorization: `Bearer `,
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Leave applied successfully!", { id: toastId });
        // Clear the form after successful submission
        setFormData({
          formDate: "",
          toDate: "",
          reason: "",
          workingDays: "no",
          location: "",
          fatherContactNo: "",
        });
      } else {
        toast.error(res.data.message || "Failed to apply for leave.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Apply leave error:", error);
      toast.error(error.response?.data?.message || "An error occurred.", {
        id: toastId,
      });
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <Toaster />
      <h2>Apply for Gate Pass</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label htmlFor="formDate">From Date:</label>
          <input type="date" id="formDate" name="formDate" value={formData.formDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="toDate">To Date:</label>
          <input type="date" id="toDate" name="toDate" value={formData.toDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} required />
        </div>
        <div>
          <label>Is it a working day?</label>
          <input type="radio" id="workingYes" name="workingDays" value="yes" checked={formData.workingDays === "yes"} onChange={handleChange} />
          <label htmlFor="workingYes">Yes</label>
          <input type="radio" id="workingNo" name="workingDays" value="no" checked={formData.workingDays === "no"} onChange={handleChange} />
          <label htmlFor="workingNo">No</label>
        </div>
        <div>
          <label htmlFor="location">Location (where you are going):</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="fatherContactNo">Father's Contact No:</label>
          <input type="tel" id="fatherContactNo" name="fatherContactNo" value={formData.fatherContactNo} onChange={handleChange} required />
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyLeave;
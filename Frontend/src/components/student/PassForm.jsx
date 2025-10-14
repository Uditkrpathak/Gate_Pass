import axios from 'axios';
import { useState } from 'react';

const GatePassForm = () => {
  const [formData, setFormData] = useState({
    reason: '',
    formDate: '',
    toDate: '',
    workingDays: 'yes',
    location: '',
    fatherContactNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateDaysRequested = () => {
    const start = new Date(formData.formDate);
    const end = new Date(formData.toDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const daysRequested = calculateDaysRequested();

    const payload = {
      ...formData,
      daysRequested,
      status: 'pending',
    };
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v2/apply`,payload,{
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Content-Type':'application/json'
        }
      })

      if (res.status==201) {
        alert('Gate pass request submitted successfully!');
        setFormData({
          reason: '',
          formDate: '',
          toDate: '',
          workingDays: 'yes',
          location: '',
          fatherContactNo: '',
        });
      } 
      else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Apply for Gate Pass</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">From Date</label>
            <input
              type="date"
              name="formDate"
              value={formData.formDate}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Father's Contact No</label>
          <input
            type="tel"
            name="fatherContactNo"
            value={formData.fatherContactNo}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Includes Working Days?</label>
          <select
            name="workingDays"
            value={formData.workingDays}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default GatePassForm;

import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDashboard = () => {
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    // Fetch gate pass data from backend (example endpoint)
    const fetchPasses = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v2/getAll", {
          withCredentials: true,
        });
        setPasses(res.data.passes || []);
      } catch (error) {
        console.error("Error fetching gate passes:", error);
      }
    };
    fetchPasses();
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-600";
      case "pending":
        return "bg-yellow-100 text-yellow-600";
      case "rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Gate Pass Requests
      </h1>

      {/* Pass List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {passes.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No gate pass requests found.
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-100 text-left text-gray-700">
                <th className="p-3">#</th>
                <th className="p-3">Reason</th>
                <th className="p-3">From</th>
                <th className="p-3">To</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {passes.map((pass, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{pass.reason}</td>
                  <td className="p-3">{pass.fromDate}</td>
                  <td className="p-3">{pass.toDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        pass.status
                      )}`}
                    >
                      {pass.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;

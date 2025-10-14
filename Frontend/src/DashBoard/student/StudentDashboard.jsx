import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock user (replace with your AuthContext user)
  const user = {
    name: "Udit Pathaki",
    studentId: "STU12345",
    department: "CSE",
    email: "udit@example.com",
  };

  useEffect(() => {
    // Fetch student requests from your backend
    const fetchRequests = async () => {
      try {
        const res = await fetch("/api/gatepasses");
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Submit new request
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/gatepasses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, studentId: user.studentId }),
    });

    if (res.ok) {
      const newReq = await res.json();
      setRequests((prev) => [newReq, ...prev]);
      alert("Request submitted successfully!");
      setActiveTab("requests");
    } else {
      alert("Error submitting request!");
    }
  };

  // Cancel request
  const handleCancel = async (id) => {
    if (!window.confirm("Cancel this request?")) return;
    await fetch(`/api/gatepasses/${id}`, { method: "DELETE" });
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const pending = requests.filter((r) => r.status === "pending").length;
  const approved = requests.filter((r) => r.status === "approved").length;
  const rejected = requests.filter((r) => r.status === "rejected").length;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 p-5 bg-white border-r">
        <h2 className="mb-6 text-xl font-bold">Student Panel</h2>
        <ul className="space-y-2">
          {["home", "new", "requests", "profile"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab === "home"
                  ? "Dashboard"
                  : tab === "new"
                  ? "New Gate Pass"
                  : tab === "requests"
                  ? "My Requests"
                  : "Profile"}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, {user.name}
          </h1>
          <button
            onClick={() => navigate("/login")}
            className="px-3 py-1 border rounded-md hover:bg-gray-100"
          >
            Logout
          </button>
        </header>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <>
            {activeTab === "home" && (
              <div>
                <h2 className="mb-4 text-xl font-semibold">Overview</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <StatCard label="Pending" value={pending} />
                  <StatCard label="Approved" value={approved} />
                  <StatCard label="Rejected" value={rejected} />
                </div>
                <h3 className="mb-2 font-semibold">Recent Requests</h3>
                {requests.slice(0, 5).map((req) => (
                  <RequestCard key={req.id} req={req} />
                ))}
              </div>
            )}

            {activeTab === "new" && (
              <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
                <h2 className="mb-4 text-lg font-semibold">New Gate Pass</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="datetime-local"
                    name="date"
                    required
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="from"
                    placeholder="From"
                    required
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="to"
                    placeholder="To"
                    required
                    className="p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    required
                    className="p-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md"
                >
                  Submit Request
                </button>
              </form>
            )}

            {activeTab === "requests" && (
              <div>
                <h2 className="mb-3 text-lg font-semibold">My Requests</h2>
                {requests.length === 0 ? (
                  <p className="text-gray-500">No requests found.</p>
                ) : (
                  <table className="w-full overflow-hidden text-sm bg-white border rounded-lg">
                    <thead className="text-left bg-gray-100">
                      <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">From</th>
                        <th className="p-3">To</th>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((r) => (
                        <tr key={r.id} className="border-t">
                          <td className="p-3">{new Date(r.date).toLocaleString()}</td>
                          <td className="p-3">{r.from}</td>
                          <td className="p-3">{r.to}</td>
                          <td className="p-3">{r.purpose}</td>
                          <td className="p-3 capitalize">{r.status}</td>
                          <td className="p-3">
                            {r.status === "pending" && (
                              <button
                                onClick={() => handleCancel(r.id)}
                                className="text-sm text-red-600 underline"
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {activeTab === "profile" && (
              <div className="max-w-md p-6 bg-white rounded-lg shadow">
                <h2 className="mb-4 text-lg font-semibold">Profile</h2>
                <div className="space-y-2 text-sm">
                  <p><b>Name:</b> {user.name}</p>
                  <p><b>Student ID:</b> {user.studentId}</p>
                  <p><b>Department:</b> {user.department}</p>
                  <p><b>Email:</b> {user.email}</p>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

// Reusable small components
function StatCard({ label, value }) {
  return (
    <div className="p-4 text-center bg-white rounded-lg shadow">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function RequestCard({ req }) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white border rounded-md">
      <div>
        <div className="font-semibold">{req.purpose}</div>
        <div className="text-xs text-gray-500">
          {req.from} → {req.to} • {new Date(req.date).toLocaleString()}
        </div>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs ${
          req.status === "approved"
            ? "bg-green-100 text-green-700"
            : req.status === "rejected"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {req.status}
      </span>
    </div>
  );
}

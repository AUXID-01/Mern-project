import React, { useState } from "react";
import { Users, Activity, ShieldCheck } from "lucide-react";

const AdminPanel = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", role: "Student", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Faculty", status: "Pending" },
  ]);

  const [stats] = useState({
    totalUsers: 42,
    activePortfolios: 30,
    pendingApprovals: 5,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
          <div className="bg-white rounded-xl border p-6 flex items-center gap-4 shadow-sm">
            <Users className="w-10 h-10 text-purple-600" />
            <div>
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6 flex items-center gap-4 shadow-sm">
            <Activity className="w-10 h-10 text-green-600" />
            <div>
              <h3 className="text-gray-500 text-sm">Active Portfolios</h3>
              <p className="text-2xl font-bold">{stats.activePortfolios}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6 flex items-center gap-4 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-yellow-600" />
            <div>
              <h3 className="text-gray-500 text-sm">Pending Approvals</h3>
              <p className="text-2xl font-bold">{stats.pendingApprovals}</p>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold p-6 border-b">User Management</h2>
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="p-4">{u.id}</td>
                  <td className="p-4">{u.name}</td>
                  <td className="p-4">{u.role}</td>
                  <td className="p-4">{u.status}</td>
                  <td className="p-4">
                    <button className="text-purple-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

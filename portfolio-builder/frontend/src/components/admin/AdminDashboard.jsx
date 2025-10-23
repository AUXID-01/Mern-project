import React, { useState, useEffect } from 'react';
import { Users, Folder, Palette, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPortfolios: 0,
    totalTemplates: 0,
    activeUsers: 0
  });

  useEffect(() => {
    // Fetch admin stats
    setStats({
      totalUsers: 1250,
      totalPortfolios: 3420,
      totalTemplates: 15,
      activeUsers: 892
    });
  }, []);

  const statCards = [
    { label: 'Total Users', value: stats.totalUsers, icon: Users, color: 'bg-blue-500' },
    { label: 'Portfolios', value: stats.totalPortfolios, icon: Folder, color: 'bg-green-500' },
    { label: 'Templates', value: stats.totalTemplates, icon: Palette, color: 'bg-purple-500' },
    { label: 'Active Users', value: stats.activeUsers, icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-semibold text-gray-800">User created new portfolio</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                New
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
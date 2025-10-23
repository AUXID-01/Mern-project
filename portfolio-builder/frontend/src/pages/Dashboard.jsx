import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, FolderOpen } from "lucide-react";
import CreatePortfolioModal from "../components/modals/CreatePortfolioModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Mock portfolios (replace with backend or context data)
  const [portfolios, setPortfolios] = useState([
    { id: 1, name: "My Web Dev Portfolio", createdAt: "Oct 20, 2025" },
    { id: 2, name: "Photography Projects", createdAt: "Oct 21, 2025" },
  ]);

  const handleCreate = (name) => {
    const newPortfolio = {
      id: Date.now(),
      name,
      createdAt: new Date().toLocaleDateString(),
    };
    setPortfolios([...portfolios, newPortfolio]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Your Portfolios</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <PlusCircle size={20} /> Create New
          </button>
        </div>

        {portfolios.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p>No portfolios yet. Create your first one!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {portfolios.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/portfolio/${p.id}`)}
                className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{p.name}</h2>
                <p className="text-sm text-gray-500">Created on {p.createdAt}</p>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <CreatePortfolioModal
            onClose={() => setShowModal(false)}
            onCreate={handleCreate}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";

const PortfolioPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock preview data
  const portfolio = {
    name: "My Portfolio",
    theme: "Modern",
    sections: [
      { title: "About Me", content: "I am a full-stack developer passionate about design." },
      { title: "Projects", content: "Weather App, Portfolio Website, and Chat App." },
      { title: "Contact", content: "Email me at: me@example.com" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center px-10 py-5 bg-white border-b">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">{portfolio.name}</h1>
        </div>

        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          <Share2 size={18} /> Share
        </button>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-gray-600 text-sm mb-4">Theme: {portfolio.theme}</h2>
        <div className="space-y-10">
          {portfolio.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;

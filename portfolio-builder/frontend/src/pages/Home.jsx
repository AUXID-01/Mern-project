import React, { useEffect } from "react";
import { Layout, Palette, Download, ArrowRight, Check } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const { openModal } = useModal(); // ✅ use global modal context
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const features = [
    {
      icon: Layout,
      title: "Drag & Drop Editor",
      description: "Build your portfolio with an intuitive drag-and-drop interface",
    },
    {
      icon: Palette,
      title: "Beautiful Themes",
      description: "Choose from professionally designed themes and templates",
    },
    {
      icon: Download,
      title: "Export & Host",
      description: "Download your portfolio or host it with us instantly",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "1 Portfolio",
        "Basic Templates",
        "Export HTML/CSS",
        "Community Support",
      ],
    },
    {
      name: "Pro",
      price: "$9",
      features: [
        "Unlimited Portfolios",
        "Premium Templates",
        "Custom Domain",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$29",
      features: [
        "Everything in Pro",
        "White Label",
        "API Access",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">Build Your Dream Portfolio</h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Create stunning portfolio websites with our intuitive drag-and-drop
            editor. No coding required. Choose themes, add content, and go live
            in minutes.
          </p>
          <button
            onClick={() => openModal("register")} // ✅ open register modal
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:scale-105 transition transform shadow-2xl inline-flex items-center gap-2"
          >
            Start Building For Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose PortfolioBuilder?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 transition transform hover:scale-105 ${
                  plan.popular
                    ? "ring-2 ring-purple-600 shadow-2xl scale-105"
                    : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal("register")} // ✅ same here
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

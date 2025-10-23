import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Contexts
import { AuthProvider, useAuth } from "./context/AuthContext";
import { PortfolioProvider } from "./context/PortfolioContext";
import { ModalProvider } from "./context/ModalContext";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AuthModal from "./components/modals/AuthModal";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PortfolioPreview from "./pages/PortfolioPreview";
import AdminPanel from "./pages/AdminPanel";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AdminRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  return isAuthenticated && user?.role === "admin" ? children : <Navigate to="/" />;
};

function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio/:id" element={<PortfolioPreview />} />
          <Route path="/admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />
        </Routes>
      </main>
      <AuthModal />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </PortfolioProvider>
    </AuthProvider>
  );
}

export default App;

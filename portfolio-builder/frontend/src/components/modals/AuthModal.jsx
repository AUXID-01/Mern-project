import React from "react";
import { useModal } from "../../context/ModalContext";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AuthModal = () => {
  const { modalType, closeModal, openModal } = useModal();

  if (!modalType) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {modalType === "login" ? (
          <Login
            onSwitchToRegister={() => openModal("register")} // ✅ Switch to Register
            onClose={closeModal}
          />
        ) : (
          <Register
            onSwitchToLogin={() => openModal("login")} // ✅ Switch to Login
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;

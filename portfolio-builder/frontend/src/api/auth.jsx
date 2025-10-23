import axios from "axios";

const API_URL = "http://localhost:8000/api/auth"; // <-- correct backend route

// Register user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // returns user + token
};

// Login user
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data; // returns user + token
};

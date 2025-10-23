import api from './api';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data; // { user, token }
    } catch (err) {
      throw err.response?.data || err;
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      return response.data; // { user, token }
    } catch (err) {
      throw err.response?.data || err;
    }
  },

  verifyToken: async (token) => {
    try {
      // Only needed for checkAuth before setting default headers
      const response = await api.get('/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data; // { user }
    } catch (err) {
      throw err.response?.data || err;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};

// backend/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controllers.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route to verify token
router.get('/verify', protect, (req, res) => {
  res.json({ user: req.user });
});

export default router;

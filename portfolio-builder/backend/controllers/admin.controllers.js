const User = require('../models/User');
const Portfolio = require('../models/portfolio.model.js');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get all portfolios
exports.getAllPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find().populate('user');
  res.json(portfolios);
};

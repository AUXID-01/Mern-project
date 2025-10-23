const Portfolio = require('../models/portfolio.model.js');

// Create new portfolio
exports.createPortfolio = async (req, res) => {
  const { title, description, sections, template } = req.body;

  const portfolio = await Portfolio.create({
    user: req.user.id,
    title,
    description,
    sections,
    template
  });

  res.status(201).json(portfolio);
};

// Get all portfolios of logged user
exports.getMyPortfolios = async (req, res) => {
  const portfolios = await Portfolio.find({ user: req.user.id }).populate('template');
  res.json(portfolios);
};

// Update portfolio
exports.updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

  if (portfolio.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const updated = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete portfolio
exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

  if (portfolio.user.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  await portfolio.deleteOne();
  res.json({ message: 'Portfolio removed' });
};

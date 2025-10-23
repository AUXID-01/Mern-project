const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware.js');
const {
  createPortfolio,
  getMyPortfolios,
  updatePortfolio,
  deletePortfolio
} = require('../../controllers/portfolio.controllers.js');

router.route('/')
  .post(protect, createPortfolio)
  .get(protect, getMyPortfolios);

router.route('/:id')
  .put(protect, updatePortfolio)
  .delete(protect, deletePortfolio);

module.exports = router;

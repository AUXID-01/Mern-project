const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware.js');
const { adminOnly } = require('../middleware/role.middleware.js');
const { getUsers, getAllPortfolios } = require('../../controllers/admin.controllers.js');

router.get('/users', protect, adminOnly, getUsers);
router.get('/portfolios', protect, adminOnly, getAllPortfolios);

module.exports = router;

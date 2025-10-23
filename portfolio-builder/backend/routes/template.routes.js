const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware.js');
const { adminOnly } = require('../middleware/role.middleware.js');
const { getTemplates, createTemplate } = require('../../controllers/template.controllers.js');

router.get('/', getTemplates);
router.post('/', protect, adminOnly, createTemplate);

module.exports = router;

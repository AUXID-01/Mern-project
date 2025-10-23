const Template = require('../models/template.model.js');

// Get all templates
exports.getTemplates = async (req, res) => {
  const templates = await Template.find();
  res.json(templates);
};

// Create template (admin only)
exports.createTemplate = async (req, res) => {
  const { name, previewImage, layoutData } = req.body;
  const template = await Template.create({ name, previewImage, layoutData });
  res.status(201).json(template);
};

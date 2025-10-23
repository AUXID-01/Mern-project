const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  previewImage: String,
  layoutData: mongoose.Schema.Types.Mixed, // JSON layout
}, { timestamps: true });

module.exports = mongoose.model('Template', templateSchema);

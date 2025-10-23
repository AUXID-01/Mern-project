const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);

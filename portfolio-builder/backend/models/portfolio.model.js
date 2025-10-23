const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  sections: [
    {
      type: { type: String, enum: ['project', 'image', 'video', 'blog'], required: true },
      content: mongoose.Schema.Types.Mixed
    }
  ],
  template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);

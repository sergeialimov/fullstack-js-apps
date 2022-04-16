const mongoose = require('mongoose');

const WebsiteSchema = new mongoose.Schema({
  _id: { type: Number, required: true, default: 0 },
  url: { type: String, required: true, max: 100 },
});

// Export the model
module.exports = mongoose.model('Website', WebsiteSchema);

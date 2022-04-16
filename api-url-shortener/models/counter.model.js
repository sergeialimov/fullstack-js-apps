const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  _id: { type: String, required: true, default: 'userId' },
  seq: { type: Number, required: true, default: 0 },
});

// Export the model
module.exports = mongoose.model('Counter', CounterSchema);

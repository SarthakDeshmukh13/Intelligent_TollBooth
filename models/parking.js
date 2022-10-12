const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'owner name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'parking price must be provided'],
  },
  carNumber: {
    type: Number,
    required: [true, 'car number must be provided'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('parking', parkingSchema);

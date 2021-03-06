const mongoose = require('mongoose');

const mentSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
    min: 4,
  },
  description: {
    type: String,
    requried: true,
  },
  image: {
    type: String,
    requried: true,
  },
  experience: {
    type: Number,
    requried: true,
  },
  price: {
    type: Number,
    requried: true,
  },
  occupation: {
    type: String,
    requried: true,
  },
  city: {
    type: String,
    requried: true,
  },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tags' }],
});

module.exports = mongoose.model('Ments', mentSchema);

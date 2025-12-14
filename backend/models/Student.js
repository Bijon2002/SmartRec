const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  class: String,
  grade: String,
  city: String,
  profilePic: String
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

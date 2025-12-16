const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  email: String,
  class: String,
  grade: String,
  city: String
});

module.exports = mongoose.model("Student", studentSchema);

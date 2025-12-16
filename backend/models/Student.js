const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: String,
  class: String,
  grade: String,
  city: String,
  studentId: { type: String, unique: true }
});

module.exports = mongoose.model("Student", studentSchema);

const Student = require("../models/Student");

exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.getMyStudent = async (req, res) => {
  try {
    // Use studentId from JWT instead of req.params.id
    const student = await Student.findOne({ studentId: req.user.studentId });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

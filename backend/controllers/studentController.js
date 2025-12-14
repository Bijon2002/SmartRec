const Student = require('../models/Student');

const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

const getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

const addStudent = async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
};

const updateStudent = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};

module.exports = { getStudents, getStudent, addStudent, updateStudent, deleteStudent };

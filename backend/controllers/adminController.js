const User = require("../models/User");
const Student = require("../models/Student");
const bcrypt = require("bcryptjs");

exports.createStudent = async (req, res) => {
  try {
    const { email, name, className, grade, city } = req.body;

    const studentId = "STD" + Date.now();
    const rawPassword = "student123";
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role: "student"
    });

    await Student.create({
      userId: user._id,
      name,
      class: className,
      grade,
      city,
      studentId
    });

    res.status(201).json({
      message: "Student created",
      studentId,
      loginPassword: rawPassword
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addStudent,
  getStudents,
  getMyStudent
} = require("../controllers/studentController");

router.post("/", auth(["admin"]), addStudent);
router.get("/", auth(["admin"]), getStudents);
router.get("/me", auth(["student"]), getMyStudent);

module.exports = router;

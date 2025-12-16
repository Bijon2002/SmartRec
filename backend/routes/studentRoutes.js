const express = require("express");
const router = express.Router();
const {
  createStudent,
  getMyProfile
} = require("../controllers/studentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", protect, adminOnly, createStudent);
router.get("/me", protect, getMyProfile);

module.exports = router;

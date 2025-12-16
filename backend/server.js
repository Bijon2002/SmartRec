const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", require("./routes/authRoutes"));


// Student routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);


// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

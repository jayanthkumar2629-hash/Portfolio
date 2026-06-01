require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// MongoDB Connection
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:", error));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Contact Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// Server Listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

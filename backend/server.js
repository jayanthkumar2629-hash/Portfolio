const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
mongoose.connect("mongodb://jayanthkumar2629:jayanth@ac-iikl75x-shard-00-00.zupk8ak.mongodb.net:27017,ac-iikl75x-shard-00-01.zupk8ak.mongodb.net:27017,ac-iikl75x-shard-00-02.zupk8ak.mongodb.net:27017/?ssl=true&replicaSet=atlas-b0fe6i-shard-0&authSource=admin&appName=Cluster0")

.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

app.get("/", (req, res) => {

    res.send("Backend is working");

});
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
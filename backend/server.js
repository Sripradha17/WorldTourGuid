// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/user");
const countryRoutes = require("./routes/country");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/countries", countryRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => {
  res.send("WorldTourGuide Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

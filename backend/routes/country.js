const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// Get countries by continent
router.get("/:continent", async (req, res) => {
  try {
    const continentName = req.params.continent;
    const countries = await Country.find({ continent: continentName });
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new country
router.post("/", async (req, res) => {
  try {
    const { name, continent, image } = req.body;
    if (!name || !continent) {
      return res.status(400).json({ message: "Name and continent are required." });
    }

    const newCountry = new Country({ name, continent, image });
    const savedCountry = await newCountry.save();
    res.status(201).json(savedCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Modify/update country (optional)
router.put("/:id", async (req, res) => {
  try {
    const countryId = req.params.id;
    const updateData = req.body;
    const updatedCountry = await Country.findByIdAndUpdate(countryId, updateData, { new: true });
    if (!updatedCountry) return res.status(404).json({ message: "Country not found" });
    res.json(updatedCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/bulk', async (req, res) => {
  try {
    const countries = req.body; // Expecting an array of country objects

    if (!Array.isArray(countries) || countries.length === 0) {
      return res.status(400).json({ message: "Request body must be a non-empty array." });
    }

    const result = await Country.insertMany(countries);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

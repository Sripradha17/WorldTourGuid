const mongoose = require("mongoose");
const Country = require("../models/Country");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const countries = [
  { name: "Kenya", continent: "Africa", description: "Savannah, safaris, and wildlife.", image: "/images/kenya.jpg" },
  { name: "South Africa", continent: "Africa", description: "Table Mountain and Cape Town.", image: "/images/south-africa.jpg" },
  { name: "Egypt", continent: "Africa", description: "Pyramids and Nile River.", image: "/images/egypt.jpg" },
  { name: "India", continent: "Asia", description: "Taj Mahal and spices.", image: "/images/india.jpg" },
  { name: "Japan", continent: "Asia", description: "Technology and temples.", image: "/images/japan.jpg" },
];

Country.insertMany(countries)
  .then(() => {
    console.log("Countries seeded");
    mongoose.connection.close();
  })
  .catch(err => console.error("Seeding error:", err));

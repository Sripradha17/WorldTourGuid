const User = require("../models/User");

const checkAdmin = async (req, res, next) => {
  const uid = req.user.uid; // Assuming you get uid from auth token
  const user = await User.findOne({ uid });
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
  next();
};

module.exports = checkAdmin;

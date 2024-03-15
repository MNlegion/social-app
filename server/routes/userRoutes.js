const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUserFriends,
} = require("../controllers/userController");

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/profile").get(getUserProfile).put(protect, updateUserProfile);
// router.get("/friends", getUserFriends);

// export the router
module.exports = router;

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  // getUserFriends,
} = require("../controllers/userController");

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile).delete(protect, deleteUserProfile);
// router.get("/friends", getUserFriends);

// export the router
module.exports = router;

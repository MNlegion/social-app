const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} = require("../controllers/followController");

// routes
router.post("/:userId", protect, followUser);
router.post("/unfollow", protect, unfollowUser);
router.get("/followers", protect, getFollowers);
router.get("/following", protect, getFollowing);

// export the router
module.exports = router;
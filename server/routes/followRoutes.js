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
router.route("/:userId").post(protect, followUser).delete(protect, unfollowUser);
router.get("/followers", protect, getFollowers);
router.get("/following", protect, getFollowing);

// export the router
module.exports = router;
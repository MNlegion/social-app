const express = require("express");
const router = express.Router();
const {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} = require("../controllers/followController");

// routes
router.post("/follow", followUser);
router.post("/unfollow", unfollowUser);
router.get("/followers", getFollowers);
router.get("/following", getFollowing);

// export the router
module.exports = router;
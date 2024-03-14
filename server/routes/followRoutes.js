const express = require("express");
const router = express.Router();
const {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} = require("../controllers/followController");

// routes
router.route("/follow").post(followUser);
router.route("/unfollow").post(unfollowUser);
router.route("/followers").get(getFollowers);
router.route("/following").get(getFollowing);

// export the router
module.exports = router;
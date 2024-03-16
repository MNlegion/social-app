const Follow = require("../models/followModel");

// Follow a user
const followUser = async (req, res) => {
  res.send("Follow a user");
};

// Unfollow a user
const unfollowUser = async (req, res) => {
  res.send("Unfollow a user");
};

// Get all followers
const getFollowers = async (req, res) => {
  res.send("Get all followers");
};

// Get all following
const getFollowing = async (req, res) => {
  res.send("Get all following");
};

module.exports = {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
};

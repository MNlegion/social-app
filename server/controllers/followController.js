const asyncHandler = require("express-async-handler");
const Follow = require("../models/followModel");
const User = require("../models/userModel");

// Follow a user
const followUser = asyncHandler(async (req, res) => {
  const { userId } = req.params; // id of user to follow

  // Check if user is trying to follow themselves
  if (userId === req.user._id.toString()) {
    res.status(400);
    throw new Error("You cannot follow yourself");
  }

  // Check if the user is already following the user
  const alreadyFollowing = await Follow.findOne({
    follower: req.user._id,
    following: userId,
  });

  if (alreadyFollowing) {
    res.status(400);
    throw new Error("You are already following this user");
  }

  // Create the follow relationship
  const follow = await Follow.create({
    follower: req.user._id,
    following: userId,
  });

  // Update the corresponding User document to include the follow
  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { following: userId },
  });

  // Update the corresponding User document to include the follower
  await User.findByIdAndUpdate(userId, {
    $addToSet: { followers: req.user._id },
  });

  res.status(201).json(follow);
});

// Unfollow a user
const unfollowUser = async (req, res) => {
  const { userId } = req.params; // id of user to unfollow

  // Check if the user is following the user
  const following = await Follow.findOne({
    follower: req.user._id,
    following: userId,
  });

  if (!following) {
    res.status(400);
    throw new Error("You are not following this user");
  }

  // Delete the follow relationship
  await Follow.findOneAndDelete({
    follower: req.user._id,
    following: userId,
  });

  // Update the corresponding User document to remove the follow
  await User.findByIdAndUpdate(req.user._id, {
    $pull: { following: userId },
  });

  // Update the corresponding User document to remove the follower
  await User.findByIdAndUpdate(userId, {
    $pull: { followers: req.user._id },
  });

  res.status(200).json({ message: "User unfollowed" });
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

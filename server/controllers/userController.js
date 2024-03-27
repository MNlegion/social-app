const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Check if the user already exists by email
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // If the user doesn't exist, create a new User
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // If the email and password match, generate a JWT token
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      bio: user.bio,
      website: user.website,
      followers: user.followers,
      following: user.following,
      posts: user.posts,
      savedPosts: user.savedPosts,
      notifications: user.notifications,
      messages: user.messages,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const { username, email, profileImage, bio, website } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.username = username || user.username;
    user.email = email || user.email;
    user.profileImage = profileImage || user.profileImage;
    user.bio = bio || user.bio;
    user.website = website || user.website;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      profileImage: updatedUser.profileImage,
      bio: updatedUser.bio,
      website: updatedUser.website,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Get User Friends
// const getUserFriends = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id).populate("friends");

//   if (user) {
//     res.status(200).json(user.friends);
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

// Helper function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// exports
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  // getUserFriends,
};

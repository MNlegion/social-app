const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

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

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
  });
};


// Login a user
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login user");
});

// Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// exports
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};

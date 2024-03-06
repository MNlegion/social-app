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

// Login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // If the email and password match, generate a JWT token
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// exports
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};

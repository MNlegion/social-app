// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register user");
});

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

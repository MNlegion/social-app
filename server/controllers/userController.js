const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Register a new user
const registerUser = async (req, res) => {
    res.send('Register user');
};

// Login a user
const loginUser = async (req, res) => {
    res.send('Login user');
};

// Get user profile
const getUserProfile = async (req, res) => {
    res.send('Get user profile');
};

// Update user profile
const updateUserProfile = async (req, res) => {
    res.send('Update user profile');
};

// exports
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};
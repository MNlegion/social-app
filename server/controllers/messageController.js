const Message = require("../models/messageModel");
const User = require("../models/userModel");

// Create a new message
const createMessage = async (req, res) => {
  res.send("Create a new message");
};

// Get all messages
const getMessages = async (req, res) => {
  res.send("Get all messages");
};

// Get single message
const getSingleMessage = async (req, res) => {
  res.send("Get single message");
};

// Update message
const updateMessage = async (req, res) => {
  res.send("Update message");
};

// Delete message
const deleteMessage = async (req, res) => {
  res.send("Delete message");
};

module.exports = {
  createMessage,
  getMessages,
  getSingleMessage,
  updateMessage,
  deleteMessage,
};

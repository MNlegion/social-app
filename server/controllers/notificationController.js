const Notification = require("../models/notificationModel");

// Get all notifications
const getNotifications = async (req, res) => {
  res.send("Get all notifications");
};

// Get single notification
const getSingleNotification = async (req, res) => {
  res.send("Get single notification");
};

// Update notification
const updateNotification = async (req, res) => {
  res.send("Update notification");
};

// Delete notification
const deleteNotification = async (req, res) => {
  res.send("Delete notification");
};

module.exports = {
  getNotifications,
  getSingleNotification,
  updateNotification,
  deleteNotification,
};

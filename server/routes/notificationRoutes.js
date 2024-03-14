const express = require("express");
const router = express.Router();
const {
  getNotifications,
  getSingleNotification,
  markAsRead,
  deleteNotification,
} = require("../controllers/notificationController");

// routes
router.route("/").get(getNotifications);
router.route("/:id").get(getSingleNotification);
router.route("/markasread").put(markAsRead);
router.route("/delete").delete(deleteNotification);

// export the router
module.exports = router;

const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
      recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      read: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
      collection: "notifications",
    }
  );

module.exports = mongoose.model("Notification", notificationSchema);
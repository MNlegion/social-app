const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },
        notifications: {
        type: Array,
        default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
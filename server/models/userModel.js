const mongoose = require("mongoose");
const { userPostMiddleware } = require("../middleware/userPostMiddleware");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImage: {
      type: String,
      required: false,
      default: "",
    },
    bio: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    followers: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    following: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
    posts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
      default: [],
    },
    savedPosts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
      default: [],
    },
    notifications: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }],
      default: [],
    },
    messages: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "users",
  }
);

// Middleware to update posts when user is updated
userSchema.post("save", userPostMiddleware);

module.exports = mongoose.model("User", userSchema);

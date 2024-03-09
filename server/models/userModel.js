const mongoose = require("mongoose");

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
      type: Array,
      default: [],
      required: false,
    },
    following: {
      type: Array,
      default: [],
      required: false,
    },
    posts: {
      type: Array,
      default: [],
      required: false,
    },
    savedPosts: {
      type: Array,
      default: [],
      required: false,
    },
    notifications: {
      type: Array,
      default: [],
      required: false,
    },
    messages: {
      type: Array,
      default: [],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);

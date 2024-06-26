const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true,
    versionKey: false,
    collection: "likes"}
);

module.exports = mongoose.model("Like", likeSchema);

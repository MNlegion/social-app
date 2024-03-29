const mongoose = require("mongoose");
const Comment = require("./commentModel");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 40,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      default: [],
    },
    comments: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "posts",
  }
);

// Pre-hook to cascade delete comments when post is deleted
postSchema.pre("deleteOne", async function (next) {
  const postId = this._conditions._id;
  await Comment.deleteMany({ post: postId });
  next();
});

module.exports = mongoose.model("Post", postSchema);
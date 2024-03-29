const mongoose = require("mongoose");

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
// postSchema.pre('remove', async function (next) {
//   await this.model('Comment').deleteMany({ post: this._id }, next);
// });

module.exports = mongoose.model("Post", postSchema);
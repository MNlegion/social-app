const Like = require("../models/likeModel");
const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// Like a post
const likePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  // Check if the post exists
  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if the user has already liked the post
  const alreadyLiked = await Like.findOne({
    username: req.user._id,
    post: postId,
  });

  if (alreadyLiked) {
    res.status(400);
    throw new Error("You have already liked this post");
  }

  // Create the like relationship
  const like = await Like.create({ user: req.user._id, post: postId });

  // Update the corresponding Post document to include the like
  await Post.findByIdAndUpdate(postId, { $push: { likes: like._id } });

  res.status(201).json(like);
});

// Unlike a post
const unlikePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  // Check if the post exists
  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if the user has already liked the post
  const alreadyLiked = await Like.findOne({
    user: req.user._id,
    post: postId,
  });

  if (!alreadyLiked) {
    res.status(400);
    throw new Error("You have not liked this post");
  }

  // Delete the like relationship
  await Like.findByIdAndDelete(alreadyLiked._id);

  // Update the corresponding Post document to remove the like
  await Post.findByIdAndUpdate(postId, { $pull: { likes: alreadyLiked._id } });

  res.status(200).json({ message: "Post unliked" });
});

module.exports = {
  likePost,
  unlikePost,
};

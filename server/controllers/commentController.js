const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new comment
// @route POST /api/comments/:postId
// @access Private
const createComment = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const author = req.user._id;
    const postId = req.params.postId;
  
    // Create the comment
    const comment = await Comment.create({ content, author, post: postId });
  
    // Update the corresponding post document to include the comment
    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });
  
    res.status(201).json(comment);
  });

// @desc Get all comments for a specific post
// @route GET /api/comments/:postId
// @access Public
const getComments = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comment.find({ post: postId }).populate(
    "author",
    "username"
  );
  res.json(comments);
});

// @desc Get a single comment by ID
// @route GET /api/comments/:id
// @access Public
const getSingleComment = async (req, res) => {
  res.send("Get single comment");
};

// @desc Update a comment by ID
// @route PUT /api/comments/:id
// @access Private
const updateComment = async (req, res) => {
  res.send("Update comment");
};

// @desc Delete a comment by ID
// @route DELETE /api/comments/:id
// @access Private
const deleteComment = async (req, res) => {
  res.send("Delete comment");
};

module.exports = {
  createComment,
  getComments,
  getSingleComment,
  updateComment,
  deleteComment,
};

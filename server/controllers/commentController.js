const Comment = require("../models/commentModel");
const asyncHandler = require("express-async-handler");

// @desc Create a new comment
// @route POST /api/comments/:postId
// @access Private
const createComment = async (req, res) => {
  const postId = req.params.postId;
  const { content } = req.body;

  // Ensure the content is provided
  if (!content) {
    res.status(400);
    throw new Error("Comment content is required");
  }

  // Create the new comment
  const newComment = await Comment.create({
    user: req.user._id, // Assuming the user is authenticated and their ID is available in req.user
    post: postId,
    content,
  });

  res.status(201).json(newComment);
};

// @desc Get all comments for a specific post
// @route GET /api/comments/:postId
// @access Public
const getComments = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comment.find({ post: postId }).populate(
    "user",
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

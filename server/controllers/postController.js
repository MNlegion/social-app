const Post = require("../models/postModel");
const User = require("../models/userModel");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  if (!req.body.title || !req.body.body) {
    res.status(400);
    throw new Error("Title and body are required");
  }

  const post = await Post.create({
    title: req.body.title,
    body: req.body.body,
    likes: [],
  });

  res.status(201).json(post);
};

const getSinglePost = async (req, res) => {};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404);
      throw new Error("Post not found");
    }

    // Check if the authenticated user is the owner of the post
    if (post.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You are not authorized to perform this action");
    }

    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        body: req.body.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.deleteOne();
    res.status(200).json({ id: req.params.id });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
};

// exports
module.exports = {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};

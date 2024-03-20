const Post = require("../models/postModel");
const User = require("../models/userModel");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get posts" });
  }
};

const createPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    const post = new Post({
      title,
      body,
      user: req.user._id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};

const getSinglePost = async (req, res) => {
  res.send("Single post");
};

const updatePost = async (req, res) => {
  res.send("Update post");
};

const deletePost = async (req, res) => {
  res.send("Delete post");
};

// exports
module.exports = {
  getPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};

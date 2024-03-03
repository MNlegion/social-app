const Post = require("../models/postModel");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const createPost = async (req, res) => {};

const getSinglePost = async (req, res) => {};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

// exports
module.exports = {
    getPosts,
    createPost,
    getSinglePost,
    updatePost,
    deletePost
};

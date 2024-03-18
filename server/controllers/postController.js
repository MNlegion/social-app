const Post = require("../models/postModel");
const User = require("../models/userModel");

const getPosts = async (req, res) => {
  res.send("Get posts");
};

const createPost = async (req, res) => {
  res.send("Create post");
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
